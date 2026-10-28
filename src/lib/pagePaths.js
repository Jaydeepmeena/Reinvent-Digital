// A slug is a path.
//
// One field decides where a page lives. The CMS sends a slug, and that slug is
// the whole URL — prefix included, if it wants to name one:
//
//   "google-ads"               ->  /google-ads
//   "services/google-ads"      ->  /services/google-ads
//   "/google-ads"              ->  /google-ads
//
// A plain slug is a page at the root. A slug that names a folder is taken at
// its word, so the CMS can file pages under one whenever it wants to without
// the site having an opinion about it.
//
// The pages were all under a folder once — /what-we-do/google-ads and the
// rest — and those URLs are indexed, so each one redirects to where its page is
// now. See PREVIOUS_FOLDERS in src/data/routes.js.
//
// A page's identity is the last segment of its slug, not the whole path. That
// is what lets a page move without being rewritten: /what-we-do/google-ads
// becoming /google-ads is the same page in a new place, keeps its content, its
// icon and its hero image, and the old URL redirects. Changing the last segment
// is the other thing — a rename — and needs `replaces`, as before.
//
// No React and no fetching in here, so the app and the build-time redirect
// script derive every URL from the same code. The extension is spelled out
// because scripts/sync-redirects.mjs imports this in plain Node.
import {
  DEFAULT_FOLDERS,
  PREVIOUS_FOLDERS,
  RESERVED_PATHS,
  RETIRED_PAGES,
  SHIPPED_PAGES,
  SHIPPED_RENAMES,
} from "../data/routes.js";

export const COLLECTIONS = Object.keys(DEFAULT_FOLDERS);

/** The page's identity: the last segment of its slug. */
export const identityOf = (slug) =>
  typeof slug === "string" ? (slug.split("/").filter(Boolean).pop() ?? null) : null;

const tidy = (value) =>
  typeof value === "string" ? value.trim().replace(/\/{2,}/g, "/").toLowerCase() : null;

/**
 * The path a slug asks for.
 *
 * @param collection  "services", "locations", …
 * @param slug        what the CMS sent, or the bundled slug
 */
export function pathOf(collection, slug) {
  const value = tidy(slug);
  if (!value) return null;

  // Named a folder of its own, or asked for the root outright.
  if (value.includes("/")) return `/${value.replace(/^\/+|\/+$/g, "")}`;

  const folder = DEFAULT_FOLDERS[collection];
  return folder ? `/${folder}/${value}` : `/${value}`;
}

const isReserved = (path) =>
  RESERVED_PATHS.some((reserved) =>
    reserved.endsWith("/*") ? path.startsWith(reserved.slice(0, -1)) : reserved === path
  );

/**
 * Every URL the site answers for its own pages, and every URL that redirects.
 *
 * @param collections  {collection: {entries, bundled}} — the merged entries,
 *                     and the list the site ships, to know where a page was
 * @returns {{pages, redirects, conflicts}}
 *          `pages` is one route per live page, `redirects` is from an old path
 *          to the path that replaced it, and `conflicts` is what was refused.
 */
export function buildPageRoutes(collections) {
  const pages = [];
  const redirects = [];
  const conflicts = [];
  const taken = new Map();

  const claim = (path, collection, id) => {
    if (isReserved(path)) {
      // Not an error: the resources collection deliberately carries an entry
      // for the blog and the case studies so they appear in the menus, and the
      // hub at that path is what should answer.
      conflicts.push({ path, collection, id, why: "reserved for another part of the site" });
      return false;
    }
    const held = taken.get(path);
    if (held) {
      conflicts.push({ path, collection, id, why: `already used by ${held.collection}/${held.id}` });
      return false;
    }
    taken.set(path, { collection, id });
    return true;
  };

  for (const collection of COLLECTIONS) {
    const { entries = [], bundled = [] } = collections[collection] ?? {};

    // Pages whose content has moved to the CMS keep their URL history too.
    const shippedSlug = new Map((SHIPPED_PAGES[collection] ?? []).map((slug) => [slug, slug]));
    for (const entry of bundled) {
      const id = identityOf(entry?.slug);
      if (id) shippedSlug.set(id, entry.slug);
    }

    for (const entry of entries) {
      const id = identityOf(entry?.slug);
      const path = pathOf(collection, entry?.slug);
      if (!id || !path) continue;
      if (!claim(path, collection, id)) continue;

      pages.push({ path, collection, id, slug: entry.slug });

      // Wherever this page used to be, it still answers.
      const was = new Set();

      // Every name this page has gone by: the one it has now, and any it says
      // it replaced.
      const names = new Set([id]);
      for (const key of ["replaces", "renamedFrom", "previousSlug"]) {
        const value = entry?.[key];
        if (typeof value !== "string" || !value.trim()) continue;
        was.add(pathOf(collection, value));
        const name = identityOf(value);
        if (name) names.add(name);
      }

      // For the names the site actually ships, the URLs that name had before —
      // where it sits in the bundle, and the folders these pages used to live
      // in. A page the CMS invented never had either, so it gets neither.
      for (const name of names) {
        const shipped = shippedSlug.get(name);
        if (!shipped) continue;
        was.add(pathOf(collection, shipped));
        for (const folder of PREVIOUS_FOLDERS[collection] ?? []) was.add(`/${folder}/${name}`);
      }
      for (const from of was) {
        if (from && from !== path && !isReserved(from)) redirects.push({ from, to: path });
      }
    }

    // The renames the site shipped by hand before the CMS owned any of this,
    // and the pages it has taken down. Both are the same shape: a URL that no
    // longer has a page, and the page to send it to instead.
    const handwritten = { ...SHIPPED_RENAMES[collection], ...RETIRED_PAGES[collection] };
    for (const [from, to] of Object.entries(handwritten)) {
      // `to` is a slug within the collection, or — for a page retired to
      // somewhere outside it, like the blog — an absolute path written in full.
      const current = pages.find((page) => page.collection === collection && page.id === to);
      const target = to.startsWith("/")
        ? to
        : (current?.path ?? (taken.has(pathOf(collection, to)) ? pathOf(collection, to) : null));
      if (!target) continue;
      const froms = [pathOf(collection, from)];
      for (const folder of PREVIOUS_FOLDERS[collection] ?? []) froms.push(`/${folder}/${from}`);
      for (const fromPath of froms) {
        if (fromPath !== target) redirects.push({ from: fromPath, to: target });
      }
    }
  }

  // A redirect that points at another redirect is followed here, so a visitor
  // and a search engine each make one hop rather than several.
  const byFrom = new Map(redirects.map((rule) => [rule.from, rule.to]));
  const resolved = redirects.map(({ from, to }) => {
    let target = to;
    for (let hop = 0; hop < 10 && byFrom.has(target) && byFrom.get(target) !== target; hop += 1) {
      target = byFrom.get(target);
    }
    return { from, to: target };
  });

  // A path that is a live page cannot also redirect away from itself.
  const live = new Set(pages.map((page) => page.path));
  return {
    pages,
    redirects: resolved.filter((rule) => !live.has(rule.from) && rule.from !== rule.to),
    conflicts,
  };
}
