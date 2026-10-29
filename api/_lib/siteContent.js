// Everything the site publishes, read the way the site reads it.
//
// The sitemap, robots.txt and llms.txt are served from here at request time, so
// a page or post published in the CMS appears in them without a rebuild — the
// CDN holds each answer for a few minutes (see CACHE) and then asks again. The
// redirect script uses the same loader, so a 301 and a sitemap entry cannot
// disagree about where a page lives.
//
// It runs in plain Node, outside the bundler. The bundled lists carry Lucide
// icon components and imported images, which cannot be imported here, so the
// fields that matter — slug, title, description — are read out of the source
// files instead. Those files are shipped with the functions through
// `includeFiles` in vercel.json.
import { readFileSync } from "node:fs";
import { buildPageRoutes, identityOf, COLLECTIONS, pathOf } from "../../src/lib/pagePaths.js";
import { buildRedirects } from "../../src/lib/renameRules.js";
import { mergeContent } from "../../src/lib/contentRules.js";
import { SAMPLE_LANDING_PAGES } from "../../src/data/sampleLandingPages.js";
import { BLOG_PATH, CASE_STUDY_PATH, RETIRED_PAGES } from "../../src/data/routes.js";
import { seoMetaFor } from "../../src/data/seoMeta.js";

export const CMS_BASE = (process.env.CMS_BASE ?? process.env.VITE_BLOG_API_URL ?? "").replace(/\/+$/, "");

/** Fresh for ten minutes at the CDN, then served stale while it refetches. */
export const CACHE = "public, max-age=0, s-maxage=600, stale-while-revalidate=86400";

const DATA_FILES = {
  services: "services",
  industries: "industries",
  locations: "locations",
  about: "about",
  resources: "resources",
  contact: "contact",
  "case-studies": "sampleCaseStudies",
};

const unescape = (value) => {
  try {
    return JSON.parse(`"${value}"`);
  } catch {
    return value;
  }
};

/**
 * The entries a bundled data file ships, as {slug, title, description, …}.
 * Each entry runs from one top-level `slug` to the next, and only fields at
 * the slug's own indentation are the entry's — deeper ones belong to nested
 * sections (a location's `search.title`, say).
 */
export function shippedEntries(collection) {
  const file = new URL(`../../src/data/${DATA_FILES[collection]}.js`, import.meta.url);
  const source = readFileSync(file, "utf8");
  const starts = [...source.matchAll(/^([ \t]+)"?slug"?:\s*"([^"]+)"/gm)];
  return starts.map((match, i) => {
    const chunk = source.slice(match.index, starts[i + 1]?.index ?? source.length);
    const indent = match[1];
    const field = (name) => {
      const found = chunk.match(new RegExp(`^${indent}"?${name}"?:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "m"));
      return found ? unescape(found[1]) : undefined;
    };
    const entry = { slug: match[2] };
    for (const name of ["title", "eyebrow", "city", "description", "intro", "excerpt", "date"]) {
      const value = field(name);
      if (value !== undefined) entry[name] = value;
    }
    return entry;
  });
}

async function getJson(path) {
  if (!CMS_BASE) return null;
  try {
    const res = await fetch(`${CMS_BASE}/${path}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    return { body: await res.json(), totalPages: Number(res.headers.get("X-WP-TotalPages")) || 0 };
  } catch {
    return null;
  }
}

const listOf = (body, resource) => {
  if (Array.isArray(body)) return body;
  const list = body?.[resource] ?? body?.[resource.replace(/-/g, "_")] ?? body?.pages ?? body?.items ?? body?.data;
  return Array.isArray(list) ? list : [];
};

/**
 * Every entry of a paged collection, up to a sane ceiling. Some endpoints
 * ignore `page` and answer the same list every time, so paging also stops at
 * the first page that brings nothing new.
 */
async function getAll(resource) {
  const bySlug = new Map();
  for (let page = 1; page <= 20; page++) {
    const answer = await getJson(`${resource}/?per_page=100&page=${page}`);
    if (!answer) return page === 1 ? null : [...bySlug.values()];
    const before = bySlug.size;
    for (const entry of listOf(answer.body, resource)) {
      if (typeof entry?.slug === "string" && !bySlug.has(entry.slug)) bySlug.set(entry.slug, entry);
    }
    const pages = Number(answer.totalPages || answer.body?.total_pages) || 1;
    if (page >= pages || bySlug.size === before) break;
  }
  return [...bySlug.values()];
}

/**
 * The site's own page collections, bundled entries merged with the CMS the
 * same way the app merges them.
 *
 * @returns {{collections, reachable}} `collections` is the shape
 *          buildPageRoutes takes; `reachable` says whether the CMS answered.
 */
export async function loadPageCollections() {
  let reachable = false;
  const collections = {};

  await Promise.all(
    COLLECTIONS.map(async (collection) => {
      const bundled = shippedEntries(collection);
      const answer = await getJson(`${collection}/?per_page=100`);
      if (answer) reachable = true;

      const remote = new Map();
      for (const entry of listOf(answer?.body, collection)) {
        const id = identityOf(entry?.slug);
        if (id) remote.set(id, entry);
      }

      const renames = buildRedirects(remote.values());
      const entries = [];
      const seen = new Set();
      const add = (base, patch) => {
        const merged = patch ? mergeContent(base ?? {}, patch) : base;
        const id = identityOf(merged?.slug);
        if (!id || seen.has(id)) return;
        seen.add(id);
        entries.push(merged);
      };

      for (const base of bundled) {
        const id = identityOf(base.slug);
        const renamedTo = renames.get(id);
        add(base, remote.get(renamedTo ?? id));
      }
      for (const entry of remote.values()) {
        const id = identityOf(entry?.slug);
        if (!id || seen.has(id) || renames.has(id)) continue;
        add(undefined, entry);
      }

      collections[collection] = { entries, bundled };
    })
  );

  return { collections, reachable };
}

/* ------------------------------------------------------------------ *
 * The whole site, for the sitemap and llms.txt
 * ------------------------------------------------------------------ */

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", lsquo: "‘", ndash: "–", mdash: "—", hellip: "…" };

/** Plain one-line text from whatever the CMS sent (string, {rendered}, HTML). */
export function plain(value) {
  const raw = typeof value === "object" && value !== null ? value.rendered : value;
  if (typeof raw !== "string") return "";
  return raw
    .replace(/<[^>]*>/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITIES[name.toLowerCase()] ?? match)
    .replace(/\s+/g, " ")
    .trim();
}

const humanise = (slug) => slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const titleOf = (entry, id) =>
  plain(entry?.seo?.title)?.replace(/\s*\|\s*Reinvent Digital$/, "") ||
  plain(entry?.title) ||
  plain(entry?.eyebrow) ||
  plain(entry?.city) ||
  humanise(id);

const descriptionOf = (entry) =>
  plain(entry?.seo?.description) || plain(entry?.description) || plain(entry?.intro) || plain(entry?.excerpt);

const dateOf = (entry) => {
  const value = entry?.modified ?? entry?.updated_at ?? entry?.date ?? entry?.published_at;
  const time = value ? Date.parse(value) : NaN;
  return Number.isNaN(time) ? null : new Date(time).toISOString();
};

/**
 * Every public URL on the site, grouped for llms.txt.
 *
 * @returns {Promise<{sections: {title, items: {path, title, description, lastmod}[]}[]}>}
 */
export async function loadSite() {
  const [{ collections }, contactList, posts, caseStudies, landing] = await Promise.all([
    loadPageCollections(),
    getAll("contact"),
    getAll("posts"),
    getAll("case-studies"),
    getAll("landing-pages"),
  ]);

  const { pages } = buildPageRoutes(collections);
  const byId = (collection) =>
    new Map((collections[collection]?.entries ?? []).map((entry) => [identityOf(entry.slug), entry]));

  // The SEO sheet's title and description win wherever it lists the page.
  const item = (path, entry, id) => ({
    path,
    title: seoMetaFor(path)?.title ?? titleOf(entry, id),
    description: seoMetaFor(path)?.description ?? descriptionOf(entry),
    lastmod: dateOf(entry),
  });

  const pageSection = (collection, title) => {
    const entries = byId(collection);
    return {
      title,
      items: pages
        // A retired page redirects elsewhere even while the CMS still has it.
        .filter((page) => page.collection === collection && !RETIRED_PAGES[collection]?.[page.id])
        .map((page) => item(page.path, entries.get(page.id), page.id)),
    };
  };

  // The hubs the resources collection names but does not own (reserved paths).
  const resources = byId("resources");
  const contact = mergeContent(shippedEntries("contact")[0] ?? {}, listOf(contactList, "contact")[0] ?? {});

  const main = {
    title: "Main pages",
    items: [
      { path: "/", title: "Home", description: "Healthcare digital marketing agency focused on patients who walk in, not just leads.", lastmod: null },
      item("/contact", contact, "contact"),
      item(BLOG_PATH, resources.get("blogs"), "blogs"),
      item(CASE_STUDY_PATH, resources.get("case-study"), "case-study"),
      { path: "/privacy-policy", title: "Privacy Policy", description: "", lastmod: null },
    ],
  };

  // Case studies: the bundled set is authoritative, the CMS only enriches it
  // (see src/lib/caseStudies.js), so a CMS-only slug has no page to list.
  const caseOverlay = new Map((caseStudies ?? []).map((entry) => [entry?.slug, entry]));
  const caseSection = {
    title: "Case studies",
    items: shippedEntries("case-studies").map((base) => {
      const entry = caseOverlay.has(base.slug) ? mergeContent(base, caseOverlay.get(base.slug)) : base;
      return item(`${CASE_STUDY_PATH}/${base.slug}`, entry, base.slug);
    }),
  };

  const postSection = {
    title: "Blog",
    items: (posts ?? [])
      .filter((post) => typeof post?.slug === "string" && post.slug && (post.status ?? "publish") === "publish")
      .map((post) => item(`${BLOG_PATH}/${post.slug}`, post, post.slug)),
  };

  // Landing pages sit on a single root segment, and only where no other page
  // has that path already — the router gives the static route precedence.
  // The site serves its bundled pages for any slug the CMS does not have yet
  // (src/lib/landingPages.js), so those are live pages too.
  const taken = new Set([...pages.map((page) => page.path), ...main.items.map((entry) => entry.path)]);
  const inCms = new Set((landing ?? []).map((entry) => entry?.slug));
  const landingPages = [...(landing ?? []), ...SAMPLE_LANDING_PAGES.filter((entry) => !inCms.has(entry.slug))];
  const landingSection = {
    title: "Landing pages",
    items: landingPages
      .filter((entry) => typeof entry?.slug === "string" && /^[a-z0-9-]+$/.test(entry.slug))
      .filter((entry) => entry.seo?.noindex !== true && entry.noindex !== true)
      .map((entry) => item(pathOf("landing-pages", entry.slug), entry, entry.slug))
      .filter((entry) => !taken.has(entry.path)),
  };

  return {
    sections: [
      main,
      pageSection("services", "Services"),
      pageSection("industries", "Industries"),
      pageSection("locations", "Locations"),
      pageSection("about", "About"),
      pageSection("resources", "Resources"),
      postSection,
      caseSection,
      landingSection,
    ].filter((section) => section.items.length > 0),
  };
}

/** The public origin: SITE_URL when set, otherwise the host that was asked. */
export function originOf(req) {
  const configured = (process.env.SITE_URL ?? "").replace(/\/+$/, "");
  if (configured) return configured;
  const host = req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost";
  const proto = req.headers["x-forwarded-proto"] ?? (host.startsWith("localhost") ? "http" : "https");
  return `${String(proto).split(",")[0]}://${String(host).split(",")[0]}`;
}

/** Search engines may index this deployment (production, or anything off Vercel). */
export const isIndexable = () => !["preview", "development"].includes(process.env.VERCEL_ENV ?? "");

export function send(res, type, body) {
  res.statusCode = 200;
  res.setHeader("Content-Type", `${type}; charset=utf-8`);
  res.setHeader("Cache-Control", CACHE);
  res.end(body);
}
