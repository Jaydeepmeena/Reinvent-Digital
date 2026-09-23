import { useRef } from "react";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "./gsap";

export function BentoGrid({ className = "", children }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tiles = [...ref.current.querySelectorAll("[data-bento]")];
        gsap.set(tiles, { opacity: 0, y: 48, scale: 0.94 });
        const triggers = ScrollTrigger.batch(tiles, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.09,
              duration: 0.95,
              ease: "power3.out",
              overwrite: true,
              clearProps: "transform",
            }),
        });
        return () => triggers.forEach((t) => t.kill());
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`grid gap-4 sm:gap-5 ${className}`}>
      {children}
    </div>
  );
}

export function BentoTile({ className = "", children, ...rest }) {
  return (
    <div
      data-bento
      className={`group relative overflow-hidden rounded-3xl p-6 transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10 sm:p-8 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

const BAR_HEIGHTS = [34, 48, 42, 60, 55, 72, 68, 86, 80, 100];

export function GrowthBars({ className = "" }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-bar]", {
          scaleY: 0,
          transformOrigin: "50% 100%",
          stagger: 0.06,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} aria-hidden="true" className={`flex h-24 items-end gap-1.5 sm:h-28 sm:gap-2 ${className}`}>
      {BAR_HEIGHTS.map((h, i) => (
        <div
          key={i}
          data-bar
          className={`flex-1 rounded-t-md ${i === BAR_HEIGHTS.length - 1 ? "bg-lime" : "bg-lime/25"}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
