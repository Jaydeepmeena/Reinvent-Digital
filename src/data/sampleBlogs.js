// Placeholder posts so the blog looks complete before the CMS is connected.
// They are used only while VITE_BLOG_API_URL is unset — once the real feed is
// live these are never read. Delete this file after launch if you prefer.
import callsImg from "../assets/cards/calls.jpg";
import reportingImg from "../assets/cards/reporting.jpg";
import routingImg from "../assets/cards/routing.jpg";
import googleAdsImg from "../assets/heroes/google-ads.jpg";
import seoImg from "../assets/heroes/seo.jpg";
import mapsImg from "../assets/heroes/business-profile.jpg";

export const SAMPLE_POSTS = [
  {
    id: "sample-cost-per-lead",
    slug: "cost-per-lead-is-the-wrong-metric",
    title: "Cost per lead is the wrong metric for healthcare marketing",
    excerpt:
      "Lead volume is the easiest number to grow and the least useful one to report. Here is what to measure instead.",
    category: "Strategy",
    date: "2026-09-29T09:30:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: reportingImg, alt: "A dashboard showing campaign performance" },
    content: `
      <p>A campaign can double its leads and leave the appointment book exactly as it was. That is the uncomfortable part of cost per lead: it measures how cheaply you can make a phone ring, not whether anyone answered it.</p>
      <h2>What the front desk sees</h2>
      <p>Ask the team at the desk and the story is different from the one in the report. A patient enquires at 8 pm. The team calls back at 11 am the next day. By then the patient has booked with the clinic down the road, and the lead still counts as a success in the dashboard.</p>
      <ul>
        <li>Unanswered calls during the hours patients actually enquire</li>
        <li>Follow-ups with no named owner</li>
        <li>No report connecting a campaign to the patients who walked in</li>
      </ul>
      <blockquote>We called back, but they had already booked elsewhere.</blockquote>
      <h2>Measure the booking, not the click</h2>
      <p>Cost per booked patient is harder to produce and far harder to argue with. It forces three things into the same view: what you spent, how fast the enquiry was answered, and whether the patient arrived.</p>
      <h3>Where to start</h3>
      <p>Stamp a source on every enquiry at the point it arrives. Give every enquiry an owner and a timer. Then reconcile bookings against attendance, and report the match rate honestly, including the records you could not match.</p>
      <p>Once those three are in place, cost per lead becomes what it should always have been: a diagnostic number, not a headline.</p>
    `,
  },
  {
    id: "sample-call-scoring",
    slug: "a-front-desks-guide-to-call-scoring",
    title: "A front desk's guide to call scoring",
    excerpt:
      "The rubric we use to turn call recordings into coaching material instead of a filing cabinet nobody opens.",
    category: "Call Centre",
    date: "2026-09-18T09:30:00+05:30",
    reading_time: 7,
    author: { name: "Reinvent Digital" },
    image: { src: callsImg, alt: "A team reviewing call handling at a whiteboard" },
    content: `
      <p>Most clinics record calls. Very few listen to them. The recordings pile up, and the only time anyone opens one is after a complaint — which is the least useful moment to start learning.</p>
      <h2>Score the booking, not the greeting</h2>
      <p>A call that was polite, prompt and well-mannered but ended without an appointment is a failed call. Scoring has to reward the outcome, then explain the gap.</p>
      <h3>What we score</h3>
      <ul>
        <li><strong>Response:</strong> how quickly the call was answered, and whether a missed call was returned</li>
        <li><strong>Qualification:</strong> did the agent establish treatment, location and urgency</li>
        <li><strong>Objection handling:</strong> cost, recovery time and fear, answered rather than deflected</li>
        <li><strong>The ask:</strong> was a specific appointment slot offered, not "call us back when you decide"</li>
        <li><strong>Close:</strong> confirmation sent, reminder scheduled, owner assigned</li>
      </ul>
      <h2>Coach weekly, in pairs</h2>
      <p>One strong call and one weak call from the same agent, listened to together, teaches more than a month of dashboards. The point of scoring is not the score. It is having something concrete to point at.</p>
    `,
  },
  {
    id: "sample-aeo-vs-seo",
    slug: "aeo-vs-seo-when-patients-ask-ai",
    title: "AEO vs SEO: what changes when patients ask AI instead of Google",
    excerpt:
      "Ranking gets you the click. Being quoted gets you the patient. A practical breakdown of what to structure differently.",
    category: "AEO & GEO",
    date: "2026-09-06T09:30:00+05:30",
    reading_time: 8,
    author: { name: "Reinvent Digital" },
    image: { src: seoImg, alt: "Search and content elements above a keyboard" },
    content: `
      <p>Patients increasingly read an answer before they see a link. That answer is assembled from sources, and the practical question for a hospital is simple: is your page one of them?</p>
      <h2>Three jobs, not one</h2>
      <h3>SEO — be findable</h3>
      <p>Technical health, treatment and centre pages, local signals. This is still the foundation; nothing else works without it.</p>
      <h3>AEO — be quotable</h3>
      <p>Answer the question in a self-contained passage directly under a question-led heading. If a paragraph only makes sense with the three above it, it cannot be extracted.</p>
      <h3>GEO — be named</h3>
      <p>AI tools cross-check your site against directories, reviews and news. If your hospital's details differ between your site, Practo and Google, you become the risky answer to give.</p>
      <h2>What to change first</h2>
      <p>Take the ten questions your call centre answers every day. Write each as a heading, answer it in under eighty words, have a named doctor review it, and publish it on the treatment page it belongs to. That single pass does more than a quarter of keyword work.</p>
    `,
  },
  {
    id: "sample-60-second",
    slug: "the-60-second-response-benchmark",
    title: "The 60-second response benchmark",
    excerpt:
      "What happens to booking rates when first response drops from hours to under a minute, across the accounts we run.",
    category: "Research",
    date: "2026-08-22T09:30:00+05:30",
    reading_time: 5,
    author: { name: "Reinvent Digital" },
    image: { src: routingImg, alt: "An operations team at work" },
    content: `
      <p>Response time is the lever most clinics never pull, because it sits between the marketing team and the front desk and belongs to neither.</p>
      <h2>The pattern</h2>
      <p>Across managed accounts, the enquiries answered inside a minute book at a materially higher rate than those answered the next morning — and the gap widens for high-consideration treatments, where the patient is actively comparing clinics.</p>
      <h2>Why the evening matters</h2>
      <p>Patients enquire when they are free: late evening, weekends, public holidays. Rosters are built around clinic hours. The mismatch is where most of the loss happens, and it is a staffing decision long before it is a marketing one.</p>
      <h3>What to do about it</h3>
      <ul>
        <li>Plot enquiry volume by hour, then compare it to agent coverage by hour</li>
        <li>Route out-of-hours enquiries to an acknowledgement within seconds, even if the real call comes later</li>
        <li>Escalate anything unanswered past your target rather than letting it age quietly</li>
      </ul>
    `,
  },
  {
    id: "sample-maps",
    slug: "what-google-maps-rewards-for-clinics",
    title: "What Google Maps actually rewards for clinics",
    excerpt:
      "Relevance, distance and prominence — and which of the three you can actually influence, centre by centre.",
    category: "Local SEO",
    date: "2026-08-08T09:30:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: mapsImg, alt: "A map pin above a city skyline" },
    content: `
      <p>You cannot move your centre closer to the patient. You can make it the most complete, trusted and active profile they see — and that is most of the job.</p>
      <h2>The three signals</h2>
      <ul>
        <li><strong>Relevance:</strong> categories, services and attributes that match how patients search</li>
        <li><strong>Distance:</strong> fixed, and not yours to change</li>
        <li><strong>Prominence:</strong> reviews, consistent listings and an active profile</li>
      </ul>
      <h2>Forty centres means forty maps</h2>
      <p>Chain-level reporting hides the centre that is quietly invisible. Grid-based rank tracking shows where each location appears across its own catchment, street by street, which is the only view that tells you where to intervene.</p>
      <h3>The unglamorous work</h3>
      <p>Merge duplicates. Correct wrong pins. Keep name, address and phone identical everywhere. Reply to reviews within a day without revealing patient details. Post weekly. None of it is clever; all of it compounds.</p>
    `,
  },
  {
    id: "sample-attribution",
    slug: "booking-attribution-without-a-data-team",
    title: "Booking attribution without a data team",
    excerpt:
      "You do not need a warehouse to connect spend to walk-ins. You need the source to survive three handovers.",
    category: "Measurement",
    date: "2026-07-25T09:30:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: googleAdsImg, alt: "A clinician reviewing performance on a laptop" },
    content: `
      <p>Attribution fails in the same three places at almost every clinic group, and none of them require a data team to fix.</p>
      <h2>Handover one: the click to the enquiry</h2>
      <p>The source has to be stamped on the enquiry as it arrives — on the call, the form and the WhatsApp message alike. If it is captured later, it is guessed.</p>
      <h2>Handover two: the enquiry to the booking</h2>
      <p>The booking has to be written back against the same record. A booking logged in a separate diary is a booking you cannot attribute.</p>
      <h2>Handover three: the booking to the visit</h2>
      <p>Attendance lives in the clinic system. Match on an agreed identifier, publish the match rate, and show the records you could not match rather than quietly dropping them.</p>
      <blockquote>A number you cannot explain is worse than no number.</blockquote>
      <p>Get those three handovers right and cost per booked patient falls out of the data on its own.</p>
    `,
  },
];
