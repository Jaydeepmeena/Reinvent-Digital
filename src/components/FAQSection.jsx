import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

const CONTACT_EMAIL = "hello@reinventdigital.com";

const GROUPS = ["General", "Channels & systems", "Setup & reporting"];

const FAQS = [
  {
    group: "General",
    q: "What does Reinvent Digital do?",
    a: "We build patient acquisition systems for healthcare organisations. That means connecting demand generation, CRM, telephony, messaging and clinic data so teams can improve booking conversion and measure which channels create patient visits.",
  },
  {
    group: "General",
    q: "How is this different from a lead generation agency?",
    a: "Most agencies stop at the lead and hand over a report. We own the full journey — response, call quality, booking and walk-in — and we're measured on booked patients, not lead volume.",
  },
  {
    group: "General",
    q: "Who is this system best for?",
    a: "Dental groups, fertility and IVF networks, eye care chains and multi-speciality hospitals with more than one location — where disconnected channel reporting is already costing you bookings.",
  },
  {
    group: "Channels & systems",
    q: "Which marketing channels do you manage?",
    a: "Google Ads, Meta Ads, ChatGPT & AI ads, SEO, AEO & GEO, Google Business Profile & local SEO, YouTube, social media and marketing automation — tailored to where your patients actually search.",
  },
  {
    group: "Channels & systems",
    q: "Can you work with our existing CRM and call centre?",
    a: "Yes. We integrate with the CRM and telephony you already run, or set one up if you don't have one — rather than asking you to rebuild your stack around us.",
  },
  {
    group: "Channels & systems",
    q: "How do you help teams respond in under 60 seconds?",
    a: "We plan call centre coverage against your actual enquiry patterns, auto-route to available agents, escalate missed SLAs and coach agents against a consistent booking rubric.",
  },
  {
    group: "Setup & reporting",
    q: "How long does setup take?",
    a: "Campaigns typically launch within 48 hours. CRM and call-routing integration usually takes 1–2 weeks depending on your existing systems and locations.",
  },
  {
    group: "Setup & reporting",
    q: "How do you track bookings and walk-ins?",
    a: "Every call, form and WhatsApp enquiry enters with a source. Bookings are measured in the CRM, and walk-ins are reconciled with your clinic's PMS or attendance data when access is available.",
  },
];

function FAQItem({ q, a, n, isOpen, onClick, id }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen ? "border-ink/15 bg-cream" : "border-ink/10 bg-cream/50 hover:border-ink/25"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          className="group flex w-full items-center gap-4 p-5 text-left"
        >
          <span className="text-[13px] font-bold tabular-nums text-ink-soft">{n}</span>
          <span className="flex-1 text-[15px] font-bold text-ink transition-colors group-hover:text-green-deep sm:text-base">
            {q}
          </span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen ? "rotate-45 border-lime bg-lime text-ink" : "border-ink/15 text-ink group-hover:border-ink"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pl-[3.25rem] pr-12 text-[15px] leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [group, setGroup] = useState(GROUPS[0]);
  const [openIndex, setOpenIndex] = useState(0);
  const shown = FAQS.filter((item) => item.group === group);

  // No backend on this site yet, so the form hands off to the same inbox the rest of the site uses.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const subject = encodeURIComponent(name ? `Enquiry from ${name}` : "Enquiry from the website");
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full border-b border-cream/15 bg-transparent py-3 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-lime";

  return (
    <section id="faq" className="section-y border-y border-ink/[0.06] bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Left: enquiry card */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="rounded-[1.75rem] bg-ink p-7 text-cream sm:p-9">
            <p className="flex items-center gap-2 text-[13px] text-cream/60">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Response time: within one business day
            </p>
            <h3 className="mt-4 text-xl font-bold sm:text-2xl">Tell us about your clinic</h3>

            <form onSubmit={handleSubmit} className="mt-7">
              <label className="sr-only" htmlFor="faq-name">
                Full name
              </label>
              <input id="faq-name" name="name" type="text" required placeholder="Full name" className={field} />

              <label className="sr-only" htmlFor="faq-email">
                Your email
              </label>
              <input
                id="faq-email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                className={`${field} mt-5`}
              />

              <label className="sr-only" htmlFor="faq-message">
                Your message
              </label>
              <textarea
                id="faq-message"
                name="message"
                rows={3}
                required
                placeholder="What are you trying to fix?"
                className={`${field} mt-5 resize-none`}
              />

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-bold text-ink">
                    RD
                  </span>
                  <span className="text-[13px] leading-snug">
                    <span className="block font-bold text-cream">Reinvent Digital</span>
                    <span className="block text-cream/50">Patient acquisition team</span>
                  </span>
                </span>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-lime-deep"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Right: heading, category tabs, accordion */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Frequently asked questions
            </span>
            <h2 className="mt-4 text-balance text-[clamp(1.75rem,1.3rem+2vw,2.4rem)] font-extrabold leading-[1.14] tracking-tight text-ink">
              What healthcare leaders ask before changing their acquisition system.
            </h2>
          </Reveal>

          <div role="tablist" aria-label="FAQ categories" className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-b border-ink/10">
            {GROUPS.map((name) => {
              const active = name === group;
              return (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setGroup(name);
                    setOpenIndex(0);
                  }}
                  className={`relative -mb-px pb-3 text-[15px] font-semibold transition-colors ${
                    active ? "text-green-deep" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {name}
                  {active && (
                    <motion.span
                      layoutId="faq-tab-underline"
                      className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-lime"
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 space-y-3">
            {shown.map((item, i) => (
              <FAQItem
                key={item.q}
                id={`faq-${group}-${i}`}
                n={`0${i + 1}`}
                {...item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
