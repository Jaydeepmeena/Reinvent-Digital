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
    },
    intro:
      "<p>A patient in Mumbai can find a clinic through search, Maps, social media or an AI answer. Each channel needs to lead to the same booking.</p><ul><li><strong>Google Search:</strong> searches naming a treatment and a suburb, such as root canal in Andheri, show clear intent to book.</li><li><strong>Google Maps:</strong> the Maps profile shows hours, location and doctor details before a patient decides which clinic to call.</li><li><strong>Meta platforms:</strong> Facebook and Instagram reach patients before they search, which suits planned treatments rather than urgent care.</li><li><strong>AI answers:</strong> tools such as Google AI Overviews and ChatGPT now answer clinic questions, so clear, consistent information matters.</li></ul>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "Why Do Mumbai Clinics and Hospitals Choose Reinvent Digital?",
      body: "Clinic owners comparing a digital marketing company in Mumbai should look at proof, process and compliance. Here is ours.",
      points: [
        "5,500 to 11,500 monthly walk-ins in 8 months.",
        "Walk-ins per agent up from about 367 to 767 a month.",
        "Show-up rate typically up 15–25% within 60 days of reminders.",
        "Doctor name and registration number shown on every client ad.",
        "Four core specialities: dental, IVF, eye care and hospitals.",
        "Founded in 2015, now focused only on healthcare.",
        "Owner with 20+ years in healthcare marketing.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "What Digital Marketing Services Does Reinvent Digital Offer in Mumbai?",
      body: "Each service runs inside the Reinvent Digital Patient Acquisition System, so every channel is tracked from first enquiry to walk-in.",
      items: [
        {
          title: "Google Ads",
          body: "Treatment and locality campaigns for Mumbai clinics and hospitals, with call tracking and NMC-compliant ad copy.",
        },
        {
          title: "Meta Ads",
          body: "Facebook and Instagram campaigns with doctor registration details on every ad, built for planned treatments.",
        },
        {
          title: "SEO, AEO and GEO",
          body: "Search Engine Optimisation, Answer Engine Optimisation and Generative Engine Optimisation for search results, direct answers and AI tools.",
        },
        {
          title: "Google Maps and Local SEO",
          body: "Profile management, location pages and name, address and phone checks for every Mumbai clinic or hospital you run.",
        },
      ],
    },
    overview:
      "<p><strong>How we plan: three steps from first audit to patient walk-ins.</strong> We audit what you run today, launch channels by locality, then keep refining against walk-ins, not clicks or leads. First, you tell us about your clinic — your centres, treatments, targets and the problems you are facing right now. Then we map the gaps, reviewing your ads, Maps listings, calls and CRM to find where patients drop off. Finally you get a proven plan, scoped to start within 5 km of each centre, with monthly walk-in reviews built in.</p><p><strong>No office visit needed — we come to your clinic or hospital.</strong> Our team visits at onboarding to review your front desk, call flow and Google Maps profiles before any campaign goes live, then returns on an agreed schedule to review results with you. Between visits, a live attribution dashboard shows leads, appointments and walk-ins by channel; enquiry calls are scored on a 100-point scale with weekly coaching; and we set up your existing CRM if it tracks source and outcome, or move you to MedLift. To book an onboarding visit at your clinic or hospital in Mumbai, call our team on +91 7428094567. We cover Colaba, Dadar, Worli, Bandra, Andheri, Powai, Chembur and Borivali, and the localities between them.</p>",
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
    },
    intro:
      "<p>Calicut clinics and hospitals see patients from the city and from surrounding towns. For many of them, the choice starts with an online search.</p><ul><li><strong>Malayalam and English search:</strong> patients search in both languages, so ads and profiles need to read naturally in each.</li><li><strong>Travel from nearby districts:</strong> families from Malappuram, Wayanad and Kannur may compare Calicut hospitals before planning a visit.</li><li><strong>WhatsApp before a call:</strong> a WhatsApp message is often the first contact, so a slow reply can lose the enquiry.</li><li><strong>Doctor credentials:</strong> patients look for the doctor's qualifications and registration on Google Maps and the clinic website before booking.</li></ul>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "Why Do Calicut Healthcare Groups Work With Reinvent Digital?",
      body: "Choosing a digital marketing company in Calicut comes down to what it measures and how it handles compliance.",
      points: [
        "A 115+ clinic dental group: 5,500 to 11,500 walk-ins a month.",
        "The same 15 agents and same CRM, over 8 months.",
        "20–30% of missed leads recovered through WhatsApp follow-up.",
        "100-point scoring on enquiry calls, with weekly coaching.",
        "Doctor registration number on every client ad and post.",
        "Dental, IVF and fertility, eye care and multi-speciality hospitals.",
        "Founded in 2015; owner with 20+ years in healthcare marketing.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "What Does Reinvent Digital Run for Clinics and Hospitals in Calicut?",
      body: "The Reinvent Digital Patient Acquisition System connects four services, so each Calicut enquiry can be traced to a walk-in.",
      items: [
        { title: "Catchment-Based Google Ads", body: "Campaigns set by treatment and travel radius, covering Calicut and the towns your patients come from." },
        { title: "Meta Ads in Malayalam and English", body: "Facebook and Instagram ads that show the treating doctor's registration details, written for each audience." },
        { title: "Healthcare SEO, AEO and GEO", body: "Search Engine Optimisation, Answer Engine Optimisation and Generative Engine Optimisation for Google results and AI answers." },
        { title: "Missed-Call WhatsApp Follow-Up", body: "Missed calls trigger an automatic WhatsApp reply, which typically recovers 20–30% of those leads in the same session." },
      ],
    },
    overview:
      "<p><strong>How we plan: three steps from first audit to patient walk-ins.</strong> We audit what you run today, launch channels by locality, then keep refining against walk-ins, not clicks or leads. First you tell us about your clinic — your centres, treatments, targets and the problems you are facing. Then we map the gaps, reviewing your ads, Maps listings, calls and CRM to find where patients drop off. Finally you get a proven plan, scoped to start within 5 km of each centre, with monthly walk-in reviews built in.</p><p><strong>No office visit needed — we come to your clinic or hospital.</strong> On the first visit we sit with your front desk, listen to enquiry calls and review your Google Maps profile; our team then returns on an agreed schedule to review walk-ins and next steps. Every website form and WhatsApp message lands in one patient record with its source, a dashboard shows which channel brought each lead, appointment and walk-in, and we keep your current CRM if it records source and outcome or switch you to MedLift. We cover Kozhikode city and nearby areas, including Mavoor Road, Nadakkavu, Eranhipalam, Chevayur, West Hill, Kallai, Feroke and Ramanattukara. To arrange an onboarding visit, call our team on +91 7428094567.</p>",
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
    },
    intro:
      "<p>Kochi stretches from Fort Kochi to Aluva, so patients weigh distance as much as reputation. Many of those checks happen online, before the first call.</p><ul><li><strong>Distance and traffic:</strong> patients compare how far a clinic is from home or work, often across bridges and busy junctions.</li><li><strong>Branch details:</strong> for clinic groups, patients look for the nearest branch's hours, doctors and directions on Google Maps.</li><li><strong>Doctor qualifications:</strong> specialist training and registration details help patients compare doctors for planned treatments such as implants or eye surgery.</li><li><strong>Response speed:</strong> an unanswered call or a slow WhatsApp reply can send the patient straight to the next listing.</li></ul>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "What Makes Reinvent Digital a Fit for Kochi Healthcare Groups?",
      body: "A digital marketing company in Kochi should prove results, show its process and keep every ad within NMC rules.",
      points: [
        "5,500 to 11,500 monthly walk-ins in 8 months.",
        "Walk-ins per agent: about 367 to 767 a month.",
        "Show-up rate typically up 15–25% within 60 days.",
        "20–30% of missed leads recovered in the same session.",
        "Every form and WhatsApp enquiry held in one record.",
        "Registration details on every client ad, as NMC requires.",
        "Founded in 2015, focused only on healthcare today.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "What Does Reinvent Digital Manage for Kochi Clinics and Hospitals?",
      body: "Under the Reinvent Digital Patient Acquisition System, every service reports into one view of enquiries, appointments and walk-ins.",
      items: [
        { title: "Branch-Level Google Maps", body: "A separate, accurate profile for every branch, with hours, doctors and services kept consistent." },
        { title: "Healthcare Google Ads", body: "Treatment and area campaigns, from Kakkanad to Tripunithura, with call tracking from ad to walk-in." },
        { title: "Healthcare Meta Ads", body: "Facebook and Instagram campaigns for planned treatments, each ad showing the doctor's registration details." },
        { title: "Call-Centre Optimisation", body: "Routing, call scoring and coaching, whether your front desk or our agents answer the phone." },
      ],
    },
    overview:
      "<p><strong>How we plan: three steps from first audit to patient walk-ins.</strong> We audit what you run today, launch channels by locality, then keep refining against walk-ins, not clicks or leads. First you tell us about your clinic — your centres, treatments, targets and the problems you are facing. Then we map the gaps, reviewing your ads, Maps listings, calls and CRM to find where patients drop off. Finally you get a proven plan, scoped to start within 5 km of each centre, with monthly walk-in reviews built in.</p><p><strong>No office visit needed — we come to your clinic or hospital.</strong> At onboarding our team spends time with your reception staff and checks how enquiries are answered and logged, then returns on a schedule set with you to cover results and anything to fix on site. Calls are scored out of 100 with weekly coaching, and we configure your existing CRM if it captures source and outcome or set up MedLift. We cover Edappally, Kakkanad, Palarivattom, Kaloor, Vyttila, Kadavanthra, Panampilly Nagar, Aluva and nearby areas. To schedule an onboarding visit, call our team on +91 7428094567.</p>",
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
    },
    intro:
      "<p>Chennai is large enough that patients usually start with their own area, their language and the treatment they need, not the whole city.</p><ul><li><strong>Area-led search:</strong> searches name the area, such as Anna Nagar, Velachery or OMR, alongside the treatment.</li><li><strong>Tamil and English queries:</strong> patients search in both languages, and profiles that read well in each are easier to choose.</li><li><strong>Wider search for specialist care:</strong> for IVF, eye surgery or hospital care, patients often look beyond their own area.</li><li><strong>AI-generated answers:</strong> ChatGPT and Google AI Overviews can name clinics, drawing on whatever information is consistent online.</li></ul>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "Why Do Chennai Clinics and Hospitals Partner With Reinvent Digital?",
      body: "When comparing a digital marketing company in Chennai, check the proof behind each claim. These are the numbers and practices behind ours.",
      points: [
        "2.1x monthly walk-ins for one dental group.",
        "No agents added while walk-ins rose by 6,000 a month.",
        "185+ healthcare accounts managed.",
        "Missed calls followed up automatically on WhatsApp.",
        "Enquiry calls scored on a 100-point scale, coached weekly.",
        "Doctor name, qualifications and registration on every client ad.",
        "Founded in 2015; owner with 20+ years in healthcare marketing.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "Which Services Does Reinvent Digital Run for Chennai Clinics and Hospitals?",
      body: "Every service below runs within the Reinvent Digital Patient Acquisition System and is reported against walk-ins, not clicks.",
      items: [
        { title: "Area-Targeted Google Ads", body: "Separate campaigns for each Chennai area and treatment, with call tracking linked to walk-ins." },
        { title: "Generative Engine Optimisation (GEO)", body: "Consistent clinic details, structured data and clear summaries, so AI tools describe your clinic accurately." },
        { title: "Answer Engine Optimisation (AEO) and SEO", body: "Patient questions answered directly on your pages, for Featured Snippets and People Also Ask." },
        { title: "Booking Attribution", body: "Leads, appointments and walk-ins tracked by channel on one dashboard, in MedLift or your own CRM." },
      ],
    },
    overview:
      "<p><strong>How we plan: three steps from first audit to patient walk-ins.</strong> We audit what you run today, launch channels by locality, then keep refining against walk-ins, not clicks or leads. First you tell us about your clinic — your centres, treatments, targets and the problems you are facing. Then we map the gaps, reviewing your ads, Maps listings, calls and CRM to find where patients drop off. Finally you get a proven plan, scoped to start within 5 km of each centre, with monthly walk-in reviews built in.</p><p><strong>No office visit needed — we come to your clinic or hospital.</strong> On day one we follow an enquiry from first call to booking at your front desk and map the gaps, then return on an agreed schedule focused on results and front-desk handling. Targets are set around walk-ins and agreed in writing, missed calls trigger an automatic WhatsApp follow-up saved in one patient record, and we use your CRM if it records source and outcome or set up MedLift. We cover Anna Nagar, T. Nagar, Adyar, Velachery, Mylapore, Porur, Vadapalani and the OMR corridor. To plan an onboarding visit, call our team on +91 7428094567.</p>",
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
    },
    intro:
      "<p>Bangalore patients fit healthcare around work and traffic. That shapes where they search, which clinic they pick and whether they arrive.</p><ul><li><strong>Commute-based choice:</strong> patients often choose a clinic near the office or along their daily route, not only near home.</li><li><strong>Timings matter:</strong> evening and weekend availability on a Google Maps profile can decide which clinic gets the call.</li><li><strong>Close comparison:</strong> patients compare Maps profiles, doctor qualifications and clinic websites before making contact.</li><li><strong>Bookings that slip:</strong> traffic and busy schedules can turn a confirmed appointment into a no-show without a timely reminder.</li></ul>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "What Do Bangalore Healthcare Groups Get With Reinvent Digital?",
      body: "Before shortlisting a digital marketing company in Bangalore, ask for proof you can check. Here is what Reinvent Digital can show.",
      points: [
        "A 115+ clinic dental group grew walk-ins 2.1x in 8 months.",
        "6,000 more walk-ins a month, with the same 15 agents.",
        "185+ healthcare accounts managed.",
        "Missed calls answered on WhatsApp, with 20–30% recovered.",
        "Weekly coaching from 100-point call scores.",
        "Doctor registration details on every client ad.",
        "Founded in 2015, with a healthcare-only focus today.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "How Does Reinvent Digital Support Bangalore Clinics and Hospitals?",
      body: "The Reinvent Digital Patient Acquisition System covers the full path in Bangalore, from the first search to the patient arriving.",
      items: [
        { title: "Google Ads by Corridor", body: "Campaigns for Whitefield, Electronic City, Outer Ring Road and other hubs, tracked from click to walk-in." },
        { title: "Google Maps and Local SEO", body: "Accurate timings, services and doctor details on every profile, so patients can compare with confidence." },
        { title: "Appointment Reminders", body: "Confirmation and reminder messages before each visit, which typically lift show-up rates by 15–25% within 60 days." },
        { title: "Call-Centre Optimisation", body: "Enquiry calls routed, scored and coached, whether your front desk or our agents answer them." },
      ],
    },
    overview:
      "<p><strong>How we plan: three steps from first audit to patient walk-ins.</strong> We audit what you run today, launch channels by locality, then keep refining against walk-ins, not clicks or leads. First you tell us about your clinic — your centres, treatments, targets and the problems you are facing. Then we map the gaps, reviewing your ads, Maps listings, calls and CRM to find where patients drop off. Finally you get a proven plan, scoped to start within 5 km of each centre, with monthly walk-in reviews built in.</p><p><strong>No office visit needed — we come to your clinic or hospital.</strong> At onboarding we watch how bookings, reminders and walk-ins are handled at your front desk on a normal day, then return on an agreed schedule to review no-shows, walk-ins and call quality in person. Form and WhatsApp enquiries are saved in one patient record with their source, reporting shows leads, appointments and walk-ins by channel, and we work in your CRM if it tracks source and outcome or set up MedLift. We cover Whitefield, Marathahalli, Bellandur, Sarjapur Road, Electronic City, Bannerghatta Road, Rajajinagar, Malleshwaram, Hebbal and Yelahanka. For an onboarding visit, call our team on +91 7428094567.</p>",
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
    },
    intro:
      "<p>Thiruvananthapuram draws patients from the city, southern Kerala and across the Tamil Nadu border. Each group compares clinics in its own way before booking.</p><ul><li><strong>Private vs government care:</strong> many patients weigh private clinics against government hospitals, so clear facility and doctor information matters.</li><li><strong>Cross-border search:</strong> families from Kanyakumari district may search in Tamil as well as English before travelling.</li><li><strong>Technopark professionals:</strong> people working around Kazhakoottam often look for care near work, with timings that fit the day.</li><li><strong>Specialist credentials:</strong> for IVF, eye care and hospital treatment, patients look closely at specialist qualifications and accreditation.</li></ul>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "Why Do Thiruvananthapuram Healthcare Groups Choose Reinvent Digital?",
      body: "A digital marketing company in Thiruvananthapuram should show results, process and compliance in one place. Here is the record behind ours.",
      points: [
        "Walk-ins up from 5,500 to 11,500 a month for one dental group.",
        "185+ healthcare accounts managed.",
        "Owner with 20+ years in healthcare marketing.",
        "20–30% of missed leads recovered through WhatsApp.",
        "Show-up rate typically up 15–25% within 60 days.",
        "Call scoring and weekly coaching for front desks.",
        "Registration numbers on every client ad, as NMC rules require.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "What Does Reinvent Digital Handle for Thiruvananthapuram Clinics and Hospitals?",
      body: "The Reinvent Digital Patient Acquisition System links four services, so every Thiruvananthapuram enquiry is tracked to the walk-in.",
      items: [
        { title: "Healthcare Google Ads", body: "Campaigns by treatment and area, including Kazhakoottam and the Kanyakumari border belt, with call tracking." },
        { title: "Healthcare SEO and AEO", body: "Service pages that answer patient questions directly, written for search results and Featured Snippets." },
        { title: "Doctor Directory and Maps Details", body: "Doctor names, qualifications and registration numbers shown accurately on Maps profiles and websites." },
        { title: "Messaging and Follow-Up", body: "Missed calls and WhatsApp enquiries answered quickly, with reminders before each appointment." },
      ],
    },
    overview:
      "<p><strong>How we plan: three steps from first audit to patient walk-ins.</strong> We audit what you run today, launch channels by locality, then keep refining against walk-ins, not clicks or leads. First you tell us about your clinic — your centres, treatments, targets and the problems you are facing. Then we map the gaps, reviewing your ads, Maps listings, calls and CRM to find where patients drop off. Finally you get a proven plan, scoped to start within 5 km of each centre, with monthly walk-in reviews built in.</p><p><strong>No office visit needed — we come to your clinic or hospital.</strong> On the first visit we meet your team, review enquiry handling and note how patients currently find you, then return on an agreed schedule to review walk-ins and front-desk handling. Every website form and WhatsApp enquiry is saved in one record with its source, a dashboard shows leads, appointments and walk-ins by channel, and we keep your CRM if it captures source and outcome or move you to MedLift. We cover Thiruvananthapuram city and suburbs, including Thampanoor, East Fort, Peroorkada, Vellayambalam, Kesavadasapuram, Kazhakoottam, Technopark and Neyyattinkara. To plan an onboarding visit, call our team on +91 7428094567.</p>",
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
    },
    intro:
      "<p>Dubai's patients come from many countries and carry different insurance plans. Both shape how they search and which clinic they choose.</p><ul><li><strong>Insurance first:</strong> many patients check whether a clinic accepts their insurance network before comparing doctors or locations.</li><li><strong>Many languages:</strong> searches happen in English and Arabic, and often in Hindi, Malayalam, Urdu or Tagalog too.</li><li><strong>Licence and credentials:</strong> patients look for DHA-licensed doctors, clear specialties and accurate titles on Maps and websites.</li><li><strong>Area and access:</strong> parking, metro access and the drive from home or office influence the final choice.</li></ul>",
    reasons: {
      eyebrow: "Why work with us",
      heading: "What Can Dubai Clinics Expect From Reinvent Digital?",
      body: "A digital marketing company in Dubai should show its results and its compliance process clearly. Here is ours, including where the results come from.",
      points: [
        "5,500 to 11,500 monthly walk-ins for one group in India.",
        "The same 15 agents and same CRM throughout that period.",
        "Show-up rate typically up 15–25% within 60 days of reminders.",
        "20–30% of missed leads recovered through WhatsApp follow-up.",
        "Every ad checked against DHA wording rules before launch.",
        "Medical director approval built into every content workflow.",
        "Owner with 20+ years in healthcare marketing.",
      ],
    },
    services: {
      eyebrow: "What we run",
      heading: "Which Services Do Dubai Clinics Get From Reinvent Digital?",
      body: "Every service runs inside the Reinvent Digital Patient Acquisition System, with DHA rules checked before anything goes live.",
      items: [
        { title: "DHA-Checked Google Ads", body: "Treatment and area campaigns, with ad copy checked against DHA banned words and claims." },
        { title: "Multilingual Meta Ads", body: "Facebook and Instagram campaigns in the languages your patients use, approved by your medical director." },
        { title: "Google Maps and Local SEO", body: "Accurate DHA-licensed titles, specialties, timings and accepted insurance details on every profile." },
        { title: "Booking Attribution", body: "Leads, appointments and patient visits tracked by channel, in MedLift or your own CRM." },
      ],
    },
    overview:
      "<p><strong>How we plan: three steps from first audit to patient walk-ins.</strong> We audit what you run today, launch channels by locality, then keep refining against patient visits, not clicks or leads. First you tell us about your clinic — your centres, treatments, targets and the problems you are facing. Then we map the gaps, reviewing your ads, Maps listings, calls and CRM to find where patients drop off. Finally you get a proven plan, with reviews built in.</p><p><strong>No office visit needed — we come to your clinic or hospital.</strong> Onboarding is compliance-first: we review your DHA licence details, existing ads and Maps profiles with your medical director, then return on an agreed schedule to review patient visits and front-desk handling. Every post and ad goes to your medical director for sign-off before publishing, unanswered calls trigger an automatic WhatsApp reply saved in one patient record, and we use your existing CRM if it tracks source and outcome or switch you to MedLift. We cover Deira, Bur Dubai, Downtown Dubai, Business Bay, Jumeirah, Al Barsha, Dubai Marina, JLT, Mirdif and Al Qusais. To arrange an onboarding visit, call our team on +91 7428094567.</p>",
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
    },
    reasons: {
      eyebrow: "Where Pharmacies Lose Customers",
      heading: "Customers Need Medicines. They Buy From Whoever Answers First",
      body: "Pharmacy customers rarely wait. They search nearby, ask about stock and buy from the first store that responds, while regular customers drift to delivery apps.",
      points: [
        "Local searches find another store — customers searching “pharmacy near me” or “24-hour chemist” see a competitor first.",
        "Stock enquiries go unanswered — calls and WhatsApp messages about availability wait, and the customer buys elsewhere.",
        "Monthly refills slip away — customers on regular medicines forget to reorder, then buy from whichever store is closest that day.",
        "Delivery apps win on convenience — app discounts and doorstep delivery pull regular customers away from local pharmacies.",
        "Ads get rejected for medicine content — copy that mentions restricted medicines breaks platform policies, and campaigns stop running.",
        "Unanswered reviews shape store choice — a few negative reviews with no reply make nearby customers choose another pharmacy.",
        "Marketing can’t see store visits — nobody links campaigns to orders and footfall, so marketing is judged on clicks alone.",
      ],
    },
    services: {
      eyebrow: "How we help",
      heading: "Every Store, Every Refill, Handled In One System",
      body: "Each fix runs inside the Reinvent Digital Patient Acquisition System, so your campaigns, stores and order desk work from the same customer data.",
      items: [
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
    overview:
      "<p><strong>Proof, not a vague promise — one system, proven in healthcare, now built for pharmacies.</strong> Pharmacies win customers on speed, trust and convenience, and lose them when replies are slow. The same Patient Acquisition System has already doubled walk-ins and lowered cost per lead for other healthcare groups; for pharmacies, it is adapted to faster, repeat buying decisions.</p><ul><li><strong>2.1x monthly walk-ins</strong> in 8 months — dental group.</li><li><strong>94% more site conversions</strong> in 6 months — liver transplant practice.</li><li><strong>20% lower cost per lead every month</strong> in the first three months — multi-speciality hospital.</li></ul>",
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
    },
    reasons: {
      eyebrow: "Where Dental Practices Lose Patients",
      heading: "Your Dentistry is Strong. But Your Visibility Isn’t",
      body: "Most dentists build their practice on skill and referrals. Without digital marketing for dentists that works, patients judge them online on profiles, reviews and response speed, often before meeting them.",
      points: [
        "Patients can’t find you by name — searching your name shows a directory listing or a thin profile, not your practice.",
        "Your expertise stays invisible — your implant or orthodontic training isn’t on your website, so patients choose a bigger-looking clinic.",
        "Calls go unanswered mid-procedure — while you’re treating a patient, new enquiries ring out and book with someone else.",
        "Directories control your bookings — Practo and Justdial bring enquiries, but show competing clinics right beside your listing.",
        "High-value cases need more trust — implant and aligner patients want to hear from the dentist first, and find nothing to watch or read.",
        "Advertising rules feel unclear — unsure what dental ethics rules allow, many dentists avoid marketing, or take risks without knowing.",
        "No time to manage marketing — between treating patients and running the practice, marketing becomes irregular and hard to judge.",
      ],
    },
    services: {
      eyebrow: "How we help",
      heading: "Your Focus on Dentistry. We Run the System",
      body: "Each fix runs inside the Reinvent Digital Patient Acquisition System, our approach to digital marketing for dentists. Your profile, phone and appointment book work together while you treat patients.",
      items: [
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
    overview:
      "<p><strong>Proof, not a vague promise — 54% higher conversion, same treatment, better answers.</strong> A dental aligner brand needed more people exploring treatment online, and more of them taking the next step. During our engagement, conversions rose 54% and new users grew 88.2%. What changed sits in how patients’ treatment questions were answered.</p><ul><li><strong>54% higher conversion rates.</strong></li><li><strong>73.9% more website traffic.</strong></li><li><strong>88.2% more new users.</strong></li></ul>",
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
];
