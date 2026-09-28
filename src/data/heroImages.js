// Backdrop photography for the page heroes. The same bundled set the cards use,
// matched to each page's subject — swap any entry for the client's own shot.
import social from "../assets/cards/demand.jpg";
import workspace from "../assets/cards/routing.jpg";
import meeting from "../assets/cards/calls.jpg";
import analytics from "../assets/cards/reporting.jpg";
import dental from "../assets/cards/industry-dental.jpg";
import fertility from "../assets/cards/industry-fertility.jpg";
import eye from "../assets/cards/industry-eye.jpg";
import hospital from "../assets/cards/industry-hospital.jpg";

export const SERVICE_HERO_IMAGES = {
  "google-ads": analytics,
  "meta-ads": social,
  "chatgpt-ads": analytics,
  seo: analytics,
  "aeo-geo": analytics,
  "business-profile-optimisation": hospital,
  "youtube-marketing": social,
  "social-media-management": social,
  "marketing-automation": workspace,
  crm: analytics,
  "call-centre-management": meeting,
};

export const INDUSTRY_HERO_IMAGES = {
  "dental-clinic": dental,
  "ivf-clinic": fertility,
  "eye-clinics": eye,
  "multi-speciality-hospital": hospital,
};

export const ABOUT_HERO_IMAGES = {
  "our-story": meeting,
  "life-at-rd": workspace,
  "our-team": workspace,
  "founders-message": meeting,
};

export const RESOURCE_HERO_IMAGES = {
  "case-study": analytics,
  "research-reports": analytics,
  blogs: meeting,
};

export const CONTACT_HERO_IMAGE = meeting;
export const HOME_HERO_IMAGE = hospital;
