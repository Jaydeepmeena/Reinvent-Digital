// Backdrop photography for the page banners. Each entry is [photo, crop] so
// pages that share a photo still show a different part of it.
// The client's own banners live in ../assets/heroes, one per page. Pages with
// no banner of their own fall back to the shared card photography.
import workspace from "../assets/cards/routing.jpg";
import meeting from "../assets/cards/calls.jpg";
import analytics from "../assets/cards/reporting.jpg";
import fertility from "../assets/cards/industry-fertility.jpg";

// Client banners — service pages.
import googleAdsBanner from "../assets/heroes/google-ads.jpg";
import metaAdsBanner from "../assets/heroes/Meta-Ads.jpg";
import chatgptAdsBanner from "../assets/heroes/ChatGPT-Ads.jpg";
import seoBanner from "../assets/heroes/Healthcare-SEO.jpg";
import aeoBanner from "../assets/heroes/Healthcare-AEO-.jpg";
import geoBanner from "../assets/heroes/Healthcare-GEO.jpg";
import businessProfileBanner from "../assets/heroes/Google-Business-Profile.jpg";
import localSeoBanner from "../assets/heroes/Local-SEO-&-Google-Maps.jpg";
import youtubeBanner from "../assets/heroes/Healthcare-YouTube-Marketing-.jpg";
import socialMediaBanner from "../assets/heroes/Healthcare-Social-Media-Management.jpg";
import automationBanner from "../assets/heroes/Healthcare-Marketing-Automation.jpg";
import crmBanner from "../assets/heroes/Healthcare-CRM.jpg";
import telephonyBanner from "../assets/heroes/Healthcare-Telephony-&-Call-Tracking-.jpg";
import attributionBanner from "../assets/heroes/Healthcare-Booking-Attribution.jpg";
import walkInBanner from "../assets/heroes/Healthcare-Walk-In-Tracking.jpg";
import callCentreBanner from "../assets/heroes/Healthcare-Call-Centre-Optimisation.jpg";
import messagingBanner from "../assets/heroes/Healthcare-Messaging-and-Follow-Up.jpg";

// Client banners — industry, resource and home.
import dentalBanner from "../assets/heroes/dental-clinic.jpg";
import ivfBanner from "../assets/heroes/IVF-&-Fertility-Clinic.jpg";
import eyeBanner from "../assets/heroes/Eye-Care-Clinic.jpg";
import hospitalBanner from "../assets/heroes/Multi-Speciality-Hospital.jpg";
import caseStudyBanner from "../assets/heroes/Case-Studies.jpg";
import homeBanner from "../assets/heroes/RD-home-baner1.jpg";

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
  "local-seo": [localSeoBanner, CENTER],
  "youtube-marketing": [youtubeBanner, CENTER],
  "social-media-management": [socialMediaBanner, CENTER],
  "marketing-automation": [automationBanner, CENTER],
  crm: [crmBanner, CENTER],
  telephony: [telephonyBanner, CENTER],
  "booking-attribution": [attributionBanner, CENTER],
  "walk-in-tracking": [walkInBanner, CENTER],
  "call-centre-management": [callCentreBanner, CENTER],
  "messaging-follow-up": [messagingBanner, CENTER],
};

export const INDUSTRY_HERO_IMAGES = {
  "dental-clinic": [dentalBanner, CENTER],
  "ivf-clinic": [ivfBanner, CENTER],
  "eye-clinics": [eyeBanner, CENTER],
  "multi-speciality-hospital": [hospitalBanner, CENTER],
};

// No client banners for these yet, so they stay on the card photography.
export const ABOUT_HERO_IMAGES = {
  "our-story": [meeting, LEFT],
  "life-at-rd": [workspace, TOP],
  "our-team": [meeting, RIGHT],
  "founders-message": [workspace, BOTTOM],
};

export const RESOURCE_HERO_IMAGES = {
  "case-study": [caseStudyBanner, CENTER],
  "research-reports": [analytics, BOTTOM],
  blogs: [fertility, RIGHT],
};

export const CONTACT_HERO_IMAGE = [meeting, TOP];
export const HOME_HERO_IMAGE = homeBanner;
