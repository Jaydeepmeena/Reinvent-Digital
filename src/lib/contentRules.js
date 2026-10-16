// What it means to merge a CMS entry over a bundled one: the rules, with no
// fetching and no React, so the app and the build-time redirect script read the
// same answer out of the same payload.

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
