// Which folder the pages the site ships sit in, when their slug does not say.
//
// A slug is a path now: the CMS sends one field, and that field decides the
// whole URL. These are only the folders the bundled pages sit in, so that a
// plain slug like "google-ads" still means /what-we-do/google-ads and the site
// is unchanged until someone moves something. See src/lib/pagePaths.js.
export const DEFAULT_FOLDERS = {
  services: "",
  industries: "",
  locations: "",
  about: "",
  resources: "",
};

// Where these pages used to be. Every one of them was indexed under a folder,
// so those URLs still have to answer: each redirects to wherever its page is
// now. Add to a list here if a folder is ever reintroduced and then dropped
// again; nothing is ever removed from one.
export const PREVIOUS_FOLDERS = {
  services: ["what-we-do"],
  industries: ["industries"],
  locations: ["locations"],
  about: ["about"],
  resources: ["resources"],
};

// Where the blog and the case studies live. They moved out of /resources/, and
// the old hubs, posts included, redirect here (see PREVIOUS_HUBS).
export const BLOG_PATH = "/blog";
export const CASE_STUDY_PATH = "/case-study";
export const PREVIOUS_HUBS = {
  "/resources/blogs": BLOG_PATH,
  "/resources/case-study": CASE_STUDY_PATH,
};

// Pages served at a URL other than their slug. Keyed by collection, from the
// page's slug to the path it is served at. The slug stays the page's identity,
// so its CMS entry, icon and hero still match it; only the URL changes, and the
// slug's own URL redirects. A value with a "/" is a path written in full.
export const PAGE_URLS = {
  services: {
    "google-ads": "healthcare-google-ads",
    "meta-ads": "healthcare-meta-ads",
    seo: "healthcare-seo",
    aeo: "healthcare-aeo-services",
    geo: "healthcare-geo-services",
    "local-seo": "local-seo-agency",
    "social-media-management": "healthcare-social-media",
  },
  about: {
    "our-story": "about-us",
  },
  // The menu entries for the two hubs.
  resources: {
    blogs: BLOG_PATH,
    "case-study": CASE_STUDY_PATH,
  },
};

// Paths that belong to something other than these collections, and that a page
// may not take.
//
// The blog and the case studies are their own CMS-backed sections, and the
// resources collection carries an entry for each so they appear in the menus —
// which is why these paths are claimed rather than free: the menu entry points
// at the hub, and the hub is what answers. Their old paths stay claimed too, so
// no page can take a URL that redirects.
export const RESERVED_PATHS = [
  "/",
  "/contact",
  BLOG_PATH,
  `${BLOG_PATH}/*`,
  CASE_STUDY_PATH,
  `${CASE_STUDY_PATH}/*`,
  ...Object.keys(PREVIOUS_HUBS).flatMap((path) => [path, `${path}/*`]),
];

// Pages the site has already moved once, by hand, before the CMS owned this.
// Keyed by collection, from the old slug to the slug it became.
export const SHIPPED_RENAMES = {
  // AEO and GEO used to share one page.
  services: { "aeo-geo": "aeo" },
};

// Pages that have been taken down, and the page to send their visitors to.
// These URLs were linked and indexed, so they answer rather than 404 — the
// content is gone, but the link is not dead. To let one 404 properly instead,
// take it out of here.
export const RETIRED_PAGES = {
  about: {
    "life-at-rd": "our-story",
    "founders-message": "our-story",
  },
  // The research reports page is gone; its URL sends visitors to the blog, the
  // nearest surviving resources content, rather than a dead end. A value that
  // begins with "/" is an absolute path, since the blog is not an ordinary
  // resources entry.
  resources: {
    "research-reports": BLOG_PATH,
  },
};

// The pages the site has shipped, by slug, in menu order. The content of these
// pages lives in the CMS now; this list keeps only what the CMS cannot know:
// that these URLs existed under the old folders above (so they still redirect)
// and the order they appear in when the CMS sets none.
export const SHIPPED_PAGES = {
  services: [
    "google-ads", "meta-ads", "chatgpt-ads", "seo", "aeo", "geo",
    "business-profile-optimisation", "local-seo", "youtube-marketing",
    "social-media-management", "marketing-automation", "crm",
    "call-centre-management", "telephony", "booking-attribution",
    "walk-in-tracking", "messaging-follow-up",
  ],
  industries: ["dental-clinic", "ivf-clinic", "eye-clinics", "multi-speciality-hospital"],
  locations: [
    "jaipur", "delhi", "hyderabad", "noida", "gurgaon", "mumbai", "bangalore",
    "kochi", "chennai", "calicut", "thiruvananthapuram", "vijayawada",
  ],
};
