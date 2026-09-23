import { FileText, BarChart3, Newspaper } from "lucide-react";

export const RESOURCE_PAGES = [
  {
    slug: "case-study",
    icon: FileText,
    eyebrow: "Proof of Work",
    title: "Case Studies",
    accent: "real systems, real booking numbers.",
    description:
      "A closer look at how we rebuilt patient acquisition systems across dental, fertility, eye care and hospital groups — and the booking numbers that followed.",
    items: [
      { title: "60-location dental group: 3,400 → 7,600 monthly bookings", tag: "Dental", summary: "How call routing and coverage planning doubled bookings without adding front-desk headcount." },
      { title: "Fertility network: doubling consult-to-cycle conversion", tag: "IVF & Fertility", summary: "Why slowing down the nurture sequence increased conversions instead of hurting them." },
      { title: "40-location eye care chain: 2.6x surgical consultations", tag: "Eye Care", summary: "Splitting routine and surgical campaigns unlocked growth without new budget." },
      { title: "14-department hospital group: one dashboard, 1.9x OPD growth", tag: "Hospital", summary: "Building department-specific campaigns on one shared attribution backbone." },
    ],
  },
  {
    slug: "research-reports",
    icon: BarChart3,
    eyebrow: "Original Research",
    title: "Research Reports",
    accent: "data on how patients actually search and book.",
    description:
      "Original research from across our managed accounts — response-time benchmarks, channel mix data and what's changing as AI search reshapes patient discovery.",
    items: [
      { title: "The 60-Second Response Benchmark", tag: "Call Centre", summary: "How response time correlates with booking rate across 120+ managed accounts." },
      { title: "Where Patients Actually Start Searching", tag: "Channel Mix", summary: "A breakdown of Search, Maps, Social and AI-assistant discovery across specialties." },
      { title: "AI Search & Healthcare: The First Signals", tag: "AEO & GEO", summary: "Early data on how often ChatGPT and AI Overviews mention healthcare providers." },
    ],
  },
  {
    slug: "blogs",
    icon: Newspaper,
    eyebrow: "Insights",
    title: "Blog",
    accent: "practical notes on patient acquisition.",
    description:
      "Short, practical writing on the systems behind patient acquisition — call centre operations, healthcare SEO, CRM setup and what we're learning from the accounts we run.",
    items: [
      { title: "Why 'Cost Per Lead' Is the Wrong Metric for Healthcare Marketing", tag: "Strategy", summary: "And what to measure instead if you actually want fuller appointment books." },
      { title: "A Front Desk's Guide to Call Scoring", tag: "Call Centre", summary: "The 100-point rubric we use to turn call recordings into coaching material." },
      { title: "AEO vs SEO: What Changes When Patients Ask AI Instead of Google", tag: "AEO & GEO", summary: "A practical breakdown of what to structure differently for AI-assistant visibility." },
    ],
  },
];

export const getResourceBySlug = (slug) => RESOURCE_PAGES.find((r) => r.slug === slug);
