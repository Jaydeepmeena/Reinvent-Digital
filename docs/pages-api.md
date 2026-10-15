# Site pages API

Every page on the site except the home page now reads its content from the CMS:

| Page type | URL on the site | Endpoint | Entries today |
|---|---|---|---|
| Services | `/what-we-do/<slug>` | `GET {base}/services/` | 17 |
| Industries | `/industries/<slug>` | `GET {base}/industries/` | 4 |
| Locations | `/locations/<slug>` | `GET {base}/locations/` | 15 |
| About | `/about/<slug>` | `GET {base}/about/` | 4 |
| Resources | `/resources/<slug>` | `GET {base}/resources/` | 3 |
| Contact | `/contact` | `GET {base}/contact/` | 1 |

`{base}` is the same base URL as `/posts/`, `/case-studies/` and `/landing-pages/`:
`https://reinventmedia.in/staging-reinventdigital`.

This is separate from [landing-pages-api.md](landing-pages-api.md). Those are
bulk pSEO pages on one template. These are the site's own pages, each with its
own design, where only the words move.

---

## How it behaves, and why that matters to you

The site ships every one of these pages as bundled content. The API answer is
**merged over the top** of that. Consequences worth knowing before you build it:

- **Nothing breaks while you build.** Until the endpoint answers, the site shows
  what it shows today. A 404, a 500, a timeout or CORS failure all leave the page
  exactly as it is.
- **Send only what changed.** An entry with `{"slug": "google-ads", "title": "X"}`
  changes the title and nothing else. You never have to send a whole page.
- **A field you omit keeps the current wording.** `null` does the same. An empty
  string `""` does clear a field, so use it deliberately.
- **Arrays replace whole.** To change one FAQ, send all the FAQs. There is no
  item-by-item merge, because the order would be a guess.
- **A new slug creates a page.** An entry whose slug the site does not ship, for
  example a new city under `/locations/`, appears as a live page at that URL.

So the first useful version of this is an endpoint that returns `[]`. The second
is one that returns one entry with one changed field. Neither can break the site.

---

## The request

One request per collection, the whole list, no paging needed at these sizes:

```
GET https://reinventmedia.in/staging-reinventdigital/services/?per_page=100
```

The site calls each collection at most once per visit and caches it. Keep the
trailing slash. CORS as on the other endpoints:

```
Access-Control-Allow-Origin: https://reinventdigital.com
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

Add `http://localhost:5173` while we are building.

## The response

A bare array, or wrapped under the collection name (`services`, `industries`,
`locations`, `about`, `resources`, `contact`), or under `pages`, `items` or
`data`. Every entry needs a `slug`; entries without one are ignored.

```json
{
  "services": [
    {
      "slug": "google-ads",
      "title": "Google Ads",
      "accent": "Judged on Who Walks In",
      "metric": { "value": "5.2x" },
      "heroStats": [
        { "value": "5.2x", "label": "Avg. ROAS" },
        { "value": "41%",  "label": "Lower Cost Per Booking" },
        { "value": "<60 sec", "label": "1st Response Target" }
      ]
    }
  ]
}
```

That entry changes four things on the Google Ads page. Everything else on it,
including its icon, hero image, process steps and FAQs, stays as it is.

---

## The fields, per collection

The authoritative shape of each entry is the bundled file in the repo. Those are
plain JSON apart from one key, so the quickest way to see a complete entry is to
read the file. Send back the same keys.

| Collection | Bundled file | Keys |
|---|---|---|
| services | `src/data/services.js` | `slug`, `category`, `eyebrow`, `title`, `heading`, `accent`, `description`, `ctaLabel`, `highlights[]`, `metric{value,label,sub}`, `heroStats[{value,label}]`, `includesTitle`, `includesIntro`, `includes[{title,body}]`, `processEyebrow`, `processTitle`, `processNote`, `process[]`, `proofStats[]`, `faqTitle`, `faqs[{q,a}]`, `closing{eyebrow,heading,body}` |
| industries | `src/data/industries.js` | `slug`, `eyebrow`, `title`, `heading`, `accent`, `description`, `ctaLabel`, `heroStats[]`, `highlights[]`, `metric{}`, `problems{eyebrow,headingA,headingB,body,points[{title,body}]}`, `help{}`, `proof{eyebrow,heading,body,stats[]}`, `testimonial{quote,name,role}`, `faqs[{q,a}]`, `closing{}` |
| locations | `src/data/locations.js` | `slug`, `city`, `eyebrow`, `headingA`, `headingB`, `intro`, `ctaLabel`, `stats[]`, `search{heading,body,points[{title,body}]}`, `system{}`, `trust{}`, `office{}`, `plan{}`, `faqs[{q,a}]` |
| about | `src/data/about.js` | `slug`, `eyebrow`, `title`, `accent`, `description`, `sections[{heading,body}]`, `stats[{value,label}]`, `highlights[]`, `quote{}` |
| resources | `src/data/resources.js` | `slug`, `eyebrow`, `title`, `accent`, `description`, `items[{title,tag,summary}]` |
| contact | `src/data/contact.js` | `slug` (always `"contact"`), `eyebrow`, `title`, `accent`, `description`, `ctaLabel`, `email`, `phone`, `responseTime`, `citiesLabel`, `cities[]`, `next{eyebrow,heading,steps[{tag,title,body}]}` |

**The one key you cannot send is `icon`.** Services, industries, about and
resources each carry a Lucide icon component, which is code, not data. It is
always kept from the bundled entry. A brand-new slug published through the API
simply renders without one.

Hero images are the same: they are imported assets keyed by slug in
`src/data/heroImages.js`. A new slug gets the default background until we add
one, or we can add an `image` URL field if you need to set it from the CMS.

---

## Writes

Same as for the landing pages: yours to design, the frontend never calls it.
Upsert on `slug`, authenticate the writes, validate that `slug` is lowercase with
hyphens only, and report per row on a bulk push.

One difference worth guarding: for `about`, `resources` and `contact` the slugs
are fixed by the site's routes. `contact` only ever has the slug `contact`.
Publishing a resources entry with an unknown slug creates a page at
`/resources/<slug>` that nothing links to, which may or may not be what you want.

---

## Checklist

```bash
# an empty collection is valid and changes nothing on the site
curl -s "https://reinventmedia.in/staging-reinventdigital/services/?per_page=100"

# one entry with one field changes exactly that field
# CORS present
curl -i -H "Origin: https://reinventdigital.com" \
  "https://reinventmedia.in/staging-reinventdigital/services/?per_page=100" | grep -i access-control
```

Then open `/what-we-do/google-ads` and confirm only the field you sent moved.

---

## Notes for us

- `VITE_BLOG_API_URL` still has to be set in Vercel. Until it is, production
  serves bundled content for all of this, which is correct but not editable.
- The home page is deliberately excluded; its content stays in the components.
- Collections are fetched once per visit and cached in memory, so an editor's
  change shows on the next full page load, not instantly.
