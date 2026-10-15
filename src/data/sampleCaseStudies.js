// Placeholder case studies so the page looks complete before the CMS is
// connected. They are used only while VITE_BLOG_API_URL is unset or the
// /case-studies/ endpoint is not yet live; once the real feed answers these
// are never read. Delete this file after launch if you prefer.
import dentalImg from "../assets/cards/industry-dental.jpg";
import fertilityImg from "../assets/cards/industry-fertility.jpg";
import eyeImg from "../assets/cards/industry-eye.jpg";
import hospitalImg from "../assets/cards/industry-hospital.jpg";

export const SAMPLE_CASE_STUDIES = [
  {
    id: "sample-dental-60-locations",
    slug: "dental-group-3400-to-7600-monthly-bookings",
    title: "60-location dental group: 3,400 to 7,600 monthly bookings",
    client: "National dental group, 60 centres",
    category: "Dental",
    excerpt:
      "Call routing and coverage planning more than doubled bookings without adding a single person to the front desk.",
    date: "2026-08-18T10:00:00+05:30",
    reading_time: 7,
    author: { name: "Reinvent Digital" },
    image: { src: dentalImg, alt: "A dental clinic reception during morning hours" },
    results: [
      { value: "2.2x", label: "Monthly bookings" },
      { value: "-41%", label: "Cost per booked patient" },
      { value: "94%", label: "Calls answered first time" },
      { value: "15", label: "Agents, unchanged" },
    ],
    content: `
      <p>The group was generating more enquiries than it had ever handled, and the appointment book had barely moved. The marketing report and the front desk were describing two different businesses.</p>
      <h2>What we found</h2>
      <p>Enquiries peaked between 7 pm and 10 pm. The call team finished at 6:30 pm. Every evening enquiry waited until the next morning, by which point a third of them had booked somewhere else.</p>
      <ul>
        <li>No source stamped on a call, so no centre knew which campaign it was answering</li>
        <li>One queue for 60 centres, so a patient in Pune waited behind a patient in Kochi</li>
        <li>Follow-ups recorded in a spreadsheet with no owner and no timer</li>
      </ul>
      <h2>What we changed</h2>
      <p>We routed calls by centre and by language, moved the roster to cover the hours patients actually enquire, and stamped a source on every enquiry at the point it arrived. Nothing was added to headcount.</p>
      <h3>The follow-up ladder</h3>
      <p>Every unanswered enquiry entered a four-step ladder: a call back inside 60 seconds, a WhatsApp message at 15 minutes, a second call the same evening, and a final call the next morning. Each step had a named owner.</p>
      <h2>Where it landed</h2>
      <p>Monthly bookings went from 3,400 to 7,600 across two quarters. The cost per booked patient fell 41 per cent, on a media budget that rose by nine per cent.</p>
      <blockquote>We stopped asking how many leads came in and started asking how many chairs were full.</blockquote>
    `,
  },
  {
    id: "sample-fertility-consult-to-cycle",
    slug: "fertility-network-doubling-consult-to-cycle-conversion",
    title: "Fertility network: doubling consult-to-cycle conversion",
    client: "Fertility network, 11 centres",
    category: "IVF & Fertility",
    excerpt:
      "Slowing the nurture sequence down raised conversion instead of hurting it. The decision takes months, and the follow-up has to match.",
    date: "2026-07-02T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: fertilityImg, alt: "A fertility consultation room" },
    results: [
      { value: "2.0x", label: "Consult to cycle" },
      { value: "+68%", label: "Second consultations" },
      { value: "11", label: "Centres on one system" },
    ],
    content: `
      <p>Enquiries were healthy and first consultations were full. Cycles were not. The gap between walking in and starting treatment was where the network was losing its patients.</p>
      <h2>A decision measured in months</h2>
      <p>Fertility is not a same-week decision. Couples compare clinics, read, consult family and come back. The follow-up sequence ran for 11 days and then stopped, which meant it ended before most couples had decided anything.</p>
      <h2>What we changed</h2>
      <ul>
        <li>Extended nurture from 11 days to 16 weeks, with fewer messages per week</li>
        <li>Separated first-consult content from post-consult content, which had been one list</li>
        <li>Gave every post-consult enquiry a named counsellor rather than a shared inbox</li>
      </ul>
      <p>Message volume fell by roughly a third. Replies rose, because what arrived matched where the couple actually was.</p>
      <h2>Where it landed</h2>
      <p>Consult-to-cycle conversion doubled over nine months, and second consultations rose 68 per cent, which is the step most likely to precede a cycle.</p>
    `,
  },
  {
    id: "sample-eye-care-surgical",
    slug: "eye-care-chain-2-6x-surgical-consultations",
    title: "40-location eye care chain: 2.6x surgical consultations",
    client: "Eye care chain, 40 centres",
    category: "Eye Care",
    excerpt:
      "Routine and surgical demand were competing in one campaign. Splitting them unlocked growth on the same budget.",
    date: "2026-05-21T10:00:00+05:30",
    reading_time: 5,
    author: { name: "Reinvent Digital" },
    image: { src: eyeImg, alt: "An eye examination in progress" },
    results: [
      { value: "2.6x", label: "Surgical consultations" },
      { value: "0%", label: "Added media budget" },
      { value: "-33%", label: "Cost per surgical enquiry" },
    ],
    content: `
      <p>One campaign carried everything from a routine eye test to cataract surgery. Routine searches are cheaper and far more common, so they absorbed the budget and the surgical enquiries never scaled.</p>
      <h2>What we changed</h2>
      <p>We split the account along the decision, not the specialty: routine care on its own budget and its own landing pages, surgical care on another, each measured on what it is actually for.</p>
      <ul>
        <li>Surgical pages built around recovery time, cost and surgeon credentials</li>
        <li>Routine pages built around nearest centre, timing and price</li>
        <li>Call scripts separated, so an enquiry is qualified in the first 40 seconds</li>
      </ul>
      <h2>Where it landed</h2>
      <p>Surgical consultations rose 2.6x on an unchanged media budget, and the cost per surgical enquiry fell by a third. Routine volume held steady.</p>
    `,
  },
  {
    id: "sample-hospital-one-dashboard",
    slug: "hospital-group-one-dashboard-1-9x-opd-growth",
    title: "14-department hospital group: one dashboard, 1.9x OPD growth",
    client: "Multi-speciality hospital group",
    category: "Hospital",
    excerpt:
      "Fourteen departments, fourteen spreadsheets and no shared number. One attribution backbone changed what the board could see.",
    date: "2026-03-11T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: hospitalImg, alt: "A hospital outpatient reception" },
    results: [
      { value: "1.9x", label: "OPD appointments" },
      { value: "14", label: "Departments, one view" },
      { value: "87%", label: "Enquiries matched to source" },
    ],
    content: `
      <p>Each department ran its own campaigns and reported its own numbers. Nothing reconciled, so the board reviewed fourteen versions of performance and trusted none of them.</p>
      <h2>One backbone, department-specific campaigns</h2>
      <p>The campaigns stayed separate, because cardiology and orthopaedics are not the same business. What changed is that every one of them wrote into the same attribution layer.</p>
      <ul>
        <li>A single source taxonomy applied across all fourteen departments</li>
        <li>Calls, forms and WhatsApp stamped at the point of arrival</li>
        <li>Appointments reconciled against attendance weekly, including the records that would not match</li>
      </ul>
      <h2>Where it landed</h2>
      <p>OPD appointments from marketing grew 1.9x in twelve months, and 87 per cent of enquiries could be traced to a source. The unmatched 13 per cent is reported too, because a number nobody questions is a number nobody checks.</p>
    `,
  },
];
