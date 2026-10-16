# Site Pages API — machine-readable spec

For the developer building the CMS endpoints. The prose version, with the
reasoning and the rollout order, is in [../pages-api.md](../pages-api.md).

| File | What it is |
|---|---|
| `openapi.json` | OpenAPI 3.1. The six endpoints, every field, every alias, and the rules written into the field descriptions. Opens in Swagger UI, Redoc, Postman, Insomnia or Stoplight. |
| `examples/services.json` | A full services response: one entry with every field filled, plus a second entry with three, to show that partial entries are normal. |
| `examples/industries.json` | A full industry entry. |
| `examples/locations.json` | A full location entry. Note `city` rather than `title`. |
| `examples/about.json` | Both About pages. They share one template and differ only by which optional blocks they carry. |
| `examples/resources.json` | A resource entry. |
| `examples/contact.json` | The contact page. Always one entry, always slug `contact`. |
| `examples/empty.json` | `[]`. A valid response that changes nothing on the site, and the first useful version of any endpoint. |

## Using them as a stub

Serve each file at its endpoint and the site runs against it:

```
GET /services/   -> examples/services.json
GET /about/      -> examples/about.json
...
```

Point `VITE_BLOG_API_URL` at the stub, run `npm run dev`, and the pages render
from it. Start with `empty.json` on every endpoint: the site should look exactly
as it does today. That proves the wiring without changing a word.

## What these are not

These are **examples, not the content**. The real copy lives in the site's
bundled files under `src/data/`, and the API only needs to send what the client
wants to change. A response with two fields is as valid as one with fifty.

## Verified

Every file here parses, and each example has been run through the site's own
merge code (`src/lib/pageContent.js` and `src/lib/pagePaths.js`): each entry
resolves, overrides the bundled content, produces a URL, and leaves untouched
pages and untouched fields alone. `empty.json` leaves everything as shipped.

One thing that is not verified: none of these endpoints has ever returned data,
so this is proven against our code and not yet against a live API.
