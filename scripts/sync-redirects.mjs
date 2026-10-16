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
import { buildPageRoutes, identityOf, COLLECTIONS } from "../src/lib/pagePaths.js";
import { buildRedirects } from "../src/lib/renameRules.js";
import { mergeContent } from "../src/lib/contentRules.js";

const CONFIG = new URL("../vercel.json", import.meta.url);
const BASE = (process.env.VITE_BLOG_API_URL ?? process.argv[2] ?? "").replace(/\/+$/, "");

if (!BASE) {
  // The folders these pages used to sit in redirect whatever the CMS says, so
  // this is still worth running with no API to ask.
  console.log("No API base given, so only the redirects the bundle implies are written.");
  console.log("To include the CMS's own moves and renames, pass one:");
  console.log("  npm run redirects -- https://reinventmedia.in/staging-reinventdigital");
}

// The bundled lists carry Lucide icon components, which cannot be imported
// outside the bundler, so the shipped slugs are read out of the source files.
// Only the slugs matter here: they are what says where a page sits today.
async function shippedSlugs(collection) {
  const file = new URL(`../src/data/${collection === "services" ? "services" : collection}.js`, import.meta.url);
  const source = readFileSync(file, "utf8");
  return [...source.matchAll(/^\s+"?slug"?:\s*"([^"]+)"/gm)].map((match) => ({ slug: match[1] }));
}

async function get(path) {
  if (!BASE) return null;
  try {
    const res = await fetch(`${BASE}/${path}/?per_page=100`, { headers: { Accept: "application/json" } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

const listOf = (body, resource) => {
  if (Array.isArray(body)) return body;
  const list = body?.[resource] ?? body?.pages ?? body?.items ?? body?.data;
  return Array.isArray(list) ? list : [];
};

// The same merge the site does, so a path here is the path a visitor gets.
const collections = {};
let reachable = false;

for (const collection of COLLECTIONS) {
  const bundled = await shippedSlugs(collection);
  const body = await get(collection);
  if (body) reachable = true;

  const remote = new Map();
  for (const entry of listOf(body, collection)) {
    const id = identityOf(entry?.slug);
    if (id) remote.set(id, entry);
  }

  const renames = buildRedirects(remote.values());
  const entries = [];
  const seen = new Set();
  const add = (base, patch) => {
    const merged = patch ? mergeContent(base ?? {}, patch) : base;
    const id = identityOf(merged?.slug);
    if (!id || seen.has(id)) return;
    seen.add(id);
    entries.push(merged);
  };

  for (const base of bundled) {
    const id = identityOf(base.slug);
    const renamedTo = renames.get(id);
    add(base, remote.get(renamedTo ?? id));
  }
  for (const entry of remote.values()) {
    const id = identityOf(entry?.slug);
    if (!id || seen.has(id) || renames.has(id)) continue;
    add(undefined, entry);
  }

  collections[collection] = { entries, bundled };
}

if (!reachable) {
  console.log("No collection answered. Writing the redirects the bundle alone implies.");
}

const { redirects, conflicts } = buildPageRoutes(collections);

for (const { path, collection, id, why } of conflicts) {
  if (why.startsWith("reserved")) continue;
  console.warn(`! ${collection}/${id} cannot be at ${path}: ${why}`);
}

const rules = redirects.map(({ from, to }) => ({ source: from, destination: to, permanent: true }));

const config = JSON.parse(readFileSync(CONFIG, "utf8"));
const before = JSON.stringify(config.redirects ?? []);

if (rules.length > 0) config.redirects = rules;
else delete config.redirects;

// The SPA rewrite has to stay, and stay last.
config.rewrites = [{ source: "/(.*)", destination: "/index.html" }];

if (JSON.stringify(config.redirects ?? []) === before) {
  console.log(`No change. ${rules.length} redirect${rules.length === 1 ? "" : "s"} already in vercel.json.`);
  process.exit(0);
}

writeFileSync(CONFIG, `${JSON.stringify(config, null, 2)}\n`);
console.log(`Wrote ${rules.length} redirect${rules.length === 1 ? "" : "s"} to vercel.json:`);
for (const rule of rules) console.log(`  ${rule.source}  ->  ${rule.destination}`);
console.log("\nCommit vercel.json and deploy for these to take effect.");
