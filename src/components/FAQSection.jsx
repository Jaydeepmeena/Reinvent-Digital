import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import SectionHeader from "./motion/SectionHeader";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

const FAQS = [
  {
    q: "What does Reinvent Digital do?",
    a: "We build patient acquisition systems for healthcare organisations. That means connecting demand generation, CRM, telephony, messaging and clinic data so teams can improve booking conversion and measure which channels create patient visits.",
  },
  {
    q: "How is this different from a lead generation agency?",
    a: "Most agencies stop at the lead and hand over a report. We own the full journey — response, call quality, booking and walk-in — and we're measured on booked patients, not lead volume.",
  },
  {
    q: "Which marketing channels do you manage?",
    a: "Google Ads, Meta Ads, ChatGPT & AI ads, SEO, AEO & GEO, Google Business Profile & local SEO, YouTube, social media and marketing automation — tailored to where your patients actually search.",
  },
  {
    q: "Can you work with our existing CRM and call centre?",
    a: "Yes. We integrate with the CRM and telephony you already run, or set one up if you don't have one — rather than asking you to rebuild your stack around us.",
  },
  {
    q: "How do you track bookings and walk-ins?",
    a: "Every call, form and WhatsApp enquiry enters with a source. Bookings are measured in the CRM, and walk-ins are reconciled with your clinic's PMS or attendance data when access is available.",
  },
  {
    q: "How do you help teams respond in under 60 seconds?",
    a: "We plan call centre coverage against your actual enquiry patterns, auto-route to available agents, escalate missed SLAs and coach agents against a consistent booking rubric.",
  },
  {
    q: "How long does setup take?",
    a: "Campaigns typically launch within 48 hours. CRM and call-routing integration usually takes 1–2 weeks depending on your existing systems and locations.",
  },
  {
    q: "Who is this system best for?",
    a: "Dental groups, fertility and IVF networks, eye care chains and multi-speciality hospitals with more than one location — where disconnected channel reporting is already costing you bookings.",
  },
];

function FAQItem({ q, a, isOpen, onClick, id }) {
  return (
    <div className="border-b border-ink/10">
      <h3>
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-[15px] font-bold text-ink transition-colors group-hover:text-green-deep sm:text-base">{q}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen ? "rotate-45 border-ink bg-ink text-cream" : "border-ink/15 text-ink group-hover:border-ink"
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
            <p className="pb-5 pr-4 text-[15px] leading-relaxed text-ink-soft sm:pr-12">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-y border-y border-ink/[0.06] bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Frequently asked questions"
            title="What healthcare leaders ask before changing their acquisition system."
            description="The work sits between marketing and operations. These answers clarify what we manage, what depends on your existing systems and where implementation risk usually sits."
          />
          <Reveal delay={0.15} className="mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:bg-green-deep"
            >
              Discuss your current setup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="border-t border-ink/10">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              id={`faq-${i}`}
              {...item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
