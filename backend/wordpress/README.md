# Landing Pages API — WordPress plugin

Implements the endpoint the frontend reads at `{VITE_BLOG_API_URL}/landing-pages/`,
plus authenticated write / bulk / delete routes. See the full contract in
[`docs/landing-pages-api.md`](../../docs/landing-pages-api.md).

It stores and re-serves the **whole page payload** as post meta, so every block —
including the newer `design`, `hero.highlights`, `hero.metric`, `problems`,
`help`, `proof`, `splitSections` and `plan` — works with no schema changes.

## Install

1. Copy the `reinvent-landing-pages/` folder into `wp-content/plugins/` on the
   WordPress site (the one behind `https://reinventmedia.in/staging-reinventdigital`).
2. In **wp-admin → Plugins**, activate **"Reinvent Digital — Landing Pages API"**.
3. Done. A **Landing Pages** menu appears in wp-admin, and the REST routes below go live.

The read route is registered with `rest_base: "landing-pages"`, so it is served
exactly where the frontend already looks — the same base as `/posts/` and
`/case-studies/`. No frontend change is needed; `VITE_BLOG_API_URL` already points
at it.

## Read (public)

```
GET  {base}/landing-pages/?slug=<slug>          # one page (what the site calls per view)
GET  {base}/landing-pages/?page=1&per_page=100  # list (for a sitemap)
```

`{base}` = `https://reinventmedia.in/staging-reinventdigital`. Returns a bare JSON
array (the frontend accepts that), with `X-WP-Total` / `X-WP-TotalPages` headers.
Unknown slug → empty list. Only published pages are returned.

## Write (authenticated)

Use a **WordPress Application Password** for a user who can edit posts
(wp-admin → Users → Profile → Application Passwords). Send it as HTTP Basic auth.

```
POST    {base}/wp-json/rd/v1/landing-pages            # create / upsert one
PUT     {base}/wp-json/rd/v1/landing-pages/<slug>     # replace one
DELETE  {base}/wp-json/rd/v1/landing-pages/<slug>     # remove one
POST    {base}/wp-json/rd/v1/landing-pages/bulk       # create / replace an array (≤100), per-row report
```

- **Upsert on `slug`** — re-pushing the same slug updates it, never duplicates.
- **Validation** — slug must be `a-z 0-9 -`; reserved site slugs are rejected
  (`what-we-do`, `industries`, `about`, `resources`, `locations`, `contact`, …).
- **Bulk report** — `{ summary: {created, updated, failed}, results: [{slug, status, message}] }`.

### Seed all pages from the repo

The 17 bundled pages are ready to push from `docs/api/examples/*.json`:

```bash
WP_SITE="https://reinventmedia.in/staging-reinventdigital" \
WP_USER="your-wp-username" \
WP_APP_PASSWORD="xxxx xxxx xxxx xxxx xxxx xxxx" \
node backend/wordpress/push-pages.mjs
```

### Create one by hand

```bash
curl -X POST "https://reinventmedia.in/staging-reinventdigital/wp-json/rd/v1/landing-pages" \
  -u "USER:APP PASSWORD" \
  -H "Content-Type: application/json" \
  --data @docs/api/examples/landing-page-seo.json
```

(That file wraps the page in `{ "landing_pages": [...] }`; send a single page object
to the non-bulk route, or send the whole file to `/landing-pages/bulk`.)

## CORS

The plugin sends CORS headers for an allow-list of origins
(`reinventdigital.com`, the Vercel preview, `localhost:5173`) on **every** REST
response — which also fixes cross-site access for `/posts/` and `/case-studies/`.
Add origins with the `rdlp_allowed_origins` filter.

## Test checklist

```bash
# known slug returns one page
curl -i "{base}/landing-pages/?slug=seo-agency"
# unknown slug returns empty list, never 500
curl -i "{base}/landing-pages/?slug=nope-not-real"
# CORS header present (incl. on errors)
curl -i -H "Origin: https://reinventdigital.com" "{base}/landing-pages/?slug=seo-agency" | grep -i access-control
# re-pushing a slug updates, does not duplicate
```
