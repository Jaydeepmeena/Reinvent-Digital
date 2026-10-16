import { BookOpen, UserSquare2 } from "lucide-react";
import storyImage from "../assets/about/who-we-are.jpg";
import founderImage from "../assets/about/founder.jpg";

export const ABOUT_PAGES = [
  {
    slug: "our-story",
    icon: BookOpen,
    eyebrow: "The Reinvent Digital Story",
    title: "Our Story",
    headline: "Healthcare Digital Marketing Agency,",
    accent: "With 11+ Years of Experience",
    description:
      "Headquartered in Delhi, offices in Jaipur and Hyderabad, Reinvent Digital offers 360-degree digital marketing services, built around the outcome that matters most: patients who walk in. From first lead to walk-in, you see every step in one clear dashboard.",
    ctaLabel: "See How the System Works",
    stats: [
      { value: "185+", label: "Healthcare accounts managed" },
      { value: "120+", label: "Locations managed" },
      { value: "12+", label: "Departments" },
      { value: "60+", label: "Team members" },
    ],
    sections: [
      {
        eyebrow: "Who We Are",
        heading: "From Ads to Walk-Ins, One Reliable Team for Every Step in Between",
        body: [
          "Reinvent Digital began in 2015, with healthcare as most of our work from day one. Our first client, a multi-location, renowned dental chain, grew from 60 to 400+ clinics with us. Other healthcare groups followed: 271% more conversions in 6 months, 232% more organic traffic in a year. These exceptional results are what made us decide to focus on healthcare alone.",
          "But one gap kept coming back: clients wanted walk-ins, not just reports. So we went beyond marketing and built our, India's first, Patient Acquisition System, with our own healthcare CRM at its core, backed by 1 lakh+ tracked walk-ins across 120+ clinic locations.",
          "Our team runs it all: campaigns, Google Maps, calls, WhatsApp follow-up, CRM and reporting. You see what each patient cost, and which channel brought them.",
        ],
        highlight: "One Team. One Dashboard. One Goal: The Patient Walk-Ins You Want.",
        image: storyImage,
        imageAlt: "The Reinvent Digital team together",
      },
    ],
    journey: {
      eyebrow: "Our Journey",
      heading: "11 Years of Milestones & What Our Future Direction Is",
      milestones: [
        { year: "2015", title: "Founding year", body: "Founded in Delhi, with healthcare clients shaping our work from day one." },
        { year: "2018", title: "Jaipur office", body: "Expanded our team to Jaipur, with a full commitment to healthcare digital marketing." },
        { year: "2023", title: "100+ healthcare accounts", body: "Crossed 100 healthcare accounts, across dental chains, hospitals and specialist clinics." },
        { year: "2024", title: "Hyderabad office", body: "Opened our Hyderabad office, bringing our healthcare specialists closer to clients across India." },
        { year: "2026", title: "India's first PAS launched", body: "Launched the Reinvent Digital Patient Acquisition System, built to turn enquiries into patient walk-ins." },
        { year: "Today", title: "60+ specialists, 12+ departments", body: "MedLift CRM, WhatsApp follow-up, walk-in reporting and AI call scoring all live." },
      ],
    },
    founder: {
      eyebrow: "From Our Founder",
      heading: "If We Can't Prove the Number We Won't Show It To You",
      body: "When I started Reinvent Digital in 2015, I believed healthcare marketing deserved more than clicks and impressions. Clinic owners don't need another report. They need to know how many patients walked in, and what each one cost. I still stay close to the work, from strategy calls to the numbers in client reports. If we can't prove a number, we won't show it to you. That's the standard my team holds itself to, and why clients trust us with their growth.",
      name: "Jaydeep Meena",
      role: "Founder",
      note: "20+ years in digital marketing",
      image: founderImage,
      imageAlt: "Jaydeep Meena, founder of Reinvent Digital",
    },
    drivers: {
      eyebrow: "What Drives Us",
      heading: "Our Vision & Mission",
      items: [
        { title: "Vision", body: "To make patient walk-ins, not leads or clicks, the standard every healthcare brand in India measures its marketing by." },
        { title: "Mission", body: "To give healthcare brands one accountable team, from the first search to the patient in the clinic, with every result tracked and proven." },
      ],
    },
    closing: {
      eyebrow: "See It For Yourself",
      heading: "Get the Gap Between Leads & Walk-Ins Filled Without Any Delay",
      body: "See how the Reinvent Digital Patient Acquisition System connects your campaigns, call team and CRM, and how every walk-in is tracked back to its source.",
    },
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Who founded Reinvent Digital?", a: "Reinvent Digital was founded by Jaydeep Meena in September 2015 in Delhi. He brings 20+ years of experience in digital marketing and media, and remains closely involved in client strategy and reporting today." },
      { q: "Where are Reinvent Digital's offices?", a: "Reinvent Digital is headquartered in Delhi, with offices in Jaipur and Hyderabad. The team also serves healthcare clients in cities including Bangalore, Mumbai, Chennai, Noida, Gurgaon and Kochi." },
      { q: "How is Reinvent Digital different from a typical healthcare marketing agency?", a: "Most agencies stop at leads. Reinvent Digital works with your call team and CRM as well, and reports cost per patient by channel. Walk-ins are tracked wherever your attendance data is connected." },
      { q: "Which healthcare businesses does Reinvent Digital work with?", a: "Reinvent Digital works with dental chains, multi-speciality hospitals, IVF and fertility clinics, and eye hospitals. It serves both single clinics and multi-location groups across India." },
      { q: "How do I get started with Reinvent Digital?", a: "Start with a conversation with our team on +91 99505 08668. We begin by reviewing your current marketing, call handling and reporting. That shows where enquiries are being lost before anything changes." },
    ],
  },
  {
    slug: "our-team",
    icon: UserSquare2,
    eyebrow: "Our Team",
    title: "Our Team",
    // The hero heading reads on its own; `title` stays the short name the
    // menus and the breadcrumb use.
    headline: "12+ Departments. One Goal.",
    accent: "Patients Walking Into Your Clinic",
    description:
      "SEO strategists, healthcare writers, ad specialists, designers, developers, call-centre coaches and automation experts, working across Delhi, Jaipur and Hyderabad.",
    sections: [
      {
        heading: "Specialist in Every Discipline. Connected by One Process",
        body: "The Reinvent Digital team of marketing experts is built on one belief: healthcare marketing works best when every specialist sees the full patient journey. Our SEO, content, ads and social media teams bring patients in, while call-centre optimisation, automation and client servicing help turn enquiries into booked appointments. Every account goes through weekly cross-team reviews, alongside regular department and client reviews. Before any work reaches you, our Quality and Process team checks it against one consistent standard. And what works for one clinic is shared across every account, so each client benefits from what the whole team learns.",
      },
    ],
    departments: {
      eyebrow: "Our Departments",
      heading: "The Teams Behind Every Stage of the Patient Journey",
      groups: [
        {
          title: "Bringing Patients In",
          teams: [
            { name: "SEO", size: "8", experience: "10+ years in SEO", body: "Builds search, Google Maps and AI-search visibility for every clinic and location" },
            { name: "Content", size: "4+", experience: "7+ years in healthcare writing", body: "Writes accurate, patient-friendly treatment pages, blogs and answers people search for" },
            { name: "Google and Meta Ads", size: "3+", experience: "7+ years", body: "Runs treatment-specific campaigns on Google and Meta, planned around real patient intent" },
            { name: "Social Media", size: "5+", experience: "4+ years in healthcare marketing", body: "Builds trust and recall through doctor-led, compliant social content" },
            { name: "Creative", size: "7+", experience: "10+ years", body: "Designs ad creatives, social posts and visuals for each specialty" },
            { name: "Development", size: "3+", experience: "10+ years", body: "Builds fast, mobile-ready clinic websites designed to turn visits into enquiries" },
          ],
        },
        {
          title: "Turn Enquiries Into Bookings",
          teams: [
            { name: "Call-Centre Optimisation", size: "7+", experience: "10+ years", body: "Improves routing, response times and call quality, so more enquiries become appointments" },
            { name: "Automation", size: "4", experience: "5+ years", body: "Runs CRM, WhatsApp follow-up and missed-call recovery for every enquiry" },
            { name: "Client Servicing", size: "3+", experience: "9+ years", body: "Your day-to-day point of contact, sharing walk-in reports and next steps" },
          ],
        },
        {
          title: "Keep Every Account on Standard",
          teams: [
            { name: "Quality and Process", size: "3+", experience: "5+ years", body: "Checks every department's work against one standard before it reaches you" },
          ],
        },
      ],
    },
    closing: {
      eyebrow: "Book Your Proven Results",
      heading: "Get the Gap Between Leads & Walk-Ins Filled Without Any Delay",
      body: "See how the Reinvent Digital Patient Acquisition System connects your campaigns, call team and CRM, and how every walk-in is tracked back to its source.",
    },
  },
];

export const getAboutBySlug = (slug) => ABOUT_PAGES.find((a) => a.slug === slug);
