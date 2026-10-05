// Backdrop photography for the page banners. Each entry is [photo, crop] so
// pages that share a photo still show a different part of it.
// Only eight photos are bundled — swap any entry for the client's own shot.
import social from "../assets/cards/demand.jpg";
import workspace from "../assets/cards/routing.jpg";
import meeting from "../assets/cards/calls.jpg";
import analytics from "../assets/cards/reporting.jpg";
import dental from "../assets/cards/industry-dental.jpg";
import fertility from "../assets/cards/industry-fertility.jpg";
import eye from "../assets/cards/industry-eye.jpg";
import hospital from "../assets/cards/industry-hospital.jpg";
// Purpose-made banners, one per channel page.
import googleAdsBanner from "../assets/heroes/google-ads.jpg";
import metaAdsBanner from "../assets/heroes/meta-ads.jpg";
import chatgptAdsBanner from "../assets/heroes/chatgpt-ads.jpg";
import seoBanner from "../assets/heroes/seo.jpg";
import aeoBanner from "../assets/heroes/aeo.jpg";
import geoBanner from "../assets/heroes/geo.jpg";
import businessProfileBanner from "../assets/heroes/business-profile.jpg";

const LEFT = "left center";
const RIGHT = "right center";
const TOP = "center top";
const BOTTOM = "center bottom";
const CENTER = "center";

export const SERVICE_HERO_IMAGES = {
  "google-ads": [googleAdsBanner, CENTER],
  "meta-ads": [metaAdsBanner, CENTER],
  "chatgpt-ads": [chatgptAdsBanner, CENTER],
  seo: [seoBanner, CENTER],
  aeo: [aeoBanner, CENTER],
  geo: [geoBanner, CENTER],
  "business-profile-optimisation": [businessProfileBanner, CENTER],
  "youtube-marketing": [social, TOP],
  "social-media-management": [social, BOTTOM],
  "marketing-automation": [workspace, LEFT],
  crm: [analytics, TOP],
  "call-centre-management": [meeting, CENTER],
};

export const INDUSTRY_HERO_IMAGES = {
  "dental-clinic": [dental, CENTER],
  "ivf-clinic": [fertility, CENTER],
  "eye-clinics": [eye, CENTER],
  "multi-speciality-hospital": [hospital, CENTER],
};

export const ABOUT_HERO_IMAGES = {
  "our-story": [meeting, LEFT],
  "life-at-rd": [workspace, TOP],
  "our-team": [meeting, RIGHT],
  "founders-message": [workspace, BOTTOM],
};

export const RESOURCE_HERO_IMAGES = {
  "case-study": [eye, RIGHT],
  "research-reports": [analytics, BOTTOM],
  blogs: [fertility, RIGHT],
};

export const CONTACT_HERO_IMAGE = [meeting, TOP];
export const HOME_HERO_IMAGE = hospital;
