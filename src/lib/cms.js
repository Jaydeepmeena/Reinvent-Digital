// Shared CMS data layer.
//
// The blog and the case studies are the same thing to the frontend: a list of
// published entries with HTML bodies, read over HTTP at runtime so publishing
// in the CMS is all it takes for something to appear on the site. Both live
// under one base URL (VITE_BLOG_API_URL) and differ only by resource path:
// /posts/ and /case-studies/. The contract is in docs/cms-api.md.
//
// Each collection is created with createCollection() below, which handles
// WordPress's own REST shape and the simplified custom shape alike.
import DOMPurify from "dompurify";

const BASE = (import.meta.env.VITE_BLOG_API_URL ?? "").replace(/\/+$/, "");

export const isCmsConfigured = Boolean(BASE);

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

/** "/uploads/dental-chair_2-1024x683.jpg" -> "Dental chair 2" */
const nameFromSrc = (src) => {
  const file = decodeURIComponent((src ?? "").split(/[?#]/)[0].split("/").pop() ?? "");
  const words = file
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/-\d+x\d+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return words ? words[0].toUpperCase() + words.slice(1) : "";
};

// Every image in CMS content gets an alt and a title: whichever one the editor
// set fills the other, and with neither, the file name stands in.
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.nodeName !== "IMG") return;
  const alt = node.getAttribute("alt")?.trim();
  const title = node.getAttribute("title")?.trim();
  const caption = node.closest?.("figure")?.querySelector("figcaption")?.textContent?.trim();
  const text = alt || title || caption || nameFromSrc(node.getAttribute("src"));
  if (!alt) node.setAttribute("alt", text);
  if (!title) node.setAttribute("title", text);
});

export const sanitise = (html) => DOMPurify.sanitize(html ?? "", SANITISE);

/** WordPress returns titles and excerpts with entities already encoded. */
export function decode(html) {
  if (!html) return "";
  const el = document.createElement("textarea");
  el.innerHTML = html.replace(/<[^>]*>/g, "");
  return el.value.trim();
}

export function readingTime(html) {
  const words = (html ?? "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/**
 * Accepts either a WordPress entry (title.rendered, _embedded, …) or the
 * simplified shape, and returns the single model the UI renders.
 */
export function normaliseEntry(raw) {
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

// The trailing slash on the resource path matters: our backend 301-redirects
// without it, and WordPress's own REST API accepts it either way.
async function request(resource, query, { signal } = {}) {
  if (!BASE) throw new Error("VITE_BLOG_API_URL is not set");
  const res = await fetch(`${BASE}/${resource}/?${query}`, {
    signal,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    const error = new Error(`${resource} request failed (${res.status})`);
    error.status = res.status;
    throw error;
  }
  const body = await res.json();
  // A custom backend may wrap the list under its own key; WordPress returns a
  // bare array with the paging in headers.
  const list = Array.isArray(body)
    ? body
    : (body.case_studies ?? body.caseStudies ?? body.posts ?? body.items ?? body.data ?? body);
  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || body.total_pages || 1;
  const total =
    Number(res.headers.get("X-WP-Total")) || body.total || (Array.isArray(list) ? list.length : 0);
  return { list, totalPages, total };
}

const EMBED = "_embed=wp:featuredmedia,wp:term,author";

/**
 * Builds the fetchers for one collection.
 *
 * @param resource  REST path segment, e.g. "posts" or "case-studies"
 * @param perPage   page size for the index
 * @param samples   () => raw entries used only while the feed is unavailable
 * @param decorate  (model, raw) => model, for fields only this collection has
 * @param fallback  serve the samples when the endpoint is not live yet, for a
 *                  collection the backend has still to build
 */
export function createCollection({
  resource,
  perPage = 9,
  samples = () => [],
  decorate,
  fallback = false,
}) {
  const normalise = (raw) => {
    const model = normaliseEntry(raw);
    return model && decorate ? decorate(model, raw) : model;
  };

  const sampleList = () => samples().map(normalise).filter(Boolean);

  // A collection the backend has not built yet is a different thing from a
  // request that failed, so a collection can opt into serving its bundled
  // entries instead of showing the reader an error. An endpoint that does not
  // exist answers 404, and because that 404 carries no CORS headers the
  // browser reports it as a network failure rather than a status, so both
  // count. It is noted once in the console, so in development it is obvious
  // which collection is still missing.
  let warned = false;
  const unavailable = (error) => {
    if (!fallback) return false;
    const missing = error?.status === 404 || error instanceof TypeError;
    if (!missing) return false;
    if (!warned) {
      warned = true;
      console.info(`[cms] ${BASE}/${resource}/ is not available yet, using bundled entries.`);
    }
    return true;
  };

  const fromSamples = (page, size) => {
    const all = sampleList();
    const start = (page - 1) * size;
    return {
      entries: all.slice(start, start + size),
      totalPages: Math.max(1, Math.ceil(all.length / size)),
      total: all.length,
    };
  };

  async function fetchList({ page = 1, size = perPage, signal } = {}) {
    if (!BASE) return fromSamples(page, size);
    try {
      const { list, totalPages, total } = await request(
        resource,
        `${EMBED}&per_page=${size}&page=${page}&orderby=date&order=desc`,
        { signal }
      );
      return { entries: (list ?? []).map(normalise).filter(Boolean), totalPages, total };
    } catch (error) {
      if (unavailable(error)) return fromSamples(page, size);
      throw error;
    }
  }

  async function fetchOne(slug, { signal } = {}) {
    if (!BASE) return sampleList().find((entry) => entry.slug === slug) ?? null;

    let batch = [];
    try {
      const { list } = await request(resource, `${EMBED}&slug=${encodeURIComponent(slug)}`, { signal });
      batch = (Array.isArray(list) ? list : [list]).map(normalise).filter(Boolean);
    } catch (error) {
      if (!unavailable(error)) throw error;
      return sampleList().find((entry) => entry.slug === slug) ?? null;
    }
    const match = batch.find((entry) => entry.slug === slug);
    if (match) return match;

    // A backend that ignores ?slug= just returns its list, so walk the pages
    // instead. That way a single list endpoint is enough to run the collection.
    for (let page = 1; page <= 10; page++) {
      const { entries, totalPages } = await fetchList({ page, size: 50, signal });
      const found = entries.find((entry) => entry.slug === slug);
      if (found) return found;
      if (page >= totalPages) break;
    }
    return null;
  }

  return { fetchList, fetchOne };
}

export const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";
