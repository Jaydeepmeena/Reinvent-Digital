import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";
import Reveal from "../motion/Reveal";

// The "how we plan" section: a few steps strung along a wavy rail. On a wide
// screen the nodes sit on the curve with their copy in a column beneath each;
// on a narrow screen the same steps stack as an upright timeline.
//
// The desktop wave is one SVG drawn in a 1000x120 box, stretched to fill the
// band (preserveAspectRatio="none"), so a point (x, y) in that box lands at
// (x/10 %, y px). The nodes below are placed on the three points the path was
// drawn through.
const NODES = [
  { leftPct: 16.6, topPx: 42 },
  { leftPct: 50, topPx: 42 },
  { leftPct: 83.4, topPx: 70 },
];
const WAVE =
  "M 0 64 C 55 64 120 42 166 42 C 230 42 300 96 360 96 C 420 96 450 42 500 42 " +
  "C 560 42 600 100 668 100 C 740 100 790 70 834 70 C 900 70 950 58 1000 58";

function Node({ n }) {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-lime text-base font-extrabold tabular-nums text-ink ring-4 ring-lime/15">
      {n}
    </span>
  );
}

function Copy({ label, title, body }) {
  return (
    <>
      {label && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">{label}</span>
      )}
      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-cream sm:text-2xl">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-cream/60">{body}</p>
    </>
  );
}

export default function ProcessWave({ eyebrow, heading, steps = [] }) {
  if (!steps.length) return null;
  // The wave is drawn for three steps; with any other count, skip it and let
  // the stacked timeline carry every width.
  const onWave = steps.length === 3;

  return (
    <section className="section-y bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        {eyebrow && (
          <Eyebrow tone="dark" className="justify-center">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime" />
            {eyebrow}
          </Eyebrow>
        )}
        <SplitReveal
          as="h2"
          type="skewLines"
          className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {heading}
        </SplitReveal>
      </div>

      <Reveal className="mx-auto mt-14 max-w-5xl px-5 sm:mt-16 sm:px-8">
        {/* Wide screens: the wavy rail with nodes, copy in a column beneath each. */}
        {onWave && (
          <div className="hidden lg:block">
            <div className="relative h-[120px]">
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path d={WAVE} fill="none" stroke="#a7cf3b" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${NODES[i].leftPct}%`, top: `${NODES[i].topPx}px` }}
                >
                  <Node n={i + 1} />
                </div>
              ))}
            </div>
            <ol className="mt-6 grid grid-cols-3 gap-8">
              {steps.map((step) => (
                <li key={step.title} className="text-center">
                  <Copy {...step} />
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Narrow screens (and any step count): an upright timeline. */}
        <ol className={onWave ? "space-y-9 lg:hidden" : "mx-auto max-w-xl space-y-9"}>
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <Node n={i + 1} />
                {i < steps.length - 1 && <span aria-hidden="true" className="mt-2 w-px flex-1 bg-lime/25" />}
              </div>
              <div className="pb-1 pt-1.5">
                <Copy {...step} />
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
