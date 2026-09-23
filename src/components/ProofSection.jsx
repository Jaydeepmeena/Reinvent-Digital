import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Headphones, PhoneIncoming, CalendarCheck, MapPin } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";
import CountUp from "./motion/CountUp";
import RobotDoctor from "./RobotDoctor";

const BARS = [
  { label: "Walk-ins after 8 months", value: "11,500", pct: 100, highlight: true },
  { label: "Walk-ins before", value: "5,500", pct: 48 },
];

const LOG = [
  { icon: PhoneIncoming, title: "Call answered", meta: "Routed in 00:18" },
  { icon: CalendarCheck, title: "Consult booked", meta: "Tue · 11:30 AM" },
  { icon: MapPin, title: "Walk-in matched", meta: "Source: Maps" },
];

const card = "rounded-3xl bg-white shadow-sm shadow-ink/[0.04]";

function Tile({ className = "", delay = 0, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProofSection() {
  return (
    <section id="results" className="bg-cream pb-8 pt-12 sm:pb-10 sm:pt-14 lg:pb-12 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_2fr] lg:gap-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              <span className="h-2 w-2 rounded-sm bg-lime" />
              Proof, not a promise
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-[clamp(1.75rem,1.3rem+2vw,2.6rem)] font-extrabold leading-[1.12] tracking-tight text-ink">
              More than double the monthly walk-ins — with the same 15-agent call team.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
              A 115+ location dental group didn't have a lead-volume problem. It had a response and conversion problem.
              We connected the data, redesigned call routing and aligned agent coverage with the hours patients actually
              enquired.
            </p>
            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink transition-colors hover:text-green-deep"
            >
              Discuss your conversion gaps
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.85fr] lg:grid-rows-[auto_auto]">
          {/* Tall visual */}
          <Tile className="relative min-h-[22rem] overflow-hidden rounded-3xl bg-gradient-to-b from-lime-mist to-lime-soft md:row-span-2 lg:min-h-0">
            <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_50%_40%,black,transparent_75%)]" />
            <RobotDoctor className="absolute inset-x-0 bottom-0 mx-auto h-[88%] w-full drop-shadow-[0_24px_30px_rgba(27,27,23,0.16)]" />
            <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-cream">
              Case study
            </span>
          </Tile>

          {/* Headline metric */}
          <Tile delay={0.08} className={`${card} p-6 sm:p-7 md:col-span-1 lg:col-span-2`}>
            <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
              <div className="flex items-start text-[clamp(3rem,2.2rem+3vw,4.75rem)] font-extrabold leading-none tracking-tight text-ink">
                <CountUp value="11,500" duration={2} />
                <span className="ml-1 text-2xl text-lime">+</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">Monthly walk-ins</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                  Up from 5,500 a month, eight months after the response system went live.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-cream px-4 py-3">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream bg-ink text-lime"
                  >
                    <Headphones className="h-3.5 w-3.5" />
                  </span>
                ))}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream bg-lime text-[11px] font-bold text-ink">
                  +10
                </span>
              </div>
              <p className="text-[14px] font-medium text-ink">Same 15-agent call team. No new hires.</p>
            </div>
          </Tile>

          {/* Bars */}
          <Tile delay={0.16} className={`${card} relative overflow-hidden p-6 sm:p-7`}>
            <span className="text-[15px] font-semibold text-ink/35">Walk-ins per month</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-3 font-serif-italic text-7xl font-bold text-ink/[0.05]"
            >
              2×
            </span>
            <div className="mt-10 space-y-2.5">
              {BARS.map(({ label, value, pct, highlight }, i) => (
                <div key={label} className="relative h-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.1, delay: 0.3 + i * 0.15, ease: EASE }}
                    style={{ width: `${pct}%` }}
                    className={`absolute inset-y-0 left-0 origin-left rounded-lg ${highlight ? "bg-ink" : "bg-cream-dim"}`}
                  />
                  <div
                    className={`relative flex h-full items-center justify-between px-3 text-[13px] font-semibold ${
                      highlight ? "text-cream" : "text-ink"
                    }`}
                    style={{ width: `${Math.max(pct, 72)}%` }}
                  >
                    <span className="truncate">{label}</span>
                    <span className="tabular-nums">{value}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] text-ink-soft">
              <span className="font-bold text-green-deep">+109%</span> growth in walk-ins.
            </p>
          </Tile>

          {/* Dark card */}
          <Tile delay={0.24} className="relative flex flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-cream sm:p-7 md:col-span-2 lg:col-span-1">
            <div className="relative mb-6 h-32">
              {LOG.map(({ icon: Icon, title, meta }, i) => (
                <div
                  key={title}
                  className="absolute left-0 right-0 flex items-center gap-3 rounded-xl border border-cream/10 bg-[#2a2a25] px-3 py-2.5 shadow-lg shadow-black/30"
                  style={{ top: `${i * 2.4}rem`, transform: `rotate(${[-3, 2, -1][i]}deg) translateX(${i * 6}px)` }}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-lime/15 text-lime">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[12px] font-semibold">{title}</span>
                    <span className="block truncate text-[11px] text-cream/50">{meta}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[14px] font-medium text-cream/80">Tracked across every clinic location</p>
            <div className="mt-2 text-[clamp(2.25rem,1.8rem+1.6vw,3rem)] font-extrabold leading-none text-lime">
              <CountUp value="115+" />
            </div>
          </Tile>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-ink-soft/70">
          Client name withheld per engagement agreement. Individual results depend on demand, operations, data access and
          execution.
        </p>
      </div>
    </section>
  );
}
