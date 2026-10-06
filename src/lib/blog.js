// Blog data layer.
//
// The site reads posts straight from WordPress's own REST API, so publishing a
// post in WordPress is all that's needed for it to appear here. A custom
// backend can be used instead as long as it returns the simplified shape
// documented in docs/blog-api.md — both are normalised to the same Post below.
import DOMPurify from "dompurify";

const BASE = (import.meta.env.VITE_BLOG_API_URL ?? "").replace(/\/+$/, "");
const PER_PAGE = 9;

export const isBlogConfigured = Boolean(BASE);

/** Tags we allow through from the CMS. Anything else is stripped. */
const SANITISE = {
  ALLOWED_TAGS: [
    "p", "br", "hr", "strong", "b", "em", "i", "u", "s", "mark", "small", "sub", "sup",
    "h2", "h3", "h4", "h5", "h6",
    "ul", "ol", "li", "blockquote", "q", "cite",
    "a", "img", "figure", "figcaption", "picture", "source",
    "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption",
    "pre", "code", "span", "div", "iframe",
  ],
  ALLOWED_ATTR: [
    "href", "target", "rel", "title",
    "src", "srcset", "sizes", "alt", "width", "height", "loading", "decoding",
    "colspan", "rowspan", "scope",
    "class", "id",
    "allow", "allowfullscreen", "frameborder",
  ],
  ALLOWED_URI_REGEXP: /^(?:https?:|mailto:|tel:|#|\/)/i,
};

export const sanitise = (html) => DOMPurify.sanitize(html ?? "", SANITISE);

/** WordPress returns titles and excerpts with entities already encoded. */
function decode(html) {
  if (!html) return "";
  const el = document.createElement("textarea");
  el.innerHTML = html.replace(/<[^>]*>/g, "");
  return el.value.trim();
}

function readingTime(html) {
  const words = (html ?? "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/**
 * Accepts either a WordPress post (title.rendered, _embedded, …) or the
 * simplified shape, and returns the single Post model the UI renders.
 */
export function normalisePost(raw) {
  if (!raw) return null;
  const wp = typeof raw.title === "object";

  const embedded = raw._embedded ?? {};
  const media = embedded["wp:featuredmedia"]?.[0];
  const terms = embedded["wp:term"]?.flat?.() ?? [];
  const author = embedded.author?.[0];

  const content = wp ? raw.content?.rendered : raw.content;
  const excerpt = wp ? raw.excerpt?.rendered : raw.excerpt;

  return {
    id: raw.id ?? raw.slug,
    slug: raw.slug,
    title: wp ? decode(raw.title?.rendered) : raw.title,
    excerpt: decode(excerpt),
    content: sanitise(content),
    date: raw.date ?? raw.published_at ?? null,
    readingTime: raw.reading_time ?? readingTime(content),
    category: decode(
      raw.category ?? terms.find((t) => t.taxonomy === "category" && t.slug !== "uncategorized")?.name
    ) || null,
    author: {
      name: decode(raw.author?.name ?? author?.name) || null,
      avatar: raw.author?.avatar ?? author?.avatar_urls?.["96"] ?? null,
    },
    image: {
      src: raw.image?.src ?? raw.featured_image ?? media?.source_url ?? null,
      alt: raw.image?.alt ?? media?.alt_text ?? "",
      width: media?.media_details?.width ?? raw.image?.width ?? null,
      height: media?.media_details?.height ?? raw.image?.height ?? null,
    },
  };
}

async function request(path, { signal } = {}) {
  if (!BASE) throw new Error("VITE_BLOG_API_URL is not set");
  const res = await fetch(`${BASE}${path}`, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Blog request failed (${res.status})`);
  const body = await res.json();
  // A custom backend may wrap the list as { posts, total_pages }; WordPress
  // returns a bare array with the paging in headers.
  const list = Array.isArray(body) ? body : (body.posts ?? body.data ?? body);
  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || body.total_pages || 1;
  const total = Number(res.headers.get("X-WP-Total")) || body.total || (Array.isArray(list) ? list.length : 0);
  return { list, totalPages, total };
}

export async function fetchPosts({ page = 1, perPage = PER_PAGE, signal } = {}) {
  const { list, totalPages, total } = await request(
    `/posts?_embed=wp:featuredmedia,wp:term,author&per_page=${perPage}&page=${page}&orderby=date&order=desc`,
    { signal }
  );
  return { posts: (list ?? []).map(normalisePost).filter(Boolean), totalPages, total };
}

export async function fetchPost(slug, { signal } = {}) {
  const { list } = await request(
    `/posts?_embed=wp:featuredmedia,wp:term,author&slug=${encodeURIComponent(slug)}`,
    { signal }
  );
  const batch = (Array.isArray(list) ? list : [list]).map(normalisePost).filter(Boolean);
  const match = batch.find((post) => post.slug === slug);
  if (match) return match;

  // A backend that ignores ?slug= just returns its list, so walk the pages
  // instead. That way a single list endpoint is enough to run the whole blog.
  for (let page = 1; page <= 10; page++) {
    const { posts, totalPages } = await fetchPosts({ page, perPage: 50, signal });
    const found = posts.find((post) => post.slug === slug);
    if (found) return found;
    if (page >= totalPages) break;
  }
  return null;
}

export const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";
