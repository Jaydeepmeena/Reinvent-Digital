import { Smile, HeartPulse, Eye, Building2 } from "lucide-react";

export const INDUSTRIES = [
  {
    slug: "dental-clinic",
    icon: Smile,
    eyebrow: "Dental Groups & Clinics",
    title: "Dental Clinic",
    accent: "marketing built for booked chairs.",
    description:
      "From single-doctor practices to 100+ location dental groups, we connect implant, ortho and cosmetic dentistry campaigns to the call centre and CRM that turn enquiries into filled appointment slots.",
    heroStats: [
      { value: "115+", label: "dental locations scaled" },
      { value: "2.1x", label: "avg increase in bookings" },
      { value: "<60 sec", label: "avg response time" },
    ],
    highlights: [
      "Implant & cosmetic campaign targeting",
      "Multi-location call routing",
      "Chair-utilisation focused reporting",
      "Review & reputation management",
    ],
    metric: { value: "2.1x", label: "more booked appointments", sub: "across managed dental groups" },
    challenges: [
      { title: "High-value procedures, slow follow-up", body: "Implant and cosmetic enquiries are expensive to generate and easy to lose when follow-up takes hours instead of minutes.", tag: "Lost revenue" },
      { title: "Chair time sits empty", body: "Marketing reports leads while the schedule shows gaps — nobody connects enquiry volume to actual chair utilisation.", tag: "Utilisation gap" },
      { title: "Reviews decide the click", body: "Patients compare star ratings before they compare price, and most clinics have no system for generating them.", tag: "Trust gap" },
    ],
    approach: [
      { title: "Target by procedure value", body: "Implant, ortho and cosmetic campaigns are budgeted separately from routine check-up demand, so spend matches procedure value." },
      { title: "Route to the nearest chair", body: "Enquiries are routed by location and doctor availability, not a single shared queue." },
      { title: "Score for booking, not just answer", body: "Call quality is judged on whether the patient actually got scheduled, not just whether the phone was picked up." },
      { title: "Report on filled chairs", body: "Dashboards tie campaign spend to booked and completed appointments, not just leads." },
    ],
    proof: {
      headline: "A 60-location dental group went from 3,400 to 7,600 monthly bookings in eight months — with the same front-desk team.",
      body: "The group didn't have a lead problem — implant and ortho campaigns were already generating enquiries. It had a routing and follow-up problem. We rebuilt call coverage around actual enquiry patterns and connected every booking back to its source campaign.",
      metrics: [
        { value: "3,400", label: "monthly bookings before", sub: "BEFORE" },
        { value: "7,600", label: "monthly bookings after 8 months", sub: "AFTER" },
        { value: "2.2x", label: "increase in booked chairs" },
        { value: "-34%", label: "cost per booked patient" },
      ],
    },
    testimonial: {
      quote: "Reinvent Digital didn't just send us leads — they rebuilt how our front desk handles them. Our chair utilisation has never been this consistent.",
      name: "Dr. Aakash Mehta",
      role: "Clinical Director, multi-location dental group",
    },
  },
  {
    slug: "ivf-clinic",
    icon: HeartPulse,
    eyebrow: "Fertility & IVF Networks",
    title: "IVF & Fertility Clinic",
    accent: "marketing built on trust, not volume.",
    description:
      "Fertility patients research for weeks before they call. We build the SEO, content and nurture systems that earn trust early — and the call centre discipline that treats every enquiry with the sensitivity it needs.",
    heroStats: [
      { value: "2.4x", label: "avg consultation bookings" },
      { value: "18 pts", label: "avg consult-to-cycle conversion lift" },
      { value: "90 days", label: "avg patient research window" },
    ],
    highlights: [
      "Trust-first content & SEO",
      "Sensitive-handling call scripts",
      "Long-cycle nurture automation",
      "Consultation-to-cycle attribution",
    ],
    metric: { value: "2.4x", label: "more consultation bookings", sub: "across managed fertility networks" },
    challenges: [
      { title: "Long, emotional decision cycles", body: "Patients research for weeks or months — generic follow-up cadences either annoy them or lose them entirely.", tag: "Long cycle" },
      { title: "One wrong call ends the relationship", body: "Fertility enquiries need a different tone than a routine booking call, and most call centres aren't trained for it.", tag: "Sensitivity risk" },
      { title: "Consultation isn't the real outcome", body: "Marketing stops measuring at 'consultation booked', but the clinic's real outcome is a started cycle.", tag: "Wrong metric" },
    ],
    approach: [
      { title: "Build trust before the call", body: "Content and SEO are built around the actual questions fertility patients research, not generic keywords." },
      { title: "Nurture over months, not days", body: "Automation sequences are paced for a decision that takes weeks, with tone calibrated for sensitivity." },
      { title: "Train for the conversation", body: "Call scripts and agent coaching are built specifically around fertility enquiries, not adapted from a generic script." },
      { title: "Track to cycle start", body: "Attribution follows the patient from first click through consultation to started cycle, not just the first booking." },
    ],
    proof: {
      headline: "A fertility network doubled consultation-to-cycle conversion by fixing follow-up tone and timing, not ad spend.",
      body: "Enquiry volume was already healthy. The gap was in follow-up: generic cadences and scripts were losing patients who needed a slower, more careful nurture. We rebuilt the sequence and call approach around the real decision timeline.",
      metrics: [
        { value: "210", label: "monthly consultations before", sub: "BEFORE" },
        { value: "480", label: "monthly consultations after 6 months", sub: "AFTER" },
        { value: "+18 pts", label: "consult-to-cycle conversion" },
        { value: "-22%", label: "cost per started cycle" },
      ],
    },
    testimonial: {
      quote: "They understood that our patients aren't comparing prices, they're building trust. The nurture sequences and call training changed how many consultations actually became cycles.",
      name: "Dr. Sunita Rao",
      role: "Medical Director, fertility & IVF network",
    },
  },
  {
    slug: "eye-clinics",
    icon: Eye,
    eyebrow: "Eye Care & LASIK Networks",
    title: "Eye Care Clinic",
    accent: "marketing that fills LASIK and cataract calendars.",
    description:
      "From routine check-ups to LASIK and cataract surgery, we run the paid, local and content campaigns that fill both walk-in eye tests and high-value surgical consultations.",
    heroStats: [
      { value: "2.6x", label: "avg surgical consult increase" },
      { value: "55%", label: "of leads from local & maps" },
      { value: "40+", label: "eye care locations managed" },
    ],
    highlights: [
      "LASIK & cataract campaign targeting",
      "Local & Maps-first visibility",
      "Free-screening funnel design",
      "Surgical consult attribution",
    ],
    metric: { value: "2.6x", label: "more surgical consultations", sub: "across managed eye care networks" },
    challenges: [
      { title: "Two very different patients, one campaign", body: "Routine eye-test demand and high-value LASIK/cataract demand get lumped into the same generic campaign, wasting budget on both.", tag: "Mixed intent" },
      { title: "Local search decides the click", body: "Most eye-care searches are hyper-local — 'near me' — and Maps visibility often loses to bigger chains with better profiles.", tag: "Local visibility" },
      { title: "Free screenings don't convert themselves", body: "Screening campaigns generate footfall but no system exists to convert screenings into booked surgical consultations.", tag: "Funnel gap" },
    ],
    approach: [
      { title: "Split the funnel by intent", body: "Routine and surgical demand get separate campaigns, budgets and landing pages so spend matches actual value." },
      { title: "Win the map pack", body: "Business profile and local SEO are optimised location by location to win 'near me' searches from bigger competitors." },
      { title: "Design the screening funnel", body: "Free-screening campaigns are built with a clear next step, so footfall converts into surgical consultations." },
      { title: "Attribute to the consult", body: "Every screening and enquiry is tracked through to whether it became a booked surgical consultation." },
    ],
    proof: {
      headline: "A 40-location eye care chain grew surgical consultations 2.6x by splitting routine and surgical campaigns.",
      body: "Routine check-up demand was drowning out LASIK and cataract campaigns in a shared budget. Once we split intent, rebuilt local visibility and designed a proper screening-to-consult funnel, surgical consultations grew without increasing overall spend.",
      metrics: [
        { value: "640", label: "monthly surgical consults before", sub: "BEFORE" },
        { value: "1,670", label: "monthly surgical consults after 7 months", sub: "AFTER" },
        { value: "2.6x", label: "increase in surgical consults" },
        { value: "-29%", label: "cost per surgical consult" },
      ],
    },
    testimonial: {
      quote: "Splitting our routine and surgical campaigns sounds simple, but nobody had done it before Reinvent Digital. Our LASIK consultations nearly tripled.",
      name: "Dr. Rohan Kapadia",
      role: "Chief Operating Officer, eye care hospital network",
    },
  },
  {
    slug: "multi-speciality-hospital",
    icon: Building2,
    eyebrow: "Hospitals & Multi-Speciality Groups",
    title: "Multi-Speciality Hospital",
    accent: "marketing that scales across departments.",
    description:
      "Cardiology, orthopaedics, oncology and a dozen other departments each need their own demand strategy — connected to one call centre and one attribution system so leadership sees the whole picture.",
    heroStats: [
      { value: "12+", label: "departments managed per hospital" },
      { value: "1.9x", label: "avg increase in OPD bookings" },
      { value: "1 dashboard", label: "across every department" },
    ],
    highlights: [
      "Department-level campaign strategy",
      "Unified call centre across specialties",
      "Emergency vs elective demand separation",
      "Board-ready attribution reporting",
    ],
    metric: { value: "1.9x", label: "more OPD bookings", sub: "across managed hospital groups" },
    challenges: [
      { title: "Every department markets differently, badly", body: "Cardiology, orthopaedics and oncology each need distinct messaging and urgency, but often share one generic hospital campaign.", tag: "Department silos" },
      { title: "One call centre, a dozen specialties", body: "Front-desk and call teams struggle to route high-urgency emergency enquiries differently from elective OPD bookings.", tag: "Routing complexity" },
      { title: "Leadership can't see the whole picture", body: "Each department reports its own numbers differently, so hospital leadership has no single view of marketing performance.", tag: "Reporting gap" },
    ],
    approach: [
      { title: "Strategise by department", body: "Each specialty gets its own campaign strategy, keywords and messaging — built around how that department actually gets chosen." },
      { title: "Separate urgency from elective demand", body: "Emergency and time-sensitive enquiries are routed differently from elective OPD bookings from the first call." },
      { title: "Unify the call centre", body: "One trained team handles routing across departments, escalating urgent cases and scheduling elective ones." },
      { title: "Report to the board", body: "A single dashboard rolls every department up into one view leadership can actually use to make decisions." },
    ],
    proof: {
      headline: "A multi-speciality hospital group grew OPD bookings 1.9x while giving leadership one dashboard across 14 departments.",
      body: "Each department had been marketing independently with no shared reporting. We built department-specific campaigns on a shared attribution backbone, so spend could be compared and shifted across specialties for the first time.",
      metrics: [
        { value: "8,200", label: "monthly OPD bookings before", sub: "BEFORE" },
        { value: "15,600", label: "monthly OPD bookings after 9 months", sub: "AFTER" },
        { value: "1.9x", label: "increase in OPD bookings" },
        { value: "14", label: "departments on one dashboard" },
      ],
    },
    testimonial: {
      quote: "For the first time, our board sees one number for marketing performance across every department — not fourteen different spreadsheets.",
      name: "Ms. Kavitha Iyer",
      role: "VP Growth & Marketing, multi-speciality hospital group",
    },
  },
];

export const getIndustryBySlug = (slug) => INDUSTRIES.find((i) => i.slug === slug);
