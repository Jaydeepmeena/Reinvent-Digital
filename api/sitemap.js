// GET /sitemap.xml — every public URL, read from the CMS at request time.
import { loadSite, originOf, send } from "./_lib/siteContent.js";

const xml = (value) =>
  String(value).replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]);

export default async function handler(req, res) {
  const origin = originOf(req);
  const { sections } = await loadSite();

  const seen = new Set();
  const urls = [];
  for (const { items } of sections) {
    for (const { path, lastmod } of items) {
      if (seen.has(path)) continue;
      seen.add(path);
      const lines = [`    <loc>${xml(origin + path)}</loc>`];
      if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
      urls.push(`  <url>\n${lines.join("\n")}\n  </url>`);
    }
  }

  send(
    res,
    "application/xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`
  );
}
