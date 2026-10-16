# Site pages API

Every page on the site except the home page now reads its content from the CMS:

The URLs below are where these pages sit today. Any page can be moved anywhere
by editing its slug — see [the slug is the URL](#the-slug-is-the-url).

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
  example a new city under `/locations/`, appears as a live page at that URL and
  in the menus that list that collection.
- **You own the URLs, not just the words.** One field — the slug — decides where
  a page lives, including its folder. You can move a page, rename it, reorder the
  menus, keep a page out of them, or take it down, without a deploy.

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

## The slug is the URL

One field decides where a page lives. Send a plain slug and the page stays in
the folder its collection ships in. Put a path in the slug and the page goes
there.

| What you send | Where the page is |
|---|---|
| `"slug": "google-ads"` | `/what-we-do/google-ads` — its folder, as shipped |
| `"slug": "services/google-ads"` | `/services/google-ads` |
| `"slug": "/google-ads"` | `/google-ads` — the root, no folder at all |

The folders the bundled pages sit in are `what-we-do` for services, and
`industries`, `locations`, `about` and `resources` for the rest. A slug with no
slash in it stays in its own, so the site is unchanged until you move something.

**A page's identity is the last segment of its slug, not the whole path.** That
is what lets a page move without being rewritten. Sending
`{"slug": "/google-ads"}` for a page that was at `/what-we-do/google-ads` moves
it: it keeps its content, its icon and its hero image, every link on the site
follows it, and the old URL redirects. You do not need `replaces` for a move,
because the page is still `google-ads`.

Changing the last segment is the other thing — a rename — and still needs
`replaces`, which the next section covers.

**What a page may not take.** `/`, `/contact`, `/resources/blogs` and
`/resources/case-study` belong to other parts of the site, and two pages cannot
hold the same path. A page asking for one of those keeps the path it had, and
the browser console says which page was refused and why. Nothing breaks, but
the move silently does not happen, so it is worth checking after a bulk edit.

**Two notes on the root.** It is shared with the bulk landing pages, and a page
moved there wins over a landing page with the same slug. And the resources
collection carries entries for the blog and the case studies so they appear in
the menus — those two point at their own sections, which is why those paths are
spoken for.

**Redirects and SEO.** The in-app redirect is client-side: it keeps visitors
working the moment you save, but Google treats it more weakly than a server 301.
After a URL change someone on our side runs `npm run redirects`, which reads
these endpoints and writes real 301s into `vercel.json`, and commits it. Until
that deploy the move is live for people and soft for search — worth knowing
before moving a page that ranks.

---

## Slugs, menus and taking a page down

Four optional fields, on any entry in any collection. They are about the page
rather than its words, and the navbar, the footer and the sibling lists on the
pages themselves all read them, so a change here moves every link to that page
at once.

| Field | Does what |
|---|---|
| `replaces` | Renames a page. See below. Aliases: `renamedFrom`, `previousSlug`. |
| `hidden` | `true` takes the page off its URL and out of every menu. `status` of `draft`, `pending`, `private`, `future`, `unpublished` or `trash` does the same, as does `published: false`, so a WordPress draft is already handled. |
| `order` | A number. Entries that carry one are placed by it, lowest first; the rest keep the order the site ships them in, behind. Alias: `menuOrder`. |
| `nav` | `false` keeps the page live at its URL but out of the menus, for a page you want to write and share before announcing it. Alias: `inNav`. |

### Renaming

Send the entry under its **new** slug, with `replaces` naming the old one:

```json
{ "slug": "ppc-management", "title": "PPC Management", "replaces": "google-ads" }
```

That one entry does four things:

- the page is now at `/what-we-do/ppc-management`,
- `/what-we-do/google-ads` redirects there, so links we have given out, links
  on the home page and anything Google has indexed keep working,
- the new slug **inherits the old page's content**, so you are renaming a page
  rather than writing a new one: its FAQs, process, icon and hero image come
  across, and you still send only the fields you want to change,
- it keeps its position in the menus, so renaming one page does not reshuffle
  them.

Rename the same page again later and the original URL redirects straight to
where it ended up, not through each name in turn. The old slug stops being a
page, so only one URL serves that content at a time.

You can rename and move in the same entry, since both are the slug:
`{"slug": "/ppc-management", "replaces": "google-ads"}` puts the page at
`/ppc-management`, and `/what-we-do/google-ads` goes straight there.

A `replaces` pointing at a slug we do not ship still redirects — that is what a
page you published through the CMS last month and are renaming today looks
like — but it has no bundled content to inherit, so it is simply a new page with
a redirect pointing at it.

### What this does not cover

- `/contact` has no slug of its own: it is one page on a fixed route. Its words
  are editable, its URL is not.
- A page stays in its own collection. A service can be moved to any URL,
  including `/industries/something`, but it is still rendered by the service
  design — the collection decides what the page looks like, the slug only
  decides where it is. Moving a service under another collection's folder is
  allowed but confusing, and worth avoiding.
- The home page is not in any of this, by design.

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
| about | `src/data/about.js` | `slug`, `eyebrow`, `title`, `headline`, `accent`, `description`, `ctaLabel`, `stats[{value,label}]`, `sections[{eyebrow,heading,body,highlight,image,imageAlt}]`, `departments{eyebrow,heading,groups[{title,teams[{name,size,experience,body}]}]}`, `journey{eyebrow,heading,milestones[{year,title,body}]}`, `founder{eyebrow,heading,body,name,role,note,image,imageAlt}`, `drivers{eyebrow,heading,items[{title,body}]}`, `faqTitle`, `faqs[{q,a}]`, `closing{eyebrow,heading,body}`, `quote{}`, `highlights[]` |
| resources | `src/data/resources.js` | `slug`, `eyebrow`, `title`, `accent`, `description`, `items[{title,tag,summary}]` |
| contact | `src/data/contact.js` | `slug` (always `"contact"`), `eyebrow`, `title`, `accent`, `description`, `ctaLabel`, `email`, `phone`, `responseTime`, `citiesLabel`, `cities[]`, `next{eyebrow,heading,steps[{tag,title,body}]}` |

**The About pages carry optional blocks.** `departments`, `journey`, `founder`
and `drivers` each render a whole section, and each is left out entirely when
the entry does not carry it. That is how Our Story and Our Team share one
template while looking quite different: Our Story sends `journey`, `founder`,
`drivers` and `faqs`; Our Team sends `departments`. Send one to a page that has
none today and that section appears.

`headline` is the long hero heading, while `title` stays the short name the
menus and the breadcrumb use. A `sections` entry whose `body` is an array is set
as one paragraph per item, and one carrying an `image` is laid out beside it.

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

One difference worth guarding: `contact` only ever has the slug `contact`, since
it is a single page on a fixed route. Everywhere else a new slug is a real new
page, and it will appear in the menus, so an editor's typo in a slug is visible
on the site. Validate `slug` as lowercase and hyphens only, and it is worth
making `replaces` a picker over the existing slugs rather than a free text field.

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

Then the URL, which is the same field:

```json
{ "services": [ { "slug": "/google-ads" } ] }
```

The navbar and footer should now point at `/google-ads`, the page should load
there with all its content, and `/what-we-do/google-ads` should land on it. Send
`{"slug": "google-ads"}` to put it back.

Once that works, the slug fields are worth one pass each:

1. `{"slug": "ppc-management", "replaces": "google-ads"}` — the navbar entry
   points at the new URL, the page keeps its content, and the old URL redirects.
2. `{"slug": "seo", "hidden": true}` — gone from the menus, and `/what-we-do/seo`
   sends you to the home page.
3. `{"slug": "call-centre", "order": 1}` — moves to the top of its menu column.

Undo each by removing the field again.

---

## Notes for us

- `VITE_BLOG_API_URL` still has to be set in Vercel. Until it is, production
  serves bundled content for all of this, which is correct but not editable.
- The home page is deliberately excluded; its content stays in the components.
- Collections are fetched once per visit and cached in memory, so an editor's
  change shows on the next full page load, not instantly.
- The menus, breadcrumbs, sibling lists and the home page's cards all build their
  links from the same resolved prefix and the same merged lists the pages use, so
  a URL cannot be changed in one place and stale in another.
- `npm run redirects` turns the CMS's URL changes into 301s in `vercel.json`. It
  is deliberately not part of `npm run build`: Vercel reads `vercel.json` from
  the repository when a deployment starts, so the file has to be committed before
  the deploy that serves it. Run it, commit, deploy.
- The URL rules live in `src/lib/pagePaths.js`, the rename rules in
  `src/lib/renameRules.js` and the merge in `src/lib/contentRules.js`, all with
  no React and no fetching. The app and that script both import them, so a 301
  cannot disagree with what the site does in the browser.
- The router builds one route per page from those paths, so a page is reachable
  at exactly one URL and everything else redirects. `src/data/routes.js` holds
  the folders the bundled pages sit in and the paths nothing may take.
- Nothing links to a brand-new collection entry from the home page, and there is
  still no `sitemap.xml`, so a page the CMS adds is reachable and in the menus
  but not yet discoverable by Google on its own.
