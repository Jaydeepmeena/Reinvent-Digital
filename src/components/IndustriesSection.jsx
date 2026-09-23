import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "../data/industries";
// Free-licence photos from Unsplash, bundled rather than hotlinked.
import dentalImg from "../assets/cards/industry-dental.jpg";
import fertilityImg from "../assets/cards/industry-fertility.jpg";
import eyeImg from "../assets/cards/industry-eye.jpg";
import hospitalImg from "../assets/cards/industry-hospital.jpg";
import Reveal from "./motion/Reveal";
import CountUp from "./motion/CountUp";
import { EASE } from "./motion/easing";

const IMAGES = {
  "dental-clinic": dentalImg,
  "ivf-clinic": fertilityImg,
  "eye-clinics": eyeImg,
  "multi-speciality-hospital": hospitalImg,
};

const COUNTERS = [
  {
    value: "120+",
    title: "Locations",
    body: "Clinics and hospitals running on the same acquisition system.",
  },
  {
    value: "12+",
    title: "Departments",
    body: "Specialities coordinated inside a single hospital group.",
  },
  {
    value: "<60 sec",
    title: "Response",
    body: "Average time to a first reply, across every managed location.",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-y bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
        {/* Left rail: label, context and the headline numbers */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Designed for operational scale
            </span>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              The system earns its keep when patient demand, locations and call teams are too complex for disconnected
              channel reports.
            </p>
          </Reveal>

          <dl className="mt-10 space-y-8">
            {COUNTERS.map(({ value, title, body }, i) => (
              <Reveal key={title} delay={0.08 + i * 0.08}>
                <dd className="text-[clamp(2rem,1.4rem+1.8vw,2.75rem)] font-extrabold leading-none tracking-tight text-ink">
                  <CountUp value={value} />
                </dd>
                <dt className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-green-deep">{title}</dt>
                <p className="mt-1.5 max-w-[15rem] text-[13px] leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* Right: heading, then a staggered two-column grid of speciality cards */}
        <div>
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-tight text-ink">
              Best for healthcare groups{" "}
              <span className="font-serif-italic font-medium text-ink-soft">with more than one front door.</span>
            </h2>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
              [ {INDUSTRIES.length.toString().padStart(2, "0")} specialities ]
            </span>
          </Reveal>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
            {INDUSTRIES.map(({ slug, title, eyebrow, metric }, i) => {
              // Cards 1 and 4 sit dark, so the two columns read as a checkerboard.
              const dark = i === 0 || i === 3;
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: (i % 2) * 0.12, ease: EASE }}
                  // Offset the second column so the grid staggers down the page.
                  className={i % 2 === 1 ? "sm:mt-16" : ""}
                >
                  <Link to={`/industries/${slug}`} className="group block">
                    <div
                      className={`relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.5rem] p-6 transition-colors duration-300 sm:p-7 ${
                        dark ? "bg-ink text-cream" : "bg-lime-soft text-ink"
                      }`}
                    >
                      <img
                        src={IMAGES[slug]}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover opacity-[0.55] transition-transform duration-700 group-hover:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 bg-gradient-to-t ${
                          dark ? "from-ink via-ink/70 to-ink/20" : "from-lime-soft via-lime-soft/75 to-lime-soft/25"
                        }`}
                      />

                      <div className="relative">
                        <div
                          className={`text-[clamp(2.25rem,1.6rem+2.2vw,3.25rem)] font-extrabold leading-none tracking-tight ${
                            dark ? "text-lime" : "text-green-deep"
                          }`}
                        >
                          <CountUp value={metric.value} />
                        </div>
                        <p className={`mt-2 text-[14px] leading-snug ${dark ? "text-cream/60" : "text-ink-soft"}`}>
                          {metric.label}
                        </p>
                      </div>

                      <span
                        className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 sm:right-6 sm:top-6 ${
                          dark
                            ? "border-cream/25 text-cream group-hover:border-lime group-hover:bg-lime group-hover:text-ink"
                            : "border-ink/20 text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-cream"
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-ink transition-colors duration-300 group-hover:text-green-deep sm:text-xl">
                      {title}
                    </h3>
                    <span className="mt-3 inline-block rounded-full border border-ink/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                      {eyebrow}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
