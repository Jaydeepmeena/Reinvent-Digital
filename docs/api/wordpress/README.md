# Landing Pages API — WordPress plugin

This folder is a complete, drop-in implementation of the `landing-pages` API the
Reinvent Digital frontend already reads. Hand it to whoever runs the WordPress
CMS. **No frontend change is needed** — the site starts reading from the CMS the
moment this endpoint answers.

- `reinvent-landing-pages.php` — the plugin.
- `../landing-pages-api.md` — the full field contract.
- `../examples/landing-page-*.json` — 17 ready-to-push pages (every live page), each already in the response shape.

---

## What it creates

**Read (public, what the site calls):**

```
GET  {base}/landing-pages/?slug=<slug>           one page, per page view
GET  {base}/landing-pages/?page=1&per_page=100   list, for sitemap.xml
```

`{base}` is whatever `VITE_BLOG_API_URL` is set to — the **same base** the site
already uses for `/posts/` and `/case-studies/` (the WordPress REST v2 base, e.g.
`https://reinventmedia.in/staging-reinventdigital/wp-json/wp/v2`).

**Write (authenticated, for publishing):**

```
POST   {site}/wp-json/reinvent/v1/landing-pages/bulk       create/replace up to 100
DELETE {site}/wp-json/reinvent/v1/landing-pages/<slug>     remove one
```

Pages are stored as one JSON blob per post (meta `_rd_landing`); the read endpoint
flattens `{ slug, title, ...blob }` to match the contract. Each page is also
editable by hand in **wp-admin → Landing Pages** (a JSON textarea).

---

## Install

1. Copy `reinvent-landing-pages.php` into `wp-content/plugins/` (or `mu-plugins/`
   to force-enable it).
2. **Plugins → activate** “Reinvent Digital — Landing Pages API”.
3. Visit **Settings → Permalinks** once (any save) to flush rewrite rules.
4. Confirm it answers:

   ```bash
   curl -i "{site}/wp-json/wp/v2/landing-pages/?per_page=1"
   # 200 + [] until pages are pushed; X-WP-Total / X-WP-TotalPages headers present
   ```

5. Make sure `VITE_BLOG_API_URL` on the frontend (Vercel) points at the base where
   `/posts/` and `/case-studies/` already work. If those work, landing pages now do too.

> The read endpoint lives under the standard REST namespace, so if the base you use
> for posts resolves `/posts/`, then `/landing-pages/` resolves at the same place.
> Keep the **trailing slash** before `?` (a 301 without it drops CORS).

---

## Push the 17 pages

Create an **Application Password** (wp-admin → Users → your user → Application
Passwords). Then post the bundled examples. Each example file is already
`{ "landing_pages": [ … ] }`, which the bulk endpoint accepts directly:

```bash
SITE="https://reinventmedia.in/staging-reinventdigital"
AUTH="admin:xxxx xxxx xxxx xxxx xxxx xxxx"     # user:application-password

for f in docs/api/examples/landing-page-*.json; do
  curl -s -u "$AUTH" -H "Content-Type: application/json" \
    -X POST "$SITE/wp-json/reinvent/v1/landing-pages/bulk" \
    --data-binary @"$f"
  echo
done
```

Each call returns per-row status:

```json
{ "results": [ { "slug": "digital-marketing-company-in-mumbai", "status": "created" } ] }
```

Re-running updates in place (upsert on slug) — safe to re-push as copy changes.

To push many pages in one request, send a combined array:
`{ "landing_pages": [ {page}, {page}, … ] }` (≤ 100 per request).

---

## Verify end to end

```bash
# the endpoint returns one page in the right shape
curl -s "{site}/wp-json/wp/v2/landing-pages/?slug=seo-agency" | head -c 400

# unknown slug -> empty array, never 500
curl -i "{site}/wp-json/wp/v2/landing-pages/?slug=not-real"

# CORS header present, incl. on errors
curl -i -H "Origin: https://reinventdigital.com" \
  "{site}/wp-json/wp/v2/landing-pages/?slug=seo-agency" | grep -i access-control
```

Then open any page on the deployed site (e.g. `/seo-agency`): it now renders from
the CMS instead of the bundled fallback.

---

## Fields

The complete field reference — the base blocks plus the layout fields the current
pages use (`design`, `hero.highlights`, `hero.metric`, `problems`, `help`, `proof`,
`splitSections`, `plan`) — is in [`../landing-pages-api.md`](../landing-pages-api.md).
The quickest reference is the example payloads themselves: they are real, valid
pages in the exact shape to return.

---

## Case studies (same pattern)

The site reads `/case-studies/` the same way (see `../cms-api.md`). If you want
those CMS-editable too, clone this plugin with `rest_base => 'case-studies'` and a
blob of `{ client, results, category, content, image, excerpt, date }`. The
frontend is already bundled-first for case studies, so a CMS entry only needs to
**match a bundled slug** to override it.
