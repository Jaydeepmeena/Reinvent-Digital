// Writes the CMS's URL changes into vercel.json as real 301s.
//
// The site redirects an old URL in the browser already, which keeps visitors
// and bookmarks working the moment an editor saves. That is a 200 with a
// client-side redirect though, and Google passes ranking signals through a
// server 301 far more reliably, so the URLs that have moved belong in the
// hosting config too.
//
// Run this, commit the result, then deploy:
//
//   npm run redirects -- https://reinventmedia.in/staging-reinventdigital
//
// It is deliberately not part of `npm run build`. Vercel reads vercel.json from
// the repository when a deployment starts, so a file written during the build
// would not affect that same deployment — it has to be committed first.
//
// It works out the URLs with the same code the app uses, so a 301 cannot
// disagree with what the site does in the browser. With no API to ask it leaves
// vercel.json alone, so it is safe to run in any checkout.
import { readFileSync, writeFileSync } from "node:fs";

const CONFIG = new URL("../vercel.json", import.meta.url);
const BASE = (process.env.VITE_BLOG_API_URL ?? process.argv[2] ?? "").replace(/\/+$/, "");
// The loader reads the CMS base from the environment, so set it before loading.
if (BASE) process.env.CMS_BASE = BASE;

const { buildPageRoutes } = await import("../src/lib/pagePaths.js");
const { loadPageCollections } = await import("../api/_lib/siteContent.js");

if (!BASE) {
  // The folders these pages used to sit in redirect whatever the CMS says, so
  // this is still worth running with no API to ask.
  console.log("No API base given, so only the redirects the bundle implies are written.");
  console.log("To include the CMS's own moves and renames, pass one:");
  console.log("  npm run redirects -- https://reinventmedia.in/staging-reinventdigital");
}

// The same merge the site does, so a path here is the path a visitor gets. The
// sitemap reads pages through the same loader.
const { collections, reachable } = await loadPageCollections();

if (!reachable) {
  console.log("No collection answered. Writing the redirects the bundle alone implies.");
}

const { redirects, conflicts } = buildPageRoutes(collections);

for (const { path, collection, id, why } of conflicts) {
  if (why.startsWith("reserved")) continue;
  console.warn(`! ${collection}/${id} cannot be at ${path}: ${why}`);
}

const rules = redirects.map(({ from, to }) => ({ source: from, destination: to, permanent: true }));

// Landing pages sit at the root and are not in the page collections, so a
// renamed one names its old slug in `replaces` and is redirected from here.
const { SAMPLE_LANDING_PAGES } = await import("../src/data/sampleLandingPages.js");
for (const page of SAMPLE_LANDING_PAGES) {
  if (page.replaces && page.replaces !== page.slug) {
    rules.unshift({ source: `/${page.replaces}`, destination: `/${page.slug}`, permanent: true });
  }
}

const config = JSON.parse(readFileSync(CONFIG, "utf8"));
const before = JSON.stringify(config.redirects ?? []);

if (rules.length > 0) config.redirects = rules;
else delete config.redirects;

// Other rewrites (the sitemap, robots.txt, llms.txt) are kept; the SPA
// rewrite has to stay, and stay last.
const SPA = { source: "/(.*)", destination: "/index.html" };
config.rewrites = [...(config.rewrites ?? []).filter((rule) => rule.source !== SPA.source), SPA];

if (JSON.stringify(config.redirects ?? []) === before) {
  console.log(`No change. ${rules.length} redirect${rules.length === 1 ? "" : "s"} already in vercel.json.`);
  process.exit(0);
}

writeFileSync(CONFIG, `${JSON.stringify(config, null, 2)}\n`);
console.log(`Wrote ${rules.length} redirect${rules.length === 1 ? "" : "s"} to vercel.json:`);
for (const rule of rules) console.log(`  ${rule.source}  ->  ${rule.destination}`);
console.log("\nCommit vercel.json and deploy for these to take effect.");
