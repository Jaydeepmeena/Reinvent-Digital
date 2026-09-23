import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

export default function PathSteps({ steps }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const root = ref.current;
        const paths = [...root.querySelectorAll("[data-path]")];
        paths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top 70%", end: "bottom 60%", scrub: 0.8 },
        });
        tl.to(paths, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0);
        root.querySelectorAll("[data-path-step]").forEach((step, i, all) => {
          const at = (i / Math.max(all.length - 1, 1)) * 0.9;
          tl.from(step.querySelector("[data-path-node]"), { scale: 0, duration: 0.08, ease: "back.out(3)" }, at);
          tl.from(step.querySelector("[data-path-body]"), { y: 30, opacity: 0, duration: 0.12 }, at);
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="relative">
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 top-2 hidden h-24 w-full lg:block"
      >
        <path
          data-path
          d="M40,60 C200,-10 300,130 500,60 C700,-10 800,130 960,60"
          fill="none"
          stroke="#a7cf3b"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 20 1000" preserveAspectRatio="none" className="absolute bottom-0 left-[10px] top-0 h-full w-5 lg:hidden">
        <path data-path d="M10,0 L10,1000" fill="none" stroke="#a7cf3b" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      </svg>

      <ol className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
        {steps.map(({ tag, title, body }, i) => (
          <li key={title} data-path-step className="grid grid-cols-[2.5rem_1fr] gap-4 lg:block">
            <span
              data-path-node
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-lime text-sm font-extrabold text-ink shadow-[0_0_0_8px_rgba(167,207,59,0.18)] lg:mx-auto lg:h-14 lg:w-14 lg:text-base"
            >
              {i + 1}
            </span>
            <div data-path-body className="lg:mt-8 lg:text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">{tag}</span>
              <h3 className="mt-2 text-xl font-extrabold tracking-tight text-cream sm:text-2xl">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-cream/60">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
