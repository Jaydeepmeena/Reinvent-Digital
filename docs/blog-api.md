# Blog integration brief — WordPress → reinventdigital.com

The website's blog is already built. It reads posts over HTTP at runtime, so
once WordPress is reachable, **publishing a post is all it takes for it to
appear** on `/resources/blogs` — no deploy, no code change.

This brief is everything the WordPress developer needs.

---

## 1. What we need back from you

| | |
| --- | --- |
| **The REST base URL** | e.g. `https://blog.reinventdigital.com/wp-json/wp/v2` |
| **CORS enabled** for the website origin | see §4 |
| **Posts published** with a featured image, excerpt and category | see §3 |

Send us the base URL and we set `VITE_BLOG_API_URL` — that's the whole
connection.

---

## 2. The endpoints we call

Both are **stock WordPress** — they exist on every install with the REST API
enabled. No custom routes, no plugin, no authentication (posts are public).

### Latest posts (the blog index)

```http
GET {base}/posts?_embed=wp:featuredmedia,wp:term,author&per_page=9&page=1&orderby=date&order=desc
```

We page through with `page=2`, `page=3`, … for the **Load more** button, and
read the paging from the response headers:

```http
X-WP-Total: 37
X-WP-TotalPages: 5
```

> These two headers must be **exposed** to the browser — see the CORS snippet,
> which includes `Access-Control-Expose-Headers`. Without it, Load more never
> appears.

### A single post (the article page)

```http
GET {base}/posts?_embed=wp:featuredmedia,wp:term,author&slug=the-post-slug
```

Returns a one-item array. The slug comes from the URL
`/resources/blogs/the-post-slug`, so **WordPress slugs are the public URLs** —
changing a slug changes the link.

---

## 3. What each post needs

`_embed` pulls the image, category and author into the same response, so these
are the fields we read:

| What we show | WordPress field | Needed? |
| --- | --- | --- |
| Card and article heading | `title.rendered` | **Yes** |
| URL segment | `slug` | **Yes** |
| Article body | `content.rendered` | **Yes** |
| Card summary | `excerpt.rendered` | Recommended — WordPress auto-generates if blank |
| Card image + article banner | `_embedded["wp:featuredmedia"][0].source_url` | Recommended — a lime placeholder shows without it |
| Image alt text | `_embedded["wp:featuredmedia"][0].alt_text` | Recommended, for accessibility |
| Category pill | `_embedded["wp:term"][…].name` (taxonomy `category`) | Recommended |
| Author name and avatar | `_embedded.author[0].name` / `.avatar_urls["96"]` | Optional |
| Date | `date` | Optional, shown as "2 October 2026" |

Reading time is calculated from the content — nothing to set.

**Editorial notes for whoever publishes:**
- Set a featured image at **1600×900 or larger**; it is used full-bleed.
- Assign exactly one category — the first non-"Uncategorized" one is shown.
- Only **published** posts appear. Drafts, private and password-protected posts
  are not returned.

---

## 4. CORS (the one piece of work)

The website runs on a different domain, so WordPress must allow it. Add this as
a must-use plugin (`wp-content/mu-plugins/rd-cors.php`) or in the theme's
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

From a terminal:

```bash
BASE=https://blog.reinventdigital.com/wp-json/wp/v2

# 1. Posts come back, with paging headers
curl -sD- -o /dev/null "$BASE/posts?per_page=9&page=1" | grep -i x-wp-

# 2. A post carries its image, category and author
curl -s "$BASE/posts?_embed=wp:featuredmedia,wp:term,author&per_page=1" \
  | python -m json.tool | head -40

# 3. CORS is set for our origin
curl -sD- -o /dev/null -H "Origin: https://reinventdigital.com" "$BASE/posts?per_page=1" \
  | grep -i access-control
```

**Done when:**
1. Request 1 returns `200` plus `X-WP-Total` and `X-WP-TotalPages`.
2. Request 2 shows `title.rendered`, `content.rendered`, `slug`, and an
   `_embedded` block containing `wp:featuredmedia` and `wp:term`.
3. Request 3 shows `Access-Control-Allow-Origin` echoing our domain and
   `Access-Control-Expose-Headers` listing the two `X-WP-` headers.

---

## 6. Alternative — a custom backend

Only if posts will not be served by WordPress directly. Return this shape from
`GET /posts?page=1&per_page=9` and `GET /posts?slug=<slug>`:

```json
{
  "posts": [
    {
      "id": 128,
      "slug": "why-cost-per-lead-is-the-wrong-metric",
      "title": "Why cost per lead is the wrong metric for healthcare marketing",
      "excerpt": "And what to measure instead if you want fuller appointment books.",
      "content": "<p>Full article HTML…</p><h2>A heading</h2><p>…</p>",
      "date": "2026-10-02T09:30:00+05:30",
      "category": "Strategy",
      "reading_time": 6,
      "author": {
        "name": "Reinvent Digital",
        "avatar": "https://cdn.example.com/authors/rd.jpg"
      },
      "image": {
        "src": "https://cdn.example.com/blog/cost-per-lead.jpg",
        "alt": "A clinic reception desk during morning hours",
        "width": 1600,
        "height": 900
      }
    }
  ],
  "total": 37,
  "total_pages": 5
}
```

Required: `slug`, `title`, `content`. Everything else is optional and degrades
gracefully. Sort newest first — the frontend does not re-sort.

---

## 7. Notes for us (frontend side)

- Config: `VITE_BLOG_API_URL` (see `.env.example`). Unset, the blog page says
  the feed is not connected rather than erroring.
- Data layer: `src/lib/blog.js` — normalises either shape into one post model
  and **sanitises article HTML with DOMPurify** before it is rendered. Allowed:
  headings, text, lists, links, images, figures, tables, code, embed iframes.
  Stripped: `<script>`, inline event handlers, `javascript:` URLs, forms.
- Pages: `src/pages/BlogsPage.jsx` (index) and `src/pages/BlogPostPage.jsx`
  (article). CMS markup is styled by `.prose-post` in `src/index.css`.
