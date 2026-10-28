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

// Paths that belong to something other than these collections, and that a page
// may not take.
//
// The blog and the case studies live under /resources/ and are indexed there.
// They are their own CMS-backed sections, and the resources collection carries
// an entry for each so they appear in the menus — which is why these two paths
// are claimed rather than free: the menu entry points at the hub, and the hub
// is what answers.
export const RESERVED_PATHS = [
  "/",
  "/contact",
  "/resources/blogs",
  "/resources/blogs/*",
  "/resources/case-study",
  "/resources/case-study/*",
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
    "research-reports": "/resources/blogs",
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
