// Locations.
//
// The content of every city page lives in the CMS (/locations/). Nothing is
// bundled: the URL history and menu order are in routes.js (SHIPPED_PAGES).
export const LOCATIONS = [];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);
export const findLocation = (slug) => LOCATIONS.find((l) => l.slug === slug);
