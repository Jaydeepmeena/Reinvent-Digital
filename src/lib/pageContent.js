// Content for the site's own pages, read from the CMS.
//
// Every page except the home page gets its words from here: the service,
// industry, location, about, resource and contact pages. The layouts stay in
// the components; only the content moves.
//
// The bundled files under src/data/ are the default, not a stopgap. A page
// renders from them immediately, and the API answer is merged over the top
// when it arrives. So:
//
//   - nothing flashes or spins on a page we already ship content for,
//   - an endpoint that is missing, slow or broken changes nothing,
//   - the CMS sends only the fields it wants to change, not whole pages,
//   - a field the CMS leaves out keeps the bundled wording.
//
// It also means the CMS can publish a slug we do not ship at all, for example
// a new city or a new service, and the page appears.
//
// The contract is in docs/pages-api.md.
import { useEffect, useState } from "react";

const BASE = (import.meta.env.VITE_BLOG_API_URL ?? "").replace(/\/+$/, "");

export const isPagesCmsConfigured = Boolean(BASE);

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date);

/**
 * Merges a CMS entry over a bundled one.
 *
 * Objects merge key by key, so `{hero: {title}}` changes the title and leaves
 * the rest of the hero alone. Arrays and scalars replace outright, because
 * merging a list item by item guesses at an order the CMS never stated: to
 * change one FAQ, send all of them.
 *
 * A key the CMS omits, or sends as null, keeps the bundled value. That is what
 * lets an entry carry the icon components and imported images that cannot
 * travel as JSON.
 */
export function mergeContent(base, patch) {
  if (patch === undefined || patch === null) return base;
  if (!isPlainObject(patch) || !isPlainObject(base)) return patch;

  const out = { ...base };
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined || value === null) continue;
    out[key] = mergeContent(base[key], value);
  }
  return out;
}

// One request per collection per session, shared by every page that reads it.
// The promise is cached, not the result, so pages mounting together wait on the
// same request rather than firing one each.
const collections = new Map();
let warned = false;

async function request(resource) {
  const res = await fetch(`${BASE}/${resource}/?per_page=100`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    const error = new Error(`${resource} request failed (${res.status})`);
    error.status = res.status;
    throw error;
  }
  const body = await res.json();
  const list = Array.isArray(body)
    ? body
    : (body[resource.replace(/-/g, "_")] ?? body.pages ?? body.items ?? body.data ?? []);
  const bySlug = new Map();
  for (const entry of Array.isArray(list) ? list : []) {
    if (entry?.slug) bySlug.set(entry.slug, entry);
  }
  return bySlug;
}

function loadCollection(resource) {
  if (!BASE) return Promise.resolve(new Map());
  if (!collections.has(resource)) {
    collections.set(
      resource,
      request(resource).catch((error) => {
        // An endpoint the backend has not built yet answers 404, and because
        // that 404 carries no CORS headers the browser reports it as a network
        // failure rather than a status. Either way the bundled content stands,
        // noted once so it is obvious in development which page type is still
        // waiting on the API.
        if (!warned) {
          warned = true;
          console.info(`[cms] ${BASE}/${resource}/ is not available yet, using bundled page content.`);
        }
        return new Map();
      })
    );
  }
  return collections.get(resource);
}

/** Drops every cached collection. Only used by the tests. */
export function resetPageContentCache() {
  collections.clear();
  warned = false;
}

/**
 * Reads one page's content.
 *
 * The returned entry is derived during render, never held in state, so the
 * frame after the slug changes already shows the new page. Holding it in state
 * and resetting from an effect would render the previous page's words first,
 * which the hero animations would then latch onto.
 *
 * @param resource  REST path segment, e.g. "services" or "locations"
 * @param slug      the page's slug
 * @param fallback  the bundled entry, or undefined for a slug we do not ship
 * @returns {{entry, status}} status is "ready", "loading" or "missing".
 *          "loading" and "missing" only ever happen for a slug with no bundled
 *          entry behind it, so pages we ship never wait.
 */
export function usePageContent(resource, slug, fallback) {
  const key = `${resource}/${slug}`;
  const [loaded, setLoaded] = useState(null);

  useEffect(() => {
    let live = true;
    loadCollection(resource).then((bySlug) => {
      if (live) setLoaded({ key, raw: bySlug.get(slug) ?? null });
    });
    return () => {
      live = false;
    };
  }, [resource, slug, key]);

  // An answer for a slug we have since navigated away from is ignored.
  const settled = loaded?.key === key;
  const remote = settled ? loaded.raw : null;
  const entry = remote ? mergeContent(fallback ?? {}, remote) : fallback;

  let status = "ready";
  if (!entry) status = !BASE || settled ? "missing" : "loading";
  return { entry, status };
}
