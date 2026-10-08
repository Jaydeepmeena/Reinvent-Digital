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
    accent: "Judged on Who Walks In.",
    description:
      "Keywords show intent. Negatives cut browsers. Call tracking shows who booked. Search and Performance Max budget moves towards walk-ins, instead of just leads.",
    ctaLabel: "Talk to a Google Ads Specialist",
    highlights: [
      "Search & Performance Max Builds",
      "Procedure & Specialty Keywords",
      "Call & Form Conversion Tracking",
      "Negative Keyword Hygiene",
    ],
    metric: { value: "4.6x", label: "Avg. Google Ads ROAS", sub: "Across Active Healthcare Accounts" },
    heroStats: [
      { value: "4.6x", label: "Avg. ROAS" },
      { value: "38%", label: "Lower Cost Per Booking" },
      { value: "<60 sec", label: "1st Response Target for Every Enquiry" },
    ],
    includesTitle: "Everything That Turns a Click Into a Patient.",
    includesIntro:
      "Campaigns, controls, tracking and reporting for hospitals, dental chains, IVF and eye-care groups, run as the demand stage of the Patient Acquisition System.",
    includes: [
      {
        title: "Search & Performance Max Campaign Build",
        body: "Separate campaigns for each priority procedure, with location targeting and ad schedules set by catchment, so implant, IVF or cataract budgets never share one pool.",
      },
      {
        title: "Procedure & Specialty Keyword Research",
        body: "Keywords mapped by treatment, location and urgency, including \u201cnear me\u201d searches, with match types chosen to reach patients ready to book rather than people researching symptoms.",
      },
      {
        title: "Call Tracking & Conversion Setup",
        body: "Virtual numbers, call assets and Google tag conversion tracking on every call, form and WhatsApp enquiry. Each lead enters your CRM with its source, and bookings are reported by campaign.",
      },
      {
        title: "Landing Page & Policy Alignment",
        body: "Each ad matched to a landing page and location asset for the same procedure and centre, checked against Google's healthcare and personalised advertising policies, NMC guidance and the ASCI code.",
      },
      {
        title: "Negative Keyword & Click Fraud Monitoring",
        body: "A shared list of 2,400+ negative terms blocks job, course and free-treatment searches, while search terms are reviewed and invalid click patterns are flagged.",
      },
      {
        title: "Weekly Spend & Bid Optimisation",
        body: "Smart Bidding targets, bids and budgets reviewed weekly by centre and procedure, with an alert when a location's cost per lead runs above twice the chain average.",
      },
    ],
    processEyebrow: "How We Approach It",
    processTitle: "From Audit to Scale, a Repeatable 6-step Cycle.",
    processNote: "Reviewed every week. Meaningful data in 30 to 45 days. Budget decisions from day 60.",
    process: [
      { title: "Audit the Account", body: "Search terms, tracking, landing pages and policy flags reviewed before anything changes." },
      { title: "Map Search Intent", body: "Procedures, locations and urgency mapped to how patients actually search for care." },
      { title: "Build the Campaigns", body: "Search and Performance Max campaigns built by procedure, with negatives and tracking." },
      { title: "Launch With Control", body: "Spend starts measured; the first 30 to 45 days build reliable data." },
      { title: "Connect Bookings", body: "Enquiries followed into your CRM, so every campaign is judged on bookings." },
      { title: "Optimise & Repeat", body: "Every week, budget moves to what books, and the cycle starts again." },
    ],
    proofStats: [
      { value: "2400+", label: "Negative Keywords Across Healthcare Accounts" },
      { value: "185+", label: "Healthcare Google Ads Accounts Managed" },
      { value: "<48 hours", label: "Campaign Launch Time" },
    ],
    faqTitle: "Common Queries About Healthcare Google Ads, Answered.",
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
      eyebrow: "Start With An Audit",
      heading: "Ready to Put Google Ads to Work For Your Clinic?",
      body: "Share your account, and we'll show you where spend leaks, which searches lead to bookings, and what to fix first.",
      ctaLabel: "Book Your Account Audit",
    },
  },
  {
    slug: "meta-ads",
    category: "Digital Marketing",
    icon: Share2,
    eyebrow: "Facebook & Instagram for Healthcare",
    title: "Meta Ads",
    accent: "That Turn Scrolling into Walk-Ins.",
    description:
      "Reels, carousels and lead forms built around why patients hesitate, with WhatsApp replies while interest is fresh. Every Facebook and Instagram lead is tracked to the booking Meta cannot see.",
    ctaLabel: "Discuss Your Meta Ads",
    highlights: [
      "Creative Built Around Hesitation",
      "Policy-Safe Audience Targeting",
      "Lead Forms & Click-to-WhatsApp",
      "Cost Per Booking Reporting",
    ],
    metric: { value: "3.2x", label: "Avg. Meta Ads ROAS", sub: "Across Active Healthcare Accounts" },
    heroStats: [
      { value: "3.2x", label: "Avg. ROI" },
      { value: "9K+", label: "Leads Generated Monthly" },
      { value: "41%", label: "Avg. Lead Form Conversion" },
    ],
    includesTitle: "Turning Social Interest into Booked Patients.",
    includesIntro:
      "Facebook and Instagram campaigns for hospitals, dental chains, IVF and eye-care groups, run as the demand creation stage of the patient acquisition system.",
    includes: [
      {
        title: "Creative Built Around Patient Hesitation",
        body: "Reels, carousels and static ads built around what stops patients booking: cost, recovery time, pain or trust. Each implant, IVF or LASIK angle is tested before budget scales.",
      },
      {
        title: "Policy-Safe Audience & Location Targeting",
        body: "Location radius around each centre, 18+ age targeting and broad audiences guided by creative. No audiences are built on health conditions, in line with Meta's health and wellness rules.",
      },
      {
        title: "Lead Forms, Landing Pages or Click-to-WhatsApp",
        body: "Instant Forms with qualifying questions, landing pages for high-consideration treatments, or Click-to-WhatsApp ads, chosen by procedure so more leads never means weaker leads.",
      },
      {
        title: "Ad Copy, Pixel & Conversions API Compliance",
        body: "Ad copy checked against Meta's personal attributes and health policies, NMC guidance and the ASCI code. Meta Pixel and Conversions API set up without passing sensitive health data.",
      },
      {
        title: "Instant Follow-Up On Every Lead",
        body: "Every Meta lead lands in your CRM and triggers an instant WhatsApp acknowledgement, so the patient hears back before they scroll on to the next clinic's ad.",
      },
      {
        title: "Cost Per Booking Reporting",
        body: "Meta restricts appointment-level optimisation for health advertisers, so bookings are tracked in your CRM and reported as cost per booking by campaign, creative and centre.",
      },
    ],
    processEyebrow: "How We Approach It",
    processTitle: "Test, Qualify, Refresh: a Repeatable 6-step Cycle.",
    processNote: "Creative tested in rounds. Winners scaled, tired ads replaced before results drop.",
    process: [
      { title: "Audit the Account", body: "Pixel, Events Manager category, audiences and past creative reviewed for policy risk." },
      { title: "Define the Hesitation", body: "The questions stopping patients from booking each treatment listed before any ad." },
      { title: "Create & Test", body: "Several creative angles launched together; weak ones cut after the first round." },
      { title: "Qualify With Leads", body: "Form questions and WhatsApp replies filter out enquiries unlikely to book." },
      { title: "Follow to Booking", body: "Every lead followed in your CRM until it books or drops." },
      { title: "Refresh & Repeat", body: "Tired creative replaced, budget moved to what books; the next round begins." },
    ],
    proofStats: [
      { value: "<60 sec", label: "1st Response Target for Meta Leads" },
      { value: "20-30%", label: "Missed Leads Recovered with WhatsApp" },
      { value: "2.1x", label: "Monthly Walk-Ins Recorded" },
    ],
    faqTitle: "Common Queries About Healthcare Meta Ads, Answered.",
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
      eyebrow: "Start With An Audit",
      heading: "Want to Test Which Meta Ads Bring Patients In?",
      body: "Show us your account and lead flow, and Reinvent Digital will show you which creative, forms and follow-ups actually turn into bookings.",
      ctaLabel: "Book Your Meta Ads Review",
    },
  },
  {
    slug: "chatgpt-ads",
    category: "Digital Marketing",
    icon: Sparkles,
    eyebrow: "Conversational Ads for Healthcare",
    title: "ChatGPT Ads",
    accent: "From a Patient's Question to a Clinic Visit.",
    description:
      "Patients now ask ChatGPT which clinic to choose. Where OpenAI approves healthcare advertisers, we place labelled ads below those answers and track every enquiry to a booking.",
    ctaLabel: "See If You're Eligible",
    highlights: [
      "Eligibility & Advertiser Verification",
      "Commercial Prompt Mapping",
      "Compliant Conversational Creative",
      "Tracking Beyond OpenAI's Reports",
    ],
    metric: { value: "\u20b9725", label: "Min. Daily Budget", sub: "In the OpenAI Ads Manager, billed in rupees" },
    heroStats: [
      { value: "\u20b9725", label: "Min. Daily Budget" },
      { value: "0", label: "Patient Chats Shared with Advertisers" },
      { value: "<48 hours", label: "Campaign Launch Time" },
    ],
    includesTitle: "From Eligibility Check to Booked Enquiry.",
    includesIntro:
      "Conversational ads for hospitals, dental chains, IVF and eye-care groups, run alongside healthcare GEO as part of the patient acquisition system.",
    includes: [
      {
        title: "Eligibility & Advertiser Verification",
        body: "We check whether your services fall within OpenAI's approvable healthcare categories and prepare the licences and verification manual review may ask for, before any budget is committed.",
      },
      {
        title: "Commercial Prompt Mapping",
        body: "Ads don't run beside personal health conversations, so we map the commercial questions patients ask instead: clinic comparisons, treatment costs, locations and timings for your procedures.",
      },
      {
        title: "Context Hints & Compliant Creative",
        body: "Ad copy and context hints written for conversational intent rather than keywords, and checked against OpenAI's ad policies, NMC guidance and the ASCI code before submission.",
      },
      {
        title: "Landing Page Continuity",
        body: "Each ad lands on a page that answers the same question the patient just asked, with the centre, next step and contact options clear on mobile.",
      },
      {
        title: "Tracking Beyond OpenAI's Reports",
        body: "OpenAI reports only aggregated impressions and clicks, so tagged links and call tracking carry every enquiry into your CRM where bookings are reported by prompt theme and centre.",
      },
      {
        title: "Paired With GEO",
        body: "Paid placements run alongside healthcare GEO services, so work on being cited in ChatGPT answers and the sponsored placements below them support each other instead of competing for budget.",
      },
    ],
    processEyebrow: "How We Approach It",
    processTitle: "Eligibility Tested First, Then a Controlled Test.",
    processNote: "Campaigns start from as low as \u20b9725 a day. Every test has agreed pause criteria.",
    process: [
      { title: "Confirm Eligibility", body: "Services, licences and landing pages checked against OpenAI's healthcare advertiser criteria first." },
      { title: "Map the Prompts", body: "Commercial questions patients ask about your treatments and cities, grouped by intent." },
      { title: "Build the Test", body: "Creative, context hints and landing pages prepared for one procedure and centre." },
      { title: "Launch Small", body: "Controlled daily budget, with success and pause criteria agreed before launch." },
      { title: "Track to Booking", body: "Every enquiry is tagged and followed into your CRM, so the test is judged on bookings." },
      { title: "Expand or Pause", body: "Prompt themes that book get more budget; weak ones are paused." },
    ],
    proofStats: [
      { value: "\u20b9725", label: "Min. Daily Budget in OpenAI Ads Manager" },
      { value: "0", label: "Patient Chats Shared with Advertisers" },
      { value: "<48 hours", label: "Campaign Launch Time" },
    ],
    faqTitle: "Common Queries About ChatGPT Ads, Answered.",
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
      eyebrow: "Start With An Audit",
      heading: "Ready to Find Out If ChatGPT Ads Are Open to You?",
      body: "Tell us your services and centres, and Reinvent Digital will check eligibility, likely prompts and whether a test is worth running.",
      ctaLabel: "Book an Eligibility Check",
    },
  },
  {
    slug: "seo",
    category: "Digital Marketing",
    icon: TrendingUp,
    eyebrow: "Healthcare Search Engine Optimisation",
    title: "Healthcare SEO",
    accent: "From Top Rankings to Booked Appointments.",
    description:
      "We audit your site, fix what Google blocks, build the treatment and doctor pages patients compare, and connect Search Console to your CRM, so every ranking is judged on bookings.",
    ctaLabel: "Discuss Your Organic Growth",
    highlights: [
      "Technical SEO, Schema & Media",
      "Treatment Pages in Every Language",
      "Clinical Review & E-E-A-T",
      "Multi-Location Listing Consistency",
    ],
    metric: { value: "200%", label: "Avg. Organic Growth", sub: "Within 6 Months" },
    heroStats: [
      { value: "63%", label: "Avg. Traffic Lift in 90 Days" },
      { value: "180+", label: "Procedure Pages Ranked" },
      { value: "2.1x", label: "Organic Enquiry Growth" },
    ],
    includesTitle: "6 Fixes on Your Website, and a Full Calendar.",
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
    processEyebrow: "How SEO Compounds",
    processTitle: "Prioritised. Published. Measured. Improved Every Month.",
    processNote:
      "Technical SEO and Google Business Profile improvements show in 60 to 90 days. From months 9 to 12, organic rankings build on each other, without extra ad spend.",
    process: [
      { title: "Check Your Current Rankings", body: "Current rankings, organic enquiries and bookings recorded, so progress is measured honestly." },
      { title: "Map the Searches That Bring Patients", body: "Treatments and centres ranked by demand and revenue potential, not search volume." },
      { title: "Fix Technical SEO Issues", body: "Crawl errors, canonical issues, redirects and duplicate centre pages resolved before content." },
      { title: "Publish Clinically Reviewed Pages", body: "Priority pages written, clinically approved and published in order of booking value." },
      { title: "Track Organic Bookings", body: "Each page judged on enquiries, bookings and walk-ins where data allows." },
      { title: "Refresh & Expand Content", body: "Pages losing ground refreshed; winning clusters extended to new treatments and centres." },
    ],
    proofStats: [
      { value: "120+", label: "Google Business Profiles Managed" },
      { value: "11+", label: "Years of Healthcare Marketing Experience" },
      { value: "120%", label: "Ranking Improvement for Healthcare Groups" },
    ],
    faqTitle: "What Healthcare Leaders Ask Before Choosing an SEO Partner.",
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
      eyebrow: "Fix Your Rankings",
      heading: "Ready to Make Organic Search Your Steadiest Source of Patients?",
      body: "Share your website and top treatments, and we'll show where your pages rank, where patients drop off and which fixes will bring the most bookings.",
      ctaLabel: "Book Your SEO Audit",
    },
  },
  {
    slug: "aeo",
    category: "Digital Marketing",
    icon: Bot,
    eyebrow: "Healthcare Answer Engine Optimisation",
    title: "Healthcare AEO",
    accent: "Be the Answer Patients Read Before They Book.",
    description:
      "Patients now read the AI answer before any link. We build clinically reviewed answers so your hospital is the source those answers draw from.",
    ctaLabel: "Discuss Your AEO Visibility",
    highlights: [
      "Patient Question Mapping",
      "Snippet-Matched Answer Formats",
      "Clinical Authorship & E-E-A-T",
      "Medical Schema Mapping",
    ],
    metric: { value: "1.1K+", label: "Responses Cited", sub: "Across Google AI Overviews" },
    heroStats: [
      { value: "600+", label: "Citations in Google AI Mode" },
      { value: "200+", label: "Pages Cited in Google AI Overviews" },
      { value: "214+", label: "Pages Cited in Google AI Mode" },
    ],
    includesTitle: "From the Question Patients Ask to The Answer They Trust.",
    includesIntro:
      "One question at a time, from the patient's words to a reviewed answer Google, voice search and AI Overviews can trust.",
    includes: [
      {
        title: "Patient Question Mapping",
        body: "Questions mined from People Also Ask, Search Console and call-centre logs, sorted by clinical risk.",
      },
      {
        title: "Snippet-Matched Answer Formats",
        body: "Definitions, steps and tables, each formatted to match the snippet type a query triggers.",
      },
      {
        title: "Clinical Authorship & E-E-A-T",
        body: "Named doctor authors, registration details, review dates and ICMR or WHO citations on medical answers.",
      },
      {
        title: "Medical Schema Mapping",
        body: "MedicalProcedure, Physician and MedicalClinic schema mapped to visible content; FAQ markup for context.",
      },
      {
        title: "Passage-Level AI Readiness",
        body: "Self-contained passages under question-led headings, quotable by AI Overviews without losing accuracy.",
      },
      {
        title: "Intent-Based Answer Routing",
        body: "Symptom questions routed to specialist guidance; cost and location questions to centre pages.",
      },
    ],
    processEyebrow: "How Healthcare AEO Benefits",
    processTitle: "Win the AI Generative Answers Your Competitors Own Today.",
    processNote:
      "Progress starts with the pages you already have. Each approved answer then works across Google, WhatsApp and your call team.",
    process: [
      { title: "See Who Answers Patients", body: "Find out which of your treatments Google answers with a competitor's or Practo's page." },
      { title: "Early Wins Without New Pages", body: "Your existing treatment pages are reshaped first, so progress starts before new content." },
      { title: "Doctor-Reviewed Answers Only", body: "One short review per answer, so busy doctors aren't chasing endless drafts." },
      { title: "Every Channel Gives the Same Answer", body: "Your website, WhatsApp replies and call team give patients one approved answer." },
      { title: "You See Results, Even Without Clicks", body: "Monthly proof of answers won, calls received and branded searches, not just traffic." },
      { title: "Current & Safe Answers", body: "High-risk medical answers are re-checked, so outdated advice doesn't stay on your site." },
    ],
    proofStats: [
      { value: "185+", label: "Healthcare Accounts Managed" },
      { value: "11+", label: "Years of Marketing Leadership" },
      { value: "8+", label: "Healthcare Verticals Covered" },
    ],
    faqTitle: "What Healthcare Leaders Ask About AEO.",
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
      eyebrow: "Check Your AEO Visibility",
      heading: "Ready to Be in the Generative AI Answers Patients Trust Before Links?",
      body: "Share your top treatments, and Reinvent Digital will show which patient questions you already own, which ones competitors hold, and what to answer first.",
      ctaLabel: "Book Your AEO Review",
    },
  },
  {
    slug: "geo",
    category: "Digital Marketing",
    icon: Globe,
    eyebrow: "Healthcare Generative Engine Optimisation",
    title: "Healthcare GEO",
    accent: "Be the Name Patients Hear When They Ask AI.",
    description:
      "AI tools now shortlist hospitals before patients search further. We align your listings, profiles and pages so ChatGPT, Gemini and Perplexity describe you correctly.",
    ctaLabel: "Talk to a GEO Specialist",
    highlights: [
      "Prompt & Citation Audit",
      "Entity Consistency",
      "Citable Evidence Pages",
      "AI Crawler Access",
    ],
    metric: { value: "100+", label: "Responses Cited", sub: "Answers in Perplexity" },
    heroStats: [
      { value: "2K+", label: "Citations Across AI Platforms" },
      { value: "300+", label: "Pages Cited by AI Platforms" },
      { value: "100+", label: "Citations in Gemini" },
    ],
    includesTitle: "What AI Tools Check Before They Name Your Hospital.",
    includesIntro:
      "ChatGPT and Perplexity don't take your website's word for it. They cross-check directories, reviews and news. We make every source say the same thing, inside the Reinvent Digital Patient Acquisition System.",
    includes: [
      {
        title: "Prompt & Citation Audit",
        body: "Patient prompts tested across ChatGPT, Gemini, Perplexity and Copilot to see who gets named.",
      },
      {
        title: "Entity Consistency",
        body: "Hospital, doctor, speciality and centre details matched across your site, Practo, Justdial and Google.",
      },
      {
        title: "Organisation & Physician Schema",
        body: "Organization, Physician and MedicalClinic schema linked with sameAs to your verified external profiles.",
      },
      {
        title: "Citable Evidence Pages",
        body: "Original data, doctor-reviewed comparisons and cited facts that AI tools can quote with confidence.",
      },
      {
        title: "Third-Party Authority Signals",
        body: "Mentions in medical directories, news and expert contributions, chosen for trust, not link volume.",
      },
      {
        title: "AI Crawler Access",
        body: "robots.txt checked so OAI-SearchBot and PerplexityBot can reach the pages you want cited.",
      },
    ],
    processEyebrow: "How GEO Works",
    processTitle: "From What AI Says Today to What It Says Next Month.",
    processNote: "Wrong facts cost patients. Missing proof costs mentions. Each step fixes one, then tests again to prove it worked.",
    process: [
      { title: "Hear What AI Says", body: "A baseline of who's named for your treatments, and how AI describes you." },
      { title: "Correct What's Wrong", body: "Outdated doctors, closed centres and wrong timings fixed at the sources AI reads first." },
      { title: "Fill the Proof Gaps", body: "Missing facts, comparisons and doctor credentials published where AI tools look for evidence." },
      { title: "Win Comparison Prompts", body: "Comparison prompts, like \u201cbest IVF centre in Hyderabad\u201d, targeted once your facts are fixed." },
      { title: "Track AI-Referred Patients", body: "AI referral visits tracked in GA4, and \u201cfound us on ChatGPT\u201d captured in your CRM." },
      { title: "Re-Test Every Month", body: "The same prompts re-run monthly, tracking mentions, sentiment and new competitors named." },
    ],
    proofStats: [
      { value: "185+", label: "Healthcare Accounts Managed" },
      { value: "11+", label: "Years of Marketing Leadership" },
      { value: "8+", label: "Healthcare Verticals Covered" },
    ],
    faqTitle: "What Healthcare Leaders Ask About GEO.",
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
      eyebrow: "Check Your GEO Visibility",
      heading: "Ready for Your Hospital to Be the One AI Names?",
      body: "Tell us your priority treatments. Reinvent Digital will run the prompts your patients use, show you where competitors are named, and map where ChatGPT Ads can support organic visibility.",
      ctaLabel: "Get Your AI Visibility Report",
    },
  },
  {
    slug: "business-profile-optimisation",
    category: "Digital Marketing",
    icon: MapPin,
    eyebrow: "Healthcare Google Business Profile Optimisation",
    title: "Google Maps & Local SEO",
    accent: "From \u201cDentist Near Me\u201d to Directions to Your Door.",
    description:
      "We manage every centre's Google Business Profile, from categories and photos to reviews and Ask Maps readiness, then track calls, directions and bookings location by location.",
    ctaLabel: "Discuss Your Local Visibility",
    highlights: [
      "Categories, Services & Attributes",
      "Review Velocity & Replies",
      "Ask Maps Readiness",
      "NAP & Citation Consistency",
    ],
    metric: { value: "2.1x", label: "Avg. Monthly Walk-Ins", sub: "Increase in 90 Days" },
    heroStats: [
      { value: "120+", label: "Google Business Profiles Managed" },
      { value: "<24 hrs", label: "Review Replies Approved & Published" },
      { value: "185+", label: "Healthcare Accounts Managed" },
    ],
    includesTitle: "Everything Google Checks Before It Shows Your Centre.",
    includesIntro:
      "You can't move your centre closer to the patient. You can make it the most complete, trusted and active profile they see, and that's what our Google Business Profile optimisation does.",
    includes: [
      {
        title: "Categories, Services & Attributes",
        body: "Categories, treatment services and attributes set per centre, matched to how patients search.",
      },
      {
        title: "Doctor & Department Listings",
        body: "Practitioner and department profiles set up within Google's guidelines, without duplicates or spam risk.",
      },
      {
        title: "Review Velocity & Replies",
        body: "Consent-based review requests, and replies approved within 24 hours that never reveal patient details.",
      },
      {
        title: "Ask Maps Readiness",
        body: "Complete hours, services and photos, now that Google's Ask Maps answers patients instead of Q&A.",
      },
      {
        title: "Weekly Posts & Photos",
        body: "Localised Google Posts and fresh centre photos published weekly, so every profile stays active.",
      },
      {
        title: "NAP & Citation Consistency",
        body: "Name, address and phone matched across 50+ directories, with duplicate and spam listings reported.",
      },
    ],
    processEyebrow: "How We Approach It",
    processTitle: "One Tested and Proven System for Every Centre on the Map.",
    processNote: "Forty centres means forty separate maps. Each one gets its own audit, its own tracking and its own fixes.",
    process: [
      { title: "Audit Every Location", body: "Ownership, verification, categories, duplicates and current map visibility checked for each centre." },
      { title: "See Your Map Coverage", body: "Grid-based rank tracking shows where each centre appears across its catchment, street by street." },
      { title: "Clean Up the Listings", body: "Duplicates merged, wrong pins corrected and competitor spam reported through Google's redressal form." },
      { title: "Connect the Booking Path", body: "Appointment links, click-to-call and WhatsApp added, so profile views can turn into bookings." },
      { title: "Track Calls to Walk-Ins", body: "Calls, directions and bookings tracked per centre, matched to walk-ins where data allows." },
      { title: "Flag Weak Centres Early", body: "Monthly audits and alerts flag any centre whose calls or visibility drop." },
    ],
    proofStats: [
      { value: "115+", label: "GBP Profiles Managed for One Dental Group" },
      { value: "11+", label: "Years of Marketing Leadership" },
      { value: "8+", label: "Healthcare Verticals Covered" },
    ],
    faqTitle: "What Healthcare Leaders Ask About Google Maps.",
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
      eyebrow: "Check Your Map Visibility",
      heading: "Ready to Find Out Why Patients Can't Find You on Maps?",
      body: "Tell us your centres. Reinvent Digital will check each profile, map where you appear across the neighbourhood, and show where competitors win the directions tap.",
      ctaLabel: "Check My Centres on Maps",
    },
  },
  {
    slug: "youtube-marketing",
    category: "Digital Marketing",
    icon: PlaySquare,
    eyebrow: "Video & YouTube",
    title: "YouTube Marketing",
    accent: "That Builds Trust Before the Visit.",
    description:
      "Doctor introduction videos, procedure explainers and patient testimonials distributed through YouTube and pre-roll ads — so patients arrive already confident in your team.",
    highlights: [
      "Doctor & Procedure Explainer Videos",
      "Patient Testimonial Production",
      "YouTube Pre-Roll & Discovery Ads",
      "Video SEO & Thumbnail Optimisation",
    ],
    metric: { value: "2.1x", label: "Higher Booking Rate", sub: "for patients who watch before enquiring" },
    heroStats: [
      { value: "2.1x", label: "Higher Booking Rate" },
      { value: "150+", label: "Videos Produced" },
      { value: "+55%", label: "Avg Watch-Through Rate" },
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
      { value: "2.1x", label: "Higher Booking Rate" },
      { value: "150+", label: "Videos Produced" },
      { value: "+55%", label: "Watch-Through Rate" },
    ],
  },
  {
    slug: "social-media-management",
    category: "Digital Marketing",
    icon: Users,
    eyebrow: "Organic Social",
    title: "Social Media Management",
    accent: "That Keeps Your Clinic Top of Mind.",
    description:
      "Instagram, Facebook and LinkedIn content calendars built around patient education, doctor credibility and community trust — consistent enough to matter, careful enough to stay compliant.",
    highlights: [
      "Monthly Content Calendars",
      "Doctor & Patient-Education Content",
      "Compliant Healthcare Messaging",
      "Community & DM Management",
    ],
    metric: { value: "3x", label: "Avg Follower Growth", sub: "within first 6 months" },
    heroStats: [
      { value: "3x", label: "Avg Follower Growth" },
      { value: "25+", label: "Clinics Managed" },
      { value: "Daily", label: "Community Monitoring" },
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
      { value: "3x", label: "Avg Follower Growth" },
      { value: "25+", label: "Clinics Managed" },
      { value: "<2 hrs", label: "Avg DM Response Time" },
    ],
  },
  {
    slug: "marketing-automation",
    category: "Digital Marketing",
    icon: Workflow,
    eyebrow: "Lifecycle & Automation",
    title: "Marketing Automation",
    accent: "That Follows Up So Your Team Doesn't Have To.",
    description:
      "Automated email, SMS and WhatsApp sequences that nurture enquiries, remind patients of appointments and re-engage no-shows — without adding to your front desk's workload.",
    highlights: [
      "Enquiry Nurture Sequences",
      "Appointment Reminders & No-Show Recovery",
      "WhatsApp & SMS Automation",
      "CRM-triggered Workflows",
    ],
    metric: { value: "27%", label: "Of Bookings Recovered", sub: "from automated follow-up alone" },
    heroStats: [
      { value: "27%", label: "Bookings from Automation" },
      { value: "90%", label: "Reduction in Manual Follow-Up" },
      { value: "24/7", label: "Always-on Nurture" },
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
      { value: "27%", label: "Bookings Recovered" },
      { value: "90%", label: "Less Manual Follow-Up" },
      { value: "24/7", label: "Always-on Nurture" },
    ],
  },
  {
    slug: "crm",
    category: "Tools & Measurement",
    icon: Database,
    eyebrow: "Patient Relationship Management",
    title: "Healthcare CRM",
    accent: "That Gives Every Enquiry a Home.",
    description:
      "One patient record from first click to clinic visit — every call, form and WhatsApp enquiry captured, tagged by source and tracked through to booking and walk-in.",
    highlights: [
      "Unified Patient Record",
      "Source Tagging on Every Enquiry",
      "Call, Form & WhatsApp Capture",
      "Booking & Walk-in Status Tracking",
    ],
    metric: { value: "1", label: "Patient Record", sub: "across every channel and location" },
    heroStats: [
      { value: "100%", label: "Enquiries Captured" },
      { value: "120+", label: "Clinics on the Platform" },
      { value: "1 view", label: "Per Patient, Every Channel" },
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
      { value: "100%", label: "Enquiries Captured" },
      { value: "120+", label: "Clinics Live" },
      { value: "1 record", label: "Per Patient" },
    ],
  },
  {
    slug: "call-centre-management",
    category: "Response & Call Centre",
    icon: Headset,
    eyebrow: "Response & Conversion",
    title: "Call Centre Optimisation",
    accent: "Where Sixty Seconds Is a System, Not a Slogan.",
    description:
      "Coverage planning, routing, escalation and call scoring built around your actual enquiry patterns — so every patient reaches an agent fast, and every call is coached toward a booking.",
    highlights: [
      "Coverage Planned to Enquiry Patterns",
      "Auto-Routing & Missed-Call Escalation",
      "100-point Call Scoring Rubric",
      "Agent Coaching on Real Conversations",
    ],
    metric: { value: "<60 sec", label: "Average Response Target", sub: "across managed call teams" },
    heroStats: [
      { value: "<60 sec", label: "Avg Response Time" },
      { value: "92%", label: "Calls Within SLA" },
      { value: "15", label: "Agent Teams Supported" },
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
      { value: "<60 sec", label: "Avg Response Time" },
      { value: "92%", label: "within SLA" },
      { value: "+31%", label: "Booking Rate After Coaching" },
    ],
  },
  {
    slug: "telephony",
    category: "Tools & Measurement",
    icon: PhoneCall,
    eyebrow: "Call Infrastructure",
    title: "Telephony",
    accent: "That Never Loses a Ringing Phone.",
    description:
      "Virtual numbers per campaign and centre, routing rules, IVR and recording — so every call is answered, logged against the right source and reviewable afterwards.",
    highlights: [
      "Virtual Numbers per Campaign & Centre",
      "Routing, Overflow & Escalation Rules",
      "Call Recording for Scoring",
      "Missed-Call Alerts and Callbacks",
    ],
    metric: { value: "<60 sec", label: "First Response Target", sub: "on every managed line" },
    heroStats: [
      { value: "100%", label: "Calls Logged to a Source" },
      { value: "<60 sec", label: "First Response Target" },
      { value: "24/7", label: "Missed-Call Capture" },
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
      { value: "100%", label: "Calls Source-Tagged" },
      { value: "<60 sec", label: "Response Target" },
      { value: "0", label: "Enquiries with No Owner" },
    ],
  },
  {
    slug: "booking-attribution",
    category: "Tools & Measurement",
    icon: Route,
    eyebrow: "Source to Booking",
    title: "Booking Attribution",
    accent: "That Follows the Patient, Not the Click.",
    description:
      "Every enquiry carries its source into the CRM, so campaigns are compared on bookings rather than clicks, and budget decisions rest on what actually fills the diary.",
    highlights: [
      "Source Saved at the First Touch",
      "Campaign-Level Booking Reports",
      "Cost per Booked Patient",
      "Channel Comparison on Outcomes",
    ],
    metric: { value: "1", label: "Source per Enquiry", sub: "carried from click to booking" },
    heroStats: [
      { value: "100%", label: "Enquiries Source-Tagged" },
      { value: "1 report", label: "Across Every Channel" },
      { value: "CPB", label: "Cost per Booked Patient" },
    ],
    includes: [
      "Tracking plan across every channel",
      "Source capture on call, form & WhatsApp",
      "Campaign and centre tagging",
      "Booking status in the patient record",
      "Cost Per Booking Reporting",
      "Channel comparison dashboard",
    ],
    process: [
      { title: "Audit the tracking", body: "We check what each channel passes today and where the source is being lost." },
      { title: "Fix the capture", body: "Source, campaign and centre are stamped on the enquiry at the point it arrives." },
      { title: "Connect the booking", body: "Booking status is written back, so each campaign can be judged on bookings." },
      { title: "Report on cost per booking", body: "Spend is compared against booked patients, not leads, by campaign and centre." },
    ],
    proofStats: [
      { value: "100%", label: "Enquiries Tagged" },
      { value: "1 view", label: "Spend to Bookings" },
      { value: "Weekly", label: "Budget Decisions" },
    ],
  },
  {
    slug: "walk-in-tracking",
    category: "Tools & Measurement",
    icon: DoorOpen,
    eyebrow: "Attendance Matching",
    title: "Walk-In Tracking",
    accent: "That Proves Who Actually Arrived.",
    description:
      "Booked appointments are matched against your PMS or HIS attendance records, so walk-in numbers reflect what the data can prove — including the records that could not be matched.",
    highlights: [
      "Booking Matched to Attendance",
      "Approved Identifiers Only",
      "Match Rate Shown on Every Report",
      "Walk-Ins Traced Back to Channel",
    ],
    metric: { value: "100%", label: "Match Rate Disclosed", sub: "on every walk-in report" },
    heroStats: [
      { value: "PMS/HIS", label: "Attendance Matched" },
      { value: "100%", label: "Match Rate Disclosed" },
      { value: "DPDP", label: "Handled Under the 2023 Act" },
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
      { value: "Matched", label: "Booking to Attendance" },
      { value: "Shown", label: "Unmatched Records" },
      { value: "Agreed", label: "Data Scope Before Access" },
    ],
  },
  {
    slug: "messaging-follow-up",
    category: "Response & Call Centre",
    icon: MessageCircle,
    eyebrow: "Follow-Up That Has an Owner",
    title: "Messaging & Follow-Up",
    accent: "So No Enquiry Goes Cold.",
    description:
      "WhatsApp and SMS sequences with an owner, a timer and an end state — reminders before the appointment, structured follow-up after it, and escalation when nobody replies.",
    highlights: [
      "WhatsApp & SMS Sequences",
      "Named Owner for Every Enquiry",
      "Appointment Reminders",
      "Escalation When Follow-Up Stalls",
    ],
    metric: { value: "0", label: "Enquiries with No Owner", sub: "every follow-up is assigned" },
    heroStats: [
      { value: "0", label: "Enquiries with No Owner" },
      { value: "<60 sec", label: "First Response Target" },
      { value: "3 steps", label: "Before an Enquiry Closes" },
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
      { value: "0", label: "Unowned Enquiries" },
      { value: "Reminders", label: "Before Every Appointment" },
      { value: "Tracked", label: "To Booking or Closure" },
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
