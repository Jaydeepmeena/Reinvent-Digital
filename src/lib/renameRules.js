// What it means for a page to have been renamed: the rules, with no fetching
// and no React, so the app and the build-time redirect script agree on which
// old URL points where.
import { identityOf } from "./pagePaths.js";

/**
 * Which slug an entry takes over from.
 *
 * Renaming is a separate act from publishing a new page: the new slug inherits
 * the old page's content and its place in the menus, and the old URL keeps
 * working. An entry that names no predecessor is simply a new page.
 */
export const renamedFrom = (entry) =>
  entry?.replaces ?? entry?.renamedFrom ?? entry?.previousSlug ?? null;

/**
 * Builds the redirect map for one collection: retired page to current page,
 * both named by identity — the last segment of the slug — so that moving a
 * page to another path does not read as a rename.
 *
 * The slug being replaced does not have to be one the site ships. A page the
 * CMS published last month and renames today only ever existed in the CMS, and
 * its URL has been in the wild just as long, so it earns a redirect too.
 *
 * A page renamed twice redirects straight to where it ended up, rather than
 * walking the browser through every URL it has ever had.
 */
export function buildRedirects(entries) {
  const redirects = new Map();
  for (const entry of entries) {
    const from = identityOf(renamedFrom(entry));
    const to = identityOf(entry?.slug);
    if (!from || !to || from === to) continue;
    redirects.set(from, to);
  }

  for (const from of [...redirects.keys()]) {
    let to = redirects.get(from);
    for (let hop = 0; hop < 10 && redirects.has(to) && redirects.get(to) !== to; hop += 1) {
      to = redirects.get(to);
    }
    redirects.set(from, to);
  }

  return redirects;
}
