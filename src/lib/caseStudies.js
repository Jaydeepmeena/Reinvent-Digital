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
// The case studies come from the CMS only: what it lists is what the hub shows,
// newest first, so one added in WordPress appears and one trashed there
// disappears. Each takes its photo from src/data/caseStudyImages.js, else its
// CMS featured image, else a stock image. See docs/cms-api.md.
import { createCollection, decode, isCmsConfigured } from "./cms";
import { CASE_STUDY_IMAGES } from "../data/caseStudyImages";
import stockImage from "../assets/heroes/Case-Studies.jpg";

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
  decorate,
});

/** CMS entries by slug, in the order the feed sent them; null when the feed is off or errors. */
async function cmsBySlug(signal) {
  if (!isCmsConfigured) return null;
  const map = new Map();
  try {
    for (let page = 1; page <= 5; page++) {
      const { entries, totalPages } = await caseStudies.fetchList({ page, size: 50, signal });
      for (const entry of entries) if (entry?.slug) map.set(entry.slug, entry);
      if (page >= totalPages) break;
    }
  } catch (error) {
    if (error?.name === "AbortError") throw error;
    // A failing or flaky feed means the bundle renders instead.
    return null;
  }
  return map;
}

const time = (entry) => Date.parse(entry?.date ?? "") || 0;

/** The photo a case study shows: its own, else the CMS's, else the stock one. */
function withImage(entry) {
  const own = CASE_STUDY_IMAGES[entry.slug];
  if (own) return { ...entry, image: { ...entry.image, ...own } };
  if (entry.image?.src) return entry;
  return { ...entry, image: { ...entry.image, src: stockImage, alt: entry.image?.alt || entry.title } };
}

/** The published case studies, newest first; none when the feed is off or failing. */
async function overlaid(signal) {
  const cms = await cmsBySlug(signal);
  return [...(cms?.values() ?? [])].map(withImage).sort((a, b) => time(b) - time(a));
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
