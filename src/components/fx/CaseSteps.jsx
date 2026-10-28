import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "../motion/easing";
import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";

// "What we did" as an interactive stepper: the steps list on one side, the
// selected step's detail on the other. Clicking a step crossfades the detail;
// on a narrow screen the steps become a scrollable row of chips above it.
export default function CaseSteps({ title = "What we did", steps = [], note }) {
  const [active, setActive] = useState(0);
  if (!steps.length) return null;
  const index = Math.min(active, steps.length - 1);
  const step = steps[index];

  return (
    <section className="section-y bg-paper">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Eyebrow>How we did it</Eyebrow>
        <SplitReveal
          as="h2"
          type="skewLines"
          className="mt-4 text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.4rem)] font-extrabold leading-tight tracking-tight text-ink"
        >
          {title}
        </SplitReveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,19rem)_1fr] lg:gap-10">
          <ol role="tablist" aria-label="Steps" className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0">
            {steps.map((entry, i) => {
              const on = i === index;
              return (
                <li key={entry.title} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                      on ? "bg-ink text-cream" : "text-ink-soft hover:bg-ink/[0.05]"
                    }`}
                  >
                    <span className={`text-sm font-bold tabular-nums ${on ? "text-lime" : "text-ink/35"}`}>{entry.num}</span>
                    <span className="whitespace-nowrap text-[14px] font-semibold leading-snug lg:whitespace-normal">
                      {entry.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <span className="block text-[clamp(3rem,2rem+3vw,5rem)] font-extrabold leading-none tracking-tighter tabular-nums text-ink/[0.08]">
                  {step.num}
                </span>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{step.title}</h3>
                {step.body && <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {note && (
          <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">{note.replace(/[:：].*$/, "")}:</span>{" "}
            {note.replace(/^[^:：]*[:：]\s*/, "")}
          </p>
        )}
      </div>
    </section>
  );
}
