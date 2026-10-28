// Services.
//
// The content of every service page lives in the CMS (/services/). Nothing is
// bundled: the URL history and menu order are in routes.js (SHIPPED_PAGES),
// and the icons in pageIcons.js.
export const SERVICES = [];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
