import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Radar, Clock3, HelpCircle, ArrowUpRight } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

const PROBLEMS = [
  {
    icon: Radar,
    tag: "Unclear source",
    title: "Scattered demand",
    body: "Paid, organic, Maps and AI search are managed as separate channels with no shared view of patient intent.",
  },
  {
    icon: Clock3,
    tag: "Lost time",
    title: "Slow first response",
    body: "Calls ring out. Forms sit in inboxes. WhatsApp enquiries wait while the patient books with another clinic.",
  },
  {
    icon: HelpCircle,
    tag: "Missing proof",
    title: "Broken attribution",
    body: "Marketing reports the lead. The clinic reports the walk-in. Nobody can reliably connect the two.",
  },
];

// The cards stack over each other as you scroll (any width, when the screen is tall enough to fit one).
// On desktop (lg) the text column also sticks beside them.
export default function ProblemSection() {
  return (
    <section className="bg-cream pb-12 pt-12 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <div className="self-start lg:sticky lg:top-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Where growth gets lost
            </span>
            <h2 className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink">
              Most agencies stop at the lead.{" "}
              <span className="font-serif-italic font-medium text-ink-soft">We work on what happens next.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">
              Demand without a response system creates a bigger queue, not a healthier clinic.
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft/80">
              The patient journey breaks between platforms, people and disconnected reports. These are the three leaks we
              find in almost every clinic we audit.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {PROBLEMS.map(({ icon: Icon, title }) => (
                  <span
                    key={title}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream bg-ink text-lime"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-ink">3 leaks, one audit</p>
                <p className="text-[13px] text-ink-soft">Free for qualifying clinics</p>
              </div>
            </div>

            <span aria-hidden="true" className="hidden h-10 w-px bg-ink/15 sm:block" />

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-ink shadow-lg shadow-lime/25 transition-colors hover:bg-lime-deep"
              >
                Find your leaks
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </Reveal>
        </div>

        <ol className="flex flex-col gap-6 pin:gap-8">
          {PROBLEMS.map(({ icon: Icon, tag, title, body }, i) => (
            <li
              key={title}
              className="[@media(min-height:460px)]:sticky"
              style={{ top: `calc(clamp(5.5rem, 4rem + 3vw, 7rem) + ${i * 1.25}rem)` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="group relative overflow-hidden rounded-[1.25rem] border border-cream/5 bg-gradient-to-b from-[#2d2d28] to-ink px-6 py-8 text-center shadow-xl shadow-ink/15 transition-[border-color,box-shadow] duration-300 hover:border-lime/30 hover:shadow-2xl hover:shadow-lime/10 sm:px-10 sm:py-10"
              >
                {/* Lime glow blooms behind the icon on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-44 w-44 rounded-full bg-lime/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-4xl font-extrabold tabular-nums text-cream/[0.06] transition-colors duration-500 group-hover:text-lime/25 sm:text-5xl"
                >
                  0{i + 1}
                </span>
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime/15 text-lime transition-[background-color,color,scale] duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-ink">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold text-cream sm:text-2xl">{title}</h3>
                <p className="relative mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-cream/60 transition-colors duration-300 group-hover:text-cream/75">
                  {body}
                </p>
                <span className="relative mt-5 inline-block rounded-full border border-cream/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream/70 transition-colors duration-300 group-hover:border-lime/40 group-hover:text-lime">
                  {tag}
                </span>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
