// Case studies.
//
// These are used while VITE_BLOG_API_URL is unset or the /case-studies/
// endpoint is not yet live; once the real feed answers these are never read.
// The matching CMS payloads live in docs/api/examples/case-study-*.json.
import dentalImg from "../assets/cards/industry-dental.jpg";
import hospitalImg from "../assets/cards/industry-hospital.jpg";

export const SAMPLE_CASE_STUDIES = [
  {
    id: "cs-ailbs",
    slug: "ailbs-liver-transplant-94-percent-more-conversions",
    title: "94% More Site Conversions in Six Months for AILBS",
    client: "AILBS — Dr. Vivek Vij's liver transplant practice",
    category: "Liver Transplant Care",
    excerpt:
      "How we built a digital presence from the ground up for a liver transplant practice, bringing in national and international patient enquiries.",
    date: "2026-10-10T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: hospitalImg, alt: "A hospital outpatient reception" },
    results: [
      { value: "94%", label: "More site conversions in six months" },
      { value: "110%", label: "Month-on-month site traffic growth" },
      { value: "4", label: "Social channels built from scratch" },
      { value: "85%", label: "Of traffic arriving on mobile" },
    ],
    content: `
      <p>Industry: Liver Transplantation &amp; Hepatobiliary Sciences · Location: Delhi NCR &amp; Chandigarh · Timeframe: Six months.</p>
      <h2>About the client</h2>
      <p>Dr. Vivek Vij is a liver transplant surgeon and Director of the Department of Liver Transplantation &amp; Gastrointestinal Surgery at Fortis Healthcare, across Fortis Escorts, FMRI, Fortis Noida and Fortis Chandigarh. He founded AILBS, the Advanced Institute of Liver &amp; Biliary Sciences, within the Fortis group of hospitals.</p>
      <h2>The challenge</h2>
      <p>Despite years of clinical experience, the practice had almost no presence online.</p>
      <ul>
        <li><strong>No digital presence:</strong> without a website or social channels, the practice couldn't reach patients beyond existing referrals.</li>
        <li><strong>A need for quality enquiries:</strong> Dr. Vij wanted serious patient enquiries from across India and from abroad.</li>
        <li><strong>Too little content to rank:</strong> the website didn't have enough useful content to appear for important liver care searches.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We built the practice's digital presence in three layers. First, visibility: a mobile-first website, search optimisation and a strong Google listing. Next, trust: educational content on liver health and treatment. Finally, enquiries: lead-generation campaigns reaching patients in India and overseas.</p>
      <h2>What we did</h2>
      <h3>01 · SEO and content</h3>
      <p>Keyword research at local and national level, optimised treatment pages and regular blogs on liver care, so the site ranked for the searches patients actually make.</p>
      <h3>02 · Google Maps listing</h3>
      <p>A complete Google Business Profile with accurate details, weekly photos and videos, and two posts every week to keep the listing active and visible.</p>
      <h3>03 · Mobile-first website</h3>
      <p>Clear navigation across every page and well-placed calls to action, built for patients browsing on their phones.</p>
      <h3>04 · International lead-generation ads</h3>
      <p>Campaigns targeting patients in India and abroad, designed to bring quality enquiries rather than high volumes of unqualified leads.</p>
      <h3>05 · Social media management</h3>
      <p>Facebook, Instagram, Twitter and LinkedIn channels built from scratch, sharing liver care awareness, healthy living tips and short video explainers.</p>
      <p><strong>Services used:</strong> SEO · Google Maps &amp; Local SEO · Website Development · PPC Management · Social Media Marketing.</p>
      <h2>Results by channel</h2>
      <h3>Search</h3>
      <ul>
        <li><strong>223%</strong> — more organic clicks</li>
        <li><strong>467%</strong> — more search impressions</li>
        <li><strong>170%</strong> — more traffic, with all target keywords in average position</li>
        <li><strong>87%</strong> — more traffic from new users</li>
      </ul>
      <h3>Social media</h3>
      <ul>
        <li><strong>503%</strong> — Instagram engagement growth</li>
        <li><strong>422%</strong> — Facebook engagement growth</li>
        <li><strong>227%</strong> — Twitter engagement growth</li>
        <li><strong>162%</strong> — LinkedIn engagement growth</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>Clear cost information drives demand</h3>
      <p>Pages explaining the cost of liver transplants in India saw some of the strongest growth. Patients facing major surgery want honest, upfront information before they enquire.</p>
      <h3>Mobile comes first</h3>
      <p>With most traffic arriving on mobile, a fast, simple mobile experience was essential, not optional.</p>
      <h3>A consistent listing keeps working</h3>
      <p>Weekly posts, photos and videos kept the Google listing fresh, supporting steady search visibility and calls.</p>
    `,
  },
  {
    id: "cs-psri",
    slug: "psri-hospital-1000-leads-three-months",
    title: "1,000+ Leads in Three Months for PSRI Hospital",
    client: "PSRI Hospital, Delhi",
    category: "Multi-Speciality Hospital",
    excerpt:
      "How we helped a Delhi multi-speciality hospital attract national and international patients for specialised treatment, through focused search campaigns and SEO.",
    date: "2026-09-22T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: hospitalImg, alt: "A hospital outpatient reception" },
    results: [
      { value: "300%", label: "More leads" },
      { value: "200%", label: "More website traffic" },
      { value: "120%", label: "Better search rankings" },
      { value: "250%", label: "More leads and calls" },
    ],
    content: `
      <p>Industry: Multi-speciality hospital · Location: Delhi · Timeframe: First three months of the campaign.</p>
      <h2>About the client</h2>
      <p>PSRI Hospital is a multi-speciality hospital in Delhi. It treats patients from across NCR, other parts of India and overseas who travel for specialised care.</p>
      <h2>The challenge</h2>
      <ul>
        <li><strong>Reaching international patients:</strong> the hospital wanted more patients from abroad for super-speciality treatment.</li>
        <li><strong>Building organic presence:</strong> its search visibility was too limited to bring steady enquiries.</li>
        <li><strong>Generating quality enquiries:</strong> it needed serious enquiries from India and overseas, not just more traffic.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We focused on two channels: Google Ads for fast, targeted enquiries, and SEO for lasting visibility. Every treatment got its own landing page, and every campaign was judged on lead quality, not volume.</p>
      <h2>What we did</h2>
      <h3>01 · Treatment-specific search campaigns</h3>
      <p>Keyword-specific ad copy for organ transplant and other specialised treatments, raising the average keyword Quality Score to 8.</p>
      <h3>02 · Mobile-first landing pages</h3>
      <p>A dedicated landing page for each treatment, covering the hospital, its doctors, infrastructure and facilities.</p>
      <h3>03 · On-page SEO and UX</h3>
      <p>Treatment-based keyword groups, stronger on-page SEO and UI changes that made the site easier to use.</p>
      <h3>04 · Google Business Profile</h3>
      <p>A well-drafted listing for better local presence, updated with fresh images and content every week.</p>
      <h3>05 · In-content enquiry forms and FAQs</h3>
      <p>Enquiry boxes placed within treatment pages, plus FAQ sections with schema to answer common patient questions.</p>
      <p><strong>Services used:</strong> Google Ads Management · SEO · Google Maps &amp; Local SEO · Landing Page Design.</p>
      <h2>Results by channel</h2>
      <h3>Paid search</h3>
      <ul>
        <li><strong>1,000+</strong> — leads in the first three months</li>
        <li><strong>20%</strong> — lower cost per lead, month on month</li>
        <li><strong>43%</strong> — higher click-through rate</li>
        <li><strong>120%</strong> — better lead quality</li>
      </ul>
      <h3>SEO and website</h3>
      <ul>
        <li><strong>150%</strong> — stronger organic presence from the first month</li>
        <li><strong>40%</strong> — more organic traffic</li>
        <li><strong>23%</strong> — more leads from treatment pages</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>Every treatment needs its own page</h3>
      <p>Dedicated landing pages for each treatment improved lead quality, because patients found exactly the information they were looking for.</p>
      <h3>Relevance lowers cost</h3>
      <p>Keyword-specific ads raised Quality Scores, which brought higher click-through rates and a falling cost per lead.</p>
      <h3>Make enquiring easy</h3>
      <p>Placing enquiry forms inside treatment pages captured patients at the moment they were most interested.</p>
    `,
  },
  {
    id: "cs-national-dental-care",
    slug: "national-dental-care-220-percent-more-leads",
    title: "220% More Leads Across Hyderabad and Bengaluru",
    client: "National Dental Care",
    category: "Multi-Location Dental Network",
    excerpt:
      "How we helped National Dental Care grow enquiries, local visibility and brand recognition across its clinic network.",
    date: "2026-09-05T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: dentalImg, alt: "A dental clinic reception during morning hours" },
    results: [
      { value: "220%", label: "More leads" },
      { value: "326%", label: "Organic traffic growth" },
      { value: "10M+", label: "People reached with video ads" },
      { value: "2,000+", label: "Local keywords targeted" },
    ],
    content: `
      <p>Industry: Dental clinic network · Location: Hyderabad &amp; Bengaluru · Timeframe: During our engagement.</p>
      <h2>About the client</h2>
      <p>National Dental Care is a network of dental clinics across Hyderabad, including Madinaguda, Kukatpally, Dilsukhnagar and Gachibowli, and Bengaluru, including HSR Layout, Whitefield and Sarjapur. It offers general, advanced and cosmetic dental treatments.</p>
      <h2>The challenge</h2>
      <ul>
        <li><strong>Low clinic footfall:</strong> the clinics needed more enquiries and patient visits.</li>
        <li><strong>Limited brand recognition:</strong> the network was not yet well known in Telangana and Bengaluru.</li>
        <li><strong>Low oral health awareness:</strong> patients didn't understand the link between oral health and overall health.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We combined local search, performance campaigns and education. Each clinic was optimised to win its own neighbourhood, campaigns targeted high-value treatments, and social content built awareness of oral health.</p>
      <h2>What we did</h2>
      <h3>01 · Google Maps for every clinic</h3>
      <p>Business Profiles optimised for each location, with accurate name, address and phone details and weekly monitoring.</p>
      <h3>02 · Location-specific SEO</h3>
      <p>City and treatment pages built for each locality, competing with directories like Practo for local searches.</p>
      <h3>03 · Performance campaigns</h3>
      <p>Mobile-first landing pages, strong calls to action and detailed tracking, with ad copy designed to beat local competitors.</p>
      <h3>04 · Treatment awareness video ads</h3>
      <p>Short video ads promoting aligners, dental implants and braces to a large audience.</p>
      <h3>05 · Social media management</h3>
      <p>Educational posts linking oral health and overall health, alongside timely moment-marketing content.</p>
      <p><strong>Services used:</strong> SEO · Google Maps &amp; Local SEO · Google Ads Management · Video Advertising · Social Media Marketing.</p>
      <h2>Results by channel</h2>
      <h3>SEO</h3>
      <ul>
        <li><strong>2,286%</strong> — more organic clicks</li>
        <li><strong>297%</strong> — more organic impressions</li>
        <li><strong>131%</strong> — more top-10 keyword rankings</li>
      </ul>
      <h3>Paid campaigns</h3>
      <ul>
        <li><strong>70%</strong> — better lead quality</li>
        <li><strong>42%</strong> — lower cost per lead</li>
        <li><strong>45%</strong> — lower cost per click</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>Every clinic competes locally</h3>
      <p>Each location needed its own listing, keywords and page to win searches in its neighbourhood.</p>
      <h3>Branded searches follow expansion</h3>
      <p>Searches for "National Dental Care" plus a locality rose sharply as the network grew into Bengaluru.</p>
      <h3>Video builds demand for advanced treatments</h3>
      <p>Short video ads made patients aware of aligners and implants before they started searching.</p>
    `,
  },
  {
    id: "cs-elite-dental",
    slug: "elite-dental-studio-232-percent-organic-growth",
    title: "232% Organic Traffic Growth in One Year for Elite Dental Studio",
    client: "Elite Dental Studio, Kerala",
    category: "Kerala Dental Chain",
    excerpt:
      "How we helped a Kerala dental chain grow visibility, enquiries and brand recognition across three cities.",
    date: "2026-08-18T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: dentalImg, alt: "A dental clinic reception during morning hours" },
    results: [
      { value: "232%", label: "Organic traffic growth in one year" },
      { value: "520%", label: "More leads from awareness campaigns" },
      { value: "63%", label: "Lower cost per lead in those campaigns" },
      { value: "3", label: "Cities served: Calicut, Kochi, Kannur" },
    ],
    content: `
      <p>Industry: Dental clinic chain · Location: Calicut, Kochi &amp; Kannur · Timeframe: One year (organic traffic).</p>
      <h2>About the client</h2>
      <p>Elite Dental Studio is a chain of dental clinics in Calicut, Kochi and Kannur. It draws patients from across Kerala for advanced dental treatments.</p>
      <h2>The challenge</h2>
      <ul>
        <li><strong>A gap in clinic visits:</strong> the clinics had more capacity than patients, and needed more enquiries and appointments.</li>
        <li><strong>Low brand recognition:</strong> despite a strong presence across Kerala, few potential patients knew the brand.</li>
        <li><strong>Low oral health awareness:</strong> patients needed to understand how oral health affects overall wellbeing.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We built local search visibility in all three cities first, then added campaigns. Search ads captured patients already looking for a dentist, while video campaigns created demand for advanced treatments.</p>
      <h2>What we did</h2>
      <h3>01 · Local SEO and Google Maps</h3>
      <p>Targeted keywords and optimised Business Profiles for Calicut, Kochi and Kannur, helping the brand stand out locally.</p>
      <h3>02 · Listing management</h3>
      <p>Consistent name, address and phone details across every listing, with weekly audits of user-suggested changes.</p>
      <h3>03 · Content optimisation</h3>
      <p>City and treatment pages refined for dental implants and root canal treatment, competing with directories like Practo.</p>
      <h3>04 · Search campaigns</h3>
      <p>Engaging ad copy with callouts and extensions, plus mobile-first landing pages with clear calls to action.</p>
      <h3>05 · Treatment awareness video ads</h3>
      <p>Short video ads promoting aligners, dental implants and braces, reaching millions of viewers.</p>
      <p><strong>Services used:</strong> SEO · Google Maps &amp; Local SEO · Google Ads Management · Video Advertising · Landing Page Design.</p>
      <h2>Results by channel</h2>
      <h3>SEO</h3>
      <ul>
        <li><strong>150%</strong> — more top-10 keyword rankings</li>
        <li><strong>365%</strong> — more organic impressions</li>
        <li><strong>212%</strong> — more organic clicks</li>
      </ul>
      <h3>Search campaigns</h3>
      <ul>
        <li><strong>30%</strong> — more leads</li>
        <li><strong>46%</strong> — better lead quality</li>
        <li><strong>28%</strong> — lower cost per click</li>
        <li><strong>15%</strong> — lower cost per lead</li>
      </ul>
      <h3>Treatment awareness campaigns</h3>
      <ul>
        <li><strong>47%</strong> — better lead quality</li>
        <li><strong>42%</strong> — lower cost per click</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>Awareness can outperform search</h3>
      <p>In a competitive local market, treatment awareness campaigns delivered far stronger lead growth than search ads alone.</p>
      <h3>Local content beats directories</h3>
      <p>City-specific treatment pages helped the clinics compete with large directories for local searches.</p>
      <h3>Accurate listings need regular checks</h3>
      <p>Weekly audits kept every listing accurate, protecting local visibility across all three cities.</p>
    `,
  },
  {
    id: "cs-radiant-dental",
    slug: "radiant-dental-care-271-percent-more-conversions",
    title: "271% More Site Conversions in Six Months for Radiant Dental Care",
    client: "Radiant Dental Care, Chennai",
    category: "Chennai Dental Clinic",
    excerpt:
      "How we helped a Chennai dental clinic grow enquiries, visibility and patient visits across its locations.",
    date: "2026-07-30T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: dentalImg, alt: "A dental clinic reception during morning hours" },
    results: [
      { value: "271%", label: "More site conversions in six months" },
      { value: "387%", label: "More traffic from new users" },
      { value: "177%", label: "Higher monthly click-through rate" },
      { value: "5", label: "Chennai localities targeted" },
    ],
    content: `
      <p>Industry: Dental clinic · Location: Chennai · Timeframe: Six months (conversions).</p>
      <h2>About the client</h2>
      <p>Radiant Dental Care is a dental clinic in Chennai offering everything from preventive care to cosmetic and restorative procedures, across locations including Tambaram East, Chrompet and the OMR corridor.</p>
      <h2>The challenge</h2>
      <ul>
        <li><strong>Increasing clinic footfall:</strong> the clinic needed more enquiries and visits across its Chennai locations.</li>
        <li><strong>Standing out:</strong> the brand needed more visibility in a highly competitive market.</li>
        <li><strong>Educating patients:</strong> patients needed to understand how oral health affects overall wellbeing.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We targeted the specific Chennai localities each clinic served, then supported local search with campaigns, landing pages and educational social content.</p>
      <h2>What we did</h2>
      <h3>01 · Locality-based SEO and Google Maps</h3>
      <p>Business Profiles and local keywords for Tambaram East, Chrompet, Navalur, Medavakkam and Perungudi.</p>
      <h3>02 · Listing management</h3>
      <p>Accurate name, address and phone details across every listing, with regular monitoring and updates.</p>
      <h3>03 · Content and FAQ optimisation</h3>
      <p>City and treatment pages updated to compete with directories, with FAQ sections and schema answering common patient questions.</p>
      <h3>04 · Performance campaigns</h3>
      <p>Ad copy with callouts and extensions, mobile-optimised landing pages and short video ads for advanced treatments.</p>
      <h3>05 · Social media management</h3>
      <p>Educational content on oral health, plus moment-marketing posts encouraging regular dental check-ups.</p>
      <p><strong>Services used:</strong> SEO · Google Maps &amp; Local SEO · Google Ads Management · Video Advertising · Social Media Marketing.</p>
      <h2>Results by channel</h2>
      <h3>SEO</h3>
      <ul>
        <li><strong>87%</strong> — more organic impressions</li>
        <li><strong>81%</strong> — more top-10 keyword rankings</li>
        <li><strong>82%</strong> — more organic clicks</li>
      </ul>
      <h3>Paid campaigns</h3>
      <ul>
        <li><strong>32%</strong> — more leads</li>
        <li><strong>45%</strong> — better lead quality</li>
        <li><strong>24%</strong> — lower cost per lead</li>
        <li><strong>29%</strong> — lower cost per click</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>Target the locality, not just the city</h3>
      <p>Focusing on specific areas like Tambaram and the OMR corridor helped each clinic win searches in its own neighbourhood.</p>
      <h3>Answer questions before patients call</h3>
      <p>FAQ sections on treatment pages helped patients find answers early and widened organic reach.</p>
      <h3>Video explains complex treatments</h3>
      <p>Short videos made treatments like aligners and implants easier for patients to understand.</p>
    `,
  },
  {
    id: "cs-oracare-prime",
    slug: "oracare-prime-100-percent-more-conversions",
    title: "100% More Site Conversions for Oracare Prime",
    client: "Oracare Prime, Mumbai",
    category: "Mumbai Dental Clinic",
    excerpt:
      "How we helped a single dental clinic in Ghatkopar East, Mumbai, stand out in one of India's most competitive dental markets.",
    date: "2026-07-12T10:00:00+05:30",
    reading_time: 5,
    author: { name: "Reinvent Digital" },
    image: { src: dentalImg, alt: "A dental clinic reception during morning hours" },
    results: [
      { value: "100%", label: "More site conversions" },
      { value: "82%", label: "More traffic from new users" },
      { value: "11%", label: "Higher site click-through rate" },
    ],
    content: `
      <p>Industry: Dental clinic · Location: Ghatkopar East, Mumbai · Timeframe: During our engagement.</p>
      <h2>About the client</h2>
      <p>Oracare Prime is a dental clinic in Manratna Business Park, Ghatkopar East, Mumbai, offering modern dental treatments with a personalised approach.</p>
      <h2>The challenge</h2>
      <ul>
        <li><strong>Limited clinic footfall:</strong> the clinic needed more enquiries and patient visits.</li>
        <li><strong>Limited brand awareness:</strong> it needed more visibility in Mumbai's crowded dental market.</li>
        <li><strong>Low oral health awareness:</strong> patients needed to understand the link between oral health and overall wellbeing.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We focused on winning the clinic's own neighbourhood. Hyperlocal SEO made the clinic visible to nearby patients, while campaigns targeted high-intent treatment searches with tight tracking.</p>
      <h2>What we did</h2>
      <h3>01 · Hyperlocal SEO and Google Maps</h3>
      <p>An optimised Business Profile and keywords focused on Ghatkopar East, so nearby patients could find the clinic easily.</p>
      <h3>02 · Listing management</h3>
      <p>Accurate name, address and phone details, with weekly updates and monitoring of user-suggested changes.</p>
      <h3>03 · Treatment content</h3>
      <p>Location and treatment pages built around high-intent searches for implants, aligners and root canal treatment.</p>
      <h3>04 · Performance campaigns</h3>
      <p>Ad copy with callouts and extensions, mobile-optimised landing pages and detailed conversion tracking.</p>
      <h3>05 · Video and social media</h3>
      <p>Short video ads for advanced treatments, plus educational and moment-marketing social content.</p>
      <p><strong>Services used:</strong> SEO · Google Maps &amp; Local SEO · Google Ads Management · Video Advertising · Social Media Marketing.</p>
      <h2>Results by channel</h2>
      <h3>SEO</h3>
      <ul>
        <li><strong>150%</strong> — more organic clicks</li>
        <li><strong>58%</strong> — more top-10 keyword rankings</li>
        <li><strong>30%</strong> — more organic impressions</li>
        <li><strong>15%</strong> — more organic traffic</li>
      </ul>
      <h3>Paid campaigns</h3>
      <ul>
        <li><strong>209%</strong> — more leads</li>
        <li><strong>65%</strong> — better lead quality</li>
        <li><strong>60%</strong> — lower cost per lead</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>One clinic can win its neighbourhood</h3>
      <p>Hyperlocal targeting helped a single clinic compete in a city full of larger practices.</p>
      <h3>Intent beats volume</h3>
      <p>Targeting high-intent treatment searches improved lead quality while cutting cost per lead.</p>
      <h3>Tracking makes savings possible</h3>
      <p>Detailed tracking showed which ads delivered, so budget moved away from those that didn't.</p>
    `,
  },
  {
    id: "cs-partha-dental",
    slug: "partha-dental-333-percent-more-leads",
    title: "333% More Leads Across 125+ Partha Dental Clinics",
    client: "Partha Dental, Skin & Hair Clinics",
    category: "Multi-Speciality Clinic Chain",
    excerpt:
      "How we helped a South Indian dental, skin and hair clinic chain grow enquiries across four states, while bringing down the cost of every lead.",
    date: "2026-06-24T10:00:00+05:30",
    reading_time: 6,
    author: { name: "Reinvent Digital" },
    image: { src: dentalImg, alt: "A dental clinic reception during morning hours" },
    results: [
      { value: "333%", label: "More leads" },
      { value: "125+", label: "Clinics supported" },
      { value: "4", label: "States covered" },
      { value: "3", label: "Specialities: dental, skin, hair" },
    ],
    content: `
      <p>Industry: Dental, skin &amp; hair clinic chain · Location: Telangana, Andhra Pradesh, Karnataka &amp; Tamil Nadu · Timeframe: During our engagement.</p>
      <h2>About the client</h2>
      <p>Partha Dental, Skin &amp; Hair Clinics is a healthcare chain with over 125 clinics across Telangana, Andhra Pradesh, Karnataka and Tamil Nadu. It offers dental, skin and hair treatments in cities including Hyderabad, Bangalore and Chennai.</p>
      <h2>The challenge</h2>
      <ul>
        <li><strong>Increasing clinic footfall:</strong> the chain needed more enquiries and visits across its clinics in South India.</li>
        <li><strong>Standing out in big cities:</strong> competition in Hyderabad, Bangalore and Chennai made it hard to be noticed.</li>
        <li><strong>Educating patients:</strong> patients needed to understand how oral, skin and hair health affect overall wellbeing.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We focused on performance campaigns built for local and regional competition. Search ads captured patients ready to book, video ads built demand for advanced treatments, and mobile-first landing pages turned interest into enquiries.</p>
      <h2>What we did</h2>
      <h3>01 · Performance search campaigns</h3>
      <p>Ad copy with callouts and extensions for dental, skin and hair treatments, designed to rank prominently in key cities.</p>
      <h3>02 · Treatment awareness video ads</h3>
      <p>Targeted video ads for aligners, dental implants, laser skin treatments and hair restoration, reaching millions of potential patients.</p>
      <h3>03 · Mobile-first landing pages</h3>
      <p>Treatment-specific pages with clear calls to action and detailed tracking, making enquiries and bookings simple.</p>
      <h3>04 · Social media management</h3>
      <p>Educational content on oral, skin and hair health, plus moment-marketing posts around trending topics and regional events.</p>
      <h3>05 · Brand positioning</h3>
      <p>Campaigns that highlighted advanced technology and patient-focused care, building trust and encouraging clinic visits.</p>
      <p><strong>Services used:</strong> Google Ads Management · Video Advertising · Landing Page Design · Social Media Marketing.</p>
      <h2>Results by channel</h2>
      <h3>Paid campaigns</h3>
      <ul>
        <li><strong>44%</strong> — higher click-through rate</li>
        <li><strong>41.5%</strong> — better lead quality</li>
        <li><strong>45%</strong> — lower cost per lead</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>Large networks need local campaigns</h3>
      <p>With more than 125 clinics, campaigns had to compete city by city rather than run as one national campaign.</p>
      <h3>Video creates demand for advanced treatments</h3>
      <p>Short video ads introduced patients to aligners, laser treatments and hair restoration before they began searching.</p>
      <h3>Landing pages decide lead quality</h3>
      <p>Treatment-specific pages with clear calls to action improved lead quality while lowering cost per lead.</p>
    `,
  },
  {
    id: "cs-urgentdent",
    slug: "urgentdent-111-conversions-organic-search",
    title: "111 Site Conversions From Organic Search Alone",
    client: "UrgentDent, Northwest Indiana, USA",
    category: "Emergency Dental Care, USA",
    excerpt:
      "How we grew UrgentDent's visibility and enquiries in Northwest Indiana, without paid ads or social media campaigns.",
    date: "2026-06-06T10:00:00+05:30",
    reading_time: 5,
    author: { name: "Reinvent Digital" },
    image: { src: dentalImg, alt: "A dental clinic reception during morning hours" },
    results: [
      { value: "111", label: "Total site conversions" },
      { value: "195%", label: "More traffic from new users" },
      { value: "17%", label: "Higher site click-through rate" },
      { value: "0", label: "Paid ads used" },
    ],
    content: `
      <p>Industry: Emergency &amp; family dentistry · Location: Northwest Indiana, USA · Timeframe: During our engagement.</p>
      <h2>About the client</h2>
      <p>UrgentDent is an emergency dental provider in Northwest Indiana, offering family, general and cosmetic dentistry for over 15 years. Its multilingual team offers extended hours and accepts major insurance plans.</p>
      <h2>The challenge</h2>
      <ul>
        <li><strong>Increasing clinic visits:</strong> the practice needed more enquiries and appointments.</li>
        <li><strong>Building local recognition:</strong> it needed stronger brand presence across Northwest Indiana.</li>
        <li><strong>Educating patients:</strong> patients needed to understand how oral health affects overall wellbeing.</li>
      </ul>
      <h2>Our approach</h2>
      <p>We relied entirely on organic search. Local SEO, Google Maps and content optimisation were designed to capture patients searching for urgent and everyday dental care.</p>
      <h2>What we did</h2>
      <h3>01 · Local SEO and Google Maps</h3>
      <p>Business Profiles optimised for each location, targeting high-traffic local keywords across Northwest Indiana.</p>
      <h3>02 · Listing management</h3>
      <p>Accurate name, address and phone details, with weekly monitoring of user-suggested changes.</p>
      <h3>03 · Emergency dental content</h3>
      <p>Treatment pages refined for emergency care, cosmetic dentistry and check-ups, with FAQ sections and schema.</p>
      <h3>04 · Mobile landing pages and CTAs</h3>
      <p>Clear calls to action on treatment pages, making it easy to schedule appointments or contact the team.</p>
      <p><strong>Services used:</strong> SEO · Google Maps &amp; Local SEO · Website Optimisation.</p>
      <h2>Results by channel</h2>
      <h3>SEO</h3>
      <ul>
        <li><strong>133%</strong> — more organic traffic</li>
        <li><strong>27%</strong> — more top-10 keyword rankings</li>
        <li><strong>26%</strong> — more organic impressions</li>
        <li><strong>11%</strong> — more organic clicks</li>
      </ul>
      <h2>Key learnings</h2>
      <h3>SEO alone can drive conversions</h3>
      <p>Without any paid ads, organic search and Google Maps delivered steady site conversions.</p>
      <h3>Urgent searches need clear answers</h3>
      <p>Content built around emergency dental care matched what patients search for when they need help quickly.</p>
      <h3>Make booking effortless</h3>
      <p>Simple, visible calls to action on mobile turned visitors into appointment requests.</p>
    `,
  },
];
