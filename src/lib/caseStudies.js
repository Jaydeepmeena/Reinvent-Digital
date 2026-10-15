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
// In WordPress these arrive as ACF or meta fields; a custom backend returns
// them at the top level. See docs/cms-api.md.
import { createCollection, decode, isCmsConfigured } from "./cms";
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

const caseStudies = createCollection({
  resource: "case-studies",
  perPage: 9,
  samples: () => SAMPLE_CASE_STUDIES,
  // The endpoint is still to be built, so until it answers the page runs on
  // the bundled studies rather than showing an error. See docs/cms-api.md.
  fallback: true,
  decorate: (model, raw) => {
    const fields = raw.acf ?? raw.meta ?? {};
    return {
      ...model,
      client: decode(raw.client ?? fields.client ?? "") || null,
      results: readResults(raw),
    };
  },
});

export async function fetchCaseStudies({ page = 1, perPage = 9, signal } = {}) {
  const { entries, totalPages, total } = await caseStudies.fetchList({ page, size: perPage, signal });
  return { caseStudies: entries, totalPages, total };
}

export const fetchCaseStudy = (slug, options) => caseStudies.fetchOne(slug, options);
