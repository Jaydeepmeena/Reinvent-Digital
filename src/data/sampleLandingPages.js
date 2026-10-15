// Bundled landing pages.
//
// These stand in for the API while VITE_BLOG_API_URL is unset, so the template
// can be worked on and reviewed locally. They are also the worked example in
// docs/landing-pages-api.md: the shape here is exactly what the backend has to
// send. Nothing on the site links to them.
export const SAMPLE_LANDING_PAGES = [
  {
    slug: "digital-marketing-agency-for-multi-specialty-hospitals",
    title: "Digital Marketing Agency for Multi-Specialty Hospitals",
    seo: {
      title: "Digital Marketing Agency for Multi-Specialty Hospitals | Reinvent Digital",
      description:
        "Patient acquisition for multi-specialty hospitals: demand across Google, Meta and Maps, a call centre that answers, and CRM proof of which department each admission came from.",
      noindex: false,
    },
    hero: {
      eyebrow: "Patient acquisition, engineered for healthcare",
      headline: "Filling Every Department,",
      accent: "Not Just the Enquiry Sheet",
      description:
        "A multi-specialty hospital runs twenty funnels at once. We build the demand, route the calls and close the loop in your CRM, so you can see which department each admission came from and what it cost.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Let's Connect", href: "/contact" },
      stats: [
        { value: "2.4x", label: "Qualified enquiries" },
        { value: "-38%", label: "Cost per admission" },
        { value: "92%", label: "Calls answered first time" },
      ],
    },
    intro:
      "<p>Every hospital is different. The departments that carry the revenue, the catchment each one draws from, the consultants patients come back for. A digital marketing agency for multi-specialty hospitals has to work department by department, not run one campaign for the whole building, because cardiology and orthopaedics are not competing for the same patient on the same day.</p>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "Reasons Hospitals Should Work with Reinvent Digital",
      points: [
        "Patients research a hospital long before they call one. We make sure yours is what they find.",
        "We plan per department, so cardiology, oncology and orthopaedics each get their own demand and their own budget.",
        "Your call centre is part of the funnel. We measure what it answers, what it misses and what it books.",
        "Every enquiry lands in your CRM tagged by source, so the board sees admissions, not clicks.",
        "One team across Google Ads, Meta, SEO and Maps costs less than four vendors who do not talk to each other.",
        "Reporting is written for a management review, not for a marketing dashboard nobody opens.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "Essential Digital Marketing Services for Hospitals",
      items: [
        {
          title: "Getting Found on Google (SEO)",
          body: "Patients search for a procedure, a symptom or a consultant, rarely for a hospital by name. We build the pages that answer those searches, department by department, and keep them ranking as the rest of the city publishes the same thing.",
        },
        {
          title: "Ads That Reach the Right Catchment (PPC)",
          body: "Search and Performance Max built per department, capped per catchment, with call tracking on every number. You see cost per booked consultation, not cost per click, and the budget follows the departments that convert.",
        },
        {
          title: "Maps and the Local Pack",
          body: "For most hospitals Google Maps outperforms the website. We keep every listing accurate across branches, work the review flow so ratings hold up, and make sure the directions a patient taps actually reach your gate.",
        },
        {
          title: "The Call Centre and the CRM",
          body: "Demand is the easy half. We sit with your call centre on response time, scripting and follow-up, and wire the outcome back into the CRM, so an admission in March can be traced to the campaign that started it in January.",
        },
      ],
      cta: { label: "See how the system works", href: "/what-we-do/google-ads" },
    },
    faqs: [
      {
        q: "How is this different from a general digital marketing agency?",
        a: "A general agency stops at the lead. We carry it through the call centre and into the CRM, because a hospital's problem is rarely the number of enquiries, it is how many of them are answered, booked and admitted.",
      },
      {
        q: "Can you work department by department?",
        a: "That is the only way it works. Each department gets its own demand plan, its own budget and its own cost per admission, so the ones that carry the revenue are funded properly.",
      },
      {
        q: "How soon do we see results?",
        a: "Paid search and Maps usually move within the first six to eight weeks. SEO and content compound over two to three quarters. We report on both separately so the slower half is never hidden behind the faster one.",
      },
      {
        q: "What does it cost?",
        a: "It depends on the number of departments, the cities you draw from and how much of the call centre work you want us inside. Tell us the shape of the group and we will put a number against it.",
      },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Want This Running for Your Hospital?",
      body: "Tell us which departments are underfilled and what your call centre does with an enquiry today. We will tell you what it would take to connect the two.",
    },
  },
];
