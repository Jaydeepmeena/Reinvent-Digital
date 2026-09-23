import { useRef } from "react";
import CountUp from "../motion/CountUp";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

const toNumber = (v) => parseFloat(String(v).replace(/[^\d.]/g, "")) || 0;

export default function BeforeAfter({ before, after }) {
  const ref = useRef(null);
  const b = toNumber(before.value);
  const a = toNumber(after.value);
  const ratio = b ? a / b : 0;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const scrollTrigger = { trigger: ref.current, start: "top 80%", once: true };
        gsap.from("[data-fill]", { scaleX: 0, duration: 1.6, stagger: 0.35, ease: "power4.out", scrollTrigger });
        gsap.from("[data-ratio]", { scale: 0, rotation: -90, duration: 0.9, delay: 1.2, ease: "back.out(2)", scrollTrigger });
      });
    },
    { scope: ref }
  );

  const rows = [
    { ...before, pct: a ? (b / a) * 100 : 50, fill: "bg-ink text-cream", track: "bg-ink/5" },
    { ...after, pct: 100, fill: "bg-lime text-ink", track: "bg-lime/15" },
  ];

  return (
    <div ref={ref}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Before → after</span>
        {ratio > 1 && (
          <span
            data-ratio
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-lime"
          >
            <span className="text-lg font-extrabold leading-none">{ratio.toFixed(1)}x</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-cream/60">growth</span>
          </span>
        )}
      </div>
      <div className="space-y-5">
        {rows.map(({ value, label, sub, pct, fill, track }) => (
          <div key={label}>
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm">
              <span className="font-semibold uppercase tracking-wider text-ink">{sub}</span>
              <span className="text-ink-soft">{label}</span>
            </div>
            <div className={`h-14 overflow-hidden rounded-2xl sm:h-16 ${track}`}>
              <div
                data-fill
                className={`flex h-full origin-left items-center justify-end rounded-2xl px-4 sm:px-5 ${fill}`}
                style={{ width: `${Math.max(pct, 34)}%` }}
              >
                <span className="text-lg font-extrabold sm:text-2xl">
                  <CountUp value={value} duration={1.8} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
