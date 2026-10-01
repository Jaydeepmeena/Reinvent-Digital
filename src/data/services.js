import {
  Search, Share2, Sparkles, TrendingUp, Bot, MapPin, PlaySquare, Users, Workflow,
  Database, Headset, PhoneCall, Route, DoorOpen, MessageCircle, Globe,
} from "lucide-react";

export const SERVICES = [
  {
    slug: "google-ads",
    category: "Digital Marketing",
    icon: Search,
    eyebrow: "Paid Search for Healthcare",
    title: "Google Ads",
    accent: "judged on who walks in.",
    description:
      "Keywords show intent. Negatives cut browsers. Call tracking shows who booked. Search and Performance Max budget moves towards walk-ins, instead of just leads.",
    ctaLabel: "Talk to a Google Ads specialist",
    highlights: [
      "Search & Performance Max builds",
      "Procedure & specialty keywords",
      "Call & form conversion tracking",
      "Negative keyword hygiene",
    ],
    metric: { value: "4.6x", label: "Avg. Google Ads ROAS", sub: "Across active healthcare accounts" },
    heroStats: [
      { value: "4.6x", label: "avg. ROAS" },
      { value: "38%", label: "lower cost per booking" },
      { value: "<60 sec", label: "1st response target for every enquiry" },
    ],
    includesTitle: "Everything that turns a click into a patient.",
    includesIntro:
      "Campaigns, controls, tracking and reporting for hospitals, dental chains, IVF and eye-care groups, run as the demand stage of the Patient Acquisition System.",
    includes: [
      {
        title: "Search & Performance Max campaign build",
        body: "Separate campaigns for each priority procedure, with location targeting and ad schedules set by catchment, so implant, IVF or cataract budgets never share one pool.",
      },
      {
        title: "Procedure & specialty keyword research",
        body: "Keywords mapped by treatment, location and urgency, including \u201cnear me\u201d searches, with match types chosen to reach patients ready to book rather than people researching symptoms.",
      },
      {
        title: "Call tracking & conversion setup",
        body: "Virtual numbers, call assets and Google tag conversion tracking on every call, form and WhatsApp enquiry. Each lead enters your CRM with its source, and bookings are reported by campaign.",
      },
      {
        title: "Landing page & policy alignment",
        body: "Each ad matched to a landing page and location asset for the same procedure and centre, checked against Google's healthcare and personalised advertising policies, NMC guidance and the ASCI code.",
      },
      {
        title: "Negative keyword & click fraud monitoring",
        body: "A shared list of 2,400+ negative terms blocks job, course and free-treatment searches, while search terms are reviewed and invalid click patterns are flagged.",
      },
      {
        title: "Weekly spend & bid optimisation",
        body: "Smart Bidding targets, bids and budgets reviewed weekly by centre and procedure, with an alert when a location's cost per lead runs above twice the chain average.",
      },
    ],
    processEyebrow: "How we approach it",
    processTitle: "From audit to scale, a repeatable 6-step cycle.",
    processNote: "Reviewed every week. Meaningful data in 30 to 45 days. Budget decisions from day 60.",
    process: [
      { title: "Audit the account", body: "Search terms, tracking, landing pages and policy flags reviewed before anything changes." },
      { title: "Map search intent", body: "Procedures, locations and urgency mapped to how patients actually search for care." },
      { title: "Build the campaigns", body: "Search and Performance Max campaigns built by procedure, with negatives and tracking." },
      { title: "Launch with control", body: "Spend starts measured; the first 30 to 45 days build reliable data." },
      { title: "Connect bookings", body: "Enquiries followed into your CRM, so every campaign is judged on bookings." },
      { title: "Optimise & repeat", body: "Every week, budget moves to what books, and the cycle starts again." },
    ],
    proofStats: [
      { value: "2400+", label: "negative keywords across healthcare accounts" },
      { value: "185+", label: "healthcare Google Ads accounts managed" },
      { value: "<48 hours", label: "campaign launch time" },
    ],
    faqTitle: "Common queries about healthcare Google Ads, answered.",
    faqs: [
      {
        q: "What does a healthcare Google Ads agency do?",
        a: "A healthcare Google Ads agency runs paid search for hospitals and clinics. Reinvent Digital builds campaigns by procedure and centre, tracks calls and conversions, and optimises for bookings.",
      },
      {
        q: "How is healthcare Google Ads different from general PPC?",
        a: "Healthcare Pay-Per-Click (PPC) follows stricter rules: Google's healthcare and personalised advertising policies, NMC guidance and the ASCI code. Call tracking matters more, because many patients phone rather than fill forms.",
      },
      {
        q: "How much should a hospital or clinic spend on Google Ads?",
        a: "It depends on procedure, city and competition. Dental Google Ads leads typically cost \u20b9120\u2013250 in Tier-2 cities and \u20b9180\u2013500 in Hyderabad, Bangalore and Mumbai. Cost per booking matters most.",
      },
      {
        q: "Can clinics use remarketing on Google Ads?",
        a: "Rarely. Google treats health conditions and invasive procedures as sensitive for personalised ads, so most treatment-based remarketing is restricted. We rely on search intent, location targeting and contextual signals instead.",
      },
      {
        q: "How soon will Google Ads bring bookings?",
        a: "Google Ads usually produces meaningful data within 30 to 45 days. Budget decisions follow from day 60 to 90, once tracked bookings show which procedures, keywords and centres to scale.",
      },
      {
        q: "How do you connect Google Ads to walk-ins?",
        a: "Within the Reinvent Digital Patient Acquisition System, each enquiry enters your CRM with its campaign source, and bookings are matched to clinic attendance records where you allow access.",
      },
    ],
    closing: {
      eyebrow: "Start with an audit",
      heading: "Ready to put Google Ads to work for your clinic?",
      body: "Share your account, and we'll show you where spend leaks, which searches lead to bookings, and what to fix first.",
      ctaLabel: "Book your account audit",
    },
  },
  {
    slug: "meta-ads",
    category: "Digital Marketing",
    icon: Share2,
    eyebrow: "Facebook & Instagram for Healthcare",
    title: "Meta Ads",
    accent: "that turn scrolling into walk-ins.",
    description:
      "Reels, carousels and lead forms built around why patients hesitate, with WhatsApp replies while interest is fresh. Every Facebook and Instagram lead is tracked to the booking Meta cannot see.",
    ctaLabel: "Discuss your Meta Ads",
    highlights: [
      "Creative built around hesitation",
      "Policy-safe audience targeting",
      "Lead forms & Click-to-WhatsApp",
      "Cost per booking reporting",
    ],
    metric: { value: "3.2x", label: "Avg. Meta Ads ROAS", sub: "Across active healthcare accounts" },
    heroStats: [
      { value: "3.2x", label: "avg. ROI" },
      { value: "9K+", label: "leads generated monthly" },
      { value: "41%", label: "avg. lead form conversion" },
    ],
    includesTitle: "Turning social interest into booked patients.",
    includesIntro:
      "Facebook and Instagram campaigns for hospitals, dental chains, IVF and eye-care groups, run as the demand creation stage of the patient acquisition system.",
    includes: [
      {
        title: "Creative built around patient hesitation",
        body: "Reels, carousels and static ads built around what stops patients booking: cost, recovery time, pain or trust. Each implant, IVF or LASIK angle is tested before budget scales.",
      },
      {
        title: "Policy-safe audience & location targeting",
        body: "Location radius around each centre, 18+ age targeting and broad audiences guided by creative. No audiences are built on health conditions, in line with Meta's health and wellness rules.",
      },
      {
        title: "Lead forms, landing pages or Click-to-WhatsApp",
        body: "Instant Forms with qualifying questions, landing pages for high-consideration treatments, or Click-to-WhatsApp ads, chosen by procedure so more leads never means weaker leads.",
      },
      {
        title: "Ad copy, Pixel & Conversions API compliance",
        body: "Ad copy checked against Meta's personal attributes and health policies, NMC guidance and the ASCI code. Meta Pixel and Conversions API set up without passing sensitive health data.",
      },
      {
        title: "Instant follow-up on every lead",
        body: "Every Meta lead lands in your CRM and triggers an instant WhatsApp acknowledgement, so the patient hears back before they scroll on to the next clinic's ad.",
      },
      {
        title: "Cost per booking reporting",
        body: "Meta restricts appointment-level optimisation for health advertisers, so bookings are tracked in your CRM and reported as cost per booking by campaign, creative and centre.",
      },
    ],
    processEyebrow: "How we approach it",
    processTitle: "Test, qualify, refresh: a repeatable 6-step cycle.",
    processNote: "Creative tested in rounds. Winners scaled, tired ads replaced before results drop.",
    process: [
      { title: "Audit the account", body: "Pixel, Events Manager category, audiences and past creative reviewed for policy risk." },
      { title: "Define the hesitation", body: "The questions stopping patients from booking each treatment listed before any ad." },
      { title: "Create & test", body: "Several creative angles launched together; weak ones cut after the first round." },
      { title: "Qualify with leads", body: "Form questions and WhatsApp replies filter out enquiries unlikely to book." },
      { title: "Follow to booking", body: "Every lead followed in your CRM until it books or drops." },
      { title: "Refresh & repeat", body: "Tired creative replaced, budget moved to what books; the next round begins." },
    ],
    proofStats: [
      { value: "<60 sec", label: "1st response target for Meta leads" },
      { value: "20-30%", label: "missed leads recovered with WhatsApp" },
      { value: "2.1x", label: "monthly walk-ins recorded" },
    ],
    faqTitle: "Common queries about healthcare Meta Ads, answered.",
    faqs: [
      {
        q: "What does a healthcare Meta Ads agency do?",
        a: "A healthcare Meta Ads agency runs Facebook and Instagram ads for hospitals and clinics. Reinvent Digital plans creative by treatment, qualifies leads and tracks each one to a booking.",
      },
      {
        q: "Can hospitals and clinics run Facebook and Instagram ads in India?",
        a: "Yes. Service ads for dental, eye care, diagnostics and hospitals are allowed, but must avoid implying a viewer's health condition, target adults 18+, and follow NMC and ASCI rules.",
      },
      {
        q: "Why can't Meta optimise for appointment bookings?",
        a: "Meta classifies most healthcare accounts as health and wellness, which restricts lower-funnel events such as leads or bookings. Tracking bookings in your CRM keeps campaigns measurable.",
      },
      {
        q: "Lead forms or Click-to-WhatsApp: which works better for clinics?",
        a: "Instant Forms bring volume, Click-to-WhatsApp starts a conversation, and landing pages suit high-consideration treatments like IVF. Reinvent Digital chooses by procedure, then compares cost per booking.",
      },
      {
        q: "Can we use patient testimonials or before-after photos in Meta ads?",
        a: "Only with the patient's written consent, no identifying details without permission, and no exaggerated outcomes. Meta may also reject before-after imagery, so each creative is reviewed first.",
      },
      {
        q: "How are Meta Ads connected to walk-ins?",
        a: "Within the Reinvent Digital Patient Acquisition System, each Meta lead enters your CRM with its campaign source, and bookings are matched to clinic attendance records where you allow access.",
      },
    ],
    closing: {
      eyebrow: "Start with an audit",
      heading: "Want to test which Meta ads bring patients in?",
      body: "Show us your account and lead flow, and Reinvent Digital will show you which creative, forms and follow-ups actually turn into bookings.",
      ctaLabel: "Book your Meta Ads review",
    },
  },
  {
    slug: "chatgpt-ads",
    category: "Digital Marketing",
    icon: Sparkles,
    eyebrow: "Conversational Ads for Healthcare",
    title: "ChatGPT Ads",
    accent: "from a patient's question to a clinic visit.",
    description:
      "Patients now ask ChatGPT which clinic to choose. Where OpenAI approves healthcare advertisers, we place labelled ads below those answers and track every enquiry to a booking.",
    ctaLabel: "See if you're eligible",
    highlights: [
      "Eligibility & advertiser verification",
      "Commercial prompt mapping",
      "Compliant conversational creative",
      "Tracking beyond OpenAI's reports",
    ],
    metric: { value: "\u20b9725", label: "Min. daily budget", sub: "In the OpenAI Ads Manager, billed in rupees" },
    heroStats: [
      { value: "\u20b9725", label: "min. daily budget" },
      { value: "0", label: "patient chats shared with advertisers" },
      { value: "<48 hours", label: "campaign launch time" },
    ],
    includesTitle: "From eligibility check to booked enquiry.",
    includesIntro:
      "Conversational ads for hospitals, dental chains, IVF and eye-care groups, run alongside healthcare GEO as part of the patient acquisition system.",
    includes: [
      {
        title: "Eligibility & advertiser verification",
        body: "We check whether your services fall within OpenAI's approvable healthcare categories and prepare the licences and verification manual review may ask for, before any budget is committed.",
      },
      {
        title: "Commercial prompt mapping",
        body: "Ads don't run beside personal health conversations, so we map the commercial questions patients ask instead: clinic comparisons, treatment costs, locations and timings for your procedures.",
      },
      {
        title: "Context hints & compliant creative",
        body: "Ad copy and context hints written for conversational intent rather than keywords, and checked against OpenAI's ad policies, NMC guidance and the ASCI code before submission.",
      },
      {
        title: "Landing page continuity",
        body: "Each ad lands on a page that answers the same question the patient just asked, with the centre, next step and contact options clear on mobile.",
      },
      {
        title: "Tracking beyond OpenAI's reports",
        body: "OpenAI reports only aggregated impressions and clicks, so tagged links and call tracking carry every enquiry into your CRM where bookings are reported by prompt theme and centre.",
      },
      {
        title: "Paired with GEO",
        body: "Paid placements run alongside healthcare GEO services, so work on being cited in ChatGPT answers and the sponsored placements below them support each other instead of competing for budget.",
      },
    ],
    processEyebrow: "How we approach it",
    processTitle: "Eligibility tested first, then a controlled test.",
    processNote: "Campaigns start from as low as \u20b9725 a day. Every test has agreed pause criteria.",
    process: [
      { title: "Confirm eligibility", body: "Services, licences and landing pages checked against OpenAI's healthcare advertiser criteria first." },
      { title: "Map the prompts", body: "Commercial questions patients ask about your treatments and cities, grouped by intent." },
      { title: "Build the test", body: "Creative, context hints and landing pages prepared for one procedure and centre." },
      { title: "Launch small", body: "Controlled daily budget, with success and pause criteria agreed before launch." },
      { title: "Track to booking", body: "Every enquiry is tagged and followed into your CRM, so the test is judged on bookings." },
      { title: "Expand or pause", body: "Prompt themes that book get more budget; weak ones are paused." },
    ],
    proofStats: [
      { value: "\u20b9725", label: "min. daily budget in OpenAI Ads Manager" },
      { value: "0", label: "patient chats shared with advertisers" },
      { value: "<48 hours", label: "campaign launch time" },
    ],
    faqTitle: "Common queries about ChatGPT Ads, answered.",
    faqs: [
      {
        q: "Can hospitals and clinics advertise on ChatGPT in India?",
        a: "Yes, with conditions. ChatGPT Ads went live in India in August 2026, but OpenAI approves healthcare advertisers case by case, with manual review and licence checks. Approval isn't guaranteed.",
      },
      {
        q: "Where do ChatGPT ads appear?",
        a: "Below ChatGPT's response, clearly labelled and separate from the answer. Ads reach logged-in Free and Go users aged 18+, and don't appear in personal or mental health conversations.",
      },
      {
        q: "How much do ChatGPT Ads cost?",
        a: "Self-serve campaigns in OpenAI Ads Manager start at a minimum of \u20b9725 a day, billed in rupees. We recommend a controlled test on one procedure before scaling.",
      },
      {
        q: "Does ChatGPT share patient conversations with advertisers?",
        a: "No. OpenAI says advertisers see aggregated data such as impressions and clicks, not chats or memories. That's why Reinvent Digital tracks enquiries and bookings in your CRM instead.",
      },
      {
        q: "Is ChatGPT advertising the same as GEO?",
        a: "No. ChatGPT Ads are paid placements below the answer. Generative Engine Optimisation (GEO) works on being cited within the answer itself. Ads don't influence what ChatGPT says.",
      },
      {
        q: "How are ChatGPT Ads connected to walk-ins?",
        a: "Within the Reinvent Digital Patient Acquisition System, each ChatGPT enquiry enters your CRM with its source, and bookings are matched to clinic attendance records where you allow access.",
      },
    ],
    closing: {
      eyebrow: "Start with an audit",
      heading: "Ready to find out if ChatGPT Ads are open to you?",
      body: "Tell us your services and centres, and Reinvent Digital will check eligibility, likely prompts and whether a test is worth running.",
      ctaLabel: "Book an eligibility check",
    },
  },
  {
    slug: "seo",
    category: "Digital Marketing",
    icon: TrendingUp,
    eyebrow: "Healthcare Search Engine Optimisation",
    title: "Healthcare SEO",
    accent: "from top rankings to booked appointments.",
    description:
      "We audit your site, fix what Google blocks, build the treatment and doctor pages patients compare, and connect Search Console to your CRM, so every ranking is judged on bookings.",
    ctaLabel: "Discuss your organic growth",
    highlights: [
      "Technical SEO, schema & media",
      "Treatment pages in every language",
      "Clinical review & E-E-A-T",
      "Multi-location listing consistency",
    ],
    metric: { value: "200%", label: "Avg. organic growth", sub: "Within 6 months" },
    heroStats: [
      { value: "63%", label: "avg. traffic lift in 90 days" },
      { value: "180+", label: "procedure pages ranked" },
      { value: "2.1x", label: "organic enquiry growth" },
    ],
    includesTitle: "6 fixes on your website, and a full calendar.",
    includesIntro:
      "A slow page, a missing doctor profile, no page for their treatment or their nearest centre: each SEO fix removes one reason patients choose another hospital instead of yours.",
    includes: [
      {
        title: "Technical SEO, schema & media",
        body: "Slow, uncrawlable pages rebuilt for speed, with medical schema and optimised doctor images and videos.",
      },
      {
        title: "Treatment pages in every language",
        body: "One page per treatment, in English and regional languages, matched to how patients search.",
      },
      {
        title: "Clinical review & E-E-A-T",
        body: "Every medical page signed off by a credentialed doctor and re-reviewed on a set schedule.",
      },
      {
        title: "Multi-location & listing consistency",
        body: "Each centre gets its own local page, with Practo and Justdial listings kept consistent.",
      },
      {
        title: "Content clusters & medical authority",
        body: "Linked treatment guides for featured snippets and AI Overviews, backed by credible medical citations.",
      },
      {
        title: "Booking & conversion elements",
        body: "Click-to-call, WhatsApp and booking forms on every treatment page, so ready patients act.",
      },
    ],
    processEyebrow: "How SEO compounds",
    processTitle: "Prioritised. Published. Measured. Improved every month.",
    processNote:
      "Technical SEO and Google Business Profile improvements show in 60 to 90 days. From months 9 to 12, organic rankings build on each other, without extra ad spend.",
    process: [
      { title: "Check your current rankings", body: "Current rankings, organic enquiries and bookings recorded, so progress is measured honestly." },
      { title: "Map the searches that bring patients", body: "Treatments and centres ranked by demand and revenue potential, not search volume." },
      { title: "Fix technical SEO issues", body: "Crawl errors, canonical issues, redirects and duplicate centre pages resolved before content." },
      { title: "Publish clinically reviewed pages", body: "Priority pages written, clinically approved and published in order of booking value." },
      { title: "Track organic bookings", body: "Each page judged on enquiries, bookings and walk-ins where data allows." },
      { title: "Refresh & expand content", body: "Pages losing ground refreshed; winning clusters extended to new treatments and centres." },
    ],
    proofStats: [
      { value: "120+", label: "Google Business Profiles managed" },
      { value: "11+", label: "years of healthcare marketing experience" },
      { value: "120%", label: "ranking improvement for healthcare groups" },
    ],
    faqTitle: "What healthcare leaders ask before choosing an SEO partner.",
    faqs: [
      {
        q: "What does a healthcare SEO agency do?",
        a: "A healthcare SEO agency helps hospitals and clinics rank for treatment, doctor and location searches. Reinvent Digital fixes technical SEO, builds clinically reviewed pages and tracks organic enquiries to bookings.",
      },
      {
        q: "How is healthcare SEO different from general SEO?",
        a: "Medical pages fall under Google's Your Money or Your Life (YMYL) standards, so E-E-A-T matters more: named clinical reviewers, doctor credentials, accurate sources and clear local information.",
      },
      {
        q: "How long does SEO take for a hospital or clinic?",
        a: "Technical and Google Business Profile improvements usually show within 60 to 90 days. Competitive treatment and city rankings take longer, and results depend on site history and competition.",
      },
      {
        q: "Can our hospital outrank Practo and Justdial?",
        a: "For many searches, yes. Practo and Justdial win broad doctor-name searches, but detailed treatment, department and centre pages, backed by reviews and local signals, can compete strongly.",
      },
      {
        q: "Can you guarantee first-page rankings?",
        a: "No ethical SEO agency can. Google controls rankings, and results vary by location, device and competition. We commit to a clear plan, completed work and measurable progress in bookings.",
      },
      {
        q: "How is SEO connected to walk-ins?",
        a: "Within the Reinvent Digital Patient Acquisition System, organic enquiries enter your CRM with their landing page, and bookings are matched to clinic attendance records where you allow access.",
      },
    ],
    closing: {
      eyebrow: "Fix your rankings",
      heading: "Ready to make organic search your steadiest source of patients?",
      body: "Share your website and top treatments, and we'll show where your pages rank, where patients drop off and which fixes will bring the most bookings.",
      ctaLabel: "Book your SEO audit",
    },
  },
  {
    slug: "aeo",
    category: "Digital Marketing",
    icon: Bot,
    eyebrow: "Healthcare Answer Engine Optimisation",
    title: "Healthcare AEO",
    accent: "be the answer patients read before they book.",
    description:
      "Patients now read the AI answer before any link. We build clinically reviewed answers so your hospital is the source those answers draw from.",
    ctaLabel: "Discuss your AEO visibility",
    highlights: [
      "Patient question mapping",
      "Snippet-matched answer formats",
      "Clinical authorship & E-E-A-T",
      "Medical schema mapping",
    ],
    metric: { value: "1.1K+", label: "Responses cited", sub: "Across Google AI Overviews" },
    heroStats: [
      { value: "600+", label: "citations in Google AI Mode" },
      { value: "200+", label: "pages cited in Google AI Overviews" },
      { value: "214+", label: "pages cited in Google AI Mode" },
    ],
    includesTitle: "From the question patients ask to the answer they trust.",
    includesIntro:
      "One question at a time, from the patient's words to a reviewed answer Google, voice search and AI Overviews can trust.",
    includes: [
      {
        title: "Patient question mapping",
        body: "Questions mined from People Also Ask, Search Console and call-centre logs, sorted by clinical risk.",
      },
      {
        title: "Snippet-matched answer formats",
        body: "Definitions, steps and tables, each formatted to match the snippet type a query triggers.",
      },
      {
        title: "Clinical authorship & E-E-A-T",
        body: "Named doctor authors, registration details, review dates and ICMR or WHO citations on medical answers.",
      },
      {
        title: "Medical schema mapping",
        body: "MedicalProcedure, Physician and MedicalClinic schema mapped to visible content; FAQ markup for context.",
      },
      {
        title: "Passage-level AI readiness",
        body: "Self-contained passages under question-led headings, quotable by AI Overviews without losing accuracy.",
      },
      {
        title: "Intent-based answer routing",
        body: "Symptom questions routed to specialist guidance; cost and location questions to centre pages.",
      },
    ],
    processEyebrow: "How healthcare AEO benefits",
    processTitle: "Win the AI generative answers your competitors own today.",
    processNote:
      "Progress starts with the pages you already have. Each approved answer then works across Google, WhatsApp and your call team.",
    process: [
      { title: "See who answers patients", body: "Find out which of your treatments Google answers with a competitor's or Practo's page." },
      { title: "Early wins without new pages", body: "Your existing treatment pages are reshaped first, so progress starts before new content." },
      { title: "Doctor-reviewed answers only", body: "One short review per answer, so busy doctors aren't chasing endless drafts." },
      { title: "Every channel gives the same answer", body: "Your website, WhatsApp replies and call team give patients one approved answer." },
      { title: "You see results, even without clicks", body: "Monthly proof of answers won, calls received and branded searches, not just traffic." },
      { title: "Current & safe answers", body: "High-risk medical answers are re-checked, so outdated advice doesn't stay on your site." },
    ],
    proofStats: [
      { value: "185+", label: "healthcare accounts managed" },
      { value: "11+", label: "years of marketing leadership" },
      { value: "8+", label: "healthcare verticals covered" },
    ],
    faqTitle: "What healthcare leaders ask about AEO.",
    faqs: [
      {
        q: "What is healthcare AEO?",
        a: "Healthcare Answer Engine Optimisation (AEO) structures clinically reviewed content so Google, voice assistants and AI tools can pull clear answers to patient questions, with your hospital named as the source.",
      },
      {
        q: "Does FAQ schema still help after Google removed FAQ rich results?",
        a: "FAQ rich results left Google in May 2026, but Google still reads FAQ markup. The value now is clear, reviewed answers AI tools can extract.",
      },
      {
        q: "How is AEO different from SEO and GEO?",
        a: "SEO helps your pages rank. AEO shapes answers for featured snippets, People Also Ask and AI Overviews. GEO helps AI tools such as ChatGPT understand and cite your brand.",
      },
      {
        q: "Can AEO guarantee a featured snippet or AI Overview?",
        a: "No. Google and AI platforms decide which answer to show. AEO improves your chances by making answers clear, reviewed and well structured, and we track visibility for each priority question.",
      },
      {
        q: "Why choose Reinvent Digital for healthcare AEO?",
        a: "Reinvent Digital builds answers from the questions your call team hears, gets them approved by your doctors, reuses them across WhatsApp and calls, and tracks them to bookings.",
      },
      {
        q: "How does AEO connect to walk-ins?",
        a: "Within the Reinvent Digital Patient Acquisition System, each answer links to booking, and enquiries from answer pages are tracked into your CRM and matched to walk-ins where data allows.",
      },
    ],
    closing: {
      eyebrow: "Check your AEO visibility",
      heading: "Ready to be in the generative AI answers patients trust before links?",
      body: "Share your top treatments, and Reinvent Digital will show which patient questions you already own, which ones competitors hold, and what to answer first.",
      ctaLabel: "Book your AEO review",
    },
  },
  {
    slug: "geo",
    category: "Digital Marketing",
    icon: Globe,
    eyebrow: "Healthcare Generative Engine Optimisation",
    title: "Healthcare GEO",
    accent: "be the name patients hear when they ask AI.",
    description:
      "AI tools now shortlist hospitals before patients search further. We align your listings, profiles and pages so ChatGPT, Gemini and Perplexity describe you correctly.",
    ctaLabel: "Talk to a GEO specialist",
    highlights: [
      "Prompt & citation audit",
      "Entity consistency",
      "Citable evidence pages",
      "AI crawler access",
    ],
    metric: { value: "100+", label: "Responses cited", sub: "Answers in Perplexity" },
    heroStats: [
      { value: "2K+", label: "citations across AI platforms" },
      { value: "300+", label: "pages cited by AI platforms" },
      { value: "100+", label: "citations in Gemini" },
    ],
    includesTitle: "What AI tools check before they name your hospital.",
    includesIntro:
      "ChatGPT and Perplexity don't take your website's word for it. They cross-check directories, reviews and news. We make every source say the same thing, inside the Reinvent Digital Patient Acquisition System.",
    includes: [
      {
        title: "Prompt & citation audit",
        body: "Patient prompts tested across ChatGPT, Gemini, Perplexity and Copilot to see who gets named.",
      },
      {
        title: "Entity consistency",
        body: "Hospital, doctor, speciality and centre details matched across your site, Practo, Justdial and Google.",
      },
      {
        title: "Organisation & Physician schema",
        body: "Organization, Physician and MedicalClinic schema linked with sameAs to your verified external profiles.",
      },
      {
        title: "Citable evidence pages",
        body: "Original data, doctor-reviewed comparisons and cited facts that AI tools can quote with confidence.",
      },
      {
        title: "Third-party authority signals",
        body: "Mentions in medical directories, news and expert contributions, chosen for trust, not link volume.",
      },
      {
        title: "AI crawler access",
        body: "robots.txt checked so OAI-SearchBot and PerplexityBot can reach the pages you want cited.",
      },
    ],
    processEyebrow: "How GEO works",
    processTitle: "From what AI says today to what it says next month.",
    processNote: "Wrong facts cost patients. Missing proof costs mentions. Each step fixes one, then tests again to prove it worked.",
    process: [
      { title: "Hear what AI says", body: "A baseline of who's named for your treatments, and how AI describes you." },
      { title: "Correct what's wrong", body: "Outdated doctors, closed centres and wrong timings fixed at the sources AI reads first." },
      { title: "Fill the proof gaps", body: "Missing facts, comparisons and doctor credentials published where AI tools look for evidence." },
      { title: "Win comparison prompts", body: "Comparison prompts, like \u201cbest IVF centre in Hyderabad\u201d, targeted once your facts are fixed." },
      { title: "Track AI-referred patients", body: "AI referral visits tracked in GA4, and \u201cfound us on ChatGPT\u201d captured in your CRM." },
      { title: "Re-test every month", body: "The same prompts re-run monthly, tracking mentions, sentiment and new competitors named." },
    ],
    proofStats: [
      { value: "185+", label: "healthcare accounts managed" },
      { value: "11+", label: "years of marketing leadership" },
      { value: "8+", label: "healthcare verticals covered" },
    ],
    faqTitle: "What healthcare leaders ask about GEO.",
    faqs: [
      {
        q: "What is healthcare GEO?",
        a: "Healthcare Generative Engine Optimisation (GEO) helps AI tools such as ChatGPT, Gemini and Perplexity understand, trust and cite your hospital, doctors and treatments when patients ask for recommendations.",
      },
      {
        q: "How do AI tools decide which hospitals to mention?",
        a: "They combine many sources: your website, directories like Practo, reviews, news and structured data. Consistent, well-cited facts across those sources make a hospital easier to name.",
      },
      {
        q: "How is GEO different from SEO and AEO?",
        a: "SEO helps pages rank on Google. AEO shapes answers for snippets and AI Overviews. GEO builds the entity consistency and third-party trust AI tools use to name brands.",
      },
      {
        q: "Can GEO guarantee our hospital appears in ChatGPT?",
        a: "No. AI platforms decide what they say, and answers vary by prompt and user. GEO improves the conditions for citation, and we track your visibility across a fixed prompt set.",
      },
      {
        q: "Why choose Reinvent Digital for healthcare GEO?",
        a: "Reinvent Digital tests real patient prompts, fixes inaccurate AI descriptions at the source, aligns your listings, and tracks AI-referred enquiries into your CRM, not just mentions.",
      },
      {
        q: "How does GEO connect to walk-ins?",
        a: "Within the Reinvent Digital Patient Acquisition System, AI-referred visits and enquiries enter your CRM with their source, and bookings are matched to walk-ins where you allow access.",
      },
    ],
    closing: {
      eyebrow: "Check your GEO visibility",
      heading: "Ready for your hospital to be the one AI names?",
      body: "Tell us your priority treatments. Reinvent Digital will run the prompts your patients use, show you where competitors are named, and map where ChatGPT Ads can support organic visibility.",
      ctaLabel: "Get your AI visibility report",
    },
  },
  {
    slug: "business-profile-optimisation",
    category: "Digital Marketing",
    icon: MapPin,
    eyebrow: "Healthcare Google Business Profile Optimisation",
    title: "Google Maps & Local SEO",
    accent: "from \u201cdentist near me\u201d to directions to your door.",
    description:
      "We manage every centre's Google Business Profile, from categories and photos to reviews and Ask Maps readiness, then track calls, directions and bookings location by location.",
    ctaLabel: "Discuss your local visibility",
    highlights: [
      "Categories, services & attributes",
      "Review velocity & replies",
      "Ask Maps readiness",
      "NAP & citation consistency",
    ],
    metric: { value: "2.1x", label: "Avg. monthly walk-ins", sub: "Increase in 90 days" },
    heroStats: [
      { value: "120+", label: "Google Business Profiles managed" },
      { value: "<24 hrs", label: "review replies approved & published" },
      { value: "185+", label: "healthcare accounts managed" },
    ],
    includesTitle: "Everything Google checks before it shows your centre.",
    includesIntro:
      "You can't move your centre closer to the patient. You can make it the most complete, trusted and active profile they see, and that's what our Google Business Profile optimisation does.",
    includes: [
      {
        title: "Categories, services & attributes",
        body: "Categories, treatment services and attributes set per centre, matched to how patients search.",
      },
      {
        title: "Doctor & department listings",
        body: "Practitioner and department profiles set up within Google's guidelines, without duplicates or spam risk.",
      },
      {
        title: "Review velocity & replies",
        body: "Consent-based review requests, and replies approved within 24 hours that never reveal patient details.",
      },
      {
        title: "Ask Maps readiness",
        body: "Complete hours, services and photos, now that Google's Ask Maps answers patients instead of Q&A.",
      },
      {
        title: "Weekly posts & photos",
        body: "Localised Google Posts and fresh centre photos published weekly, so every profile stays active.",
      },
      {
        title: "NAP & citation consistency",
        body: "Name, address and phone matched across 50+ directories, with duplicate and spam listings reported.",
      },
    ],
    processEyebrow: "How we approach it",
    processTitle: "One tested and proven system for every centre on the map.",
    processNote: "Forty centres means forty separate maps. Each one gets its own audit, its own tracking and its own fixes.",
    process: [
      { title: "Audit every location", body: "Ownership, verification, categories, duplicates and current map visibility checked for each centre." },
      { title: "See your map coverage", body: "Grid-based rank tracking shows where each centre appears across its catchment, street by street." },
      { title: "Clean up the listings", body: "Duplicates merged, wrong pins corrected and competitor spam reported through Google's redressal form." },
      { title: "Connect the booking path", body: "Appointment links, click-to-call and WhatsApp added, so profile views can turn into bookings." },
      { title: "Track calls to walk-ins", body: "Calls, directions and bookings tracked per centre, matched to walk-ins where data allows." },
      { title: "Flag weak centres early", body: "Monthly audits and alerts flag any centre whose calls or visibility drop." },
    ],
    proofStats: [
      { value: "115+", label: "GBP profiles managed for one dental group" },
      { value: "11+", label: "years of marketing leadership" },
      { value: "8+", label: "healthcare verticals covered" },
    ],
    faqTitle: "What healthcare leaders ask about Google Maps.",
    faqs: [
      {
        q: "What is Google Business Profile optimisation for healthcare?",
        a: "It's the ongoing management of each centre's Google Business Profile, including categories, services, photos, reviews and listings, so patients searching nearby find, trust and contact the right location.",
      },
      {
        q: "What happened to Google Business Profile Q&A?",
        a: "Google discontinued Q&A from late 2025 and replaced it with Ask Maps, a Gemini-powered feature that answers questions using your profile, reviews, photos and website content.",
      },
      {
        q: "How does Google decide which clinics appear on Maps?",
        a: "Google weighs relevance, distance and prominence. Accurate categories and services build relevance, while reviews, consistent listings and an active profile build prominence. Distance depends on the searcher.",
      },
      {
        q: "Can you guarantee top-three Google Maps rankings?",
        a: "No. Google decides local rankings, and results change with each searcher's location. We improve profile completeness, reviews and consistency, then track visibility across each centre's catchment.",
      },
      {
        q: "Why choose Reinvent Digital for multi-location Business Profiles?",
        a: "Reinvent Digital manages 120+ Business Profiles with monthly audits, review replies approved within 24 hours, weekly posts and tracking from Maps actions to bookings, centre by centre.",
      },
      {
        q: "How does Business Profile optimisation connect to walk-ins?",
        a: "Within the Reinvent Digital Patient Acquisition System, calls and direction taps are tracked per centre, enquiries enter your CRM with their source, and bookings are matched to clinic attendance records where you allow access.",
      },
    ],
    closing: {
      eyebrow: "Check your map visibility",
      heading: "Ready to find out why patients can't find you on Maps?",
      body: "Tell us your centres. Reinvent Digital will check each profile, map where you appear across the neighbourhood, and show where competitors win the directions tap.",
      ctaLabel: "Check my centres on Maps",
    },
  },
  {
    slug: "youtube-marketing",
    category: "Digital Marketing",
    icon: PlaySquare,
    eyebrow: "Video & YouTube",
    title: "YouTube Marketing",
    accent: "that builds trust before the visit.",
    description:
      "Doctor introduction videos, procedure explainers and patient testimonials distributed through YouTube and pre-roll ads — so patients arrive already confident in your team.",
    highlights: [
      "Doctor & procedure explainer videos",
      "Patient testimonial production",
      "YouTube pre-roll & discovery ads",
      "Video SEO & thumbnail optimisation",
    ],
    metric: { value: "2.1x", label: "higher booking rate", sub: "for patients who watch before enquiring" },
    heroStats: [
      { value: "2.1x", label: "higher booking rate" },
      { value: "150+", label: "videos produced" },
      { value: "+55%", label: "avg watch-through rate" },
    ],
    includes: [
      "Video content strategy",
      "Doctor & procedure video production",
      "Patient testimonial filming",
      "YouTube channel & SEO optimisation",
      "Pre-roll & discovery ad campaigns",
      "Performance & watch-time reporting",
    ],
    process: [
      { title: "Plan the content", body: "We map which procedures and doctors need video trust-building most, based on enquiry data." },
      { title: "Produce efficiently", body: "Shoots are batched across doctors and procedures to keep production cost and time manageable." },
      { title: "Distribute with intent", body: "Videos are placed on procedure pages, YouTube search and pre-roll ads — not left unseen on a channel." },
      { title: "Track influence on bookings", body: "We measure whether video viewers convert at a higher rate, not just view counts." },
    ],
    proofStats: [
      { value: "2.1x", label: "higher booking rate" },
      { value: "150+", label: "videos produced" },
      { value: "+55%", label: "watch-through rate" },
    ],
  },
  {
    slug: "social-media-management",
    category: "Digital Marketing",
    icon: Users,
    eyebrow: "Organic Social",
    title: "Social Media Management",
    accent: "that keeps your clinic top of mind.",
    description:
      "Instagram, Facebook and LinkedIn content calendars built around patient education, doctor credibility and community trust — consistent enough to matter, careful enough to stay compliant.",
    highlights: [
      "Monthly content calendars",
      "Doctor & patient-education content",
      "Compliant healthcare messaging",
      "Community & DM management",
    ],
    metric: { value: "3x", label: "avg follower growth", sub: "within first 6 months" },
    heroStats: [
      { value: "3x", label: "avg follower growth" },
      { value: "25+", label: "clinics managed" },
      { value: "Daily", label: "community monitoring" },
    ],
    includes: [
      "Content strategy & monthly calendar",
      "Graphic & reel production",
      "Compliant medical messaging review",
      "Community management & DM response",
      "Doctor personal-brand support",
      "Monthly growth & engagement reporting",
    ],
    process: [
      { title: "Plan the calendar", body: "Content is planned a month ahead around procedures, doctor credibility and patient education." },
      { title: "Produce and review", body: "Every post passes a compliance check before it goes live — healthcare marketing can't cut that corner." },
      { title: "Publish consistently", body: "Posting stays consistent even when internal teams get busy — the calendar doesn't skip weeks." },
      { title: "Engage the community", body: "Comments and DMs are monitored so enquiries in the comments don't go unanswered." },
    ],
    proofStats: [
      { value: "3x", label: "avg follower growth" },
      { value: "25+", label: "clinics managed" },
      { value: "<2 hrs", label: "avg DM response time" },
    ],
  },
  {
    slug: "marketing-automation",
    category: "Digital Marketing",
    icon: Workflow,
    eyebrow: "Lifecycle & Automation",
    title: "Marketing Automation",
    accent: "that follows up so your team doesn't have to.",
    description:
      "Automated email, SMS and WhatsApp sequences that nurture enquiries, remind patients of appointments and re-engage no-shows — without adding to your front desk's workload.",
    highlights: [
      "Enquiry nurture sequences",
      "Appointment reminders & no-show recovery",
      "WhatsApp & SMS automation",
      "CRM-triggered workflows",
    ],
    metric: { value: "27%", label: "of bookings recovered", sub: "from automated follow-up alone" },
    heroStats: [
      { value: "27%", label: "bookings from automation" },
      { value: "90%", label: "reduction in manual follow-up" },
      { value: "24/7", label: "always-on nurture" },
    ],
    includes: [
      "Nurture sequence design",
      "Appointment reminder automation",
      "No-show recovery workflows",
      "WhatsApp & SMS integration",
      "CRM trigger & workflow setup",
      "Monthly automation performance review",
    ],
    process: [
      { title: "Map the patient journey", body: "We identify every point where a patient could fall through the cracks between enquiry and visit." },
      { title: "Build the workflows", body: "Email, SMS and WhatsApp sequences are built to nudge at exactly the right moments." },
      { title: "Connect to the CRM", body: "Automation triggers off real patient status, not guesswork — so messages stay relevant." },
      { title: "Recover what's lost", body: "No-shows and cold enquiries get a structured second chance instead of disappearing." },
    ],
    proofStats: [
      { value: "27%", label: "bookings recovered" },
      { value: "90%", label: "less manual follow-up" },
      { value: "24/7", label: "always-on nurture" },
    ],
  },
  {
    slug: "crm",
    category: "Tools & Measurement",
    icon: Database,
    eyebrow: "Patient Relationship Management",
    title: "Healthcare CRM",
    accent: "that gives every enquiry a home.",
    description:
      "One patient record from first click to clinic visit — every call, form and WhatsApp enquiry captured, tagged by source and tracked through to booking and walk-in.",
    highlights: [
      "Unified patient record",
      "Source tagging on every enquiry",
      "Call, form & WhatsApp capture",
      "Booking & walk-in status tracking",
    ],
    metric: { value: "1", label: "patient record", sub: "across every channel and location" },
    heroStats: [
      { value: "100%", label: "enquiries captured" },
      { value: "120+", label: "clinics on the platform" },
      { value: "1 view", label: "per patient, every channel" },
    ],
    includes: [
      "CRM setup & configuration",
      "Call tracking & form integration",
      "WhatsApp & messaging integration",
      "Source & campaign tagging",
      "Booking & walk-in status fields",
      "Team training & adoption support",
    ],
    process: [
      { title: "Map your enquiry sources", body: "Every channel that can generate a patient enquiry is identified and connected." },
      { title: "Configure the record", body: "The CRM is set up around how your team actually works — not a generic template." },
      { title: "Integrate call & chat", body: "Calls, forms and WhatsApp all land in the same patient record automatically." },
      { title: "Track to walk-in", body: "Status fields follow the patient from enquiry to booking to clinic visit." },
    ],
    proofStats: [
      { value: "100%", label: "enquiries captured" },
      { value: "120+", label: "clinics live" },
      { value: "1 record", label: "per patient" },
    ],
  },
  {
    slug: "call-centre-management",
    category: "Response & Call Centre",
    icon: Headset,
    eyebrow: "Response & Conversion",
    title: "Call Centre Optimisation",
    accent: "where sixty seconds is a system, not a slogan.",
    description:
      "Coverage planning, routing, escalation and call scoring built around your actual enquiry patterns — so every patient reaches an agent fast, and every call is coached toward a booking.",
    highlights: [
      "Coverage planned to enquiry patterns",
      "Auto-routing & missed-call escalation",
      "100-point call scoring rubric",
      "Agent coaching on real conversations",
    ],
    metric: { value: "<60 sec", label: "average response target", sub: "across managed call teams" },
    heroStats: [
      { value: "<60 sec", label: "avg response time" },
      { value: "92%", label: "calls within SLA" },
      { value: "15", label: "agent teams supported" },
    ],
    includes: [
      "Coverage & roster planning",
      "Call routing & escalation setup",
      "Call scoring rubric & quality audits",
      "Agent coaching programs",
      "Missed-call recovery workflows",
      "Weekly response & conversion reporting",
    ],
    process: [
      { title: "Roster to demand", body: "Coverage is planned against your actual enquiry patterns, not fixed shift assumptions." },
      { title: "Route and escalate", body: "The CRM calls the next available agent, and missed SLAs trigger backup routing automatically." },
      { title: "Score every call", body: "Calls are checked against a consistent booking rubric, not just answered-or-not." },
      { title: "Coach the team", body: "Weak conversations become coaching material, so the whole team's booking rate improves." },
    ],
    proofStats: [
      { value: "<60 sec", label: "avg response time" },
      { value: "92%", label: "within SLA" },
      { value: "+31%", label: "booking rate after coaching" },
    ],
  },
  {
    slug: "telephony",
    category: "Tools & Measurement",
    icon: PhoneCall,
    eyebrow: "Call Infrastructure",
    title: "Telephony",
    accent: "that never loses a ringing phone.",
    description:
      "Virtual numbers per campaign and centre, routing rules, IVR and recording — so every call is answered, logged against the right source and reviewable afterwards.",
    highlights: [
      "Virtual numbers per campaign & centre",
      "Routing, overflow & escalation rules",
      "Call recording for scoring",
      "Missed-call alerts and callbacks",
    ],
    metric: { value: "<60 sec", label: "first response target", sub: "on every managed line" },
    heroStats: [
      { value: "100%", label: "calls logged to a source" },
      { value: "<60 sec", label: "first response target" },
      { value: "24/7", label: "missed-call capture" },
    ],
    includes: [
      "Number provisioning by campaign & centre",
      "Routing, overflow & escalation rules",
      "IVR and working-hours handling",
      "Call recording & storage policy",
      "Missed-call alerts & callback queues",
      "CRM logging of every call outcome",
    ],
    process: [
      { title: "Map the call paths", body: "Every number, queue and after-hours route is documented before anything changes." },
      { title: "Provision the numbers", body: "Separate tracking numbers per campaign and centre, so the source survives the call." },
      { title: "Set the rules", body: "Routing, overflow, escalation and callback rules are built around your roster." },
      { title: "Log every outcome", body: "Calls, durations and outcomes write back to the patient record automatically." },
    ],
    proofStats: [
      { value: "100%", label: "calls source-tagged" },
      { value: "<60 sec", label: "response target" },
      { value: "0", label: "enquiries with no owner" },
    ],
  },
  {
    slug: "booking-attribution",
    category: "Tools & Measurement",
    icon: Route,
    eyebrow: "Source to Booking",
    title: "Booking Attribution",
    accent: "that follows the patient, not the click.",
    description:
      "Every enquiry carries its source into the CRM, so campaigns are compared on bookings rather than clicks, and budget decisions rest on what actually fills the diary.",
    highlights: [
      "Source saved at the first touch",
      "Campaign-level booking reports",
      "Cost per booked patient",
      "Channel comparison on outcomes",
    ],
    metric: { value: "1", label: "source per enquiry", sub: "carried from click to booking" },
    heroStats: [
      { value: "100%", label: "enquiries source-tagged" },
      { value: "1 report", label: "across every channel" },
      { value: "CPB", label: "cost per booked patient" },
    ],
    includes: [
      "Tracking plan across every channel",
      "Source capture on call, form & WhatsApp",
      "Campaign and centre tagging",
      "Booking status in the patient record",
      "Cost per booking reporting",
      "Channel comparison dashboard",
    ],
    process: [
      { title: "Audit the tracking", body: "We check what each channel passes today and where the source is being lost." },
      { title: "Fix the capture", body: "Source, campaign and centre are stamped on the enquiry at the point it arrives." },
      { title: "Connect the booking", body: "Booking status is written back, so each campaign can be judged on bookings." },
      { title: "Report on cost per booking", body: "Spend is compared against booked patients, not leads, by campaign and centre." },
    ],
    proofStats: [
      { value: "100%", label: "enquiries tagged" },
      { value: "1 view", label: "spend to bookings" },
      { value: "Weekly", label: "budget decisions" },
    ],
  },
  {
    slug: "walk-in-tracking",
    category: "Tools & Measurement",
    icon: DoorOpen,
    eyebrow: "Attendance Matching",
    title: "Walk-In Tracking",
    accent: "that proves who actually arrived.",
    description:
      "Booked appointments are matched against your PMS or HIS attendance records, so walk-in numbers reflect what the data can prove — including the records that could not be matched.",
    highlights: [
      "Booking matched to attendance",
      "Approved identifiers only",
      "Match rate shown on every report",
      "Walk-ins traced back to channel",
    ],
    metric: { value: "100%", label: "match rate disclosed", sub: "on every walk-in report" },
    heroStats: [
      { value: "PMS/HIS", label: "attendance matched" },
      { value: "100%", label: "match rate disclosed" },
      { value: "DPDP", label: "handled under the 2023 Act" },
    ],
    includes: [
      "Data access and permissions agreed",
      "Identifier mapping for matching",
      "Scheduled attendance imports",
      "Match rate and exception reporting",
      "Walk-ins attributed back to channel",
      "Retention and deletion policy",
    ],
    process: [
      { title: "Agree the data", body: "Access, identifiers, retention and responsibilities are agreed with your team first." },
      { title: "Map the records", body: "Appointment IDs or phone numbers are mapped between the CRM and your clinic system." },
      { title: "Match attendance", body: "Attendance is matched on a schedule, with unmatched records listed openly." },
      { title: "Close the loop", body: "Walk-ins are reported by channel, campaign and centre, with the match rate shown." },
    ],
    proofStats: [
      { value: "Matched", label: "booking to attendance" },
      { value: "Shown", label: "unmatched records" },
      { value: "Agreed", label: "data scope before access" },
    ],
  },
  {
    slug: "messaging-follow-up",
    category: "Response & Call Centre",
    icon: MessageCircle,
    eyebrow: "Follow-Up That Has an Owner",
    title: "Messaging & Follow-Up",
    accent: "so no enquiry goes cold.",
    description:
      "WhatsApp and SMS sequences with an owner, a timer and an end state — reminders before the appointment, structured follow-up after it, and escalation when nobody replies.",
    highlights: [
      "WhatsApp & SMS sequences",
      "Named owner for every enquiry",
      "Appointment reminders",
      "Escalation when follow-up stalls",
    ],
    metric: { value: "0", label: "enquiries with no owner", sub: "every follow-up is assigned" },
    heroStats: [
      { value: "0", label: "enquiries with no owner" },
      { value: "<60 sec", label: "first response target" },
      { value: "3 steps", label: "before an enquiry closes" },
    ],
    includes: [
      "WhatsApp Business setup & templates",
      "Follow-up sequences by procedure",
      "Appointment reminder flows",
      "Owner assignment and SLA timers",
      "Escalation and re-engagement rules",
      "Reporting on follow-up outcomes",
    ],
    process: [
      { title: "Define the cadence", body: "Follow-up timing is set per procedure, from same-day calls to multi-week nurture." },
      { title: "Assign an owner", body: "Every enquiry gets a named owner and a timer, so nothing sits unattended." },
      { title: "Automate the reminders", body: "Confirmations and reminders go out before the appointment, not after it's missed." },
      { title: "Escalate and report", body: "Stalled follow-ups escalate, and outcomes are reported back by stage." },
    ],
    proofStats: [
      { value: "0", label: "unowned enquiries" },
      { value: "Reminders", label: "before every appointment" },
      { value: "Tracked", label: "to booking or closure" },
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
