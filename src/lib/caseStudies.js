// Case study data layer.
//
// Same contract as the blog, one resource along: GET {base}/case-studies/.
// A case study is a post with two extras, both optional and both degrading to
// nothing if the CMS does not send them:
//
//   client   the group the work was for, shown above the title
//   results  up to four headline numbers, shown as a strip on the card and
//            the article, e.g. [{ label: "Monthly bookings", value: "2.2x" }]
//
// Unlike the blog, the case studies are bundled-first: the entries in
// src/data/sampleCaseStudies.js are the published set, and the CMS overlays
// them by slug. A CMS entry whose slug matches a bundled one enriches it (the
// bundle still wins for images and for any field the CMS leaves thin or empty);
// a CMS entry with no matching bundled slug is ignored, so a half-seeded or
// flaky feed can neither hide a case study nor inject a stray one. See
// docs/cms-api.md.
import { createCollection, decode, isCmsConfigured, normaliseEntry } from "./cms";
import { mergeContent } from "./contentRules";
import { SAMPLE_CASE_STUDIES } from "../data/sampleCaseStudies";

export { formatDate } from "./cms";

export const isCaseStudyFeedConfigured = isCmsConfigured;

/** Reads results from whichever field the CMS put them in, and tidies them. */
function readResults(raw) {
  const fields = raw.acf ?? raw.meta ?? {};
  const list = raw.results ?? fields.results ?? raw.stats ?? fields.stats;
  if (!Array.isArray(list)) return [];
  return list
    .map((item) => ({
      value: decode(String(item?.value ?? item?.figure ?? "")),
      label: decode(String(item?.label ?? item?.name ?? "")),
    }))
    .filter((item) => item.value && item.label)
    .slice(0, 4);
}

const decorate = (model, raw) => {
  const fields = raw.acf ?? raw.meta ?? {};
  return {
    ...model,
    client: decode(raw.client ?? fields.client ?? "") || null,
    results: readResults(raw),
  };
};

const caseStudies = createCollection({
  resource: "case-studies",
  perPage: 9,
  samples: () => SAMPLE_CASE_STUDIES,
  // Still used by the underlying fetcher when the endpoint 404s; the overlay
  // below is what makes the bundle authoritative even when the feed answers.
  fallback: true,
  decorate,
});

/** The bundled set, normalised into the same model the CMS entries become. */
const normaliseBundled = (raw) => {
  const model = normaliseEntry(raw);
  return model ? decorate(model, raw) : null;
};
const bundled = () => SAMPLE_CASE_STUDIES.map(normaliseBundled).filter(Boolean);

/** Best-effort map of CMS entries by slug; empty when the feed is off or errors. */
async function cmsBySlug(signal) {
  if (!isCmsConfigured) return new Map();
  const map = new Map();
  try {
    for (let page = 1; page <= 5; page++) {
      const { entries, totalPages } = await caseStudies.fetchList({ page, size: 50, signal });
      for (const entry of entries) if (entry?.slug) map.set(entry.slug, entry);
      if (page >= totalPages) break;
    }
  } catch (error) {
    if (error?.name === "AbortError") throw error;
    // A failing or flaky feed just means no overlay; the bundle still renders.
    return new Map();
  }
  return map;
}

/** Bundled entries, each enriched by a CMS entry of the same slug when present. */
async function overlaid(signal) {
  const overlay = await cmsBySlug(signal);
  return bundled().map((entry) => (overlay.has(entry.slug) ? mergeContent(entry, overlay.get(entry.slug)) : entry));
}

export async function fetchCaseStudies({ page = 1, perPage = 9, signal } = {}) {
  const all = await overlaid(signal);
  const start = (page - 1) * perPage;
  return {
    caseStudies: all.slice(start, start + perPage),
    totalPages: Math.max(1, Math.ceil(all.length / perPage)),
    total: all.length,
  };
}

export async function fetchCaseStudy(slug, { signal } = {}) {
  if (!slug) return null;
  const all = await overlaid(signal);
  return all.find((entry) => entry.slug === slug) ?? null;
}
