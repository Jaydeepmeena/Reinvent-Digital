# Landing pages API

The site renders a bulk landing-page template at the **root URL**:

```
https://reinventdigital.com/<slug>
```

for example `https://reinventdigital.com/digital-marketing-agency-for-multi-specialty-hospitals`.

These pages are published in bulk over the API, hundreds at a time. Nothing on the
site links to them: they are absent from the navigation, the footer, the blog and
case-study listings and the internal search. The only way a visitor reaches one is
the URL itself, or a search result.

The template is already live in the frontend. The only thing missing is this
endpoint. Until it answers, the site falls back to one bundled sample page so the
template stays viewable.

---

## 1. The endpoint the site reads

One read endpoint, same base URL as `/posts/` and `/case-studies/`:

```
GET  https://reinventmedia.in/staging-reinventdigital/landing-pages/?slug=<slug>
```

That is the only request the site makes. It is called once per page view, on the
slug in the URL.

A second, optional request is useful for building `sitemap.xml`:

```
GET  https://reinventmedia.in/staging-reinventdigital/landing-pages/?page=1&per_page=100
```

### Rules

- Keep the **trailing slash** before the query string. `/posts/` currently
  301-redirects without one, and a redirect loses CORS on some browsers.
- `rest_base` must be exactly **`landing-pages`**. That string is hard-coded in
  the frontend and is the one thing that cannot change.
- An unknown slug should return `200` with an empty list, or `404`. Either way the
  site shows its own 404 page.
- Return only published pages. A draft must not be readable.
- Sort does not matter for the single-slug read.

### CORS

Both endpoints need, on every response including errors:

```
Access-Control-Allow-Origin: https://reinventdigital.com
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
Access-Control-Expose-Headers: X-WP-Total, X-WP-TotalPages
```

Add `http://localhost:5173` too while we are building.

---

## 2. The response

The list key can be `landing_pages`, `pages`, `items`, `data`, or a bare array.
A single-object response also works for the `?slug=` read.

```json
{
  "landing_pages": [
    {
      "slug": "digital-marketing-agency-for-multi-specialty-hospitals",
      "title": "Digital Marketing Agency for Multi-Specialty Hospitals",

      "seo": {
        "title": "Digital Marketing Agency for Multi-Specialty Hospitals | Reinvent Digital",
        "description": "Patient acquisition for multi-specialty hospitals: demand across Google, Meta and Maps, a call centre that answers, and CRM proof of which department each admission came from.",
        "canonical": "https://reinventdigital.com/digital-marketing-agency-for-multi-specialty-hospitals",
        "noindex": false
      },

      "hero": {
        "eyebrow": "Patient acquisition, engineered for healthcare",
        "headline": "Filling Every Department,",
        "accent": "Not Just the Enquiry Sheet",
        "description": "A multi-specialty hospital runs twenty funnels at once. We build the demand, route the calls and close the loop in your CRM.",
        "image": "https://cdn.example.com/lp/hospitals.jpg",
        "cta": { "label": "Let's Connect", "href": "/contact" },
        "stats": [
          { "value": "2.4x", "label": "Qualified enquiries" },
          { "value": "-38%", "label": "Cost per admission" },
          { "value": "92%",  "label": "Calls answered first time" }
        ]
      },

      "intro": "<p>Every hospital is different. The departments that carry the revenue, the catchment each one draws from, the consultants patients come back for.</p>",

      "overview": "<p>Most hospital marketing is bought in pieces, and the gaps between them are where admissions leak. We run the whole chain as one accountable team.</p>",

      "reasons": {
        "eyebrow": "Why work with us",
        "heading": "Reasons Hospitals Should Work with Reinvent Digital",
        "points": [
          "Patients research a hospital long before they call one. We make sure yours is what they find.",
          "We plan per department, so each one gets its own demand and its own budget.",
          "Your call centre is part of the funnel. We measure what it answers and what it books.",
          "Every enquiry lands in your CRM tagged by source, so the board sees admissions, not clicks.",
          "One team across Google Ads, Meta, SEO and Maps costs less than four vendors.",
          "Reporting is written for a management review, not a dashboard nobody opens."
        ]
      },

      "services": {
        "eyebrow": "What we run",
        "heading": "Essential Digital Marketing Services for Hospitals",
        "items": [
          {
            "title": "Getting Found on Google (SEO)",
            "body": "Patients search for a procedure, a symptom or a consultant, rarely for a hospital by name. We build the pages that answer those searches."
          },
          {
            "title": "Ads That Reach the Right Catchment (PPC)",
            "body": "Search and Performance Max built per department, capped per catchment, with call tracking on every number."
          }
        ],
        "cta": { "label": "See how the system works", "href": "/what-we-do/google-ads" }
      },

      "blogs": {
        "eyebrow": "Related reading",
        "heading": "Blogs on Getting Dental Ads to Pay",
        "body": "The thinking behind how we run paid search for clinics.",
        "slugs": [
          "cost-per-lead-is-the-wrong-metric",
          "the-60-second-response-benchmark",
          "booking-attribution-without-a-data-team"
        ]
      },

      "faqs": [
        {
          "q": "How is this different from a general digital marketing agency?",
          "a": "A general agency stops at the lead. We carry it through the call centre and into the CRM."
        }
      ],

      "closing": {
        "eyebrow": "Contact Us",
        "heading": "Want This Running for Your Hospital?",
        "body": "Tell us which departments are underfilled and what your call centre does with an enquiry today."
      }
    }
  ],
  "total": 240,
  "total_pages": 3
}
```

### Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `slug` | string | **yes** | URL segment. Lowercase, hyphens, no slashes. This is the page's address. |
| `title` | string | **yes** | Internal name and breadcrumb label. Also the `<h1>` fallback. |
| `seo.title` | string | no | `<title>`. Defaults to `"<title> \| Reinvent Digital"`. |
| `seo.description` | string | no | Meta description and `og:description`. Keep under 160 characters. |
| `seo.canonical` | string | no | Absolute URL. Send it when two slugs carry near-identical copy. |
| `seo.noindex` | boolean | no | `true` adds `noindex, nofollow`. Defaults to `false`, i.e. **indexable**. |
| `hero.eyebrow` | string | no | Small pill above the headline. |
| `hero.headline` | string | no | First part of the `<h1>`. Defaults to `title`. |
| `hero.accent` | string | no | Second part of the `<h1>`, rendered in the lime serif italic. Do not repeat it inside `headline`. |
| `hero.description` | string | no | Paragraph under the headline. Two or three lines. |
| `hero.image` | string | no | Absolute image URL, used as the hero banner. Landscape, 1600x900 or wider. Without it the hero renders light instead of dark. |
| `hero.cta` | `{label, href}` | no | Defaults to `Let's Connect` → `/contact`. |
| `hero.stats` | array of `{value, label}` | no | At most 3 shown in the hero, in the order sent. Keep `value` to 2-5 characters. The first stat also becomes the hero card's metric, and all of them reappear lower down as a proof band. |
| `intro` | HTML string | no | Short lead paragraph under the hero. Sanitised: `<p> <strong> <em> <a> <ul> <ol> <li>` and headings survive, scripts and styles do not. |
| `overview` | HTML string | no | Free-text section rendered just before the FAQ. Same sanitising as `intro`. Use it for a couple of plain paragraphs; hidden when empty. |
| `reasons.eyebrow` / `.heading` / `.body` | string | no | Header for the "what's included" grid. |
| `reasons.points` | array of strings | no | Each point becomes a tile in the bento grid. Six works best. The block is hidden if empty. |
| `services.eyebrow` / `.heading` / `.body` | string | no | Header for the process section. |
| `services.items` | array of `{title, body}` | no | Each item becomes a stacking process card. Four works best; `title` and `body` are both shown. |
| `services.cta` | `{label, href}` | no | Button under the cards. |
| `blogs.eyebrow` / `.heading` / `.body` | string | no | Header for a "related reading" section. |
| `blogs.slugs` | array of strings | no | Slugs of blog posts to feature, in order. The posts come from `/posts/`; a slug that matches no post is skipped, and the whole section is hidden when none match. Links go to `/resources/blogs/<slug>`. |
| `faqs` | array of `{q, a}` | no | Rendered as a list **and** emitted as `FAQPage` JSON-LD for rich results. |
| `closing.eyebrow` / `.heading` / `.body` | string | no | Final contact band. Has a sensible default. |

**Every field except `slug` and `title` is optional.** A block whose payload is
empty is not rendered, so a thin page comes out short rather than broken. That is
what makes bulk publishing safe: a spreadsheet with gaps still produces valid pages.

Aliases accepted, in case they fit your CMS better: `q`/`question`, `a`/`answer`,
`title`/`heading` and `body`/`text`/`description` inside `services.items`,
`heading`/`title` on a block.

---

## 2b. Layout fields (which template renders)

The pages ship in two layouts. **`design` decides which**, and each layout reads a
few extra blocks. The `hero` also takes two optional fields shared by both.

| Field | Type | Notes |
|---|---|---|
| `design` | string | `"industry"` renders the industry layout (numbered problems, a process timeline, proof stat cards). Anything else, or omitted, renders the default service layout. |
| `hero.highlights` | array of strings | Short chips ringing the hero (and driving the marquee on service pages). Four works best. |
| `hero.metric` | `{value, label}` | A single metric chip in the hero. |

**Service layout only** — when `splitSections` is present it replaces the
`intro` / `reasons` / `services` / `overview` stack:

| Field | Type | Notes |
|---|---|---|
| `splitSections` | array | Alternating image/copy sections. Each: `{ eyebrow, heading, body, image, points }`, where `points` is an array of `{title, body}` (or bare strings). `heading` is required for a section to render. |
| `plan` | `{eyebrow, heading, steps}` | The "how we plan" step timeline. `steps` is an array of `{label, title, body}`. |

**Industry layout only** (`design: "industry"`):

| Field | Type | Notes |
|---|---|---|
| `problems` | `{eyebrow, heading, body, points}` | Numbered problems list. `points` is `[{title, body}]`. |
| `help` | `{eyebrow, heading, body, points}` | Process timeline. `points` is `[{title, body}]`. |
| `proof` | `{eyebrow, heading, body, stats}` | Before/after proof. `stats` is `[{value, label}]`. |

All of these are optional and hidden when empty, same as the base blocks. The
quickest reference for a real payload of each layout is the example files:
`examples/landing-page-mumbai.json` (service / split), `examples/landing-page-seo.json`
(industry).

---

## 3. Pushing pages in bulk

This part is yours to design, the frontend never calls it. What it has to produce
is a row per page matching the read shape above. The usual arrangement:

```
POST   {base}/landing-pages/          create one
PUT    {base}/landing-pages/<slug>    replace one
POST   {base}/landing-pages/bulk      create or replace an array in one request
DELETE {base}/landing-pages/<slug>    remove one
```

Please make sure of these, because they are what makes a 500-page push survivable:

- **Authenticate the writes.** A bearer token or an application password in a
  header. Reads stay public; writes must not be.
- **Upsert on `slug`.** Re-pushing the same slug updates it instead of creating a
  duplicate or erroring. We will re-run the whole set as copy improves.
- **Validate `slug`.** Lowercase, `a-z 0-9 -` only. Reject anything else rather
  than storing a slug that cannot be reached.
- **Reject a slug that collides with a real page.** These are taken:
  `what-we-do`, `industries`, `about`, `resources`, `locations`, `contact`.
  A landing page on one of those slugs is unreachable, because the site's own
  route wins.
- **Report per row in a bulk push.** Return which slugs were created, which were
  updated and which failed with why. A single 500 for 500 rows tells us nothing.
- **Cap the batch** at something sane, 50 or 100 rows, and we will chunk.

### WordPress route

If this lives in WordPress, it is a custom post type:

```php
register_post_type('landing_page', [
  'public'       => true,
  'show_in_rest' => true,
  'rest_base'    => 'landing-pages',   // must be exactly this
  'supports'     => ['title', 'editor', 'custom-fields'],
  'has_archive'  => false,
  'rewrite'      => false,             // WP must not serve these itself
]);
```

Register the blocks (`seo`, `hero`, `reasons`, `services`, `blogs`, `faqs`, `closing`) as
meta with `show_in_rest => true`, and either shape the REST response with
`rest_prepare_landing_page` to match the JSON above, or expose them under a
`meta` key and tell us, and we will read them from there.

Writes then go through the standard WP REST API with an application password,
which saves you building the bulk endpoint at all.

---

## 4. Two things to fix on the existing endpoints

1. **`/posts/?page=2` returns `total: 0` and `total_pages: 0`** instead of the real
   counts. The blog's Load more button reads those, so page 2 ends the list. Please
   fix it on `/posts/` and do not carry it into `/landing-pages/`.
2. **`/case-studies/` is not live yet.** Spec is in [cms-api.md](cms-api.md).

---

## 5. Test checklist

Run these before handing over:

```bash
# 1. a known slug returns one page
curl -i "https://reinventmedia.in/staging-reinventdigital/landing-pages/?slug=some-real-slug"

# 2. an unknown slug returns an empty list or 404, never a 500
curl -i "https://reinventmedia.in/staging-reinventdigital/landing-pages/?slug=nope-not-real"

# 3. CORS headers are present, including on the error
curl -i -H "Origin: https://reinventdigital.com" \
  "https://reinventmedia.in/staging-reinventdigital/landing-pages/?slug=some-real-slug" | grep -i access-control

# 4. paging reports real totals
curl -s "https://reinventmedia.in/staging-reinventdigital/landing-pages/?page=2&per_page=10" | head -c 400

# 5. a draft is not readable
curl -i "https://reinventmedia.in/staging-reinventdigital/landing-pages/?slug=some-draft-slug"

# 6. re-pushing the same slug updates, it does not duplicate
```

---

## Notes for us, not the developer

- **`sitemap.xml` and `robots.txt` do not exist yet.** The pages are indexable, but
  Google has no way to discover them, since nothing links to them. Once the list
  endpoint is live we should generate a sitemap from it at build time, otherwise
  the whole exercise produces pages nobody finds.
- **These are soft 404s.** An unknown slug renders the 404 page but the server
  still answers `200`, because the site is a single-page app on Vercel. Fine for
  visitors, not ideal for Google. A prerender or an edge function would fix it if
  it ever matters.
- **The page is client-rendered.** Google executes JavaScript and will index it,
  but it costs a crawl round trip. If these pages become important, prerendering
  them at build time from the list endpoint is the upgrade.
- `VITE_BLOG_API_URL` still has to be set in Vercel for any of this to go live.
