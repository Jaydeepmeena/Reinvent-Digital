// Icons for pages whose content lives in the CMS.
//
// Icons are React components, so the CMS cannot send one. Naming a page here
// keeps its icon; a page not named gets the neutral fallback mark. Keyed by
// collection, then by the page's identity (the last segment of its slug).
import {
  Search, Share2, Sparkles, TrendingUp, Bot, MapPin, PlaySquare, Users, Workflow,
  Database, Headset, PhoneCall, Route, DoorOpen, MessageCircle, Globe, Navigation,
  Smile, HeartPulse, Eye, Building2,
} from "lucide-react";

export const PAGE_ICONS = {
  services: {
    "google-ads": Search,
    "meta-ads": Share2,
    "chatgpt-ads": Sparkles,
    seo: TrendingUp,
    aeo: Bot,
    geo: Globe,
    "business-profile-optimisation": MapPin,
    "local-seo": Navigation,
    "youtube-marketing": PlaySquare,
    "social-media-management": Users,
    "marketing-automation": Workflow,
    crm: Database,
    "call-centre-management": Headset,
    telephony: PhoneCall,
    "booking-attribution": Route,
    "walk-in-tracking": DoorOpen,
    "messaging-follow-up": MessageCircle,
  },
  industries: {
    "dental-clinic": Smile,
    "ivf-clinic": HeartPulse,
    "eye-clinics": Eye,
    "multi-speciality-hospital": Building2,
  },
};
