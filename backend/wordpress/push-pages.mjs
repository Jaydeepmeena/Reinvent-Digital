// Push every bundled landing page to the WordPress API in one bulk request.
//
// Reads docs/api/examples/landing-page-*.json (each is { landing_pages: [page] }),
// collects the pages into one array and POSTs them to the plugin's bulk endpoint.
//
// Usage (from the repo root):
//   WP_SITE="https://reinventmedia.in/staging-reinventdigital" \
//   WP_USER="your-wp-username" \
//   WP_APP_PASSWORD="xxxx xxxx xxxx xxxx xxxx xxxx" \
//   node backend/wordpress/push-pages.mjs
//
// WP_APP_PASSWORD is a WordPress Application Password (Users → Profile →
// Application Passwords), not the account's login password.
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SITE = process.env.WP_SITE?.replace(/\/+$/, "");
const USER = process.env.WP_USER;
const PASS = process.env.WP_APP_PASSWORD;

if (!SITE || !USER || !PASS) {
  console.error("Set WP_SITE, WP_USER and WP_APP_PASSWORD. See the header of this file.");
  process.exit(1);
}

const examplesDir = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "docs", "api", "examples");

const pages = readdirSync(examplesDir)
  .filter((f) => /^landing-page-.*\.json$/.test(f))
  .flatMap((f) => {
    const body = JSON.parse(readFileSync(join(examplesDir, f), "utf8"));
    return Array.isArray(body) ? body : (body.landing_pages ?? body.pages ?? [body]);
  });

console.log(`Collected ${pages.length} pages from ${examplesDir}`);

const auth = "Basic " + Buffer.from(`${USER}:${PASS}`).toString("base64");

const res = await fetch(`${SITE}/wp-json/rd/v1/landing-pages/bulk`, {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: auth },
  body: JSON.stringify({ landing_pages: pages }),
});

const text = await res.text();
if (!res.ok) {
  console.error(`Bulk push failed (${res.status}):`, text.slice(0, 500));
  process.exit(1);
}

const report = JSON.parse(text);
console.log("Summary:", report.summary);
for (const row of report.results ?? []) {
  if (row.status === "failed") console.warn(`  ✗ ${row.slug}: ${row.message}`);
}
console.log("Done.");
