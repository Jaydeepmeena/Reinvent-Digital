import { useRef } from "react";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "./gsap";

const BASE_SPEED = 2.4; // percent of the track per second

export default function VelocityMarquee({ items, tone = "light", className = "" }) {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const dark = tone === "dark";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const setX = gsap.quickSetter(trackRef.current, "xPercent");
        const setSkew = gsap.quickSetter(trackRef.current, "skewX", "deg");
        const wrap = gsap.utils.wrap(-50, 0);
        let x = 0;
        let direction = -1;
        let boost = 0;

        const tick = (_, deltaMs) => {
          x = wrap(x + direction * (BASE_SPEED + boost) * (deltaMs / 1000));
          setX(x);
          setSkew(-direction * boost * 0.35);
          boost *= 0.9;
        };

        const trigger = ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => (self.isActive ? gsap.ticker.add(tick) : gsap.ticker.remove(tick)),
          onUpdate: (self) => {
            direction = self.direction === 1 ? -1 : 1;
            boost = Math.min(Math.abs(self.getVelocity()) / 250, 14);
          },
        });

        return () => {
          gsap.ticker.remove(tick);
          trigger.kill();
        };
      });
    },
    { scope: ref }
  );

  const row = items.map((item, i) => (
    <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-[0.35em] pr-[0.35em]">
      <span
        className={
          i % 2
            ? `[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_currentColor] ${dark ? "text-cream/40" : "text-ink/30"}`
            : dark
              ? "text-cream"
              : "text-ink"
        }
      >
        {item}
      </span>
      <span className="text-[0.6em] text-lime">✱</span>
    </span>
  ));

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`overflow-hidden py-3 sm:py-4 ${dark ? "bg-ink" : ""} ${className}`}
    >
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap text-[clamp(1.5rem,1.05rem+2.2vw,3rem)] font-extrabold leading-none tracking-tight will-change-transform"
      >
        {row}
        {row}
      </div>
    </div>
  );
}
