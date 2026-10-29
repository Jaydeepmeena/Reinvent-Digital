// The photo for each case study, by slug. The case studies themselves come
// from the CMS; this only gives each one its own photo, and wins over any
// featured image the CMS sends. A case study not listed here uses its CMS
// featured image, or the stock case-study image if it has none.
import ailbsImg from "../assets/heroes/Multi-Speciality-Hospital.jpg";
import psriImg from "../assets/heroes/google-ads.jpg";
import nationalDentalImg from "../assets/heroes/Local-SEO-&-Google-Maps.jpg";
import eliteDentalImg from "../assets/heroes/Healthcare-SEO.jpg";
import radiantDentalImg from "../assets/heroes/Healthcare-Booking-Attribution.jpg";
import oracareImg from "../assets/heroes/dental-clinic.jpg";
import parthaDentalImg from "../assets/heroes/Healthcare-Telephony-&-Call-Tracking-.jpg";
import urgentDentImg from "../assets/heroes/Google-Business-Profile.jpg";

export const CASE_STUDY_IMAGES = {
  "ailbs-liver-transplant-94-percent-more-conversions": {
    src: ailbsImg,
    alt: "Doctors and nurses with patients in a hospital ward",
  },
  "psri-hospital-1000-leads-three-months": { src: psriImg, alt: "A hand tapping a search ad on a tablet" },
  "national-dental-care-220-percent-more-leads": {
    src: nationalDentalImg,
    alt: "A clinic listing on Google Maps beside a clinic storefront",
  },
  "elite-dental-studio-232-percent-organic-growth": {
    src: eliteDentalImg,
    alt: "Healthcare search icons above a tablet and stethoscope",
  },
  "radiant-dental-care-271-percent-more-conversions": {
    src: radiantDentalImg,
    alt: "A doctor scheduling appointments on a digital calendar",
  },
  "oracare-prime-100-percent-more-conversions": { src: oracareImg, alt: "A model tooth beside dental instruments" },
  "partha-dental-333-percent-more-leads": {
    src: parthaDentalImg,
    alt: "A doctor on a headset answering patient calls and messages",
  },
  "urgentdent-111-conversions-organic-search": {
    src: urgentDentImg,
    alt: "A clinic's Google Business Profile shown on a tablet",
  },
};
