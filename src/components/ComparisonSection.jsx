import { motion } from "framer-motion";
import { CalendarCheck, Check, Coins, Headphones, Route, X } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

const ROWS = [
  {
    icon: CalendarCheck,
    label: "Primary output",
    them: "Leads and reports",
    us: "Bookings and journey visibility",
  },
  {
    icon: Headphones,
    label: "Call centre",
    them: "Outside scope",
    us: "Routed, scored and coached",
  },
  {
    icon: Route,
    label: "Attribution",
    them: "Platform conversion",
    us: "Source → booking → walk-in",
  },
  {
    icon: Coins,
    label: "Decision metric",
    them: "Cost per lead",
    us: "Cost per booked patient",
  },
];

export default function ComparisonSection() {
  return (
    <section className="section-y relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
              <span className="h-2 w-2 rounded-full bg-lime" />
              A different accountability line
            </span>
            <h2 className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-tight text-cream">
              We don't price our value around a{" "}
              <span className="font-serif-italic font-medium text-lime">percentage of media spend.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-md text-[15px] leading-relaxed text-cream/60 sm:text-base">
              Billing against media spend rewards spending more. We're measured on what happens after the click — how
              fast enquiries are answered, how many become bookings, and how many walk in.
            </p>
          </Reveal>
        </div>

        <div className="section-head-gap grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {ROWS.map(({ icon: Icon, label, them, us }, i) => (
            <motion.article
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              className="flex flex-col rounded-[1.75rem] border border-cream/10 bg-cream/[0.03] p-6 transition-colors duration-300 hover:border-lime/40 hover:bg-cream/[0.06] sm:p-7"
            >
              <h3 className="text-lg font-bold text-cream">{label}</h3>

              <div className="mt-5 border-t border-cream/10 pt-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/40">
                  Typical agency
                </span>
                <p className="mt-1.5 flex items-start gap-2 text-[13px] leading-snug text-cream/45">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {them}
                </p>
              </div>

              <div className="mt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lime">
                  Reinvent Digital
                </span>
                <p className="mt-1.5 flex items-start gap-2 text-[14px] font-semibold leading-snug text-cream">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                  {us}
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <span className="block text-[13px] font-bold uppercase tracking-wide text-cream">Shift</span>
                  <span className="block text-[2.25rem] font-extrabold leading-none tracking-tight text-lime">
                    0{i + 1}
                  </span>
                </div>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-lime text-ink sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Icon className="h-7 w-7" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
