import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

export default function CTASection({
  id = "contact",
  eyebrow = "Build the system",
  heading = "Turn patient enquiries into measurable, predictable bookings.",
  body = "Talk to us about the gaps between your channels, CRM, call centre and clinic data — and what it would take to connect them.",
  ctaLabel = "Discuss your growth plan",
  ctaHref = "mailto:hello@reinventdigital.com",
  footnote = "Google Ads · Meta Ads · SEO · AEO & GEO · CRM · Call Centre",
  monochrome = false,
}) {
  const glow = monochrome
    ? "bg-[conic-gradient(from_0deg,transparent,rgba(167,207,59,0.35),transparent_35%,rgba(255,255,255,0.12),transparent_70%)]"
    : "bg-[conic-gradient(from_0deg,transparent,rgba(167,207,59,0.35),transparent_35%,rgba(12,156,83,0.35),transparent_70%)]";
  return (
    <section id={id} className="section-y bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal
          y={40}
          className="relative isolate overflow-hidden rounded-[1.75rem] bg-ink px-6 py-14 text-center sm:rounded-[2rem] sm:px-12 sm:py-20 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />
          <div className={`pointer-events-none absolute left-1/2 top-0 -z-10 aspect-square w-[46rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full ${glow} blur-3xl`} />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-56 w-56 rounded-full border border-lime/20"
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full border border-lime/20"
            animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            <span className="h-px w-6 bg-lime/60" />
            {eyebrow}
            <span className="h-px w-6 bg-lime/60" />
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-[clamp(1.9rem,1.3rem+2.8vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-cream">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-cream/60 sm:text-[16px]">{body}</p>
          <div className="mt-8 flex justify-center sm:mt-9">
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-[15px] font-semibold text-ink shadow-lg shadow-lime/20 transition-colors hover:bg-cream sm:w-auto"
            >
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>
          {footnote && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
              className="mt-8 text-[11px] uppercase tracking-wider text-cream/40 sm:text-xs"
            >
              {footnote}
            </motion.p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
