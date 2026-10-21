// The privacy policy, as structured content so the page stays plain markup and
// the text is easy to amend. Each section has a heading and an ordered list of
// blocks: { p } a paragraph, { sub } a subheading, { list } a bullet list.
export const PRIVACY = {
  title: "Privacy Policy",
  updated: "November 2026",
  intro: [
    "Reinvent Digital Media Pvt. Ltd. works with healthcare organisations. We handle personal data in two ways: as a business that people contact, work with and apply to, and on behalf of the clinics and hospitals whose patient enquiries we manage.",
    "This policy covers our website, reinventdigital.com, every enquiry sent to us by form, email, phone or WhatsApp, the services we provide to healthcare clients, and job applications. We handle personal data in line with the Information Technology Act, 2000, the rules made under it, and the Digital Personal Data Protection Act, 2023 as it comes into force.",
  ],
  sections: [
    {
      heading: "Who We Are?",
      body: [
        { p: "Reinvent Digital Media Pvt. Ltd. is a company registered in India. It provides marketing, enquiry handling, call-centre optimisation and reporting services to healthcare organisations. Our head office is at Khasra No. 355/1/2 and 355/2, 100 Feet Road, Ghitorni, New Delhi, Delhi 110030, and you can reach us at info@reinventdigital.com." },
      ],
    },
    {
      heading: "What Data We Collect?",
      body: [
        { p: "When you contact us, we collect the details you choose to share. This includes your name, phone number, email address, organisation, designation, city and the content of your message. If you subscribe to updates, we also keep your email address for that purpose." },
        { p: "When you visit our website, we automatically record basic technical details. These are your IP address and approximate location, your device, browser and operating system, the pages you view, how long you stay, the link that brought you to us, and the date and time of your visit. Our web servers also keep logs of these details, which we use to run the website, keep it secure and fix technical problems." },
        { p: "We do not ask for health information through our website. Please do not include medical details in an enquiry." },
      ],
    },
    {
      heading: "How We Use Your Data?",
      body: [
        { p: "We use your details to reply to your enquiry, prepare quotes and proposals, deliver the services you or your organisation contract us for, and manage invoices and payments. If you have agreed to receive them, we also send you updates and newsletters, and every email includes a link to unsubscribe." },
        { p: "Website and advertising data is used only if you accept analytics and advertising cookies, and only to understand how our site and ads perform. We also use personal data where we need it to meet our legal, tax and regulatory obligations." },
        { p: "We use your data only for the purpose it was collected for. If a new purpose arises, we will ask for your consent first." },
      ],
    },
    {
      heading: "How We Use Cookies?",
      body: [
        { p: "Cookies are small files saved on your device when you visit a website. Necessary cookies keep our website working and remember your cookie choice, so they always run. Your choice is managed through our cookie consent tool." },
        { p: "Analytics cookies, set by Google Analytics, show us how visitors use the site. Advertising cookies and tags, set by Google Ads and the Meta Pixel, measure how our ads perform and help show relevant ads on Google and Meta platforms. Google Tag Manager is used to load these tools. Analytics and advertising cookies run only if you accept them." },
        { p: "You can change your choice at any time through “Cookie settings” in the website footer, or block cookies in your browser settings." },
      ],
    },
    {
      heading: "If You Are A Healthcare Client",
      body: [
        { p: "When your clinic or hospital works with us, you decide why and how your patients’ data is used. We handle it only on your instructions and only to deliver the services you have engaged us for. For your team’s business contact and billing details, we are responsible for how that data is used." },
        { p: "Depending on the services you use, the patient data we handle can include:" },
        { list: [
          "Enquiries from your website forms and WhatsApp, with the patient’s name, phone number and the channel the enquiry came from.",
          "Missed-call records and the automatic WhatsApp replies sent in response.",
          "Recordings of enquiry calls, along with their transcripts and call scores.",
          "Whether an enquiry led to an appointment or a clinic visit.",
        ] },
        { sub: "What We Do Not Collect" },
        { p: "We do not ask for or record clinical records, diagnoses or treatment notes. If a patient mentions health details on a call, the recording and transcript are protected with the same access limits as all other patient data." },
        { sub: "Data About Your Team" },
        { p: "Call-centre optimisation also involves data about the people who answer calls, whether that is your front-desk team or our agents. This includes:" },
        { list: ["Call recordings", "Call scores and coaching notes", "Call-handling reports"] },
        { p: "These are used only to improve how enquiries are handled, and they are shared with your management team." },
        { sub: "Doctors’ Details" },
        { p: "To meet the National Medical Commission’s disclosure requirements, we handle the names, qualifications, registration status and registration numbers of the doctors named in your advertising and content. We use these details only to display them where the rules require, and only in content you have approved." },
        { sub: "Where Patient Data Is Stored" },
        { p: "Depending on how your account is set up, patient data is held in one of these places:" },
        { list: [
          "Your own CRM, which we access only while we work with you.",
          "Our own CRM, which is hosted in India.",
          "LeadConnector (GoHighLevel), which stores data in the United States.",
        ] },
        { p: "Call recordings captured through Knowlarity are stored in India. Only team members working on your account can access this data. You have full access to every recording, transcript, call score and report throughout our work together." },
        { sub: "How AI Is Used On Calls?" },
        { p: "Call recordings may be transcribed and scored using:" },
        { list: [
          "The AI features in Knowlarity, LeadConnector (GoHighLevel) and our own CRM.",
          "A third-party AI tool used for call transcription and analysis.",
        ] },
        { p: "These tools are used only to review and improve how enquiries are handled. The data they process is subject to the same access limits and retention periods described in this policy." },
        { sub: "Our Commitments To You" },
        { list: [
          "We never sell your patient data, use it to market our own services, or share it with another client.",
          "We never use any detail that could identify a patient, including names, photographs, voices or records, in case studies or in any advertising, social media or website content we create for you.",
          "We help you respond when a patient asks to access, correct or erase their data.",
          "If a data breach affects your patients’ or your team’s data, we inform you without delay.",
        ] },
        { sub: "Your Responsibilities" },
        { p: "As the organisation in control of patient data, your clinic is responsible for:" },
        { list: [
          "Telling patients how their data is used, including that calls may be recorded and reviewed with the help of AI tools.",
          "Telling your staff that their calls are recorded and scored.",
          "Letting us know promptly if a patient withdraws consent or asks for their data to be erased, so we can act on it in any system we control.",
        ] },
      ],
    },
    {
      heading: "If You Are A Patient Of One Of Our Clients",
      body: [
        { p: "If you made an enquiry with, or called, a clinic or hospital that works with us, that clinic decides how your data is used, and we handle it only on its instructions." },
        { p: "Here is what that means for you:" },
        { list: [
          "Your call may be recorded, transcribed and reviewed with the help of AI tools, so the clinic can improve how it handles enquiries.",
          "Depending on the clinic, your details may be stored in India or in the United States.",
          "Your details are used only to respond to your enquiry and to report on how the clinic’s marketing performs.",
          "We never sell your data, use it for our own marketing, or use anything that could identify you in advertising or promotional content.",
        ] },
        { p: "For any request about your data, please contact the clinic first. We will help them respond." },
      ],
    },
    {
      heading: "If You Apply For A Job With Us",
      body: [
        { p: "When you apply, we collect your contact details, your CV, education, work history, skills and any work samples you share. If you share them, we also collect your current and expected salary, notice period and availability. As your application progresses, we add notes and scores from interviews, assignments or tests, along with any references you provide." },
        { p: "These details come from you directly, from job portals you apply through, such as Naukri, LinkedIn and Indeed, or from someone who refers you. Please do not send identity documents, bank details or health information when you apply. If we need these after making an offer, we will ask you directly." },
        { p: "Your application is used only to assess you for the role, keep you informed about interviews and the outcome, and make and manage a job offer. Only the people involved in hiring can see it. If we carry out reference or background checks, we will tell you first and ask for your consent." },
      ],
    },
    {
      heading: "Who We Share Data With?",
      body: [
        { p: "We do not sell personal data. We share it only with service providers who help us run our website and services, and each receives only what it needs. These providers are:" },
        { list: [
          "Vercel, to host our website, along with our website content management system and cookie consent tool.",
          "Google Tag Manager, Google Analytics and Google Ads, to load website tags, understand website use and measure our advertising.",
          "Meta Pixel, to measure our advertising on Facebook and Instagram.",
          "Google Workspace, for our email.",
          "LeadConnector (GoHighLevel), to receive website enquiries, manage leads, run client automations and support call transcription and scoring.",
          "WhatsApp Business Platform, provided by Meta, to send and receive WhatsApp messages.",
          "Knowlarity, to track, record and transcribe enquiry calls.",
          "A third-party AI tool, for call transcription and analysis.",
          "Naukri, LinkedIn, Indeed and other job portals, to receive and manage job applications.",
          "An email marketing service provider, to send updates to people who have subscribed.",
        ] },
        { p: "These providers may use the data only to provide their service to us, and they are required to protect it." },
        { p: "We may also share data with our lawyers, auditors and accountants, and with government, regulatory or law enforcement authorities where the law requires it. If our business is ever merged, acquired or sold, data may pass to the buyer or successor and will remain protected under this policy." },
      ],
    },
    {
      heading: "Data Stored Outside India",
      body: [
        { p: "Some of our service providers store or process data outside India. LeadConnector (GoHighLevel) and Vercel store data in the United States. Google, including Google Workspace, and Meta process data on servers in several countries, and LinkedIn and Indeed also process data outside India." },
        { p: "When data is transferred abroad, we share only what the service needs, and we do not transfer it to any country restricted by the Government of India. Patient data held in our own CRM and call recordings held in Knowlarity are stored in India." },
      ],
    },
    {
      heading: "How Long We Keep Data?",
      body: [
        { p: "We keep personal data only for as long as we need it for the purpose it was collected for, or for as long as the law requires." },
        { p: "Website enquiries are kept until the enquiry is resolved, plus a reasonable period for follow-up, unless you ask us to delete them sooner. Newsletter details are kept until you unsubscribe. Client contract and billing records are kept for the length of the contract, plus the period required under Indian tax and company law." },
        { p: "Call recordings, transcripts and call scores are kept for up to 12 months from the date of the call, then handed to the clinic and deleted from our systems. Patient data in our own CRM or in LeadConnector (GoHighLevel) is kept for the length of our engagement with the clinic, then returned to the clinic and deleted. Where patient data sits in a clinic’s own CRM, the clinic’s retention policy applies, and our access ends when the engagement ends." },
        { p: "Job applications are kept only until the hiring process for that role ends, and are then deleted. If you join us, your application becomes part of your employee record." },
      ],
    },
    {
      heading: "Your Rights",
      body: [
        { p: "You have the right to:" },
        { list: [
          "Get a summary of the personal data we hold about you and how we use it.",
          "Correct, complete or update data that is inaccurate or out of date.",
          "Ask us to erase your data, unless the law requires us to keep it.",
          "Withdraw your consent at any time. This does not affect anything we did before you withdrew it.",
          "Nominate someone to exercise these rights for you if you die or become unable to act.",
          "Have your concern addressed by our grievance officer.",
          "Complain to the Data Protection Board of India if our response does not resolve your concern.",
        ] },
        { p: "To make a request, email info@reinventdigital.com with “Data Request” in the subject line. We may ask you to confirm your identity before we act. If you are a patient of one of our clients, please contact the clinic first." },
      ],
    },
    {
      heading: "Children’s Data",
      body: [
        { p: "Our website and services are for businesses and are not meant for anyone under 18. We do not knowingly collect data from children, and if we find we have, we delete it. Where a clinic’s patient data relates to a minor, the clinic is responsible for getting consent from a parent or guardian." },
      ],
    },
    {
      heading: "How We Protect Your Data?",
      body: [
        { p: "Access to personal data is limited to the team members who need it for their work. Our systems use encrypted connections and role-based access controls, and our service providers are required by contract to protect the data they handle for us." },
        { p: "No method of storing or sending data is completely secure. If a data breach affects your personal data, we will inform you and the Data Protection Board of India as the law requires. If it involves a clinic’s patient data, we will inform the clinic without delay." },
      ],
    },
    {
      heading: "Links To Other Websites",
      body: [
        { p: "Our website may link to other websites. We are not responsible for their content or how they handle personal data, so please read their privacy policies before sharing any information with them." },
      ],
    },
    {
      heading: "Changes To This Policy",
      body: [
        { p: "We update this policy when our services, tools or legal obligations change. The “Last updated” date at the top shows the current version. For significant changes, we also place a notice on our website." },
      ],
    },
    {
      heading: "Contact Our Grievance Officer",
      body: [
        { p: "For any question, request or complaint about your personal data, contact our grievance officer at info@reinventdigital.com. You can also write to Reinvent Digital Media Pvt. Ltd., Khasra No. 355/1/2 and 355/2, 100 Feet Road, Ghitorni, New Delhi, Delhi 110030." },
        { p: "We will acknowledge your grievance promptly and resolve it within one month of receiving it." },
      ],
    },
  ],
};
