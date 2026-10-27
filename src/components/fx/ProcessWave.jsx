import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";
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
//
// Motion: as the section scrolls in, the nodes light from dim to lime one after
// the next; a glow travels the rail on a loop. Both are gated to users who have
// not asked for reduced motion.
const NODES = [
  { leftPct: 16.6, topPx: 42 },
  { leftPct: 50, topPx: 42 },
  { leftPct: 83.4, topPx: 70 },
];
const WAVE =
  "M 0 64 C 55 64 120 42 166 42 C 230 42 300 96 360 96 C 420 96 450 42 500 42 " +
  "C 560 42 600 100 668 100 C 740 100 790 70 834 70 C 900 70 950 58 1000 58";

const DIM = { backgroundColor: "#211f1a", color: "#a7cf3b", boxShadow: "inset 0 0 0 1px rgba(167,207,59,0.4)", scale: 0.82 };
const LIT = { backgroundColor: "#a7cf3b", color: "#1b1b17", boxShadow: "0 0 0 4px rgba(167,207,59,0.15)" };

function Node({ n, ...rest }) {
  return (
    <span
      {...rest}
      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-lime text-base font-extrabold tabular-nums text-ink ring-4 ring-lime/15"
    >
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
  const ref = useRef(null);
  // The wave is drawn for three steps; with any other count, skip it and let
  // the stacked timeline carry every width.
  const onWave = steps.length === 3;

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      // Wide screens: light the nodes left-to-right as the rail scrolls in.
      mm.add(`${MOTION_OK} and (min-width: 1024px)`, () => {
        const band = root.querySelector("[data-wave-band]");
        const nodes = gsap.utils.toArray(root.querySelectorAll("[data-wave-node]"));
        if (!band || !nodes.length) return;
        gsap.set(nodes, DIM);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: band, start: "top 82%", end: "top 48%", scrub: 0.6 },
        });
        nodes.forEach((node, i) => {
          tl.to(node, { ...LIT, scale: 1.15, duration: 0.4, ease: "back.out(2)" }, i * 0.5).to(
            node,
            { scale: 1, duration: 0.2 }
          );
        });
      });

      // Narrow screens: each node pops as it enters.
      mm.add(`${MOTION_OK} and (max-width: 1023px)`, () => {
        const nodes = gsap.utils.toArray(root.querySelectorAll("[data-list-node]"));
        nodes.forEach((node) => {
          gsap.set(node, DIM);
          gsap
            .timeline({ scrollTrigger: { trigger: node, start: "top 88%", toggleActions: "play none none reverse" } })
            .to(node, { ...LIT, scale: 1.15, duration: 0.4, ease: "back.out(2)" })
            .to(node, { scale: 1, duration: 0.2 });
        });
      });
    },
    { scope: ref }
  );

  if (!steps.length) return null;

  return (
    <section ref={ref} className="section-y bg-ink text-cream">
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
            <div data-wave-band className="relative h-[120px]">
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                <path
                  id="planWavePath"
                  d={WAVE}
                  fill="none"
                  stroke="#a7cf3b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  opacity="0.85"
                />
                {/* A glow that travels the rail on a loop. */}
                <circle
                  r="4"
                  fill="#d6ef7f"
                  className="motion-reduce:hidden"
                  style={{ filter: "drop-shadow(0 0 5px #a7cf3b)" }}
                >
                  <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href="#planWavePath" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;1;0"
                    keyTimes="0;0.08;0.5;0.92;1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${NODES[i].leftPct}%`, top: `${NODES[i].topPx}px` }}
                >
                  <Node n={i + 1} data-wave-node="" />
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
                <Node n={i + 1} data-list-node="" />
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
