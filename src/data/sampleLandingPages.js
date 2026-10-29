// Bundled landing pages.
//
// These stand in for the API while VITE_BLOG_API_URL is unset, so the template
// can be worked on and reviewed locally. They are also the worked example in
// docs/landing-pages-api.md: the shape here is exactly what the backend has to
// send. Nothing on the site links to them.
export const SAMPLE_LANDING_PAGES = [
  {
    slug: "digital-marketing-agency-for-hospital",
    replaces: "digital-marketing-agency-for-multi-specialty-hospitals",
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

  // A city landing page (programmatic SEO): digital marketing for clinics in
  // Mumbai. Lives at /digital-marketing-company-in-mumbai; nothing links to it.
  {
    slug: "digital-marketing-company-in-mumbai",
    title: "Digital Marketing Company in Mumbai for Clinics",
    seo: {
      title: "Digital Marketing Company in Mumbai for Clinics | Reinvent Digital",
      description:
        "A digital marketing company in Mumbai for clinics and hospitals, from Colaba to Mulund. Google Ads, SEO and Google Maps, measured on walk-ins, not clicks.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Mumbai Clinics",
      headline: "Get Noticed Online & Chosen by",
      accent: "Patients Across Mumbai",
      description:
        "Reinvent Digital is a digital marketing company in Mumbai for clinics and hospitals from Colaba to Mulund. We run Google Ads, SEO and Google Maps, measured on walk-ins.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss the Patient Acquisition System", href: "/contact" },
      stats: [
        { value: "20-30%", label: "Missed leads recovered in the same session" },
        { value: "115+", label: "Locations served" },
        { value: "2.1x", label: "Monthly walk-ins for a multi-location group" },
      ],
      highlights: ["Google Ads", "Meta Ads", "SEO, AEO & GEO", "Google Maps & Local SEO"],
    },
    splitSections: [
      {
        eyebrow: "Channels",
        heading: "Which Digital Marketing Channels Bring Mumbai Patients to a Clinic or Hospital?",
        body: "A patient in Mumbai can find a clinic through search, Maps, social media or an AI answer. Each channel needs to lead to the same booking.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Google Search", body: "Searches naming a treatment and a suburb, such as root canal in Andheri, show clear intent to book." },
          { title: "Google Maps", body: "The Maps profile shows hours, location and doctor details before a patient decides which clinic to call." },
          { title: "Meta platforms", body: "Facebook and Instagram reach patients before they search, which suits planned treatments rather than urgent care." },
          { title: "AI answers", body: "Tools such as Google AI Overviews and ChatGPT now answer clinic questions, so clear, consistent information matters." },
        ],
      },
      {
        eyebrow: "What we run",
        heading: "What Digital Marketing Services Does Reinvent Digital Offer in Mumbai?",
        body: "Each service runs inside the Reinvent Digital Patient Acquisition System, so every channel is tracked from first enquiry to walk-in.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Google Ads", body: "Treatment and locality campaigns for Mumbai clinics and hospitals, with call tracking and NMC-compliant ad copy." },
          { title: "Meta Ads", body: "Facebook and Instagram campaigns with doctor registration details on every ad, built for planned treatments." },
          { title: "SEO, AEO and GEO", body: "Search Engine Optimisation, Answer Engine Optimisation and Generative Engine Optimisation for search results, direct answers and AI tools." },
          { title: "Google Maps and local SEO", body: "Profile management, location pages and name, address and phone checks for every Mumbai clinic or hospital you run." },
        ],
      },
      {
        eyebrow: "Why work with us",
        heading: "Why Do Mumbai Clinics and Hospitals Choose Reinvent Digital?",
        body: "Clinic owners comparing a digital marketing company in Mumbai should look at proof, process and compliance. Here is ours.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=70",
        points: [
          "5,500 to 11,500 monthly walk-ins in 8 months.",
          "Walk-ins per agent up from about 367 to 767 a month.",
          "Show-up rate typically up 15–25% within 60 days of reminders.",
          "Doctor name and registration number shown on every client ad.",
          "Four core specialities: dental, IVF, eye care and hospitals.",
          "Founded in 2015, now focused only on healthcare.",
          "Owner with 20+ years in healthcare marketing.",
          "Nearby areas: Colaba, Dadar, Worli, Bandra, Andheri, Powai, Chembur and Borivali, and the localities between them.",
        ],
      },
      {
        eyebrow: "On-site support",
        heading: "No Office Visit Needed. We Come to Your Clinic or Hospital.",
        body: "Our team visits your clinic in Mumbai at onboarding and on a regular schedule after that.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Onboarding visit", body: "We review your front desk, call flow and Google Maps profiles before any campaign goes live." },
          { title: "Scheduled visits", body: "Our team returns on an agreed schedule to review results and front-desk handling with you." },
          { title: "Live attribution dashboard", body: "See leads, appointments and walk-ins by channel, without waiting for a monthly report." },
          { title: "Call scoring and coaching", body: "Enquiry calls are scored on a 100-point scale, with weekly coaching for your front desk or call team." },
          { title: "Your CRM or ours", body: "We set up your existing CRM if it tracks source and outcome, or move you to MedLift." },
          { title: "Book a visit", body: "To book an onboarding visit at your clinic or hospital in Mumbai, call our team on +91 7428094567." },
        ],
      },
    ],
    plan: {
      eyebrow: "What happens next",
      heading: "Three Steps From First Audit to Patient Walk-Ins",
      steps: [
        { label: "Day 1", title: "Tell Us About Your Clinic", body: "Share your centres, treatments, targets and the problems you're facing right now." },
        { label: "Week 1", title: "We Map the Gaps", body: "We review your ads, Maps listings, calls and CRM to find where patients drop off." },
        { label: "Week 2", title: "Get a Proven Plan", body: "A scoped plan that starts within 5 km of each centre, with monthly walk-in reviews built in." },
      ],
    },
    faqs: [
      {
        q: "How do you choose the best digital marketing company in Mumbai for a clinic?",
        a: "Judge it on evidence, not claims. Key factors include healthcare experience, a verifiable track record, client references and how results are measured. Ask whether the company reports walk-ins or only leads, uses call tracking, and follows the NMC advertising guidelines on every ad it runs.",
      },
      {
        q: "What is the ideal budget for digital marketing for a clinic in Mumbai?",
        a: "There is no fixed figure. The right budget depends on your speciality, number of locations, the treatments you promote and competition in your part of Mumbai. We start with an audit, then recommend spend per channel based on the walk-ins each one is expected to support.",
      },
      {
        q: "Is it worth hiring a digital marketing company in Mumbai?",
        a: "It is worth it when the company measures outcomes your clinic cares about. A partner that tracks calls, appointments and walk-ins by channel shows which spend is working. Without that tracking, you judge marketing on clicks and leads, which do not show how many patients arrived.",
      },
      {
        q: "How much does a digital marketing company in Mumbai charge?",
        a: "Fees vary with scope: the number of clinic or hospital locations, the channels managed and whether call handling is included. Reinvent Digital shares a written scope and quote after reviewing what you run today, so you know what each part covers before you commit.",
      },
      {
        q: "How does Reinvent Digital work with Mumbai clinics without a local office?",
        a: "Our team visits your clinic at onboarding and on a regular schedule after that. Between visits, you see leads, appointments and walk-ins on a live dashboard. Enquiry calls are scored and coached each week, while ads and Maps profiles are managed remotely.",
      },
      {
        q: "How do the NMC advertising guidelines affect clinic marketing in Mumbai?",
        a: "Since 6 October 2026, clinic ads and posts cannot use patient testimonials, before-and-after images, discounts, or words such as best or painless. Each must show the doctor's name, qualifications and registration number. The doctor remains responsible even when an agency runs the campaign.",
      },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Ready to Fill More Chairs Across Mumbai?",
      body: "Tell us about your centres, treatments and where enquiries go quiet today. We will map the gaps and show you what it would take to turn Mumbai searches into walk-ins.",
    },
  },

  // City landing page: Calicut.
  {
    slug: "digital-marketing-company-in-calicut",
    title: "Digital Marketing Company in Calicut for Clinics",
    seo: {
      title: "Digital Marketing Company in Calicut for Clinics | Reinvent Digital",
      description:
        "A digital marketing company in Calicut for clinics and hospitals, from Mavoor Road to Feroke. Every campaign is measured on the walk-ins it brings.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Calicut Clinics",
      headline: "Patients Are Searching Online.",
      accent: "Is Your Calicut Clinic There Yet?",
      description:
        "Reinvent Digital is a digital marketing company in Calicut for clinics and hospitals, from Mavoor Road to Feroke. Every campaign is measured on the walk-ins it brings.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss the Patient Acquisition System", href: "/contact" },
      stats: [
        { value: "20-30%", label: "Missed leads recovered in the same session" },
        { value: "115+", label: "Locations served" },
        { value: "2.1x", label: "Monthly walk-ins for a multi-location group" },
      ],
      highlights: ["Catchment Google Ads", "Meta Ads (Malayalam & English)", "SEO, AEO & GEO", "Missed-call WhatsApp follow-up"],
    },
    splitSections: [
      {
        eyebrow: "Channels",
        heading: "How Do Patients in Calicut Find a Clinic or Hospital Online?",
        body: "Calicut clinics and hospitals see patients from the city and from surrounding towns. For many of them, the choice starts with an online search.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Malayalam and English search", body: "Patients search in both languages, so ads and profiles need to read naturally in each." },
          { title: "Travel from nearby districts", body: "Families from Malappuram, Wayanad and Kannur may compare Calicut hospitals before planning a visit." },
          { title: "WhatsApp before a call", body: "A WhatsApp message is often the first contact, so a slow reply can lose the enquiry." },
          { title: "Doctor credentials", body: "Patients look for the doctor's qualifications and registration on Google Maps and the clinic website before booking." },
        ],
      },
      {
        eyebrow: "What we run",
        heading: "What Does Reinvent Digital Run for Clinics and Hospitals in Calicut?",
        body: "The Reinvent Digital Patient Acquisition System connects four services, so each Calicut enquiry can be traced to a walk-in.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Catchment-based Google Ads", body: "Campaigns set by treatment and travel radius, covering Calicut and the towns your patients come from." },
          { title: "Meta Ads in Malayalam and English", body: "Facebook and Instagram ads that show the treating doctor's registration details, written for each audience." },
          { title: "Healthcare SEO, AEO and GEO", body: "Search Engine Optimisation, Answer Engine Optimisation and Generative Engine Optimisation for Google results and AI answers." },
          { title: "Missed-call WhatsApp follow-up", body: "Missed calls trigger an automatic WhatsApp reply, which typically recovers 20–30% of those leads in the same session." },
        ],
      },
      {
        eyebrow: "Why work with us",
        heading: "Why Do Calicut Healthcare Groups Work With Reinvent Digital?",
        body: "Choosing a digital marketing company in Calicut comes down to what it measures and how it handles compliance.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=70",
        points: [
          "A 115+ clinic dental group: 5,500 to 11,500 walk-ins a month.",
          "The same 15 agents and same CRM, over 8 months.",
          "20–30% of missed leads recovered through WhatsApp follow-up.",
          "100-point scoring on enquiry calls, with weekly coaching.",
          "Doctor registration number on every client ad and post.",
          "Dental, IVF and fertility, eye care and multi-speciality hospitals.",
          "Founded in 2015; owner with 20+ years in healthcare marketing.",
          "Nearby areas: Mavoor Road, Nadakkavu, Eranhipalam, Thondayad, Chevayur, West Hill, Medical College and the areas around them.",
        ],
      },
      {
        eyebrow: "On-site support",
        heading: "No Office Visit Needed. We Come to Your Clinic or Hospital.",
        body: "Our team visits your clinic in Calicut at onboarding and on a regular schedule after that.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "First visit", body: "We sit with your front desk, listen to enquiry calls and review your Google Maps profile." },
          { title: "Return visits", body: "Our team comes back on a schedule agreed with you to review walk-ins and next steps." },
          { title: "One record per enquiry", body: "Website forms and WhatsApp messages land in one patient record, with the source saved." },
          { title: "Walk-ins by channel", body: "A dashboard shows which channel brought each lead, appointment and walk-in, without waiting for reports." },
          { title: "Your CRM or ours", body: "Keep your current CRM if it records source and outcome, or switch to MedLift." },
          { title: "Book a visit", body: "To arrange an onboarding visit at your clinic or hospital in Calicut, call our team on +91 7428094567." },
        ],
      },
    ],
    plan: {
      eyebrow: "What happens next",
      heading: "Three Steps From First Audit to Patient Walk-Ins",
      steps: [
        { label: "Day 1", title: "Tell Us About Your Clinic", body: "Share your centres, treatments, targets and the problems you're facing right now." },
        { label: "Week 1", title: "We Map the Gaps", body: "We review your ads, Maps listings, calls and CRM to find where patients drop off." },
        { label: "Week 2", title: "Get a Proven Plan", body: "A scoped plan that starts within 5 km of each centre, with monthly walk-in reviews built in." },
      ],
    },
    faqs: [
      { q: "How do you choose the best digital marketing company in Calicut for a clinic?", a: "Start with what the company measures. Ask for healthcare examples, client references and how it reports results: leads, appointments or walk-ins. Check that every ad it runs shows the doctor's registration details, as the NMC guidelines require. Strong answers here matter more than a long service list." },
      { q: "How should a clinic in Calicut set its digital marketing budget?", a: "Base it on your catchment, not just the city. A clinic drawing patients from nearby districts needs wider reach than one serving a few localities. Speciality and treatment mix matter too. We set spend per channel after an audit, then move it towards the channels producing walk-ins." },
      { q: "Can campaigns reach patients travelling to Calicut from nearby districts?", a: "Yes. Google Ads and Meta Ads can target by town, district or travel radius, so a Calicut hospital can reach families in Malappuram, Wayanad or Kannur. The ads must still follow NMC rules, and results should be tracked to walk-ins, not clicks." },
      { q: "Should clinic ads in Calicut be in Malayalam or English?", a: "It depends on who you treat and what you treat. Local, routine care may suit Malayalam, while some specialised services also draw English searches. The safest approach is to run both and compare walk-ins by language. NMC rules, including doctor registration details, apply in every language." },
      { q: "Will your team visit our clinic or hospital in Calicut?", a: "Yes. Our team visits your clinic at onboarding and on a regular schedule after that. The first visit covers your front desk, call handling and Google Maps profile. Between visits, enquiries and walk-ins stay visible on a live dashboard, and calls are scored and coached." },
      { q: "What can a hospital in Calicut still advertise under the NMC guidelines?", a: "Factual details are still allowed: departments, facilities, equipment, emergency services, accreditation, standard charges and a doctor directory with registration numbers. Health awareness content is also permitted if it does not solicit patients. Testimonials, offers, success rates and claims such as best are not." },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Ready to Fill More Chairs Across Calicut?",
      body: "Tell us about your centres, the districts your patients come from and where enquiries go quiet today. We will map the gaps and show you what it would take to turn Calicut searches into walk-ins.",
    },
  },

  // City landing page: Kochi.
  {
    slug: "digital-marketing-company-in-kochi",
    title: "Digital Marketing Company in Kochi for Clinics",
    seo: {
      title: "Digital Marketing Company in Kochi for Clinics | Reinvent Digital",
      description:
        "A digital marketing company in Kochi for clinics and hospitals, from Edappally to Tripunithura. We track every channel to the walk-ins it brings.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Kochi Clinics",
      headline: "Turn Clicks Into Patients Who",
      accent: "Walk Into Your Kochi Clinic",
      description:
        "Reinvent Digital is a digital marketing company in Kochi for clinics and hospitals, from Edappally to Tripunithura. We track every channel to the walk-ins it brings.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss the Patient Acquisition System", href: "/contact" },
      stats: [
        { value: "6K+", label: "Monthly walk-ins for a dental group" },
        { value: "115+", label: "Locations served" },
        { value: "2.1x", label: "Monthly walk-ins for a multi-location group" },
      ],
      highlights: ["Branch-level Google Maps", "Healthcare Google Ads", "Healthcare Meta Ads", "Call-centre optimisation"],
    },
    splitSections: [
      {
        eyebrow: "Channels",
        heading: "How Do Patients in Kochi Choose a Clinic or Hospital?",
        body: "Kochi stretches from Fort Kochi to Aluva, so patients weigh distance as much as reputation. Many of those checks happen online, before the first call.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Distance and traffic", body: "Patients compare how far a clinic is from home or work, often across bridges and busy junctions." },
          { title: "Branch details", body: "For clinic groups, patients look for the nearest branch's hours, doctors and directions on Google Maps." },
          { title: "Doctor qualifications", body: "Specialist training and registration details help patients compare doctors for planned treatments such as implants or eye surgery." },
          { title: "Response speed", body: "An unanswered call or a slow WhatsApp reply can send the patient straight to the next listing." },
        ],
      },
      {
        eyebrow: "What we run",
        heading: "What Does Reinvent Digital Manage for Kochi Clinics and Hospitals?",
        body: "Under the Reinvent Digital Patient Acquisition System, every service reports into one view of enquiries, appointments and walk-ins.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Branch-level Google Maps", body: "A separate, accurate profile for every branch, with hours, doctors and services kept consistent." },
          { title: "Healthcare Google Ads", body: "Treatment and area campaigns, from Kakkanad to Tripunithura, with call tracking from ad to walk-in." },
          { title: "Healthcare Meta Ads", body: "Facebook and Instagram campaigns for planned treatments, each ad showing the doctor's registration details." },
          { title: "Call-centre optimisation", body: "Routing, call scoring and coaching, whether your front desk or our agents answer the phone." },
        ],
      },
      {
        eyebrow: "Why work with us",
        heading: "What Makes Reinvent Digital a Fit for Kochi Healthcare Groups?",
        body: "A digital marketing company in Kochi should prove results, show its process and keep every ad within NMC rules.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=70",
        points: [
          "5,500 to 11,500 monthly walk-ins in 8 months.",
          "Walk-ins per agent: about 367 to 767 a month.",
          "Show-up rate typically up 15–25% within 60 days.",
          "20–30% of missed leads recovered in the same session.",
          "Every form and WhatsApp enquiry held in one record.",
          "Registration details on every client ad, as NMC requires.",
          "Founded in 2015, focused only on healthcare today.",
          "Nearby areas: Edappally, Kakkanad, Palarivattom, Kaloor, Vyttila, Kadavanthra, Panampilly Nagar and Aluva.",
        ],
      },
      {
        eyebrow: "On-site support",
        heading: "No Office Visit Needed. We Come to Your Clinic or Hospital.",
        body: "Our team visits your clinic in Kochi at onboarding and on a regular schedule after that.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "First visit", body: "We spend time with your reception staff and check how enquiries are answered and logged." },
          { title: "Return visits", body: "Our team returns on a schedule set with you, to cover results and anything to fix on site." },
          { title: "Call scoring", body: "Calls are scored out of 100, with weekly coaching for your front desk." },
          { title: "One record per enquiry", body: "Every form and WhatsApp enquiry is held in one patient record with its source." },
          { title: "Your CRM or ours", body: "We configure your existing CRM if it captures source and outcome, or set up MedLift." },
          { title: "Book a visit", body: "To schedule an onboarding visit at your clinic or hospital in Kochi, call our team on +91 7428094567." },
        ],
      },
    ],
    plan: {
      eyebrow: "What happens next",
      heading: "Three Steps From First Audit to Patient Walk-Ins",
      steps: [
        { label: "Day 1", title: "Tell Us About Your Clinic", body: "Share your centres, treatments, targets and the problems you're facing right now." },
        { label: "Week 1", title: "We Map the Gaps", body: "We review your ads, Maps listings, calls and CRM to find where patients drop off." },
        { label: "Week 2", title: "Get a Proven Plan", body: "A scoped plan that starts within 5 km of each centre, with monthly walk-in reviews built in." },
      ],
    },
    faqs: [
      { q: "How do you choose the best digital marketing company in Kochi for a clinic or hospital?", a: "Look at three things: proven healthcare experience, client success stories you can verify, and transparent communication. Then add a fourth: whether the company reports walk-ins or stops at leads. Every ad it runs should also show the doctor's registration details, as the NMC guidelines require." },
      { q: "Is it worth hiring a digital marketing company in Kochi?", a: "It is worth it when your current marketing cannot show which channel brings patients. A specialist team brings call tracking, attribution and NMC-compliant execution that are hard to build alone. If your setup already tracks walk-ins by channel, the case for hiring is weaker." },
      { q: "How do you market a clinic group with branches across Kochi?", a: "Each branch gets its own Google Maps profile, location page and area-based campaigns, so enquiries can be traced to the branch the patient chose. Shared details such as doctors and timings stay consistent everywhere, which helps search engines and AI tools describe the group correctly." },
      { q: "What should a Kochi clinic fix before running Google Ads?", a: "Four things: a complete Google Maps profile, a phone line that gets answered, a landing page with clear treatment details, and the doctor's registration information on every ad. Without these, ad spend brings enquiries that are hard to convert and harder to track." },
      { q: "Can IVF and eye care clinics in Kochi advertise success rates?", a: "No. The NMC guidelines of 6 October 2026 bar success rates and patient numbers in a doctor's or clinic's advertising. IVF and eye care clinics can promote accredited facilities, specialist qualifications, diagnostic equipment and factual information about procedures instead." },
      { q: "How often will your team visit our clinic in Kochi?", a: "Our team visits your clinic at onboarding and on a regular schedule after that. The schedule is agreed with you at onboarding. Between visits, call scores, coaching notes and walk-in data on your dashboard keep progress visible." },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Ready to Fill More Chairs Across Kochi?",
      body: "Tell us about your branches, the treatments you run and where enquiries go quiet today. We will map the gaps and show you what it would take to turn Kochi searches into walk-ins.",
    },
  },

  // City landing page: Chennai.
  {
    slug: "digital-marketing-company-in-chennai",
    title: "Digital Marketing Company in Chennai for Clinics",
    seo: {
      title: "Digital Marketing Company in Chennai for Clinics | Reinvent Digital",
      description:
        "A digital marketing company in Chennai for clinics and hospitals, from Anna Nagar to OMR. Every channel is reported on the walk-ins it brings.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Chennai Clinics",
      headline: "Bring Your Clinic Online. Bring",
      accent: "Chennai Patients Through the Door",
      description:
        "Reinvent Digital is a digital marketing company in Chennai for clinics and hospitals, from Anna Nagar to OMR. Every channel is reported on the walk-ins it brings.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss the Patient Acquisition System", href: "/contact" },
      stats: [
        { value: "6K+", label: "Monthly walk-ins for a dental group" },
        { value: "115+", label: "Locations served" },
        { value: "2.1x", label: "Monthly walk-ins for a multi-location group" },
      ],
      highlights: ["Area-targeted Google Ads", "GEO", "AEO & SEO", "Booking attribution"],
    },
    splitSections: [
      {
        eyebrow: "Channels",
        heading: "How Do Patients in Chennai Search for a Clinic?",
        body: "Chennai is large enough that patients usually start with their own area, their language and the treatment they need, not the whole city.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Area-led search", body: "Searches name the area, such as Anna Nagar, Velachery or OMR, alongside the treatment." },
          { title: "Tamil and English queries", body: "Patients search in both languages, and profiles that read well in each are easier to choose." },
          { title: "Wider search for specialist care", body: "For IVF, eye surgery or hospital care, patients often look beyond their own area." },
          { title: "AI-generated answers", body: "ChatGPT and Google AI Overviews can name clinics, drawing on whatever information is consistent online." },
        ],
      },
      {
        eyebrow: "What we run",
        heading: "Which Services Does Reinvent Digital Run for Chennai Clinics and Hospitals?",
        body: "Every service below runs within the Reinvent Digital Patient Acquisition System and is reported against walk-ins, not clicks.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Area-targeted Google Ads", body: "Separate campaigns for each Chennai area and treatment, with call tracking linked to walk-ins." },
          { title: "Generative Engine Optimisation (GEO)", body: "Consistent clinic details, structured data and clear summaries, so AI tools describe your clinic accurately." },
          { title: "Answer Engine Optimisation (AEO) and SEO", body: "Patient questions answered directly on your pages, for Featured Snippets and People Also Ask." },
          { title: "Booking attribution", body: "Leads, appointments and walk-ins tracked by channel on one dashboard, in MedLift or your own CRM." },
        ],
      },
      {
        eyebrow: "Why work with us",
        heading: "Why Do Chennai Clinics and Hospitals Partner With Reinvent Digital?",
        body: "When comparing a digital marketing company in Chennai, check the proof behind each claim. These are the numbers and practices behind ours.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=70",
        points: [
          "2.1x monthly walk-ins for one dental group.",
          "No agents added while walk-ins rose by 6,000 a month.",
          "185+ healthcare accounts managed.",
          "Missed calls followed up automatically on WhatsApp.",
          "Enquiry calls scored on a 100-point scale, coached weekly.",
          "Doctor name, qualifications and registration on every client ad.",
          "Founded in 2015; owner with 20+ years in healthcare marketing.",
          "Nearby areas: Anna Nagar, T. Nagar, Adyar, Velachery, Mylapore, Porur, Vadapalani and the OMR corridor.",
        ],
      },
      {
        eyebrow: "On-site support",
        heading: "No Office Visit Needed. We Come to Your Clinic or Hospital.",
        body: "Our team visits your clinic in Chennai at onboarding and on a regular schedule after that.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "First visit", body: "We follow an enquiry from the first call to booking at your front desk and map the gaps." },
          { title: "Return visits", body: "Our team returns on an agreed schedule, focused on results and front-desk handling." },
          { title: "Targets in writing", body: "Targets are set around walk-ins and agreed in writing before work starts." },
          { title: "One record per enquiry", body: "Missed calls trigger an automatic WhatsApp follow-up, saved in one patient record." },
          { title: "Your CRM or ours", body: "We use your CRM if it records source and outcome, or set up MedLift." },
          { title: "Book a visit", body: "To plan an onboarding visit at your clinic or hospital in Chennai, call our team on +91 7428094567." },
        ],
      },
    ],
    plan: {
      eyebrow: "What happens next",
      heading: "Three Steps From First Audit to Patient Walk-Ins",
      steps: [
        { label: "Day 1", title: "Tell Us About Your Clinic", body: "Share your centres, treatments, targets and the problems you're facing right now." },
        { label: "Week 1", title: "We Map the Gaps", body: "We review your ads, Maps listings, calls and CRM to find where patients drop off." },
        { label: "Week 2", title: "Get a Proven Plan", body: "A scoped plan that starts within 5 km of each centre, with monthly walk-in reviews built in." },
      ],
    },
    faqs: [
      { q: "How do you choose the best digital marketing company in Chennai for a clinic?", a: "Look at proven results, client success stories, healthcare experience and a portfolio you can check. Then ask how results are reported, because a company that stops at leads cannot show which channel brought patients in. Confirm every ad will carry the doctor's registration details under NMC rules." },
      { q: "How much does a digital marketing company in Chennai charge for a clinic?", a: "Charges depend on the scope of work: how many locations, which channels, and whether call handling and CRM setup are included. Ad spend is a separate decision. Reinvent Digital shares a written scope after reviewing your current marketing, so the cost is clear before you start." },
      { q: "Should a Chennai clinic target its own area or the whole city?", a: "It depends on the treatment. Routine dental care usually works best close to the clinic. Specialist care, such as IVF or eye surgery, can justify wider targeting because patients often travel further for it. Walk-in data then shows where each boundary should sit." },
      { q: "How do AI tools like ChatGPT decide which Chennai clinic to mention?", a: "No one can guarantee a mention. AI tools tend to draw on information that is clear, consistent and repeated across trusted sources. Matching clinic details across your website, Google Maps and directories, plus pages that answer patient questions directly, improves the chance of accurate inclusion." },
      { q: "What happens during the first visit to our Chennai clinic or hospital?", a: "Our team visits your clinic at onboarding and on a regular schedule after that. The first visit traces how an enquiry moves from call or WhatsApp to booking, reviews your Google Maps profiles and checks current campaigns. You see the gaps before anything changes." },
      { q: "What must a multi-speciality hospital in Chennai show on its ads?", a: "Under the NMC guidelines, each ad, post and landing page must name the treating doctors, with their recognised qualifications, registration status and SMR or NMR number. Factual details such as departments, accreditation and emergency services can be shown. Patient testimonials and success rates cannot." },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Ready to Fill More Chairs Across Chennai?",
      body: "Tell us about your centres, the areas you serve and where enquiries go quiet today. We will map the gaps and show you what it would take to turn Chennai searches into walk-ins.",
    },
  },

  // City landing page: Bangalore.
  {
    slug: "digital-marketing-company-in-bangalore",
    title: "Digital Marketing Company in Bangalore for Clinics",
    seo: {
      title: "Digital Marketing Company in Bangalore for Clinics | Reinvent Digital",
      description:
        "A digital marketing company in Bangalore for clinics and hospitals, from Whitefield to Jayanagar. We measure every channel on the walk-ins it brings.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Bangalore Clinics",
      headline: "Turn Website Traffic Into",
      accent: "Walk-Ins at Your Bangalore Clinic",
      description:
        "Reinvent Digital is a digital marketing company in Bangalore for clinics and hospitals, from Whitefield to Jayanagar. We measure every channel on the walk-ins it brings.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss the Patient Acquisition System", href: "/contact" },
      stats: [
        { value: "6K+", label: "Monthly walk-ins for a dental group" },
        { value: "115+", label: "Locations served" },
        { value: "11+", label: "Years of healthcare marketing experience" },
      ],
      highlights: ["Google Ads by corridor", "Google Maps & Local SEO", "Appointment reminders", "Call-centre optimisation"],
    },
    splitSections: [
      {
        eyebrow: "Channels",
        heading: "How Do Bangalore Patients Choose a Clinic?",
        body: "Bangalore patients fit healthcare around work and traffic. That shapes where they search, which clinic they pick and whether they arrive.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Commute-based choice", body: "Patients often choose a clinic near the office or along their daily route, not only near home." },
          { title: "Timings matter", body: "Evening and weekend availability on a Google Maps profile can decide which clinic gets the call." },
          { title: "Close comparison", body: "Patients compare Maps profiles, doctor qualifications and clinic websites before making contact." },
          { title: "Bookings that slip", body: "Traffic and busy schedules can turn a confirmed appointment into a no-show without a timely reminder." },
        ],
      },
      {
        eyebrow: "What we run",
        heading: "How Does Reinvent Digital Support Bangalore Clinics and Hospitals?",
        body: "The Reinvent Digital Patient Acquisition System covers the full path in Bangalore, from the first search to the patient arriving.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Google Ads by corridor", body: "Campaigns for Whitefield, Electronic City, Outer Ring Road and other hubs, tracked from click to walk-in." },
          { title: "Google Maps and Local SEO", body: "Accurate timings, services and doctor details on every profile, so patients can compare with confidence." },
          { title: "Appointment reminders", body: "Confirmation and reminder messages before each visit, which typically lift show-up rates by 15–25% within 60 days." },
          { title: "Call-centre optimisation", body: "Enquiry calls routed, scored and coached, whether your front desk or our agents answer them." },
        ],
      },
      {
        eyebrow: "Why work with us",
        heading: "What Do Bangalore Healthcare Groups Get With Reinvent Digital?",
        body: "Before shortlisting a digital marketing company in Bangalore, ask for proof you can check. Here is what Reinvent Digital can show.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=70",
        points: [
          "A 115+ clinic dental group grew walk-ins 2.1x in 8 months.",
          "6,000 more walk-ins a month, with the same 15 agents.",
          "185+ healthcare accounts managed.",
          "Missed calls answered on WhatsApp, with 20–30% recovered.",
          "Weekly coaching from 100-point call scores.",
          "Doctor registration details on every client ad.",
          "Founded in 2015, with a healthcare-only focus today.",
          "Nearby areas: Whitefield, Marathahalli, Bellandur, Sarjapur Road, Electronic City, Bannerghatta Road, Rajajinagar, Malleshwaram, Hebbal and Yelahanka.",
        ],
      },
      {
        eyebrow: "On-site support",
        heading: "No Office Visit Needed. We Come to Your Clinic or Hospital.",
        body: "Our team visits your clinic in Bangalore at onboarding and on a regular schedule after that.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "First visit", body: "We watch how bookings, reminders and walk-ins are handled at your front desk on a normal day." },
          { title: "Return visits", body: "Our team returns on an agreed schedule to review no-shows, walk-ins and call quality in person." },
          { title: "One record per enquiry", body: "Form and WhatsApp enquiries are saved in one patient record with their source." },
          { title: "Walk-ins by channel", body: "Reporting shows leads, appointments and walk-ins by channel." },
          { title: "Your CRM or ours", body: "We work in your CRM if it tracks source and outcome, or set up MedLift." },
          { title: "Book a visit", body: "For an onboarding visit at your clinic or hospital in Bangalore, call our team on +91 7428094567." },
        ],
      },
    ],
    plan: {
      eyebrow: "What happens next",
      heading: "Three Steps From First Audit to Patient Walk-Ins",
      steps: [
        { label: "Day 1", title: "Tell Us About Your Clinic", body: "Share your centres, treatments, targets and the problems you're facing right now." },
        { label: "Week 1", title: "We Map the Gaps", body: "We review your ads, Maps listings, calls and CRM to find where patients drop off." },
        { label: "Week 2", title: "Get a Proven Plan", body: "A scoped plan that starts within 5 km of each centre, with monthly walk-in reviews built in." },
      ],
    },
    faqs: [
      { q: "How do you choose the best digital marketing company in Bangalore for a clinic?", a: "Look for proven performance, strong client relationships and real business impact in healthcare. Ask whether results are reported as walk-ins, not just leads, and how no-shows are handled. Check that every ad carries the doctor's registration details, as the NMC guidelines require." },
      { q: "Why do Bangalore clinics lose patients between booking and arrival?", a: "Busy schedules and traffic can make it easy to forget or drop an appointment. Without confirmation and reminder messages, a booked slot can become a no-show. Clinics running a reminder sequence typically see a 15–25% improvement in show-up rate within 60 days." },
      { q: "Should Bangalore clinics advertise near offices or near homes?", a: "Often both. Weekday visits may come from people working nearby, while weekend visits may come from residents. Separate campaigns for office hubs and residential areas show which patients actually arrive, so spend can follow walk-ins rather than clicks." },
      { q: "Can you work with our existing front desk team in Bangalore?", a: "Yes. Whether calls are answered by your front desk or by our agents, we measure and improve how enquiries become bookings. Calls are scored on a 100-point scale, and your team receives weekly coaching on what to change." },
      { q: "Can clinics in Bangalore offer free consultations in their ads?", a: "No. Since 6 October 2026, the NMC guidelines bar free consultation or check-up campaigns, discounts, packages and limited-time offers in medical advertising. Clinics can still advertise factual details such as facilities, timings, specialist qualifications and standard consultation charges." },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Ready to Fill More Chairs Across Bangalore?",
      body: "Tell us about your centres, the corridors your patients commute from and where enquiries go quiet today. We will map the gaps and show you what it would take to turn Bangalore searches into walk-ins.",
    },
  },

  // City landing page: Thiruvananthapuram.
  {
    slug: "digital-marketing-company-in-thiruvananthapuram",
    title: "Digital Marketing Company in Thiruvananthapuram",
    seo: {
      title: "Digital Marketing Company in Thiruvananthapuram | Reinvent Digital",
      description:
        "A digital marketing company in Thiruvananthapuram for clinics and hospitals, from Pattom to Kazhakoottam. Every channel is measured on walk-ins.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Thiruvananthapuram Clinics",
      headline: "Be Seen. Be Heard. Be",
      accent: "Booked in Thiruvananthapuram",
      description:
        "Reinvent Digital is a digital marketing company in Thiruvananthapuram for clinics and hospitals, from Pattom to Kazhakoottam. Every channel is measured on walk-ins.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss the Patient Acquisition System", href: "/contact" },
      stats: [
        { value: "6K+", label: "Monthly walk-ins for a dental group" },
        { value: "115+", label: "Locations served" },
        { value: "11+", label: "Years of healthcare marketing experience" },
      ],
      highlights: ["Healthcare Google Ads", "SEO & AEO", "Doctor directory & Maps", "Messaging & follow-up"],
    },
    splitSections: [
      {
        eyebrow: "Channels",
        heading: "How Do Patients Around Thiruvananthapuram Choose Care?",
        body: "Thiruvananthapuram draws patients from the city, southern Kerala and across the Tamil Nadu border. Each group compares clinics in its own way before booking.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Private vs government care", body: "Many patients weigh private clinics against government hospitals, so clear facility and doctor information matters." },
          { title: "Cross-border search", body: "Families from Kanyakumari district may search in Tamil as well as English before travelling." },
          { title: "Technopark professionals", body: "People working around Kazhakoottam often look for care near work, with timings that fit the day." },
          { title: "Specialist credentials", body: "For IVF, eye care and hospital treatment, patients look closely at specialist qualifications and accreditation." },
        ],
      },
      {
        eyebrow: "What we run",
        heading: "What Does Reinvent Digital Handle for Thiruvananthapuram Clinics and Hospitals?",
        body: "The Reinvent Digital Patient Acquisition System links four services, so every Thiruvananthapuram enquiry is tracked to the walk-in.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Healthcare Google Ads", body: "Campaigns by treatment and area, including Kazhakoottam and the Kanyakumari border belt, with call tracking." },
          { title: "Healthcare SEO and AEO", body: "Service pages that answer patient questions directly, written for search results and Featured Snippets." },
          { title: "Doctor directory and Maps details", body: "Doctor names, qualifications and registration numbers shown accurately on Maps profiles and websites." },
          { title: "Messaging and follow-up", body: "Missed calls and WhatsApp enquiries answered quickly, with reminders before each appointment." },
        ],
      },
      {
        eyebrow: "Why work with us",
        heading: "Why Do Thiruvananthapuram Healthcare Groups Choose Reinvent Digital?",
        body: "A digital marketing company in Thiruvananthapuram should show results, process and compliance in one place. Here is the record behind ours.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=70",
        points: [
          "Walk-ins up from 5,500 to 11,500 a month for one dental group.",
          "185+ healthcare accounts managed.",
          "Owner with 20+ years in healthcare marketing.",
          "20–30% of missed leads recovered through WhatsApp.",
          "Show-up rate typically up 15–25% within 60 days.",
          "Call scoring and weekly coaching for front desks.",
          "Registration numbers on every client ad, as NMC rules require.",
          "Nearby areas: Thampanoor, East Fort, Peroorkada, Vellayambalam, Kesavadasapuram, Kazhakoottam, Technopark and Neyyattinkara.",
        ],
      },
      {
        eyebrow: "On-site support",
        heading: "No Office Visit Needed. We Come to Your Clinic or Hospital.",
        body: "Our team visits your clinic in Thiruvananthapuram at onboarding and on a regular schedule after that.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "First visit", body: "We meet your team, review enquiry handling and note how patients currently find you." },
          { title: "Return visits", body: "Our team returns on an agreed schedule to review walk-ins and front-desk handling." },
          { title: "One record per enquiry", body: "Every website form and WhatsApp enquiry is saved in one record with its source." },
          { title: "Walk-ins by channel", body: "A dashboard shows leads, appointments and walk-ins by channel." },
          { title: "Your CRM or ours", body: "We keep your CRM if it captures source and outcome, or move you to MedLift." },
          { title: "Book a visit", body: "To plan an onboarding visit at your clinic or hospital in Thiruvananthapuram, call our team on +91 7428094567." },
        ],
      },
    ],
    plan: {
      eyebrow: "What happens next",
      heading: "Three Steps From First Audit to Patient Walk-Ins",
      steps: [
        { label: "Day 1", title: "Tell Us About Your Clinic", body: "Share your centres, treatments, targets and the problems you're facing right now." },
        { label: "Week 1", title: "We Map the Gaps", body: "We review your ads, Maps listings, calls and CRM to find where patients drop off." },
        { label: "Week 2", title: "Get a Proven Plan", body: "A scoped plan that starts within 5 km of each centre, with monthly walk-in reviews built in." },
      ],
    },
    faqs: [
      { q: "How do you choose the best digital marketing company in Thiruvananthapuram?", a: "Do thorough research first. Weigh client testimonials about the company, its portfolio, healthcare expertise and a track record you can verify. Ask how it reports results and whether walk-ins are tracked. Every ad it runs should show the doctor's registration details, as NMC rules require." },
      { q: "Should a Thiruvananthapuram hospital advertise in Tamil?", a: "It can help if a meaningful share of patients come from Kanyakumari district or nearby Tamil Nadu towns. Run Tamil ads alongside Malayalam and English versions, then compare walk-ins by language. NMC rules, including doctor registration details, apply in every language." },
      { q: "How can private clinics in Thiruvananthapuram compete with large hospitals online?", a: "By being specific. Large hospitals cover many departments, while a focused clinic can show clear treatment pages, accurate Maps details, visible specialist qualifications and quick replies to enquiries. Those factual signals help patients compare, and they stay within NMC rules." },
      { q: "How does missed-call recovery work for a Thiruvananthapuram clinic?", a: "When a call goes unanswered, the system sends an automatic WhatsApp reply, so the patient is not left waiting. The enquiry is saved in one record with its source. This approach typically recovers 20–30% of missed leads within the same session." },
      { q: "Can clinics in Thiruvananthapuram use patient reviews in ads?", a: "No. Under the NMC guidelines of 6 October 2026, patient testimonials, reviews, ratings and success stories cannot appear in ads, landing pages or promotional posts. Clinics can still share factual facility details, doctor qualifications and health awareness content that does not solicit patients." },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Ready to Fill More Chairs Across Thiruvananthapuram?",
      body: "Tell us about your centres, the patients you draw from across southern Kerala and where enquiries go quiet today. We will map the gaps and show you what it would take to turn searches into walk-ins.",
    },
  },

  // City landing page: Dubai.
  {
    slug: "digital-marketing-company-in-dubai",
    title: "Digital Marketing Company in Dubai",
    seo: {
      title: "Digital Marketing Company in Dubai for Clinics | Reinvent Digital",
      description:
        "A digital marketing company in Dubai for clinics and hospitals, from Deira to Dubai Marina. Every campaign follows DHA rules and is measured on patient visits.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Dubai Clinics",
      headline: "Take Your Clinic Online &",
      accent: "Fill More Appointments Across Dubai",
      description:
        "Reinvent Digital is a digital marketing company in Dubai for clinics and hospitals, from Deira to Dubai Marina. Every campaign follows DHA rules and is measured on patient visits.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss the Patient Acquisition System", href: "/contact" },
      stats: [
        { value: "6K+", label: "Monthly walk-ins for a dental group" },
        { value: "115+", label: "Locations served" },
        { value: "11+", label: "Years of healthcare marketing experience" },
      ],
      highlights: ["DHA-checked Google Ads", "Multilingual Meta Ads", "Google Maps & Local SEO", "Booking attribution"],
    },
    splitSections: [
      {
        eyebrow: "Channels",
        heading: "How Do Dubai Patients Choose a Clinic?",
        body: "Dubai's patients come from many countries and carry different insurance plans. Both shape how they search and which clinic they choose.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "Insurance first", body: "Many patients check whether a clinic accepts their insurance network before comparing doctors or locations." },
          { title: "Many languages", body: "Searches happen in English and Arabic, and often in Hindi, Malayalam, Urdu or Tagalog too." },
          { title: "Licence and credentials", body: "Patients look for DHA-licensed doctors, clear specialties and accurate titles on Maps and websites." },
          { title: "Area and access", body: "Parking, metro access and the drive from home or office influence the final choice." },
        ],
      },
      {
        eyebrow: "What we run",
        heading: "Which Services Do Dubai Clinics Get From Reinvent Digital?",
        body: "Every service runs inside the Reinvent Digital Patient Acquisition System, with DHA rules checked before anything goes live.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "DHA-checked Google Ads", body: "Treatment and area campaigns, with ad copy checked against DHA banned words and claims." },
          { title: "Multilingual Meta Ads", body: "Facebook and Instagram campaigns in the languages your patients use, approved by your medical director." },
          { title: "Google Maps and Local SEO", body: "Accurate DHA-licensed titles, specialties, timings and accepted insurance details on every profile." },
          { title: "Booking attribution", body: "Leads, appointments and patient visits tracked by channel, in MedLift or your own CRM." },
        ],
      },
      {
        eyebrow: "Why work with us",
        heading: "What Can Dubai Clinics Expect From Reinvent Digital?",
        body: "A digital marketing company in Dubai should show its results and its compliance process clearly. Here is ours, including where the results come from.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=70",
        points: [
          "5,500 to 11,500 monthly walk-ins for one group in India.",
          "The same 15 agents and same CRM throughout that period.",
          "Show-up rate typically up 15–25% within 60 days of reminders.",
          "20–30% of missed leads recovered through WhatsApp follow-up.",
          "Every ad checked against DHA wording rules before launch.",
          "Medical director approval built into every content workflow.",
          "Owner with 20+ years in healthcare marketing.",
          "Areas we cover: Deira, Bur Dubai, Downtown Dubai, Business Bay, Jumeirah, Al Barsha, Dubai Marina, JLT, Mirdif and Al Qusais.",
        ],
      },
      {
        eyebrow: "On-site support",
        heading: "No Office Visit Needed. We Come to Your Clinic or Hospital.",
        body: "Our team visits your clinic in Dubai at onboarding and on a regular schedule after that.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=70",
        points: [
          { title: "First visit", body: "Compliance-first — we review your DHA licence details, existing ads and Maps profiles with your medical director." },
          { title: "Return visits", body: "Our team returns on an agreed schedule to review patient visits and front-desk handling." },
          { title: "Medical director sign-off", body: "Every post and ad goes to your medical director for sign-off before publishing." },
          { title: "One record per enquiry", body: "Unanswered calls trigger an automatic WhatsApp reply, saved in one patient record." },
          { title: "Your CRM or ours", body: "We use your existing CRM if it tracks source and outcome, or switch you to MedLift." },
          { title: "Book a visit", body: "To arrange an onboarding visit at your clinic or hospital in Dubai, call our team on +91 7428094567." },
        ],
      },
    ],
    plan: {
      eyebrow: "What happens next",
      heading: "Three Steps From First Audit to Patient Visits",
      steps: [
        { label: "Day 1", title: "Tell Us About Your Clinic", body: "Share your centres, treatments, targets and the problems you're facing right now." },
        { label: "Week 1", title: "We Map the Gaps", body: "We review your ads, Maps listings, calls and CRM to find where patients drop off." },
        { label: "Week 2", title: "Get a Proven Plan", body: "A scoped plan with regular patient-visit reviews built in." },
      ],
    },
    faqs: [
      { q: "How do you choose the best digital marketing company in Dubai for a clinic?", a: "Do thorough research. Look at client testimonials, a healthcare portfolio and a track record you can verify. Then test its DHA knowledge: the company should know the banned words, title rules and medical director approval process. Ask whether it reports patient visits or stops at leads." },
      { q: "What DHA rules apply to clinic ads on social media?", a: "DHA standards cover posts and ads on platforms such as Instagram, Facebook, TikTok and WhatsApp. They ban words like \"the best\" and \"100 per cent\", require titles to match the DHA licence, and need medical director approval for every post naming a facility." },
      { q: "Can Dubai clinics use patient testimonials and before-and-after photos?", a: "Yes, with conditions. DHA rules require written patient consent, plus separate parental consent for under-18s. Before-and-after photos must show the same person, use the same lens, have no editing and carry a disclaimer that results vary. India's rules are stricter and ban both." },
      { q: "Do these rules apply to clinics in Dubai Healthcare City?", a: "Not in the same way. Facilities in Dubai Healthcare City and DIFC fall under their own regulators rather than the DHA. Their advertising rules differ, so campaigns for these clinics are checked against the framework that applies to their licence." },
      { q: "Should Dubai clinic ads be in Arabic, English or other languages?", a: "Match the languages your patients actually use. English and Arabic cover the base, while Hindi, Malayalam, Urdu or Tagalog ads may suit clinics serving those communities. Run versions side by side and compare patient visits by language, with DHA wording rules applied in each." },
    ],
    closing: {
      eyebrow: "Contact Us",
      heading: "Ready to Fill More Appointments Across Dubai?",
      body: "Tell us about your clinics, the insurance networks you accept and where enquiries go quiet today. We will map the gaps and show you what it would take to turn Dubai searches into patient visits.",
    },
  },

  // An industry landing page: digital marketing for pharmacies and consumer
  // health brands. Lives at /digital-marketing-agency-for-pharmaceutical-industry.
  {
    slug: "digital-marketing-agency-for-pharmaceutical-industry",
    design: "industry",
    title: "Digital Marketing Agency for Pharmaceutical Industry",
    seo: {
      title: "Digital Marketing Agency for Pharmaceutical Industry | Reinvent Digital",
      description:
        "Compliant Google Ads, Google Maps and SEO for pharmacy chains and consumer health brands. Every enquiry tracked to an order or store visit.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Pharmacies",
      headline: "Customers Search for Medicines Nearby.",
      accent: "Make Sure They Find Your Store!",
      description:
        "At Reinvent Digital, we run compliant Google Ads, optimise Google Maps for every store and build SEO, AEO and GEO content for pharmacy chains and consumer health brands. Every enquiry is tracked to an order or store visit.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your Pharmacy Growth", href: "/contact" },
      stats: [
        { value: "15-25%", label: "Better show-up rate in 60 days" },
        { value: "2400+", label: "Negative keywords blocking wasted clicks" },
        { value: "185+", label: "Healthcare accounts managed" },
      ],
      highlights: [
        "Compliant pharmacy campaigns",
        "Google Maps for every store",
        "Fast WhatsApp order replies",
        "Refill reminder journeys",
      ],
      metric: { value: "185+", label: "Healthcare accounts managed" },
    },
    problems: {
      eyebrow: "Where Pharmacies Lose Customers",
      heading: "Customers Need Medicines. They Buy From Whoever Answers First",
      body: "Pharmacy customers rarely wait. They search nearby, ask about stock and buy from the first store that responds, while regular customers drift to delivery apps.",
      points: [
        { title: "Local searches find another store", body: "Customers searching “pharmacy near me” or “24-hour chemist” see a competitor’s store first." },
        { title: "Stock enquiries go unanswered", body: "Calls and WhatsApp messages about medicine availability wait, and the customer buys elsewhere." },
        { title: "Monthly refills slip away", body: "Customers on regular medicines forget to reorder, then buy from whichever store is closest that day." },
        { title: "Delivery apps win on convenience", body: "App discounts and doorstep delivery pull regular customers away from local pharmacies." },
        { title: "Ads get rejected for medicine content", body: "Ad copy that mentions restricted medicines breaks platform policies, and campaigns stop running." },
        { title: "Unanswered reviews shape store choice", body: "A few negative reviews with no reply make nearby customers choose another pharmacy." },
        { title: "Marketing can’t see store visits", body: "Nobody links campaigns to orders and footfall, so marketing is judged on clicks alone." },
      ],
    },
    help: {
      eyebrow: "How we help",
      heading: "Every Store, Every Refill, Handled In One System",
      body: "Each fix runs inside the Reinvent Digital Patient Acquisition System, so your campaigns, stores and order desk work from the same customer data.",
      points: [
        { title: "Compliant Pharmacy Campaigns", body: "Google Ads and Meta campaigns for stores, services and wellness ranges, never promoting prescription medicines." },
        { title: "Google Maps for Every Store", body: "Each store’s Business Profile kept accurate for hours, delivery and services, with review requests after purchases." },
        { title: "Fast Stock and Order Replies", body: "WhatsApp and call workflows that answer availability and order questions within 60 seconds." },
        { title: "Refill Reminder Journeys", body: "Consent-based WhatsApp reminders that prompt regular customers to reorder before their medicines run out." },
        { title: "WhatsApp Ordering and Delivery", body: "Simple order-on-WhatsApp and delivery pathways that match the convenience of pharmacy apps." },
        { title: "Pharmacist-Reviewed Health Content", body: "Educational pages on medicine use, storage and wellness, with no cure claims or misleading promises." },
        { title: "Review and Reputation Care", body: "Professional replies to every review, without mentioning any customer’s medicines or health details." },
        { title: "Store-Level Reporting", body: "Enquiries, orders and store visits tracked by store and channel, where your billing system allows." },
      ],
    },
    proof: {
      eyebrow: "Proof, not a vague promise",
      heading: "One System. Proven in Healthcare. Now Built for Pharmacies.",
      body: "Pharmacies win customers on speed, trust and convenience, and lose them when replies are slow. The same Patient Acquisition System has already doubled walk-ins and lowered cost per lead for other healthcare groups; for pharmacies, it is adapted to faster, repeat buying decisions.",
      stats: [
        { value: "2.1x", label: "Monthly walk-ins in 8 months — dental group" },
        { value: "94%", label: "More site conversions in 6 months — liver transplant practice" },
        { value: "20%", label: "Lower cost per lead every month — first three months" },
      ],
    },
    faqs: [
      { q: "What does a digital marketing agency for the pharmaceutical industry do?", a: "It helps pharmacies and consumer health brands reach people searching for medicines, stores and wellness products, while staying within advertising law. That covers Google Ads, Google Maps, SEO, social media and WhatsApp, with every enquiry tracked to an order or store visit." },
      { q: "Can pharmaceutical companies advertise medicines online in India?", a: "Only within strict limits. Indian law restricts advertising prescription medicines to the public and bans claims that a product cures listed diseases. Pharma companies can share approved health education, and promote over-the-counter and wellness products with accurate, non-misleading claims." },
      { q: "Can pharmacies run Google Ads?", a: "Yes, with care. Google restricts medicine-related advertising, and online pharmacies usually need certification before running ads. Store-focused campaigns for location, opening hours, delivery and services are simpler to approve, and prescription medicines should never feature in ad copy." },
      { q: "How can a pharmacy compete with online pharmacy apps?", a: "Compete on what apps can’t offer: speed, trust and a pharmacist nearby. Promote same-day delivery, quick WhatsApp ordering and pharmacist advice. Refill reminders keep regular customers loyal, so they reorder from your store instead of comparing app discounts every month." },
      { q: "Which keywords should pharmacies target on Google?", a: "Target searches with clear local intent: “pharmacy near me,” “24-hour chemist near me,” “medical store in [locality],” “medicine home delivery in [city]” and “[product] available near me.” Avoid prescription drug names in paid ads, and use health topics for educational content instead." },
      { q: "Does a pharmacy need a website, or is Google Maps enough?", a: "Google Maps brings the quickest local visibility, but a website adds trust and reach. It lets customers check services, delivery areas and timings, and place orders on WhatsApp. Together, they capture both “near me” searches and people comparing pharmacies before buying." },
    ],
    closing: {
      eyebrow: "Pharmacies & Health Brands",
      heading: "Ready to Increase the Walk-Ins for Your Pharmacy Stores?",
      body: "Share your stores and enquiry data. We will show how the Reinvent Digital Patient Acquisition System can turn local searches into orders and store visits, starting with the gaps costing you most.",
    },
  },

  // An audience landing page: digital marketing for dentists and dental
  // practices. Lives at /digital-marketing-for-dentists.
  {
    slug: "digital-marketing-for-dentists",
    design: "industry",
    title: "Digital Marketing for Dentists & Dental Clinics",
    seo: {
      title: "Digital Marketing for Dentists & Dental Clinics | Reinvent Digital",
      description:
        "A digital marketing agency for dental clinics: Google Ads, Google Maps, SEO and compliant dentist profiles, with every enquiry tracked to the patient in the chair.",
      noindex: false,
    },
    hero: {
      eyebrow: "Digital Marketing for Dentists",
      headline: "Patients Choose the Dentist Before the Clinic.",
      accent: "Be the One They Trust!",
      description:
        "Reinvent Digital is a digital marketing agency for dental clinics and practices, helping dentists, orthodontists and implantologists grow with Google Ads, Google Maps, SEO, AEO and GEO. We build compliant dentist profiles, automate WhatsApp follow-up and track every enquiry to the patient in the chair.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your Practice Growth", href: "/contact" },
      stats: [
        { value: "15-25%", label: "Better show-up rate in 60 days" },
        { value: "2400+", label: "Negative keywords blocking wasted clicks" },
        { value: "185+", label: "Healthcare accounts managed" },
      ],
      highlights: [
        "Treatment-specific Google Ads",
        "Google Maps & name search",
        "Missed-call WhatsApp replies",
        "Compliance-checked marketing",
      ],
      metric: { value: "185+", label: "Healthcare accounts managed" },
    },
    problems: {
      eyebrow: "Where Dental Practices Lose Patients",
      heading: "Your Dentistry is Strong. But Your Visibility Isn’t",
      body: "Most dentists build their practice on skill and referrals. Without digital marketing for dentists that works, patients judge them online on profiles, reviews and response speed, often before meeting them.",
      points: [
        { title: "Patients can’t find you by name", body: "Searching your name shows a directory listing or a thin profile, not your practice." },
        { title: "Your expertise stays invisible", body: "Your implant or orthodontic training isn’t on your website, so patients choose a bigger-looking clinic." },
        { title: "Calls go unanswered mid-procedure", body: "While you’re treating a patient, new enquiries ring out and book with someone else." },
        { title: "Directories control your bookings", body: "Practo and Justdial bring enquiries, but show competing clinics right beside your listing." },
        { title: "High-value cases need more trust", body: "Implant and aligner patients want to hear from the dentist first, and find nothing to watch or read." },
        { title: "Advertising rules feel unclear", body: "Unsure what dental ethics rules allow, many dentists avoid marketing, or take risks without knowing." },
        { title: "No time to manage marketing", body: "Between treating patients and running the practice, marketing becomes irregular and hard to judge." },
      ],
    },
    help: {
      eyebrow: "How we help",
      heading: "Your Focus on Dentistry. We Run the System",
      body: "Each fix runs inside the Reinvent Digital Patient Acquisition System, our approach to digital marketing for dentists. Your profile, phone and appointment book work together while you treat patients.",
      points: [
        { title: "Dentist Profile and Practice Pages", body: "Qualification-led profiles and treatment pages that show your expertise factually, within dental ethics rules." },
        { title: "Google Maps and Name Searches", body: "Your Business Profile optimised so patients find you for your name and “dentist near me.”" },
        { title: "Missed-Call WhatsApp Replies", body: "An instant WhatsApp reply to every missed call while you’re with a patient." },
        { title: "Bookings You Own", body: "Website and WhatsApp booking routes that reduce your dependence on directory listings." },
        { title: "Dentist-Led Treatment Explainers", body: "Short videos and pages where you explain implants, aligners and root canals in plain language." },
        { title: "Compliance-Checked Marketing", body: "Every ad and post checked for dental ethics: no discounts, guarantees or unconsented before-after photos." },
        { title: "Treatment-Specific Google Ads", body: "Campaigns for implants, aligners and root canals, with 2,400+ negative keywords blocking wasted clicks." },
        { title: "A One-Page Monthly Report", body: "Bookings, patients seen and cost per patient on a single page, so you can judge results quickly." },
      ],
    },
    proof: {
      eyebrow: "Proof, not a vague promise",
      heading: "54% Higher Conversion. Same Treatment. Better Answers.",
      body: "A dental aligner brand needed more people exploring treatment online, and more of them taking the next step. During our engagement, conversions rose 54% and new users grew 88.2%. What changed sits in how patients’ treatment questions were answered.",
      stats: [
        { value: "54%", label: "Higher conversion rates" },
        { value: "73.9%", label: "More website traffic" },
        { value: "88.2%", label: "More new users" },
      ],
    },
    faqs: [
      { q: "What is digital marketing for dentists?", a: "Digital marketing for dentists, also called dental digital marketing, uses Google Ads, Google Maps, SEO, social media and WhatsApp to help patients find, trust and book a dental practice. Done well, it is measured by patients seen and cost per patient, not by clicks." },
      { q: "Should dentists market themselves or their clinic?", a: "Market the practice, with the dentist as its trusted face. India’s dental ethics rules limit self-promotion, so profiles should share factual qualifications, experience and treatments. Educational videos and pages build personal trust without breaking the rules or relying on claims." },
      { q: "Is Practo enough, or do dentists need their own website?", a: "Practo and directories help patients discover you, but you don’t control the listing, the reviews or the competing clinics shown beside you. Your own website and Google Business Profile let patients book you directly, and keep your reputation in one place." },
      { q: "How should dentists respond to negative Google reviews?", a: "Reply calmly within a day, thank the reviewer and offer to discuss the issue privately. Never mention treatment details or confirm the person was your patient. A professional reply often reassures future patients more than the original complaint worries them." },
      { q: "What does digital marketing for dentists cost in India?", a: "Dental Google Ads leads typically cost ₹120 to ₹250 in Tier-2 cities, ₹180 to ₹320 in Hyderabad, ₹220 to ₹400 in Bangalore and ₹280 to ₹500 in Mumbai. Your total budget depends on treatments, competition and how many patients you can see." },
      { q: "How long before a new dental practice gets patients from Google?", a: "Google Ads can bring enquiries within weeks of launch, with useful data in 30 to 45 days. A new Google Business Profile usually gains visibility in 60 to 90 days, while organic rankings for treatment searches build from month four onwards." },
    ],
    closing: {
      eyebrow: "Dentists & Dental Practices",
      heading: "Ready to Build a Patient Acquisition System for Your Dental Practice?",
      body: "We are a digital marketing agency for dentists that measures patients, not clicks. Share how patients reach you today, and we will show how the Reinvent Digital Patient Acquisition System can fill your appointment book.",
    },
  },

  // A service landing page: Answer Engine Optimisation, in the industry-page
  // layout. Lives at /answer-engine-optimization.
  {
    slug: "answer-engine-optimization",
    design: "industry",
    title: "AEO Services in India",
    seo: {
      title: "AEO Services in India | Reinvent Digital",
      description:
        "Answer Engine Optimisation that structures your content for Featured Snippets, People Also Ask, voice search and AI Overviews, so buyers find you first.",
      noindex: false,
    },
    hero: {
      eyebrow: "AEO Services in India",
      headline: "When AI Answers,",
      accent: "Be the Brand It Quotes!",
      description:
        "Rated among the most trusted AEO agencies in India, Reinvent Digital structures your content for Featured Snippets, People Also Ask, voice search and AI Overviews, so buyers find you first.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your AEO Strategy", href: "/contact" },
      stats: [
        { value: "600+", label: "Citations in Google AI Mode" },
        { value: "1.1K+", label: "Pages cited in Google AI Overviews" },
        { value: "214+", label: "Pages cited in Google AI Mode" },
      ],
      highlights: ["Direct-answer content", "Snippet-matched formats", "Schema & entity markup", "Answer visibility tracking"],
      metric: { value: "1.1K+", label: "Responses cited across AI Overviews" },
    },
    problems: {
      eyebrow: "What’s included",
      heading: "Six Ways To Make Your Content the Answer",
      body: "Our AEO service in India builds on your SEO, turning the questions your customers actually ask into answers that search engines and AI tools can extract.",
      points: [
        { title: "Question Research & Intent Mapping", body: "Real questions from People Also Ask, Search Console and sales calls, grouped by intent and mapped to pages." },
        { title: "Direct-Answer Content", body: "Answers of 40 to 60 words at the top of each section, written to be quoted without editing." },
        { title: "Snippet-Matched Formats", body: "Paragraphs for definitions, lists for steps and tables for comparisons, matched to how answers display." },
        { title: "Schema & Entity Markup", body: "Article, FAQPage, HowTo and LocalBusiness schema that matches visible content, with consistent entity names." },
        { title: "Voice & Conversational Answers", body: "Short answers that sound natural when read aloud, for voice assistants and conversational search." },
        { title: "Answer Visibility Tracking", body: "Snippet share, People Also Ask coverage and AI citations tracked monthly, alongside the enquiries they bring." },
      ],
    },
    help: {
      eyebrow: "How AEO works",
      heading: "Find the Question. Write the Answer. Track the Win.",
      body: "Early answer wins often appear within weeks of publishing, with steadier gains over one to three months.",
      points: [
        { title: "Audit Who Answers Today", body: "See which competitors own your snippets, PAA results and AI citations." },
        { title: "Build the Question Bank", body: "Collect real buyer questions and rank them by demand and value." },
        { title: "Write Answer-First Content", body: "Add direct answers, lists and tables to new and existing pages." },
        { title: "Add Schema & Fix Structure", body: "Mark up content and clean headings so engines extract answers easily." },
        { title: "Track Answer Visibility", body: "Measure snippets, PAA coverage and AI citations against the baseline." },
        { title: "Refresh & Expand", body: "Update answers that slip and add questions buyers start asking." },
      ],
    },
    proof: {
      eyebrow: "See who answers for you",
      heading: "When Customers Ask About Your Service, Whose Answer Do They See?",
      body: "Comparing the best AEO company in India for your brand? Start with an audit of who answers your top questions, where your pages fall short and what to fix first.",
      stats: [
        { value: "185+", label: "Healthcare accounts managed" },
        { value: "11+", label: "Years of marketing leadership" },
        { value: "8+", label: "Healthcare verticals covered" },
      ],
    },
    faqs: [
      { q: "What is Answer Engine Optimisation (AEO)?", a: "Answer Engine Optimisation (AEO) structures content so search engines and AI tools can pick it as the direct answer, in Featured Snippets, People Also Ask, voice results and AI Overviews." },
      { q: "How is AEO different from SEO?", a: "SEO helps a page rank and earn clicks. AEO helps a specific answer on that page get selected and shown, even when the user never clicks through." },
      { q: "Do FAQ rich results still matter for AEO?", a: "Not for rich results. Google stopped showing FAQ rich results in May 2026. FAQ content and schema still help search engines and AI tools understand and extract your answers." },
      { q: "How long does AEO take to show results?", a: "Early wins often appear within weeks of publishing well-structured answers. Steadier gains usually build over one to three months, depending on competition and your site’s existing authority." },
      { q: "How do you choose the best AEO agency in India?", a: "Ask for real snippets and AI citations they’ve won, and how they measure them. The best AEO service in India for you reports answer visibility, not just rankings." },
      { q: "Why work with Reinvent Digital as your AEO company in India?", a: "As an AEO company in India, Reinvent Digital builds AEO into your SEO, writes answers AI tools can quote, and tracks snippets, citations and the enquiries they bring." },
    ],
    closing: {
      eyebrow: "Answer Engine Optimisation",
      heading: "Get Your AEO Audit",
      body: "Start with an audit of who answers your top questions today, where your pages fall short and what to fix first.",
    },
  },

  // A service landing page: Generative Engine Optimisation, in the industry-page
  // layout. Lives at /generative-engine-optimization.
  {
    slug: "generative-engine-optimization",
    design: "industry",
    title: "GEO Services in India",
    seo: {
      title: "GEO Services in India | Reinvent Digital",
      description:
        "Generative Engine Optimisation that helps ChatGPT, Gemini, Perplexity and Google AI Overviews understand, trust and recommend your brand.",
      noindex: false,
    },
    hero: {
      eyebrow: "GEO Services in India",
      headline: "When ChatGPT Answers,",
      accent: "Be in the Answer!",
      description:
        "Reinvent Digital is a GEO agency in India. We help ChatGPT, Gemini, Perplexity and Google AI Overviews understand your brand, trust it and recommend it.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your GEO Strategy", href: "/contact" },
      stats: [
        { value: "299+", label: "Pages cited by AI tools" },
        { value: "1.9K+", label: "AI citations across platforms" },
        { value: "81+", label: "Citations in Gemini" },
      ],
      highlights: ["Entity clarity", "AI crawler access", "Citation-ready content", "AI visibility tracking"],
      metric: { value: "1.9K+", label: "AI citations across platforms" },
    },
    problems: {
      eyebrow: "What’s included",
      heading: "Signals AI Use To Choose a Brand",
      body: "Our GEO service in India makes your brand easy for AI systems to read, verify and cite, working alongside your SEO and AEO.",
      points: [
        { title: "Entity Clarity", body: "Brand name, services, people and locations kept identical across your site, profiles and listings." },
        { title: "AI Crawler Access", body: "Robots.txt and server rules checked so OAI-SearchBot, PerplexityBot and Google can read your pages." },
        { title: "Citation-Ready Content", body: "Summaries of 50 to 70 words, clear headings and fact tables that AI tools can quote accurately." },
        { title: "Schema & Knowledge Graph", body: "Organisation, Person and Service schema with sameAs links that confirm who your brand is." },
        { title: "Authority & Mentions", body: "Credible third-party mentions, expert bylines and author pages that help AI verify your claims." },
        { title: "AI Visibility Tracking", body: "Citations and brand mentions tracked monthly across ChatGPT, Gemini, Perplexity and AI Overviews." },
      ],
    },
    help: {
      eyebrow: "How GEO works",
      heading: "Audit. Clarify. Get Cited. Repeat.",
      body: "AI visibility builds as signals compound, so we review citations monthly and refine every quarter.",
      points: [
        { title: "Ask the AI Tools", body: "Check what ChatGPT, Gemini and Perplexity say about your brand today." },
        { title: "Fix Conflicting Facts", body: "Align your name, services and details across site, profiles and directories." },
        { title: "Open the Doors", body: "Make sure AI crawlers can access and read your key pages." },
        { title: "Restructure Key Pages", body: "Add summaries, schema and clear sections that AI systems can cite." },
        { title: "Build Trusted Mentions", body: "Earn credible references that confirm your expertise beyond your own site." },
        { title: "Track & Refine", body: "Measure citations monthly and update pages where AI answers fall short." },
      ],
    },
    proof: {
      eyebrow: "Ask the AI about you",
      heading: "What Does ChatGPT Say When Someone Asks About Your Brand?",
      body: "Comparing the best GEO company in India? Start with an audit of what AI tools say about your brand today, where they get it wrong and what to fix first.",
      stats: [
        { value: "185+", label: "Healthcare accounts managed" },
        { value: "11+", label: "Years of marketing leadership" },
        { value: "8+", label: "Healthcare verticals covered" },
      ],
    },
    faqs: [
      { q: "What is Generative Engine Optimisation (GEO)?", a: "Generative Engine Optimisation (GEO) helps AI systems like ChatGPT, Gemini and Perplexity understand, trust and cite your brand when they generate answers to user questions." },
      { q: "How is GEO different from AEO?", a: "AEO helps your answers appear in Featured Snippets and People Also Ask. GEO helps AI tools mention and recommend your brand inside the answers they write." },
      { q: "Can GEO guarantee my brand appears in ChatGPT?", a: "No. Nobody controls what AI tools say. GEO improves the signals they rely on: clear entities, consistent facts, credible sources and content that’s easy to cite." },
      { q: "Could my website be blocking AI tools?", a: "Often, yes. Some sites block AI crawlers such as OAI-SearchBot or PerplexityBot without realising it. If crawlers can’t read your pages, AI tools can’t cite them." },
      { q: "How do you choose the best GEO agency in India?", a: "Ask how they track AI citations, which platforms they monitor and how they fix inconsistent brand facts. The best GEO service in India for you measures mentions, not promises." },
      { q: "Why choose Reinvent Digital as your GEO company in India?", a: "As a GEO company in India, Reinvent Digital fixes entity signals, structures content for AI and tracks citations across platforms, along with the enquiries they bring." },
    ],
    closing: {
      eyebrow: "Generative Engine Optimisation",
      heading: "Get Your GEO Audit",
      body: "Start with an audit of what AI tools say about your brand today, where they get it wrong and what to fix first.",
    },
  },

  // A service landing page: Social Media Marketing, in the industry-page layout.
  // Lives at /social-media-marketing (was /social-media-marketing-agency).
  {
    slug: "social-media-marketing",
    replaces: "social-media-marketing-agency",
    design: "industry",
    title: "Social Media Marketing Agency in India",
    seo: {
      title: "Social Media Marketing Agency in India | Reinvent Digital",
      description:
        "A social media marketing agency in India that plans, creates and manages content to help people find, trust and contact your brand, tracked to enquiries.",
      noindex: false,
    },
    hero: {
      eyebrow: "SMM Agency in India",
      headline: "Followers Are Nice.",
      accent: "Actual Enquiries Are Better!",
      description:
        "Reinvent Digital is a social media marketing agency in India. We plan, create and manage content that helps people find, trust and contact your brand.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your Social Media Strategy", href: "/contact" },
      stats: [
        { value: "162%", label: "Increase in social media engagement" },
        { value: "185+", label: "Healthcare accounts managed" },
        { value: "11+", label: "Years of marketing experience" },
      ],
      highlights: ["Social strategy", "Content & Reels", "Community & DMs", "Paid social"],
      metric: { value: "4+", label: "Platforms covered: Instagram, LinkedIn, YouTube, Facebook" },
    },
    problems: {
      eyebrow: "What's included",
      heading: "Everything Between a Scroll and an Enquiry",
      body: "Our social media marketing service in India covers strategy, creative, community and paid social, with every post planned around a business goal.",
      points: [
        { title: "Social Media Strategy", body: "Audience research, platform choice and monthly goals set before a single post is designed." },
        { title: "Content Calendar & Creative", body: "Planned posts, carousels and Reels designed around what your audience saves and shares." },
        { title: "Reels & Short Video", body: "Short videos scripted to hook viewers in the first seconds and lead to a clear next step." },
        { title: "Social SEO", body: "Keyword-led captions and profiles, so posts appear in Instagram search and Google results." },
        { title: "Community & DM Management", body: "Comments and messages answered quickly, with enquiries passed straight to your sales team." },
        { title: "Paid Social Campaigns", body: "Meta and LinkedIn campaigns that turn engaged audiences into enquiries, tracked to results." },
      ],
    },
    help: {
      eyebrow: "How we run social media",
      heading: "Monthly Plan. Reviewed Posts. Everyday Replies.",
      body: "Content is planned a month ahead, reviewed weekly and adjusted to what your audience actually responds to.",
      points: [
        { title: "Audit Your Profiles", body: "Review bios, highlights, past posts and what competitors do better." },
        { title: "Define Audience & Goals", body: "Set who you're reaching and what each platform should achieve." },
        { title: "Plan the Calendar", body: "Map a month of posts, Reels and campaigns to those goals." },
        { title: "Create & Publish", body: "Design, write and schedule content in your brand's own voice." },
        { title: "Engage & Respond", body: "Reply to comments and messages, and route enquiries to your team." },
        { title: "Review & Improve", body: "Track saves, shares and enquiries, then refine next month's plan." },
      ],
    },
    proof: {
      eyebrow: "Find your social gaps",
      heading: "Are Your Followers Turning Into Enquiries?",
      body: "Comparing the best social media marketing company in India? Start with an audit of your profiles, what your audience responds to and where enquiries are lost.",
      stats: [
        { value: "20-30%", label: "Missed leads recovered" },
        { value: "11+", label: "Years of marketing leadership" },
        { value: "8+", label: "Healthcare verticals covered" },
      ],
    },
    faqs: [
      { q: "What is social media marketing?", a: "Social media marketing uses platforms like Instagram, Facebook, LinkedIn and YouTube to build awareness, trust and enquiries through planned content, community management and paid campaigns." },
      { q: "Do Instagram posts show up on Google?", a: "Yes. Since July 2025, Google and Bing index public posts from Instagram professional accounts, so clear captions and keywords help your posts appear in search." },
      { q: "How often should a business post on social media?", a: "Consistency matters more than volume. Most brands do well with three to five planned posts a week, supported by Reels or short videos and timely replies." },
      { q: "How do you measure social media results?", a: "Track reach, saves, shares, profile visits, enquiries and the leads they create. Likes alone rarely show whether social media is helping the business grow." },
      { q: "How do you choose the best social media marketing agency in India?", a: "Look at their strategy, creative samples and reporting, not just follower growth. The best social media marketing service in India for you reports enquiries, not likes." },
      { q: "Why choose Reinvent Digital as your social media marketing company in India?", a: "As a social media marketing company in India, Reinvent Digital plans content around business goals, manages replies quickly and tracks the enquiries each platform brings." },
    ],
    closing: {
      eyebrow: "Social Media Marketing",
      heading: "Get Your Social Media Audit",
      body: "Start with an audit of your profiles, what your audience responds to and where enquiries are lost today.",
    },
  },

  // A service landing page: Website Development, in the industry-page layout.
  // Lives at /website-development-company.
  {
    slug: "website-development-company",
    design: "industry",
    title: "Website Development Company in India",
    seo: {
      title: "Website Development Company in India | Reinvent Digital",
      description:
        "A website development company in India building fast, mobile-first websites that rank, load quickly and turn visitors into enquiries.",
      noindex: false,
    },
    hero: {
      eyebrow: "Website Development Company in India",
      headline: "Good-Looking Sites Get Visits.",
      accent: "Well-Built Ones Get Enquiries!",
      description:
        "Reinvent Digital is a website development agency in India. We build fast, mobile-first websites that rank, load quickly and turn visitors into enquiries.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your Website Project", href: "/contact" },
      stats: [
        { value: "271%", label: "Increase in conversion in healthcare" },
        { value: "185+", label: "Healthcare accounts managed" },
        { value: "11+", label: "Years of marketing experience" },
      ],
      highlights: ["Site structure", "UI/UX design", "Mobile-first build", "SEO-ready architecture"],
      metric: { value: "1K+", label: "Websites designed and tested" },
    },
    problems: {
      eyebrow: "What's included",
      heading: "Six Things Every Website Needs to Convert",
      body: "Our website development service in India covers planning, design, development, SEO structure and tracking, so your site works as a sales asset from launch.",
      points: [
        { title: "Planning & Site Structure", body: "Sitemap, page goals and user journeys planned before design, so every page has a purpose." },
        { title: "UI/UX Design", body: "Clean, on-brand layouts that guide visitors towards calls, forms and WhatsApp." },
        { title: "Mobile-First Development", body: "Responsive builds tested on real devices, with fast loading on mobile networks." },
        { title: "SEO-Ready Architecture", body: "Clean code, schema, internal links and Core Web Vitals built in from day one." },
        { title: "Conversion Points & Tracking", body: "Forms, click-to-call and WhatsApp buttons, with analytics and call tracking set up at launch." },
        { title: "Ongoing Support & Updates", body: "Security updates, backups and content changes handled after launch, so the site stays fast and current." },
      ],
    },
    help: {
      eyebrow: "How we build your website",
      heading: "Plan. Design. Build. Launch. Improve.",
      body: "Every project follows a clear path from discovery to launch, then improves monthly based on real visitor data.",
      points: [
        { title: "Discovery & Goals", body: "Understand your audience, services and what the website must achieve." },
        { title: "Structure & Wireframes", body: "Plan pages, navigation and user journeys before visual design begins." },
        { title: "Design & Approval", body: "Create layouts and visuals, refined with your feedback at each stage." },
        { title: "Build & Test", body: "Develop the site, then test speed, forms and mobile layouts." },
        { title: "Launch & Track", body: "Go live with analytics, call tracking and SEO checks in place." },
        { title: "Review & Improve", body: "Use visitor and enquiry data to refine pages every month." },
      ],
    },
    proof: {
      eyebrow: "Check your current website",
      heading: "Is Your Website Bringing Enquiries, or Just Visitors?",
      body: "Comparing the best website development company in India? Start with an audit of your current site's speed, structure and conversion points, and what to fix first.",
      stats: [
        { value: "20-30%", label: "Missed leads recovered" },
        { value: "11+", label: "Years of marketing leadership" },
        { value: "8+", label: "Healthcare verticals covered" },
      ],
    },
    faqs: [
      { q: "What does website development include?", a: "Website development is the planning, design, coding and launch of a website. A good build includes mobile responsiveness, fast loading, SEO structure and clear conversion points." },
      { q: "How long does it take to build a website?", a: "Most business websites take six to twelve weeks, depending on page count, features, content readiness and how quickly feedback is shared during design and testing." },
      { q: "How much does website development cost in India?", a: "Cost depends on page count, design complexity, integrations and content needs. A scoped plan after a short discovery call gives you a clear, fixed estimate upfront." },
      { q: "Should SEO be built into a new website?", a: "Yes. SEO-ready architecture, fast loading, clean code and schema should be built in from the start. Adding them after launch usually costs more time and money." },
      { q: "How do you choose the best website development agency in India?", a: "Review their live websites, page speed results and how those sites convert visitors. The best website development service in India for you builds for enquiries, not just looks." },
      { q: "Why choose Reinvent Digital as your website development company in India?", a: "As a website development company in India, Reinvent Digital builds sites with SEO, speed, tracking and conversion points planned together, then measures enquiries after launch." },
    ],
    closing: {
      eyebrow: "Website Development",
      heading: "Get Your Website Audit",
      body: "Start with an audit of your site's speed, structure and conversion points, and what to fix first.",
    },
  },

  // A service landing page: Programmatic SEO, in the industry-page layout.
  // Lives at /programmatic-seo-agency.
  {
    slug: "programmatic-seo-agency",
    design: "industry",
    title: "Programmatic SEO Agency in India",
    seo: {
      title: "Programmatic SEO Agency in India | Reinvent Digital",
      description:
        "A programmatic SEO agency in India that builds hundreds of useful, search-ready pages from structured data, so you rank for more of the variations buyers search.",
      noindex: false,
    },
    hero: {
      eyebrow: "Programmatic SEO Agency in India",
      headline: "One Template. Hundreds of Pages.",
      accent: "Each One Worth Ranking!",
      description:
        "Reinvent Digital is a programmatic SEO agency in India. We build hundreds of useful, search-ready pages from structured data, so you rank for more of the variations buyers search.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your Programmatic SEO", href: "/contact" },
      stats: [
        { value: "299+", label: "Pages cited by AI tools" },
        { value: "232%", label: "Organic growth for a dental chain" },
        { value: "11+", label: "Years of marketing experience" },
      ],
      highlights: ["Keyword patterns", "Structured data", "Template design", "Indexing & tracking"],
      metric: { value: "299+", label: "Pages cited by AI tools" },
    },
    problems: {
      eyebrow: "What's included",
      heading: "Scale Without the Thin-Content Risk",
      body: "Our programmatic SEO service in India turns your data into scalable page templates, with every page written to add real value, not just match a keyword.",
      points: [
        { title: "Keyword Pattern Research", body: "Repeatable search patterns found, such as service plus city or product comparisons, with real demand." },
        { title: "Data Sourcing & Structuring", body: "Your own data, plus verified public sources, cleaned and organised so every page has unique facts." },
        { title: "Template Design", body: "Page templates built with direct answers, comparison tables and FAQs that change with each data row." },
        { title: "Quality & Uniqueness Checks", body: "Every page set checked for thin or duplicate content before publishing, to stay within Google's spam policies." },
        { title: "Internal Linking & Indexing", body: "Hub pages, breadcrumbs and XML sitemaps that help Google find, crawl and index every new page." },
        { title: "Page Set Tracking", body: "Indexed pages, rankings, traffic and enquiries tracked per page set, so weak templates are fixed early." },
      ],
    },
    help: {
      eyebrow: "How pSEO works",
      heading: "Find the Pattern. Build the Template. Scale With Care.",
      body: "Most page sets start indexing within weeks, with rankings building over three to six months.",
      points: [
        { title: "Find Repeatable Searches", body: "Identify keyword patterns with demand that one template can serve." },
        { title: "Prepare the Data", body: "Collect, clean and check the data that makes each page unique." },
        { title: "Build & Test Templates", body: "Design templates, then test a small batch before scaling up." },
        { title: "Publish in Batches", body: "Release pages in stages so Google can crawl and assess them." },
        { title: "Track Every Page Set", body: "Monitor indexing, rankings and traffic for each set separately." },
        { title: "Improve or Prune", body: "Strengthen pages that perform and remove those that add no value." },
      ],
    },
    proof: {
      eyebrow: "Find your missing searches",
      heading: "How Many Searches Have No Page Built for Them?",
      body: "Comparing the best programmatic SEO company in India? Start with an audit of the searches you're missing, the data you already have and which page sets to build first.",
      stats: [
        { value: "120%", label: "Better rankings for a multi-speciality hospital" },
        { value: "11+", label: "Years of marketing leadership" },
        { value: "8+", label: "Healthcare verticals covered" },
      ],
    },
    faqs: [
      { q: "What is programmatic SEO?", a: "Programmatic SEO creates many search-optimised pages from one template and a structured dataset, targeting keyword patterns like \"[service] in [city]\" or \"[product] vs [product]\" at scale." },
      { q: "Can programmatic SEO get my site penalised?", a: "It can, if pages are thin or duplicated. Google treats mass-produced, low-value pages as scaled content abuse. Every page needs unique data and genuine usefulness." },
      { q: "Which businesses need programmatic SEO?", a: "It suits businesses with many locations, products, services or comparisons, where the same question changes by one variable, such as city, model or category." },
      { q: "How long does programmatic SEO take to work?", a: "Most sets show early indexing within weeks. Rankings usually build over three to six months, as Google crawls the pages and tests how useful they are." },
      { q: "How do you choose the best programmatic SEO agency in India?", a: "Ask how they prevent thin pages, where their data comes from and how they track indexing. The best programmatic SEO service in India for you protects quality first." },
      { q: "Why choose Reinvent Digital as your programmatic SEO company in India?", a: "As a programmatic SEO company in India, Reinvent Digital builds data-driven templates, adds unique value to every page and tracks indexing, rankings and the enquiries each set brings." },
    ],
    closing: {
      eyebrow: "Programmatic SEO",
      heading: "Get Your Programmatic SEO Audit",
      body: "Start with an audit of the searches you're missing, the data you already have and which page sets to build first.",
    },
  },

  // A service landing page: SEO, in the industry-page layout.
  // Lives at /search-engine-optimization (was /seo-agency).
  {
    slug: "search-engine-optimization",
    replaces: "seo-agency",
    design: "industry",
    title: "SEO Agency in India",
    seo: {
      title: "SEO Agency in India | Reinvent Digital",
      description:
        "An SEO agency in India that fixes technical issues, builds content matched to search intent and tracks rankings to the enquiries they bring.",
      noindex: false,
    },
    hero: {
      eyebrow: "SEO Agency in India",
      headline: "The Right Pages",
      accent: "Bring the Right Enquiries!",
      description:
        "Reinvent Digital is an SEO agency in India. We fix technical issues, build content that matches search intent and track rankings to the enquiries they bring.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your SEO Strategy", href: "/contact" },
      stats: [
        { value: "223%", label: "More organic clicks" },
        { value: "232%", label: "Organic growth for a dental chain" },
        { value: "120%", label: "Better rankings for a healthcare brand" },
      ],
      highlights: ["Technical SEO", "Keyword & intent", "On-page & content", "Local SEO & authority"],
      metric: { value: "4-6 mo", label: "When ranking movement typically becomes visible" },
    },
    problems: {
      eyebrow: "What's included",
      heading: "Everything Google Checks Before It Ranks You",
      body: "Our SEO service in India covers technical health, content, local search and authority, planned together so rankings turn into traffic that converts.",
      points: [
        { title: "Technical SEO", body: "Site speed, crawlability, indexing, Core Web Vitals and schema fixed before content work begins." },
        { title: "Keyword & Intent Research", body: "Searches mapped to buying intent, so each page targets people ready to act." },
        { title: "On-Page Optimisation", body: "Titles, headings, internal links and content structured so Google understands every page clearly." },
        { title: "Content That Ranks", body: "Service pages, guides and FAQs written to answer real questions better than competing pages." },
        { title: "Local SEO", body: "Google Business Profile, local pages and citations, so nearby customers find you first." },
        { title: "Authority & Reporting", body: "Quality backlinks and digital PR, with monthly reports on rankings, traffic and enquiries." },
      ],
    },
    help: {
      eyebrow: "How SEO works",
      heading: "Fix. Build. Rank. Compound.",
      body: "Fixes show in 60 to 90 days, rankings move in months four to six, and returns compound after that.",
      points: [
        { title: "Audit Your Site", body: "Find technical issues, content gaps and where competitors outrank you." },
        { title: "Map Searches to Pages", body: "Match every valuable search to the page that should rank for it." },
        { title: "Fix Technical Issues", body: "Resolve speed, crawl and indexing problems that hold rankings back." },
        { title: "Publish & Optimise", body: "Improve existing pages and publish new ones built around search intent." },
        { title: "Build Authority", body: "Earn relevant links and mentions that strengthen trust in your site." },
        { title: "Track & Refresh", body: "Measure rankings and enquiries, then update pages that start slipping." },
      ],
    },
    proof: {
      eyebrow: "Check your search health",
      heading: "Where Is Your Site Losing Rankings and Enquiries?",
      body: "Comparing the best SEO company in India? Start with an audit of your technical health, the searches you're missing and which pages can rank fastest.",
      stats: [
        { value: "120%", label: "Better rankings for a multi-speciality hospital" },
        { value: "11+", label: "Years of marketing leadership" },
        { value: "8+", label: "Healthcare verticals covered" },
      ],
    },
    faqs: [
      { q: "What is Search Engine Optimisation (SEO)?", a: "Search Engine Optimisation (SEO) improves how a website ranks on Google and Bing through technical fixes, useful content, internal links, local signals and authority from other sites." },
      { q: "How long does SEO take to show results?", a: "Technical and Google Business Profile fixes often show results in 60 to 90 days. Rankings usually move in months four to six, with compounding returns from months nine to twelve." },
      { q: "Can an SEO agency guarantee first-page rankings?", a: "No honest agency can. Rankings depend on Google's algorithms, competition and your site's history. A good SEO partner improves your chances and shows measurable progress every month." },
      { q: "Does SEO still matter with AI search?", a: "Yes. AI Overviews and AI tools still draw from well-ranked, well-structured pages. SEO is now the foundation for AEO and GEO, not a separate channel." },
      { q: "How do you choose the best SEO agency in India?", a: "Check their case studies, reporting and how they connect rankings to enquiries. The best SEO service in India for you explains its process and never promises guaranteed rankings." },
      { q: "Why choose Reinvent Digital as your SEO company in India?", a: "As an SEO company in India, Reinvent Digital combines technical SEO, content, AEO and GEO, and reports on rankings, traffic and the enquiries they generate every month." },
    ],
    closing: {
      eyebrow: "Search Engine Optimisation",
      heading: "Get Your SEO Audit",
      body: "Start with an audit of your technical health, the searches you're missing and which pages can rank fastest.",
    },
  },

  // A service landing page: PPC management, in the industry-page layout.
  // Lives at /ppc-management-services.
  {
    slug: "ppc-management-services",
    design: "industry",
    title: "PPC Management Services in India",
    seo: {
      title: "PPC Management Services in India | Reinvent Digital",
      description:
        "A PPC agency in India that plans, builds and manages Google Ads and Meta campaigns to bring qualified enquiries, not just clicks, with every rupee tracked.",
      noindex: false,
    },
    hero: {
      eyebrow: "PPC Management Services",
      headline: "Clicks Cost Money.",
      accent: "Enquiries Pay It Back!",
      description:
        "Reinvent Digital is a PPC agency in India. We plan, build and manage Google Ads and Meta campaigns that bring qualified enquiries, not just clicks.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your PPC Strategy", href: "/contact" },
      stats: [
        { value: "1K+", label: "Leads generated in 90 days" },
        { value: "60%", label: "Low CPL recorded" },
        { value: "2400+", label: "Negative keywords blocked" },
      ],
      highlights: ["Google & PMax", "Meta Ads", "Conversion tracking", "Budget optimisation"],
      metric: { value: "Weekly", label: "Performance reviews and budget adjustments" },
    },
    problems: {
      eyebrow: "What's included",
      heading: "Every Rupee Tracked From Click to Enquiry",
      body: "Our PPC service in India covers strategy, campaign builds, landing pages and tracking, with every rupee measured against the enquiries it brings.",
      points: [
        { title: "Google Search & Performance Max", body: "Campaigns built around buying-intent keywords, with Performance Max used only where it adds value." },
        { title: "Meta Ads", body: "Facebook and Instagram campaigns that reach likely buyers and retarget engaged visitors." },
        { title: "Negative Keywords & Wasted Spend", body: "Irrelevant searches blocked continuously, so budget goes to people who might actually buy." },
        { title: "Landing Page Alignment", body: "Ad message, landing page and form matched, improving Quality Score and conversion rate." },
        { title: "Call & Conversion Tracking", body: "Calls, forms and WhatsApp clicks tracked to the ad, keyword and campaign that drove them." },
        { title: "Budget & Bid Optimisation", body: "Spend moved weekly towards campaigns with the lowest cost per qualified lead." },
      ],
    },
    help: {
      eyebrow: "How we manage PPC",
      heading: "Launch. Learn. Cut Waste. Scale.",
      body: "Meaningful data arrives in 30 to 45 days, and budget decisions become reliable at 60 to 90 days.",
      points: [
        { title: "Audit Current Spend", body: "Find wasted clicks, missing tracking and weak campaigns in your accounts." },
        { title: "Set Up Tracking", body: "Track calls, forms and WhatsApp clicks before spending more budget." },
        { title: "Build Focused Campaigns", body: "Create tight ad groups, strong ads and matching landing pages." },
        { title: "Launch With Control", body: "Start with set budgets and clear targets for cost per lead." },
        { title: "Cut Waste Weekly", body: "Add negative keywords and pause ads that don't bring enquiries." },
        { title: "Scale What Works", body: "Move budget towards campaigns delivering the best cost per lead." },
      ],
    },
    proof: {
      eyebrow: "Find your wasted spend",
      heading: "How Much of Your Ad Budget Went to Clicks That Never Enquired?",
      body: "Comparing the best PPC company in India? Start with an audit of your current campaigns, wasted spend and where your cost per lead can come down.",
      stats: [
        { value: "20%", label: "Low CPL every month, over 90 days" },
        { value: "42%", label: "Low CPL for a dental network" },
        { value: "11+", label: "Years of marketing experience" },
      ],
    },
    faqs: [
      { q: "What is Pay-Per-Click (PPC) advertising?", a: "Pay-Per-Click (PPC) advertising shows your ads on Google, Meta and other platforms, and you pay only when someone clicks. It brings faster visibility than organic search." },
      { q: "Google Ads or Meta Ads: which is better?", a: "Google Ads captures people already searching for what you offer. Meta Ads builds interest among people likely to need it. Most businesses get the best results using both." },
      { q: "How long before PPC campaigns show results?", a: "Meaningful data usually appears within 30 to 45 days. Budget and bidding decisions become reliable at 60 to 90 days, once enough conversions have been tracked." },
      { q: "Why is my cost per lead so high?", a: "Common causes are broad keywords, missing negative keywords, slow landing pages and untracked calls. Fixing tracking and targeting first usually lowers cost per lead." },
      { q: "How do you choose the best PPC agency in India?", a: "Ask how they track calls and forms and cut wasted spend. The best PPC service in India for you reports cost per lead, not just clicks." },
      { q: "Why choose Reinvent Digital as your PPC company in India?", a: "As a PPC company in India, Reinvent Digital builds campaigns around tracked enquiries, reviews performance weekly and moves budget to what brings qualified leads." },
    ],
    closing: {
      eyebrow: "PPC Management",
      heading: "Get Your PPC Audit",
      body: "Start with an audit of your current campaigns, wasted spend and where your cost per lead can come down.",
    },
  },

  // An industry landing page: digital marketing for dietary and supplement
  // brands, in the industry-page layout. Lives at
  // /digital-marketing-for-dietary-products.
  {
    slug: "digital-marketing-for-dietary-products",
    design: "industry",
    title: "Digital Marketing for Dietary Products in India",
    seo: {
      title: "Digital Marketing for Dietary Products in India | Reinvent Digital",
      description:
        "Compliant Google Ads and Meta campaigns, marketplace listings and SEO, AEO and GEO content for supplement and nutrition brands, tracked to orders and reorders.",
      noindex: false,
    },
    hero: {
      eyebrow: "Dietary & Supplement Brands",
      headline: "Supplement Buyers Read the Label.",
      accent: "Make Sure They Trust Yours!",
      description:
        "At Reinvent Digital, we run compliant Google Ads and Meta campaigns, optimise marketplace listings and build SEO, AEO and GEO content for supplement and nutrition brands. Every campaign is tracked to orders and repeat purchases.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70",
      cta: { label: "Discuss Your Brand's Growth", href: "/contact" },
      stats: [
        { value: "54%", label: "Higher conversion for a dental brand" },
        { value: "162%", label: "More social engagement recorded" },
        { value: "185+", label: "Healthcare accounts managed" },
      ],
      highlights: ["Compliant ads", "D2C & marketplaces", "Repeat-order journeys", "Cross-channel reporting"],
      metric: { value: "54%", label: "Higher conversion rate" },
    },
    problems: {
      eyebrow: "Where brands lose customers",
      heading: "The First Order Is Easy. The Second Is Where Brands Win.",
      body: "A good digital marketing service for dietary products in India has to solve more than visibility. Brands lose buyers to rejected ads, marketplace price wars and customers who never reorder.",
      points: [
        { title: "Health Claims Get Ads Rejected", body: "Wording that suggests a supplement treats a condition breaks advertising rules and stops campaigns." },
        { title: "Marketplaces Own the Customer", body: "Most sales happen on marketplaces, where price wars rule and the brand never sees customer data." },
        { title: "First Orders Never Repeat", body: "Customers finish one pack, forget to reorder and switch to whatever brand appears next." },
        { title: "Influencer Posts Bring Reach, Not Trust", body: "Unqualified creators give health advice, and the brand inherits the compliance risk." },
        { title: "Product Pages Leave Questions Unanswered", body: "Buyers want ingredients, dosage, certifications and licence details, and leave when they can't find them." },
        { title: "Side-Effect Reviews Go Unanswered", body: "A few unanswered reviews about safety raise doubts for every buyer who reads them." },
      ],
    },
    help: {
      eyebrow: "How we help",
      heading: "Every Order. Every Reorder. In One System.",
      body: "As a digital marketing company for dietary products in India, Reinvent Digital connects your ads, listings, website and reorders, so every channel works from the same customer data.",
      points: [
        { title: "Compliance-Checked Claims", body: "Every ad, post and product page checked against food safety and advertising rules before it goes live." },
        { title: "D2C Website and Product Pages", body: "Pages showing ingredients, dosage, certifications and licence numbers clearly, built to rank and convert." },
        { title: "Marketplace Listing Optimisation", body: "Titles, images, A+ content and reviews improved on Amazon, Flipkart and other marketplaces." },
        { title: "Repeat-Order Journeys", body: "Consent-based WhatsApp and email reminders timed to when each pack is likely to run out." },
        { title: "Qualified Creator Partnerships", body: "Collaborations with qualified, clearly disclosed creators who explain products without making health claims." },
        { title: "Search and Social Campaigns", body: "Google Shopping, Search and Meta campaigns built within supplement advertising policies." },
        { title: "Review and Reputation Care", body: "Every review answered professionally, with safety concerns routed to your quality team." },
        { title: "Cross-Channel Sales Reporting", body: "Website, marketplace and campaign sales combined, showing cost per order and repeat rate by channel." },
      ],
    },
    proof: {
      eyebrow: "Supplement & nutrition brands",
      heading: "Ready to Turn First Orders Into Loyal Customers?",
      body: "Comparing the best digital marketing company for dietary products in India? Share your channels and sales data, and we'll show where buyers drop off and what to fix first.",
      stats: [
        { value: "54%", label: "Higher conversion rate" },
        { value: "73.9%", label: "More website traffic" },
        { value: "162%", label: "More social media engagement" },
      ],
    },
    faqs: [
      { q: "How do you choose the best digital marketing agency for dietary products in India?", a: "Look for experience with health advertising rules, marketplace growth and repeat-purchase tracking. The best digital marketing service for dietary products in India checks every claim before publishing and reports cost per order, not just traffic or followers." },
      { q: "What health claims can supplement brands make in India?", a: "Claims must be truthful, specific and backed by evidence. Food safety rules don't allow supplements to claim they prevent, treat or cure diseases. Describe ingredients and general wellbeing benefits carefully, and have claims reviewed before publishing." },
      { q: "Can supplement brands run Google and Meta ads?", a: "Yes, within platform policies. Ads can't make unproven health claims or promote restricted ingredients, and some products need extra review. Campaigns perform best when ad copy, landing pages and product claims are checked together before launch." },
      { q: "Should supplement brands sell on marketplaces or their own website?", a: "Both, for different jobs. Marketplaces bring ready buyers and volume. Your own website builds direct relationships, customer data and repeat orders. Most brands use marketplaces for reach and their website for loyalty and margin." },
      { q: "Can supplement brands work with health influencers?", a: "Yes, carefully. Influencers giving health information should have relevant qualifications, and every paid post must be clearly disclosed. Product experience content is safer than health advice, and claims should match what the brand is legally allowed to say." },
      { q: "How much should a supplement brand spend on digital marketing?", a: "Work backwards from cost per order and repeat rate, not a fixed budget. Spend more where customers reorder, because a buyer who orders three times justifies a higher first-order cost. Review channel performance monthly and adjust." },
    ],
    closing: {
      eyebrow: "Dietary & Supplement Brands",
      heading: "Get Your Growth Audit",
      body: "Share your channels and sales data, and we'll show where buyers drop off and what to fix first.",
    },
  },
];
