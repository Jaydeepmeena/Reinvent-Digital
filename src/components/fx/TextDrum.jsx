import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

export default function TextDrum({ items }) {
  const ref = useRef(null);
  const drumRef = useRef(null);
  const step = 360 / items.length;

  useGSAP(
    () => {
      const drum = drumRef.current;
      const faces = [...drum.children];

      const layout = () => {
        const faceHeight = faces[0].offsetHeight;
        const radius = faceHeight / 2 / Math.tan(Math.PI / items.length);
        const origin = `50% 50% ${-radius}px`;
        faces.forEach((face, i) => gsap.set(face, { yPercent: -50, rotationX: -i * step, transformOrigin: origin }));
        gsap.set(drum, { transformOrigin: origin });
      };
      layout();
      window.addEventListener("resize", layout);

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.to(drum, {
          rotationX: step * (items.length - 1),
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      });

      return () => window.removeEventListener("resize", layout);
    },
    { scope: ref }
  );

  return (
    <div ref={ref} aria-label={items.join(", ")} className="relative flex h-[16rem] items-center justify-center overflow-hidden sm:h-[22rem] [perspective:900px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 bg-gradient-to-b from-ink to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      <div ref={drumRef} aria-hidden="true" className="relative w-full [transform-style:preserve-3d]">
        {items.map((item, i) => (
          <div
            key={item}
            className={`absolute inset-x-0 top-0 whitespace-nowrap text-center text-[clamp(1.75rem,0.6rem+6vw,5.5rem)] font-extrabold leading-[1.15] tracking-tight [backface-visibility:hidden] ${
              i % 2 ? "text-lime" : "text-cream"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
