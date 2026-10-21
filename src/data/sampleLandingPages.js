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
    overview:
      "<p>Most hospital marketing is bought in pieces: an SEO vendor, a separate ads agency, a call centre that reports to no one. The gaps between them are where admissions leak. We run the whole chain as one accountable team, so a patient who searches on Tuesday, calls on Wednesday and is admitted the following month can be traced back to the campaign that started it.</p><p>That single thread — from first search to confirmed admission — is what lets the board fund the departments that actually convert, instead of spreading budget evenly across a building where half the departments carry the revenue.</p>",
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

  // A sample landing page that features service-related blog posts. It shows how
  // the `blogs` section works: list the slugs of the blog posts to feature, in
  // the order you want them, and the page pulls those posts from the blog and
  // lays them out as cards. Nothing on the site links to it; it lives at
  // /google-ads-for-dental-clinics.
  {
    slug: "google-ads-for-dental-clinics",
    title: "Google Ads for Dental Clinics",
    seo: {
      title: "Google Ads for Dental Clinics | Reinvent Digital",
      description:
        "Google Ads built for dental clinics: treatment-level campaigns, call tracking on every number, and cost reported per booked chair, not per click.",
      noindex: false,
    },
    hero: {
      eyebrow: "Patient acquisition, engineered for healthcare",
      headline: "Google Ads That Fill Chairs,",
      accent: "Not Just the Enquiry Sheet",
      description:
        "Most dental clinics pay for clicks and hope. We build Google Ads per treatment, track every call, and report cost per booked chair, so you know which campaign filled which slot.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Let's Connect", href: "/contact" },
      stats: [
        { value: "5.2x", label: "Average ROAS" },
        { value: "-41%", label: "Cost per booking" },
        { value: "<60 sec", label: "First response target" },
      ],
    },
    intro:
      "<p>A dental clinic does not need more clicks. It needs more chairs filled, and it needs to know which campaign filled them. Google Ads for dental clinics works when the campaign is built around the treatment a patient searched for, the call that follows is answered, and the booking is traced back to its source.</p>",
    overview:
      "<p>The clinics that win with Google Ads are not the ones spending the most. They are the ones who know, for every rupee, which treatment it filled and what that chair was worth. That takes three things working together: campaigns split by treatment, a tracked number on every ad, and a front desk that turns the call into an appointment.</p><p>Get those three aligned and the account stops being a cost line and becomes a forecast — you can say how many implant consultations next month's budget will book, because last month's already told you.</p>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "Why Dental Clinics Work with Reinvent Digital",
      points: [
        "Campaigns are built per treatment, so implants, aligners and whitening each get their own ads and budget.",
        "Every number is tracked, so you hear which ad drove the call and whether the front desk booked it.",
        "We report cost per booked chair, not cost per click, because an empty chair does not care about a low CPC.",
        "One team runs the ads, the call scoring and the reporting, so nothing falls between vendors.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "What Goes Into a Dental Google Ads Account",
      items: [
        {
          title: "Treatment-Level Search Campaigns",
          body: "A patient searching for an implant is not the same as one searching for a check-up. We split the account by treatment so each ad speaks to the intent behind the search and the budget follows the treatments that book.",
        },
        {
          title: "Call Tracking on Every Number",
          body: "A tracked number on every ad and landing page, scored weekly, so you know which campaign drove the call and whether it became an appointment.",
        },
        {
          title: "Cost Per Booked Chair",
          body: "We connect the ad spend to the booking, so the report shows what each filled chair cost, not a dashboard of impressions nobody acts on.",
        },
      ],
      cta: { label: "See how the system works", href: "/google-ads" },
    },
    // The blog posts to feature on this page, by slug, in the order they should
    // appear. These come from the blog, so the slugs must match posts that
    // exist there.
    blogs: {
      eyebrow: "Related reading",
      heading: "Blogs on Getting Dental Ads to Pay",
      body: "The thinking behind how we run paid search for clinics, from the metric that matters to the response time that decides whether a lead books.",
      slugs: [
        "cost-per-lead-is-the-wrong-metric",
        "the-60-second-response-benchmark",
        "booking-attribution-without-a-data-team",
      ],
    },
    faqs: [
      {
        q: "How fast do you launch?",
        a: "Two weeks from kickoff. The first week is audit and tracking setup, not spend, so the account goes live already measuring what matters.",
      },
      {
        q: "Do you work with our front desk?",
        a: "Yes. The ads are only half of it. We score the calls your ads drive and feed back what is being missed, because a booked chair depends on the front desk as much as the campaign.",
      },
      {
        q: "What does it cost?",
        a: "It depends on your treatments, your city and how much of the call work you want us inside. Tell us the shape of the clinic and we will put a number against it.",
      },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Want This Running for Your Clinic?",
      body: "Tell us which treatments are underbooked and what your front desk does with an enquiry today. We will show you what it would take to connect the two.",
    },
  },
];
