// Backdrop photography for the page banners. Each entry is [photo, crop] so
// pages that share a photo still show a different part of it.
// The client's own banners live in ../assets/heroes, one per page. Pages with
// no banner of their own fall back to the shared card photography.
import meeting from "../assets/cards/calls.jpg";
import analytics from "../assets/cards/reporting.jpg";
import fertility from "../assets/cards/industry-fertility.jpg";

// Client banners: service pages.
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

// Faint backdrop art for the service page's ROAS metric tile.
import googleAdsMetricArt from "../assets/images/avg-google-ads-img.png";
import metaAdsMetricArt from "../assets/images/meta-ads-img.png";
import chatgptAdsMetricArt from "../assets/images/chatgpt-ad-img.jpg";
import seoMetricArt from "../assets/images/heathcare-seo-img.png";
import aeoMetricArt from "../assets/images/heathcare-aeo-img.png";
import geoMetricArt from "../assets/images/heathcare-geo-img.jpg";
import businessProfileMetricArt from "../assets/images/business-profile-optimisation-img.png";
import localSeoMetricArt from "../assets/images/local-seo-img.png";
import youtubeMarketingMetricArt from "../assets/images/youtube-marketing.png";
import socialMediaManagementMetricArt from "../assets/images/social-media-management-img.png";
import marketingAutomationMetricArt from "../assets/images/marketing-automation-img.jpg";
import crmMetricArt from "../assets/images/crm-marketing-img.jpg";
import telephonyMetricArt from "../assets/images/telephony-img.jpg";
import bookingAttributionMetricArt from "../assets/images/booking-attribution-img.jpg";
import walkInTrackingMetricArt from "../assets/images/walk-in-tracking-img.png";
import callCentreManagementMetricArt from "../assets/images/call-centre-management-img.jpg";
import messagingFollowUpMetricArt from "../assets/images/messaging-follow-up-img.jpg";

// Client banners — industry, resource and home.
import dentalBanner from "../assets/heroes/dental-clinic.jpg";
import ivfBanner from "../assets/heroes/IVF-&-Fertility-Clinic.jpg";
import eyeBanner from "../assets/heroes/Eye-Care-Clinic.jpg";
import hospitalBanner from "../assets/heroes/Multi-Speciality-Hospital.jpg";
import caseStudyBanner from "../assets/heroes/Case-Studies.jpg";
import homeBanner from "../assets/heroes/RD-home-baner1.jpg";

// City landmarks, one per location page.
import cityJaipur from "../assets/heroes/city-jaipur.jpg";
import cityDelhi from "../assets/heroes/city-delhi.jpg";
import cityHyderabad from "../assets/heroes/city-hyderabad.jpg";
import cityNoida from "../assets/heroes/city-noida.jpg";
import cityGurgaon from "../assets/heroes/city-gurgaon.jpg";
import cityMumbai from "../assets/heroes/city-mumbai.jpg";
import cityBangalore from "../assets/heroes/city-bangalore.jpg";
import cityKochi from "../assets/heroes/city-kochi.jpg";
import cityChennai from "../assets/heroes/city-chennai.jpg";
import cityCalicut from "../assets/heroes/city-calicut.jpg";
import cityThiruvananthapuram from "../assets/heroes/city-thiruvananthapuram.jpg";
import cityVijayawada from "../assets/heroes/city-vijayawada.jpg";

const LEFT = "left center";
const RIGHT = "right center";
const TOP = "center top";
const BOTTOM = "center bottom";
const CENTER = "center";
// The client banners put their subject right of centre, so they are cropped
// from the right edge, on a phone that keeps the subject, not the backdrop.
const BANNER = "right center";

export const SERVICE_HERO_IMAGES = {
  "google-ads": [googleAdsBanner, BANNER],
  "meta-ads": [metaAdsBanner, BANNER],
  "chatgpt-ads": [chatgptAdsBanner, BANNER],
  seo: [seoBanner, BANNER],
  aeo: [aeoBanner, BANNER],
  geo: [geoBanner, BANNER],
  "business-profile-optimisation": [businessProfileBanner, BANNER],
  "local-seo": [localSeoBanner, BANNER],
  "youtube-marketing": [youtubeBanner, BANNER],
  "social-media-management": [socialMediaBanner, BANNER],
  "marketing-automation": [automationBanner, BANNER],
  crm: [crmBanner, BANNER],
  telephony: [telephonyBanner, BANNER],
  "booking-attribution": [attributionBanner, BANNER],
  "walk-in-tracking": [walkInBanner, BANNER],
  "call-centre-management": [callCentreBanner, BANNER],
  "messaging-follow-up": [messagingBanner, BANNER],
};

// Keyed by service slug; pages without an entry render the metric tile plain.
export const SERVICE_METRIC_IMAGES = {
  "google-ads": googleAdsMetricArt,
  "meta-ads": metaAdsMetricArt,
  "chatgpt-ads": chatgptAdsMetricArt,
  seo: seoMetricArt,
  aeo: aeoMetricArt,
  geo: geoMetricArt,
  "business-profile-optimisation": businessProfileMetricArt,
  "local-seo": localSeoMetricArt,
  "youtube-marketing": youtubeMarketingMetricArt,
  "social-media-management": socialMediaManagementMetricArt,
  "marketing-automation": marketingAutomationMetricArt,
  crm: crmMetricArt,
  telephony: telephonyMetricArt,
  "booking-attribution": bookingAttributionMetricArt,
  "walk-in-tracking": walkInTrackingMetricArt,
  "call-centre-management": callCentreManagementMetricArt,
  "messaging-follow-up": messagingFollowUpMetricArt,
};

export const INDUSTRY_HERO_IMAGES = {
  "dental-clinic": [dentalBanner, BANNER],
  "ivf-clinic": [ivfBanner, BANNER],
  "eye-clinics": [eyeBanner, BANNER],
  "multi-speciality-hospital": [hospitalBanner, BANNER],
};

// No client banners for these yet, so they stay on the card photography.
export const ABOUT_HERO_IMAGES = {
  "our-story": [meeting, LEFT],
  "our-team": [meeting, RIGHT],
};

export const RESOURCE_HERO_IMAGES = {
  "case-study": [caseStudyBanner, BANNER],
  "research-reports": [analytics, BOTTOM],
  blogs: [fertility, RIGHT],
};

export const LOCATION_HERO_IMAGES = {
  jaipur: [cityJaipur, CENTER],
  delhi: [cityDelhi, CENTER],
  hyderabad: [cityHyderabad, CENTER],
  noida: [cityNoida, CENTER],
  gurgaon: [cityGurgaon, CENTER],
  mumbai: [cityMumbai, CENTER],
  bangalore: [cityBangalore, CENTER],
  kochi: [cityKochi, CENTER],
  chennai: [cityChennai, CENTER],
  calicut: [cityCalicut, CENTER],
  thiruvananthapuram: [cityThiruvananthapuram, CENTER],
  vijayawada: [cityVijayawada, CENTER],
};

export const CONTACT_HERO_IMAGE = [meeting, TOP];
export const HOME_HERO_IMAGE = homeBanner;
