// What it means to merge a CMS entry over a bundled one: the rules, with no
// fetching and no React, so the app and the build-time redirect script read the
// same answer out of the same payload.

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date);

/**
 * Merges a CMS entry over a bundled one.
 *
 * Objects merge key by key, so `{hero: {title}}` changes the title and leaves
 * the rest of the hero alone.
 *
 * A key the CMS omits, or sends as null, keeps the bundled value. So does a
 * value the CMS sends empty: a blank string, or an array shorter than the
 * bundled one. A thin or empty CMS field is treated as incomplete data and
 * falls back to the bundled content, so a stub entry cannot hollow a page out —
 * the CMS still wins whenever it sends a genuinely fuller list or real text.
 * This is also what lets an entry keep the icon components and imported images
 * that cannot travel as JSON.
 *
 * The trade-off: the CMS cannot shorten a list or clear a field by sending
 * fewer items or "". To change one FAQ, send all of them; to drop a section,
 * hide the page or send a replacement that is at least as long.
 */
export function mergeContent(base, patch) {
  if (patch === undefined || patch === null) return base;

  if (Array.isArray(patch)) {
    if (!Array.isArray(base)) return patch;
    // A shorter (or empty) CMS array reads as incomplete: keep the fuller
    // bundled list rather than thinning the section.
    if (patch.length < base.length) return base;
    // Otherwise merge item by item, so a field the CMS omits on an item — an
    // image, an icon — survives on it while the CMS text wins.
    return patch.map((item, i) => mergeContent(base[i], item));
  }

  // A blank string is no content: keep the bundled wording.
  if (typeof patch === "string") {
    return patch.trim() === "" && typeof base === "string" && base !== "" ? base : patch;
  }

  if (!isPlainObject(patch) || !isPlainObject(base)) return patch;

  const out = { ...base };
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined || value === null) continue;
    // A bundled image wins. The CMS staging images are placeholders, so where a
    // page ships its own photo we keep it and ignore the CMS image URL. The CMS
    // image is still used where there is no bundled one, i.e. a CMS-only page.
    if (key === "image" && base[key] != null) {
      out[key] = base[key];
      continue;
    }
    out[key] = mergeContent(base[key], value);
  }
  return out;
}
