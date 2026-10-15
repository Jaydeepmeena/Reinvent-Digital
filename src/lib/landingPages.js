// Landing pages: the programmatic-SEO collection.
//
// These are the pages we push in bulk over the API — one per keyword, city or
// vertical. They are deliberately absent from the navigation, the footer and
// every listing on the site: the only way in is the URL itself. The template
// that renders them is src/pages/LandingPage.jsx, and the contract the backend
// has to meet is written down in docs/landing-pages-api.md.
//
// Unlike the blog and the case studies, a landing page is not one HTML body.
// It is a handful of named blocks, so a thousand pages can be generated from a
// spreadsheet without anyone hand-writing markup. Every block is optional: a
// page that sends only a title and a hero renders a short page rather than a
// broken one.
import { decode, sanitise } from "./cms";
import { SAMPLE_LANDING_PAGES } from "../data/sampleLandingPages";

const BASE = (import.meta.env.VITE_BLOG_API_URL ?? "").replace(/\/+$/, "");
const RESOURCE = "landing-pages";

/** Trim a value to a non-empty string, or null. */
const text = (value) => {
  const out = typeof value === "string" ? value.trim() : "";
  return out || null;
};

/** Accepts a string or {label, href} and returns a link, or null. */
function link(value, fallbackLabel) {
  if (!value) return null;
  if (typeof value === "string") return { label: value, href: "/contact" };
  const label = text(value.label) ?? fallbackLabel;
  return label ? { label, href: text(value.href) ?? "/contact" } : null;
}

/** A list of {title, body} cards, tolerating {heading, text} and bare strings. */
const cards = (list) =>
  (Array.isArray(list) ? list : [])
    .map((item) =>
      typeof item === "string"
        ? { title: item, body: null }
        : { title: text(item?.title ?? item?.heading), body: text(item?.body ?? item?.text ?? item?.description) }
    )
    .filter((item) => item.title || item.body);

/** A list of plain strings, dropping the blanks. */
const lines = (list) =>
  (Array.isArray(list) ? list : []).map((item) => text(typeof item === "string" ? item : item?.text)).filter(Boolean);

/** A block with a heading and a payload renders only when the payload is there. */
function block(raw, payloadKey, payload) {
  if (!raw || !payload || payload.length === 0) return null;
  return {
    eyebrow: text(raw.eyebrow),
    heading: text(raw.heading ?? raw.title),
    body: text(raw.body ?? raw.description),
    cta: link(raw.cta),
    [payloadKey]: payload,
  };
}

/**
 * Turns one API entry into the model the template renders. Everything the
 * backend leaves out comes back null or empty, and the template hides the
 * block rather than showing an empty frame.
 */
export function normaliseLandingPage(raw) {
  if (!raw) return null;
  // WordPress wraps the title; a custom backend sends a plain string.
  const title = text(typeof raw.title === "object" ? decode(raw.title?.rendered) : raw.title);
  const slug = text(raw.slug);
  if (!slug || !title) return null;

  const hero = raw.hero ?? {};
  const seo = raw.seo ?? {};
  const faqs = (Array.isArray(raw.faqs) ? raw.faqs : [])
    .map((item) => ({ q: text(item?.q ?? item?.question), a: text(item?.a ?? item?.answer) }))
    .filter((item) => item.q && item.a);

  return {
    slug,
    title,
    seo: {
      title: text(seo.title) ?? `${title} | Reinvent Digital`,
      description: text(seo.description ?? raw.excerpt),
      canonical: text(seo.canonical),
      // Pages are indexable unless the entry opts out; pSEO pages exist to be
      // found, they are just not linked from anywhere on the site.
      noindex: seo.noindex === true,
    },
    hero: {
      eyebrow: text(hero.eyebrow),
      headline: text(hero.headline) ?? title,
      accent: text(hero.accent),
      description: text(hero.description ?? raw.excerpt),
      image: text(hero.image),
      cta: link(hero.cta, "Let's Connect") ?? { label: "Let's Connect", href: "/contact" },
      stats: (Array.isArray(hero.stats) ? hero.stats : [])
        .map((stat) => ({ value: text(stat?.value), label: text(stat?.label) }))
        .filter((stat) => stat.value && stat.label)
        .slice(0, 3),
    },
    intro: sanitise(raw.intro ?? ""),
    reasons: block(raw.reasons, "points", lines(raw.reasons?.points)),
    services: block(raw.services, "items", cards(raw.services?.items)),
    faqs,
    closing: raw.closing
      ? {
          eyebrow: text(raw.closing.eyebrow) ?? "Contact Us",
          heading: text(raw.closing.heading),
          body: text(raw.closing.body),
        }
      : null,
  };
}

const samples = () => SAMPLE_LANDING_PAGES.map(normaliseLandingPage).filter(Boolean);

/**
 * Reads one landing page by slug.
 *
 * Returns null when there is no such page, which the route turns into the 404.
 * That null is load-bearing: this collection sits on the root path, so every
 * mistyped URL on the site arrives here first.
 */
export async function fetchLandingPage(slug, { signal } = {}) {
  if (!slug) return null;
  if (!BASE) return samples().find((page) => page.slug === slug) ?? null;

  let res;
  try {
    res = await fetch(`${BASE}/${RESOURCE}/?slug=${encodeURIComponent(slug)}`, {
      signal,
      headers: { Accept: "application/json" },
    });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    // The endpoint is not live yet: a 404 without CORS headers reaches the
    // browser as a network error. Fall back to the bundled samples so the
    // template is still demonstrable.
    return samples().find((page) => page.slug === slug) ?? null;
  }
  if (res.status === 404) return samples().find((page) => page.slug === slug) ?? null;
  if (!res.ok) {
    const error = new Error(`${RESOURCE} request failed (${res.status})`);
    error.status = res.status;
    throw error;
  }

  const body = await res.json();
  const list = Array.isArray(body)
    ? body
    : (body.landing_pages ?? body.landingPages ?? body.pages ?? body.items ?? body.data ?? [body]);
  const match = (Array.isArray(list) ? list : [list]).map(normaliseLandingPage).find((page) => page?.slug === slug);
  return match ?? null;
}
