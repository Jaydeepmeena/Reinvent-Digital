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
// The CMS owns the slugs as well as the words. It can publish a slug we do not
// ship at all, rename one we do, reorder the menus or take a page down, and the
// navigation follows. The contract is in docs/pages-api.md.
import { useEffect, useMemo, useState } from "react";
import { Circle } from "lucide-react";
import { buildRedirects } from "./renameRules";
import { identityOf, pathOf } from "./pagePaths";
import { mergeContent } from "./contentRules";
import { PAGE_ICONS } from "../data/pageIcons";
import { SHIPPED_PAGES } from "../data/routes.js";

// Icons are bundled React components, not JSON, so an entry the CMS publishes on
// its own carries none. The menus and cards render the icon unconditionally, so
// every resolved entry gets one: its own where it has it, this neutral mark
// otherwise.
const FALLBACK_ICON = Circle;

// Lucide icons are forwardRef components, which are objects rather than
// functions, so a plain `typeof … === "function"` turns every one away.
const isComponent = (value) =>
  typeof value === "function" || (typeof value === "object" && value !== null && "$$typeof" in value);

export { mergeContent };

const BASE = (import.meta.env.VITE_BLOG_API_URL ?? "").replace(/\/+$/, "");

export const isPagesCmsConfigured = Boolean(BASE);

// WordPress and most CMSes have a word for "not live yet". Any of them takes a
// page out of the menus and off its URL; the bundled copy stays in the bundle,
// it just stops being reachable.
const HIDDEN_STATUSES = new Set(["draft", "pending", "private", "unpublished", "trash", "future"]);

// WordPress encodes special characters (&lt; &amp; &#8217; …) even in plain
// text fields, so an entry arrives with "&lt;60 sec" where it means "<60 sec".
// Decode entities as the CMS entries come in, across every string in the entry.
// Entities only — any tags are left in place for the few fields that carry HTML.
const decoder = typeof document !== "undefined" ? document.createElement("textarea") : null;

function decodeEntities(value) {
  if (typeof value === "string") {
    if (!decoder || !value.includes("&")) return value;
    decoder.innerHTML = value;
    return decoder.value;
  }
  if (Array.isArray(value)) return value.map(decodeEntities);
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, inner] of Object.entries(value)) out[key] = decodeEntities(inner);
    return out;
  }
  return value;
}

const isHidden = (entry) =>
  entry?.hidden === true ||
  entry?.published === false ||
  (typeof entry?.status === "string" && HIDDEN_STATUSES.has(entry.status.toLowerCase()));

// WordPress gives every post a menu order of 0 unless someone sets one, so 0
// reads as "not set" rather than "first".
const orderOf = (entry) => {
  const raw = entry?.order ?? entry?.menuOrder ?? entry?.menu_order;
  const value = Number(raw);
  return Number.isFinite(value) && value !== 0 ? value : null;
};

/** Where a page sits in the shipped menu order; pages the site never shipped go last. */
const shippedRank = (collection, id) => {
  const index = SHIPPED_PAGES[collection]?.indexOf(id) ?? -1;
  return index === -1 ? Infinity : index;
};

/**
 * Builds one collection: the bundled list with the CMS answer folded into it.
 *
 * Pure, so the pages and the menus derive the same list from the same rules and
 * cannot disagree about a slug.
 *
 * @param bundled  the list we ship, e.g. SERVICES
 * @param remote   CMS entries by slug, possibly empty
 * @returns {{entries, navEntries, bySlug, redirects}}
 *          `entries` is live and in order, `bySlug` holds every entry including
 *          the hidden ones, so a page can tell "taken down" from "never existed",
 *          and `redirects` maps a retired slug to the slug that replaced it.
 */
export function resolveCollection(collection, bundled = [], remote = new Map()) {
  const list = Array.isArray(bundled) ? bundled : [];
  const bundledById = new Map();
  for (const entry of list) {
    const id = identityOf(entry?.slug);
    if (id) bundledById.set(id, entry);
  }

  // Renames come first, so the main pass knows which pages have been retired.
  // Keyed by identity, so moving a page to another path is not a rename.
  const redirects = buildRedirects(remote.values());

  const entries = [];
  const byId = new Map();
  const add = (base, patch) => {
    const merged = patch ? mergeContent(base ?? {}, patch) : base;
    const id = identityOf(merged?.slug);
    if (!id || byId.has(id)) return;
    // Every entry carries where it lives, worked out once, so nothing has to
    // assemble a URL from a prefix and a slug ever again.
    const placed = {
      ...merged,
      id,
      path: pathOf(collection, merged.slug),
      icon: isComponent(merged.icon) ? merged.icon : (PAGE_ICONS[collection]?.[id] ?? FALLBACK_ICON),
    };
    byId.set(id, placed);
    entries.push(placed);
  };

  // Bundled order is the site's order. A renamed page is emitted in the place of
  // the page it replaced and inherits the bundled content: renaming a page is
  // not the same as writing one from scratch, and it does not reshuffle a menu.
  for (const base of list) {
    const id = identityOf(base?.slug);
    if (!id) continue;
    const renamedTo = redirects.get(id);
    if (renamedTo) add(base, remote.get(renamedTo));
    else add(base, remote.get(id));
  }

  // Then the pages the CMS has published that the site does not ship at all.
  // A page that has since been renamed away is not one of them: its URL
  // redirects now, and only the name it ended up with is live. Pages the site
  // used to ship keep their old place; the rest follow in the CMS's order.
  const cmsOnly = [...remote.values()]
    .map((entry, index) => ({ entry, index, rank: shippedRank(collection, identityOf(entry?.slug)) }))
    .sort((a, b) => a.rank - b.rank || a.index - b.index)
    .map((row) => row.entry);
  for (const entry of cmsOnly) {
    const id = identityOf(entry?.slug);
    if (!id || bundledById.has(id) || redirects.has(id)) continue;
    add(undefined, entry);
  }

  const live = entries.filter((entry) => !isHidden(entry));

  // `order` is optional: without it the bundled order stands. With it, the
  // entries that carry one are placed by it and the rest keep their relative
  // order behind them.
  const ordered = live.some((entry) => orderOf(entry) !== null)
    ? live
        .map((entry, index) => ({ entry, index, order: orderOf(entry) }))
        .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.index - b.index)
        .map((row) => row.entry)
    : live;

  return {
    entries: ordered,
    // A page can be live at its URL but kept out of the menus, which is how a
    // page gets written and shared before it is announced.
    navEntries: ordered.filter((entry) => entry.nav !== false && entry.inNav !== false),
    byId,
    bundled: list,
    redirects,
  };
}

// One request per collection per session, shared by every page and menu that
// reads it. The promise is cached, not the result, so the navbar and the page
// mounting together wait on the same request rather than firing one each.
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
  const byId = new Map();
  for (const raw of Array.isArray(list) ? list : []) {
    const entry = decodeEntities(raw);
    const id = identityOf(entry?.slug);
    if (id) byId.set(id, entry);
  }
  return byId;
}

function loadCollection(resource) {
  if (!BASE) return Promise.resolve(new Map());
  if (!collections.has(resource)) {
    collections.set(
      resource,
      request(resource).catch(() => {
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

/** The CMS answer for one collection, or an empty map until it lands. */
function useRemoteCollection(resource) {
  const [remote, setRemote] = useState(null);

  useEffect(() => {
    let live = true;
    loadCollection(resource).then((bySlug) => {
      if (live) setRemote(bySlug);
    });
    return () => {
      live = false;
    };
  }, [resource]);

  return remote;
}

/**
 * Reads a whole collection: the menus, the listings, anything that needs to
 * know which pages exist rather than what one of them says.
 *
 * @param resource  REST path segment, e.g. "services" or "locations"
 * @param bundled   the list we ship, e.g. SERVICES
 */
export function usePageCollection(resource, bundled) {
  const remote = useRemoteCollection(resource);

  return useMemo(() => {
    const resolved = resolveCollection(resource, bundled, remote ?? new Map());
    return { ...resolved, status: remote || !BASE ? "ready" : "loading" };
  }, [resource, bundled, remote]);
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
 * @param slug      the slug in the URL
 * @param bundled   the list we ship, e.g. SERVICES
 * @returns {{entry, status, redirectTo}} status is "ready", "loading" or
 *          "missing", and "loading" only ever happens for a slug with no
 *          bundled entry behind it, so pages we ship never wait. `redirectTo`
 *          is the slug this one was renamed to, if it was.
 */
export function usePageEntry(resource, slug, bundled) {
  const { byId, redirects, status: collection } = usePageCollection(resource, bundled);

  const found = byId.get(slug);
  const entry = found && !isHidden(found) ? found : undefined;
  const redirectTo = redirects.get(slug) ?? null;

  let status = "ready";
  if (!entry) status = collection === "loading" && !redirectTo ? "loading" : "missing";
  return { entry, status, redirectTo };
}

/**
 * Reads a page that has no slug of its own, like /contact.
 *
 * @param resource  REST path segment, e.g. "contact"
 * @param slug      the slug the CMS files that single entry under
 * @param fallback  the bundled entry
 */
export function usePageContent(resource, slug, fallback) {
  const remote = useRemoteCollection(resource);

  return useMemo(() => {
    const patch = remote?.get(slug) ?? null;
    const entry = patch ? mergeContent(fallback ?? {}, patch) : fallback;
    let status = "ready";
    if (!entry) status = remote || !BASE ? "missing" : "loading";
    return { entry, status };
  }, [remote, slug, fallback]);
}
