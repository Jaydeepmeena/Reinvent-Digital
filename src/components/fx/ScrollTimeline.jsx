import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

export default function ScrollTimeline({ steps }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MOTION_OK, wide: "(min-width: 1024px)" }, (ctx) => {
        if (!ctx.conditions.motion) return;
        const { wide } = ctx.conditions;
        const root = ref.current;
        gsap.from(root.querySelector("[data-progress]"), {
          scaleY: 0,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top 65%", end: "bottom 65%", scrub: 0.5 },
        });

        root.querySelectorAll("[data-step]").forEach((step, i) => {
          const node = step.querySelector("[data-node]");
          const card = step.querySelector("[data-step-card]");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: step, start: "top 65%", toggleActions: "play none none reverse" },
          });
          tl.to(node, { backgroundColor: "#a7cf3b", color: "#1b1b17", scale: 1.25, duration: 0.35, ease: "back.out(3)" })
            .to(node, { scale: 1, duration: 0.3 })
            .from(card, { x: wide ? (i % 2 ? 60 : -60) : 40, opacity: 0, duration: 0.8, ease: "power3.out" }, 0);
        });
      });
    },
    { scope: ref }
  );

  return (
    <ol ref={ref} className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-4 top-0 w-px bg-cream/15 lg:left-1/2 lg:-translate-x-1/2"
      >
        <div data-progress className="h-full w-full origin-top bg-lime" />
      </div>

      {steps.map(({ title, body }, i) => (
        <li
          key={title}
          data-step
          className="relative grid grid-cols-[2rem_1fr] gap-5 pb-12 last:pb-0 sm:pb-16 lg:grid-cols-[1fr_4rem_1fr] lg:gap-0"
        >
          <div className="flex justify-center lg:col-start-2 lg:row-start-1">
            <span
              data-node
              className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-lime/40 bg-ink text-xs font-bold tabular-nums text-lime"
            >
              {i + 1}
            </span>
          </div>
          <div
            data-step-card
            className={`rounded-2xl border border-cream/10 bg-white/[0.04] p-6 sm:p-8 lg:row-start-1 ${
              i % 2 ? "lg:col-start-3 lg:ml-8" : "lg:col-start-1 lg:mr-8 lg:text-right"
            }`}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
              Step {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-cream sm:text-2xl">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cream/60">{body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
