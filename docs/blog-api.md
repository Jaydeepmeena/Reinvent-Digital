# Blog API contract

The blog page reads posts over HTTP at build-free runtime. Set one environment
variable and the site does the rest:

```bash
# .env
VITE_BLOG_API_URL=https://blog.reinventdigital.com/wp-json/wp/v2
```

Two request shapes are supported. **Option A needs no backend work** — it is
WordPress's own REST API, which is enabled by default on every WordPress site.

---

## Option A — plain WordPress (recommended)

Point `VITE_BLOG_API_URL` at the site's `wp-json/wp/v2` base. The frontend calls:

| Purpose | Request |
| --- | --- |
| Latest posts | `GET /posts?_embed=wp:featuredmedia,wp:term,author&per_page=9&page=1&orderby=date&order=desc` |
| One post | `GET /posts?_embed=wp:featuredmedia,wp:term,author&slug=<slug>` |

Paging is read from the standard response headers:

```
X-WP-Total: 37
X-WP-TotalPages: 5
```

A published post then appears in **Latest blogs** automatically — newest first,
no deploy needed.

### Requirements on the WordPress side

1. **CORS.** The site must allow the website's origin, otherwise the browser
   blocks the request. Add to the theme's `functions.php` or a small plugin:

   ```php
   add_action('rest_api_init', function () {
     remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
     add_filter('rest_pre_serve_request', function ($value) {
       header('Access-Control-Allow-Origin: https://reinventdigital.com');
       header('Access-Control-Allow-Methods: GET');
       header('Access-Control-Allow-Headers: Accept, Content-Type');
       return $value;
     });
   }, 15);
   ```

2. **Featured image set on every post** — it becomes the card image and the
   article banner.
3. **Excerpt filled in** — used as the card summary. WordPress generates one
   automatically if left blank.
4. **A category assigned** — shown as the pill on the card and the article.
5. Posts must be **published** (drafts and private posts are not returned).

---

## Option B — custom backend

If the posts are served by a custom API instead, return this shape. Field names
are what matter; anything extra is ignored.

### `GET /posts?page=1&per_page=9`

```json
{
  "posts": [
    {
      "id": 128,
      "slug": "why-cost-per-lead-is-the-wrong-metric",
      "title": "Why cost per lead is the wrong metric for healthcare marketing",
      "excerpt": "And what to measure instead if you actually want fuller appointment books.",
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

### `GET /posts?slug=<slug>`

Return the same object shape — either as a one-item `posts` array or a bare
array. The frontend takes the first match.

### Field reference

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | number \| string | no | Falls back to `slug` |
| `slug` | string | **yes** | URL segment: `/resources/blogs/<slug>` |
| `title` | string | **yes** | Plain text |
| `excerpt` | string | no | Plain text or HTML; tags are stripped for the card |
| `content` | string (HTML) | **yes** on the article route | Sanitised before rendering |
| `date` | ISO 8601 string | no | Shown as "2 October 2026" |
| `category` | string | no | Pill on the card and article |
| `reading_time` | number (minutes) | no | Calculated from `content` when absent |
| `author.name` | string | no | Hidden when absent |
| `author.avatar` | URL | no | |
| `image.src` | URL | no | Card image and article banner; a lime placeholder shows when absent |
| `image.alt` | string | no | Leave empty for decorative images |

Sorting is the backend's job — return **newest first**.

---

## How it renders

- `/resources/blogs` — the hero, then **Latest blogs**: the newest post as a
  wide featured card, the rest in a three-column grid, with **Load more** while
  further pages exist. Loading shows skeletons; an empty feed and a failed
  request each have their own message.
- `/resources/blogs/<slug>` — the article: banner with the featured image,
  category, title, author, date and reading time, then the body, a
  "Keep reading" row of three other posts, and the contact CTA.

## Security

Article HTML is sanitised with DOMPurify before it reaches the DOM
(`src/lib/blog.js`). Allowed: headings, text, lists, links, images, figures,
tables, code blocks and iframes (for embeds). Scripts, event handlers, styles,
forms and `javascript:` URLs are stripped — so a compromised CMS account cannot
inject script into the site.
