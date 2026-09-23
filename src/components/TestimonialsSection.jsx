import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

const TESTIMONIALS = [
  {
    quote:
      "Reinvent Digital didn't just send us leads — they rebuilt how our front desk handles them. Our chair utilisation has never been this consistent.",
    name: "Dr. Aakash Mehta",
    role: "Clinical Director, multi-location dental group",
    rating: 5,
  },
  {
    quote:
      "They understood that our patients aren't comparing prices, they're building trust. The nurture sequences and call training changed how many consultations actually became cycles.",
    name: "Dr. Sunita Rao",
    role: "Medical Director, fertility & IVF network",
    rating: 5,
  },
  {
    quote:
      "For the first time, our board sees one number for marketing performance across every department — not fourteen different spreadsheets.",
    name: "Ms. Kavitha Iyer",
    role: "VP Growth & Marketing, multi-speciality hospital group",
    rating: 4.8,
  },
];

const initials = (name) =>
  name
    .replace(/^(Dr|Ms|Mr|Mrs)\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

// Five stars, each partially filled by CSS width so a rating like 4.8 reads as a sliver short of full.
function StarRow({ rating, size = "lg", className = "" }) {
  const box = size === "lg" ? "h-7 w-7 sm:h-9 sm:w-9" : "h-4 w-4 sm:h-[1.1rem] sm:w-[1.1rem]";
  const gap = size === "lg" ? "gap-1.5 sm:gap-2" : "gap-0.5";
  return (
    <div className={`flex items-center ${gap} ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.round(Math.max(0, Math.min(1, rating - i)) * 100);
        return (
          <span key={i} className={`relative shrink-0 ${box}`}>
            <Star className="absolute inset-0 h-full w-full text-ink/15" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
              <Star className="h-full w-full text-lime" fill="currentColor" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function TestimonialsSection() {
  const [[index, dir], setState] = useState([0, 1]);
  const active = TESTIMONIALS[index];

  const go = (step) =>
    setState(([i]) => [(i + step + TESTIMONIALS.length) % TESTIMONIALS.length, step]);

  return (
    <section className="section-y-tight bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            <span className="h-2 w-2 rounded-full bg-lime" />
            Client testimonials
          </span>
          <h2 className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-tight text-ink">
            Trusted for clarity,{" "}
            <span className="font-serif-italic font-medium text-ink-soft">speed and results.</span>
          </h2>
        </Reveal>

        <div className="section-head-gap grid gap-4 lg:grid-cols-2 lg:gap-5">
          {/* Quote card */}
          <Reveal className="relative flex min-h-[22rem] flex-col rounded-[1.75rem] bg-ink p-7 pb-36 text-cream sm:p-10 sm:pb-24">
            <span
              aria-hidden="true"
              className="font-serif-italic text-[5rem] leading-[0.6] text-lime sm:text-[7rem]"
            >
              “
            </span>

            <div className="relative mt-6 flex-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={active.name}
                  initial={{ opacity: 0, x: dir * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -28 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="text-[17px] leading-relaxed text-cream sm:text-xl sm:leading-relaxed"
                >
                  "{active.quote}"
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author sits in a notch cut out of the bottom-left corner */}
            <div className="absolute bottom-0 left-0 flex max-w-[63%] items-center gap-3 rounded-tr-[1.5rem] bg-cream py-4 pr-5 sm:max-w-none sm:gap-4 sm:py-5 sm:pr-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="flex items-center gap-3 pl-7 sm:gap-4 sm:pl-10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-bold text-ink sm:h-12 sm:w-12">
                    {initials(active.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-bold text-ink sm:text-base">{active.name}</span>
                    <span className="line-clamp-2 block text-[11px] font-semibold uppercase leading-snug tracking-wide text-ink-soft">
                      {active.role}
                    </span>
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-6 right-5 flex gap-2 sm:bottom-8 sm:right-8">
              {[
                { step: -1, Icon: ArrowLeft, label: "Previous testimonial" },
                { step: 1, Icon: ArrowRight, label: "Next testimonial" },
              ].map(({ step, Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => go(step)}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream/20 text-cream transition-colors hover:border-lime hover:bg-lime hover:text-ink sm:h-12 sm:w-12"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Rating card: the same client's star rating, swapped by the arrows on the quote card. */}
          <Reveal
            delay={0.1}
            className="relative flex min-h-[22rem] flex-col justify-center overflow-hidden rounded-[1.75rem] bg-paper p-7 sm:p-10"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: dir * 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: dir * -16 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <StarRow rating={active.rating} />

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-lime-deep to-green-deep bg-clip-text text-[clamp(3rem,2rem+5vw,4.5rem)] font-extrabold leading-none tracking-tight text-transparent">
                    {active.rating.toFixed(1)}
                  </span>
                  <span className="text-lg font-semibold text-ink-soft">/ 5</span>
                </div>

                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
                  {active.name} rates their engagement {active.rating.toFixed(1)} out of 5 for clarity, speed and
                  measurable results.
                </p>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
