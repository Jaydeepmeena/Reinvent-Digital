// GET /robots.txt — open on production, closed on preview deployments so a
// preview URL never competes with the real site in search.
import { isIndexable, originOf, send } from "./_lib/siteContent.js";

export default function handler(req, res) {
  const origin = originOf(req);
  const rules = isIndexable() ? "Allow: /" : "Disallow: /";
  send(res, "text/plain", `User-agent: *\n${rules}\n\nSitemap: ${origin}/sitemap.xml\n`);
}
