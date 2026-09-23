import { BookOpen, Users, UserSquare2, MessageSquare } from "lucide-react";

export const ABOUT_PAGES = [
  {
    slug: "our-story",
    icon: BookOpen,
    eyebrow: "About Reinvent Digital",
    title: "Our Story",
    accent: "started with a broken funnel, not a business plan.",
    description:
      "Reinvent Digital began when our founding team, working inside a fast-growing hospital chain, kept hitting the same wall: marketing could fill the top of the funnel, but nobody owned what happened between a click and a patient walking through the door.",
    sections: [
      { heading: "The problem we kept seeing", body: "Every healthcare group we worked with had the same gap: agencies optimised campaigns, IT owned the CRM, and the call centre answered to nobody in marketing. Leads looked healthy on a dashboard while appointment books stayed half empty." },
      { heading: "Why we built it differently", body: "We started Reinvent Digital to own the whole chain — demand generation, CRM, call centre performance and attribution — under one accountable team, instead of handing off a report and hoping someone downstream acts on it." },
      { heading: "Where we are today", body: "Today we run patient acquisition systems for dental groups, fertility networks, eye care chains and multi-speciality hospitals across India — measured on booked patients and walk-ins, not clicks." },
    ],
    stats: [
      { value: "2019", label: "Founded" },
      { value: "120+", label: "clinics & hospitals served" },
      { value: "12+", label: "cities" },
    ],
  },
  {
    slug: "life-at-rd",
    icon: Users,
    eyebrow: "Careers & Culture",
    title: "Life at RD",
    accent: "where marketers learn to think like operators.",
    description:
      "We hire people who want to be judged on booked patients, not campaign screenshots. That means closer collaboration with call centres, CRMs and clinic operations than most marketing careers offer.",
    sections: [
      { heading: "How we work", body: "Strategists sit close to call-quality data, not just ad platforms. You'll know within days whether a campaign change actually moved bookings, because the full funnel is visible on one dashboard." },
      { heading: "What we value", body: "Ownership over hand-offs, evidence over opinions, and a bias toward calling the client with bad news early rather than burying it in a monthly report." },
      { heading: "Growth inside RD", body: "Most of our team leads started in a single discipline — paid media, SEO, call quality — and grew into owning full accounts because the system rewards people who understand the whole chain." },
    ],
    highlights: [
      "Remote-friendly, India-based team",
      "Direct access to client CRM & call data",
      "Quarterly learning stipend",
      "Health cover for full-time team members",
    ],
  },
  {
    slug: "our-team",
    icon: UserSquare2,
    eyebrow: "Leadership",
    title: "Our Team",
    accent: "operators first, marketers second.",
    description:
      "Our leadership team has run marketing, call centres and CRM implementations inside healthcare groups — not just agencies. That's the perspective every account is built around.",
    sections: [
      { heading: "Cross-functional by design", body: "Every account is staffed with a strategist, a paid/organic specialist and a call-centre analyst working together, not in separate departments handing off reports." },
      { heading: "Healthcare-only focus", body: "We don't split attention across retail, SaaS and healthcare. Every team member works exclusively on patient acquisition, so pattern recognition compounds faster." },
    ],
    stats: [
      { value: "35+", label: "team members" },
      { value: "100%", label: "healthcare-focused" },
      { value: "8 yrs", label: "avg. leadership healthcare experience" },
    ],
  },
  {
    slug: "founders-message",
    icon: MessageSquare,
    eyebrow: "From the Founder",
    title: "Founder's Message",
    accent: "on why bookings are the only number that matters.",
    description:
      "A short note on why we built Reinvent Digital around patient outcomes instead of marketing metrics — and what that means for how we work with every client.",
    sections: [
      { heading: "Why we started here", body: "I spent years watching healthcare groups pour budget into campaigns that looked successful on a marketing dashboard while the clinic's appointment book told a different story. That gap is where Reinvent Digital was born." },
      { heading: "What we promise every client", body: "We don't report on clicks and impressions as if they were the goal. We report on booked patients and walk-ins, because that's the only number a clinic director actually cares about." },
      { heading: "Where we're headed", body: "As AI search changes how patients find care, we're building the same accountability into AEO, GEO and every new channel — connected to the same CRM and call centre discipline that's worked from day one." },
    ],
    quote: {
      text: "If a marketing report can't tell you how many patients walked through the door, it isn't finished.",
      name: "Founder, Reinvent Digital",
    },
  },
];

export const getAboutBySlug = (slug) => ABOUT_PAGES.find((a) => a.slug === slug);
