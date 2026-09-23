import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Headset, Plus } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

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

const FIELDS = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
];

function EnquiryCard() {
  const [sent, setSent] = useState(false);

  // No backend yet — this collects the details and confirms locally.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-[1.75rem] border border-cream/10 bg-[#111110] p-6 shadow-2xl shadow-ink/40 sm:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-lime/10 blur-3xl"
      />

      <span className="relative inline-flex items-center gap-2 text-[13px] font-semibold text-cream/70">
        <span className="h-2 w-2 rounded-full bg-lime" />
        Response time: under 1 hour
      </span>
      <h3 className="relative mt-3 text-[clamp(1.5rem,1.2rem+1.1vw,1.9rem)] font-extrabold leading-tight tracking-tight text-cream">
        Tell us about your clinic
      </h3>

      <div className="relative mt-7 space-y-6">
        {FIELDS.map(({ name, label, type, autoComplete }) => (
          <div key={name}>
            <label htmlFor={`enquiry-${name}`} className="sr-only">
              {label}
            </label>
            <input
              id={`enquiry-${name}`}
              name={name}
              type={type}
              autoComplete={autoComplete}
              placeholder={label}
              required
              className="w-full border-b border-cream/15 bg-transparent pb-3 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/45 focus:border-lime"
            />
          </div>
        ))}

        <div>
          <label htmlFor="enquiry-message" className="sr-only">
            Your message
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={3}
            placeholder="Your message"
            className="w-full resize-y border-b border-cream/15 bg-transparent pb-3 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/45 focus:border-lime"
          />
        </div>

        <label className="flex cursor-pointer items-center gap-3 text-[15px] text-cream/70">
          <input
            type="checkbox"
            name="newsletter"
            className="h-5 w-5 shrink-0 appearance-none rounded border border-cream/25 bg-transparent transition-colors checked:border-lime checked:bg-lime"
          />
          Send me the monthly patient-acquisition note
        </label>
      </div>

      <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6">
        <span className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime/15 text-lime">
            <Headset className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold text-cream">
              Patient growth team
            </span>
            <span className="block text-[13px] text-cream/55">
              Replies within the hour
            </span>
          </span>
        </span>

        <button
          type="submit"
          className="group flex items-center gap-3 rounded-full bg-cream/[0.06] py-2 pl-2 pr-5 text-[15px] font-bold text-cream transition-colors hover:bg-cream/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:translate-x-0.5">
            {sent ? (
              <Check className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </span>
          {sent ? "Thank you" : "Submit now"}
        </button>
      </div>

      <p aria-live="polite" className="relative mt-3 text-[13px] text-lime">
        {sent ? "Got it — we'll come back to you within the hour." : ""}
      </p>
    </form>
  );
}

function FAQItem({ q, a, n, isOpen, onClick, id }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-cream/20 bg-cream/[0.07]"
          : "border-cream/10 bg-cream/[0.03] hover:border-cream/25"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          className="group flex w-full items-center gap-4 p-5 text-left sm:gap-5 sm:p-6"
        >
          <span className="text-[13px] font-bold tabular-nums text-cream/40">
            {n}
          </span>
          <span className="flex-1 text-[15px] font-bold text-cream transition-colors group-hover:text-lime sm:text-base">
            {q}
          </span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "rotate-45 border-lime bg-lime text-ink"
                : "border-cream/20 text-cream group-hover:border-cream"
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
            <p className="px-5 pb-5 pl-[3.25rem] pr-12 text-[15px] leading-relaxed text-cream/60 sm:px-6 sm:pb-6 sm:pl-[4rem] sm:pr-16">
              {a}
            </p>
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

  return (
    <section
      id="faq"
      className="section-y-tight relative overflow-hidden bg-ink text-cream"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            <span className="h-2 w-2 rounded-full bg-lime" />
            Frequently asked questions
          </span>
          <h2 className="mt-4 text-balance text-[clamp(1.75rem,1.3rem+2vw,2.4rem)] font-extrabold leading-[1.14] tracking-tight text-cream">
            What healthcare leaders ask before changing their acquisition
            system.
          </h2>
        </Reveal>

        <div className="section-head-gap grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28">
            <EnquiryCard />
          </Reveal>

          <div>
            <div
              role="tablist"
              aria-label="FAQ categories"
              className="flex flex-wrap gap-x-7 gap-y-2 border-b border-cream/10"
            >
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
                      active ? "text-lime" : "text-cream/50 hover:text-cream"
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
      </div>
    </section>
  );
}
