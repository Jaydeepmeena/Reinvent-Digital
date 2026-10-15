# CMS integration brief: WordPress → reinventdigital.com

The website's **blog** and **case studies** are already built. Both read from
the CMS over HTTP at runtime, so once the endpoint is reachable, **publishing
is all it takes for an entry to appear** on the site. No deploy, no code
change.

They are one contract, one resource apart:

| Collection | Endpoint | Page |
| --- | --- | --- |
| Blog | `{base}/posts/` | `/resources/blogs` |
| Case studies | `{base}/case-studies/` | `/resources/case-study` |

> **Status:** the blog is live against
> `https://reinventmedia.in/staging-reinventdigital`. The **case studies
> endpoint is the outstanding piece** — see §6. Until it answers, that page
> runs on four bundled studies so it is never empty.

---

## 1. What we need back from you

| | |
| --- | --- |
| **The REST base URL** | e.g. `https://blog.reinventdigital.com/wp-json/wp/v2` |
| **CORS enabled** for the website origin | see §4 |
| **Both collections published** with a featured image, excerpt and category | see §3 |

Send us the base URL and we set `VITE_BLOG_API_URL`. That one variable is the
whole connection, for both collections.

---

## 2. The endpoints we call

Both are **stock WordPress** shapes. Posts exist on every install; case studies
need a custom post type registered with `show_in_rest` (§6). No authentication,
these are public.

### The index of a collection

```http
GET {base}/posts/?_embed=wp:featuredmedia,wp:term,author&per_page=9&page=1&orderby=date&order=desc
GET {base}/case-studies/?_embed=wp:featuredmedia,wp:term,author&per_page=9&page=1&orderby=date&order=desc
```

We page through with `page=2`, `page=3`, … for the **Load more** button, and
read the paging from the response headers:

```http
X-WP-Total: 37
X-WP-TotalPages: 5
```

> These two headers must be **exposed** to the browser, see the CORS snippet,
> which includes `Access-Control-Expose-Headers`. Without it, Load more never
> appears.

### A single entry

> Optional. If the backend ignores `slug` and just returns the list, the site
> finds the entry in the list instead, so **one list endpoint is enough**.
> Supporting `slug` is simply faster, because it avoids fetching pages the
> reader does not need.

```http
GET {base}/posts/?_embed=wp:featuredmedia,wp:term,author&slug=the-slug
GET {base}/case-studies/?_embed=wp:featuredmedia,wp:term,author&slug=the-slug
```

Returns a one-item array. The slug comes from the URL, so **CMS slugs are the
public URLs**: changing a slug changes the link.

---

## 3. What each entry needs

`_embed` pulls the image, category and author into the same response, so these
are the fields we read. They are identical for both collections:

| What we show | WordPress field | Needed? |
| --- | --- | --- |
| Card and article heading | `title.rendered` | **Yes** |
| URL segment | `slug` | **Yes** |
| Article body | `content.rendered` | **Yes** |
| Card summary | `excerpt.rendered` | Recommended, WordPress auto-generates if blank |
| Card image and article banner | `_embedded["wp:featuredmedia"][0].source_url` | Recommended, a lime placeholder shows without it |
| Image alt text | `_embedded["wp:featuredmedia"][0].alt_text` | Recommended, for accessibility |
| Category pill | `_embedded["wp:term"][…].name` (taxonomy `category`) | Recommended |
| Author name and avatar | `_embedded.author[0].name` / `.avatar_urls["96"]` | Optional |
| Date | `date` | Optional, shown as "2 October 2026" |

Reading time is calculated from the content, nothing to set.

### Two extra fields, case studies only

Both optional, both disappear cleanly if absent:

| What we show | Field | Shape |
| --- | --- | --- |
| The client line above the headline | `client` (or `acf.client` / `meta.client`) | A string, e.g. `"National dental group, 60 centres"` |
| The headline numbers under the title | `results` (or `acf.results` / `meta.results`) | An array of `{ "value": "2.2x", "label": "Monthly bookings" }` |

We read at most **four** results, in the order given, and skip any entry
missing either half. `stats` is accepted as an alias of `results`, and
`figure` / `name` as aliases of `value` / `label`.

**Editorial notes for whoever publishes:**
- Set a featured image at **1600×900 or larger**, it is used full-bleed.
- Assign exactly one category, the first non-"Uncategorized" one is shown.
- Only **published** entries appear. Drafts, private and password-protected
  entries are not returned.

---

## 4. CORS (the one piece of infrastructure work)

The website runs on a different domain, so the CMS must allow it. Add this as a
must-use plugin (`wp-content/mu-plugins/rd-cors.php`) or in the theme's
`functions.php`:

```php
<?php
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $allowed = [
            'https://reinventdigital.com',
            'https://www.reinventdigital.com',
            'http://localhost:5173', // local development
        ];
        $origin = get_http_origin();
        if ($origin && in_array($origin, $allowed, true)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Vary: Origin');
        }
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Accept, Content-Type');
        header('Access-Control-Expose-Headers: X-WP-Total, X-WP-TotalPages');
        return $value;
    });
}, 15);
```

Replace the domains with the live ones. Nothing else needs to change.

---

## 5. How to test it

From a terminal, for each collection:

```bash
BASE=https://blog.reinventdigital.com/wp-json/wp/v2

# 1. Entries come back, with paging headers
curl -sD- -o /dev/null "$BASE/case-studies/?per_page=9&page=1" | grep -i x-wp-

# 2. An entry carries its image, category and (for case studies) results
curl -s "$BASE/case-studies/?_embed=wp:featuredmedia,wp:term,author&per_page=1" \
  | python -m json.tool | head -40

# 3. CORS is set for our origin
curl -sD- -o /dev/null -H "Origin: https://reinventdigital.com" "$BASE/case-studies/?per_page=1" \
  | grep -i access-control
```

**Done when:**
1. Request 1 returns `200` plus `X-WP-Total` and `X-WP-TotalPages`.
2. Request 2 shows `title.rendered`, `content.rendered`, `slug`, and an
   `_embedded` block containing `wp:featuredmedia` and `wp:term`.
3. Request 3 shows `Access-Control-Allow-Origin` echoing our domain and
   `Access-Control-Expose-Headers` listing the two `X-WP-` headers.

---

## 6. Registering the case studies post type

This is the outstanding backend task. In a must-use plugin or `functions.php`:

```php
<?php
add_action('init', function () {
    register_post_type('case_study', [
        'label'        => 'Case Studies',
        'public'       => true,
        'has_archive'  => true,
        'menu_icon'    => 'dashicons-chart-bar',
        'supports'     => ['title', 'editor', 'excerpt', 'thumbnail', 'author', 'revisions'],
        'taxonomies'   => ['category'],
        'show_in_rest' => true,
        'rest_base'    => 'case-studies', // this is what the website calls
    ]);
});
```

`rest_base` must be exactly `case-studies`. The `client` and `results` fields
(§3) are ACF fields on this post type; expose them to REST with ACF's "Show in
REST API" setting, or register them with `register_post_meta(..., ['show_in_rest' => true])`.

---

## 7. Alternative: a custom backend

Only if the content will not be served by WordPress directly. This is what the
current staging backend does. Return this shape from
`GET /case-studies/?page=1&per_page=9` and `GET /case-studies/?slug=<slug>`:

```json
{
  "case_studies": [
    {
      "id": 12,
      "slug": "dental-group-3400-to-7600-monthly-bookings",
      "title": "60-location dental group: 3,400 to 7,600 monthly bookings",
      "client": "National dental group, 60 centres",
      "excerpt": "Call routing and coverage planning more than doubled bookings.",
      "content": "<p>Full case study HTML…</p><h2>A heading</h2><p>…</p>",
      "date": "2026-08-18T10:00:00+05:30",
      "category": "Dental",
      "reading_time": 7,
      "results": [
        { "value": "2.2x", "label": "Monthly bookings" },
        { "value": "-41%", "label": "Cost per booked patient" }
      ],
      "author": { "name": "Reinvent Digital", "avatar": null },
      "image": {
        "src": "https://cdn.example.com/case-studies/dental.jpg",
        "alt": "A dental clinic reception during morning hours",
        "width": 1600,
        "height": 900
      }
    }
  ],
  "total": 12,
  "total_pages": 2
}
```

The blog uses the same shape under a `posts` key, without `client` and
`results`. We also accept `items`, `data` or a bare array as the list key.

Required: `slug`, `title`, `content`. Everything else is optional and degrades
gracefully. Sort newest first, the frontend does not re-sort.

---

## 8. Before an endpoint is live

With `VITE_BLOG_API_URL` unset, both collections run on bundled entries
(`src/data/sampleBlogs.js`, `src/data/sampleCaseStudies.js`) so neither page is
ever empty.

The case studies also fall back to those bundled entries when the endpoint is
unreachable, because it has still to be built. A one-line note appears in the
browser console when that happens. Once `/case-studies/` answers, the fallback
never runs, and `fallback: true` in `src/lib/caseStudies.js` can be dropped.

The blog has no such fallback: its endpoint exists, so a failure there is a
real failure and the page says so.

---

## 9. Notes for us (frontend side)

- Config: `VITE_BLOG_API_URL` (see `.env.example`). One base URL serves both
  collections. Unset, the pages run on the bundled entries.
- Engine: `src/lib/cms.js` normalises either shape into one model and
  **sanitises HTML with DOMPurify** before it is rendered. Allowed: headings,
  text, lists, links, images, figures, tables, code, embed iframes. Stripped:
  `<script>`, inline event handlers, `javascript:` URLs, forms.
- Collections: `src/lib/blog.js` and `src/lib/caseStudies.js`, each naming its
  resource and its samples.
- Pages: `BlogsPage` / `BlogPostPage` and `CaseStudiesPage` / `CaseStudyPage`.
  CMS markup is styled by `.prose-post` in `src/index.css`.
