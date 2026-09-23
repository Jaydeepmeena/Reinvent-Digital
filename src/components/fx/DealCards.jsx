import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

const TILTS = [-14, 9, -5, 12, -8];

export default function DealCards({ className = "", children }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const root = ref.current;
        const cards = [...root.querySelectorAll("[data-deal]")];
        const box = root.getBoundingClientRect();
        const cx = box.left + box.width / 2;
        const cy = box.top + Math.min(box.height, 360) / 2;

        gsap.from(cards, {
          x: (i, el) => {
            const r = el.getBoundingClientRect();
            return cx - (r.left + r.width / 2);
          },
          y: (i, el) => {
            const r = el.getBoundingClientRect();
            return cy - (r.top + r.height / 2);
          },
          rotation: (i) => TILTS[i % TILTS.length],
          scale: 0.85,
          opacity: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          clearProps: "transform",
          scrollTrigger: { trigger: root, start: "top 75%", once: true, invalidateOnRefresh: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
