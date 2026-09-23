import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { EASE } from "./motion/easing";
import CountUp from "./motion/CountUp";
import HeroShowcase from "./HeroShowcase";
import SocialRing from "./SocialRing";
import useMediaQuery from "./motion/useMediaQuery";

const STATS = [
  ["2.1x", "avg. increase in booked patients"],
  ["120+", "clinics & hospitals scaled"],
  ["<60 sec", "avg. enquiry response time"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 + i * 0.09, ease: EASE } }),
};

const headline = ["More enquiries", "isn't the outcome."];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const parallax = desktop && !reduce;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, parallax ? -60 : 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, parallax ? 90 : 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, parallax ? 160 : 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-lime-mist pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-32 right-[-20%] h-[28rem] w-[28rem] rounded-full bg-white/40 blur-3xl sm:right-[-8%]"
      />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        className="absolute right-0 top-[62%] translate-x-1/2 sm:top-[64%] lg:top-[38%]"
      >
        <SocialRing />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div style={{ y: textY }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-soft backdrop-blur sm:px-4 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green animate-pulse-soft" />
            Patient acquisition, engineered for healthcare
          </motion.div>

          <h1 className="mt-6 text-balance text-[clamp(2.4rem,1.6rem+4vw,4.35rem)] font-extrabold leading-[1.04] tracking-tight text-ink">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block font-serif-italic font-medium text-green-deep"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              >
                Patients are.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-soft sm:mt-6 sm:text-[17px]"
          >
            We connect Google, Meta, AI search and Maps to the CRM, call
            centre and follow-up systems that turn clinic enquiries into
            booked appointments and measurable walk-ins.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-6"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-cream shadow-lg shadow-ink/15 transition-colors hover:bg-green-deep sm:w-auto"
              >
                Discuss your acquisition system
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
            <a
              href="#approach"
              className="group inline-flex items-center justify-center gap-2 py-2 text-[15px] font-semibold text-ink transition-colors hover:text-green-deep"
            >
              See how the system works
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6 sm:mt-14 sm:gap-8 sm:pt-7"
          >
            {STATS.map(([stat, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-[clamp(1.35rem,1rem+1.6vw,1.75rem)] font-extrabold leading-none text-ink">
                  <CountUp value={stat} />
                </dd>
                <dd className="mt-1.5 text-[12px] leading-snug text-ink-soft sm:text-sm">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div style={{ y: visualY }} className="relative">
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
}
