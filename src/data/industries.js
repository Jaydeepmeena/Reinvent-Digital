// Industries.
//
// The content of every industry page lives in the CMS (/industries/). Nothing
// is bundled: the URL history and menu order are in routes.js (SHIPPED_PAGES),
// and the icons in pageIcons.js.
export const INDUSTRIES = [];

export const getIndustryBySlug = (slug) => INDUSTRIES.find((i) => i.slug === slug);
