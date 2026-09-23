import { motion } from "framer-motion";
import { CalendarCheck, Check, Coins, Headphones, Route, X } from "lucide-react";
import Reveal from "./motion/Reveal";
import Scene3D from "./three/Scene3D";
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

        <div className="section-head-gap relative isolate">
          {/* A slow ECG trace running behind the cards */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[150%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-50 xl:block"
          >
            <Scene3D scene="pulseLine" className="h-full w-full" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {ROWS.map(({ icon: Icon, label, them, us }, i) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
                className="group relative isolate flex flex-col overflow-hidden rounded-[1.75rem] border border-cream/10 bg-[#22221e]/85 p-6 transition-[background-color,border-color,box-shadow] duration-300 hover:border-lime/40 hover:bg-[#282823]/90 hover:shadow-2xl hover:shadow-lime/10 sm:p-7"
              >
                {/* Lime bloom rises from the icon corner on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -right-12 -z-10 h-44 w-44 rounded-full bg-lime/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <h3 className="text-lg font-bold text-cream transition-colors duration-300 group-hover:text-lime">
                  {label}
                </h3>

                <div className="mt-5 border-t border-cream/10 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/40">
                    Typical agency
                  </span>
                  <p className="mt-1.5 flex items-start gap-2 text-[13px] leading-snug text-cream/45 transition-colors duration-300 group-hover:text-cream/35">
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
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-lime text-ink transition-[scale,box-shadow] duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-lime/40 sm:h-[4.5rem] sm:w-[4.5rem]">
                    <Icon className="h-7 w-7" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
