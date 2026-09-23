import { useRef } from "react";
import { Check } from "lucide-react";
import CountUp from "../motion/CountUp";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

export default function StatRows({ stats = [], highlights = [] }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        ref.current.querySelectorAll("[data-row]").forEach((row) => {
          gsap.from(row.querySelector("[data-row-line]"), {
            scaleX: 0,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 92%", end: "top 55%", scrub: 0.6 },
          });
          gsap.from(row.querySelectorAll("[data-row-item]"), {
            ...(row.dataset.row === "highlight" ? { x: -28 } : { y: 40 }),
            opacity: 0,
            stagger: 0.1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 85%", once: true },
          });
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      {stats.map(({ value, label }) => (
        <div key={label} data-row className="relative flex items-end justify-between gap-6 py-6 sm:py-8">
          <span data-row-item className="max-w-[12rem] text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
            {label}
          </span>
          <span data-row-item className="text-[clamp(3rem,2rem+5vw,6.5rem)] font-extrabold leading-none tracking-tighter text-ink">
            <CountUp value={value} duration={2} />
          </span>
          <span className="absolute inset-x-0 bottom-0 h-px bg-ink/10">
            <span data-row-line className="block h-full origin-left bg-ink" />
          </span>
        </div>
      ))}

      {highlights.map((item) => (
        <div key={item} data-row="highlight" className="group relative py-4 sm:py-5">
          <span className="absolute inset-0 origin-bottom scale-y-0 rounded-xl bg-lime transition-transform duration-500 ease-out group-hover:scale-y-100" />
          <div data-row-item className="relative flex items-center gap-4 px-1 sm:gap-5 sm:px-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-lime sm:h-11 sm:w-11">
              <Check className="h-4 w-4" />
            </span>
            <span className="min-w-0 text-[clamp(1.05rem,0.95rem+0.6vw,1.5rem)] font-bold leading-snug tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2">
              {item}
            </span>
          </div>
          <span className="absolute inset-x-0 bottom-0 h-px bg-ink/10">
            <span data-row-line className="block h-full origin-left bg-ink" />
          </span>
        </div>
      ))}
    </div>
  );
}
