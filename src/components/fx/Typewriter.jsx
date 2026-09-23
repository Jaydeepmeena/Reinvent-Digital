import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

export default function Typewriter({ text, delay = 0.7, speed = 0.05, className = "" }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current.querySelector("[data-typed]");
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const progress = { chars: 0 };
        el.textContent = "";
        gsap.to(progress, {
          chars: text.length,
          delay,
          duration: text.length * speed,
          ease: "none",
          onUpdate: () => {
            el.textContent = text.slice(0, Math.round(progress.chars));
          },
        });
        return () => {
          el.textContent = text;
        };
      });
    },
    { scope: ref, dependencies: [text] }
  );

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" data-typed>
        {text}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[0.08em] min-w-[3px] translate-y-[0.08em] animate-caret bg-lime"
      />
    </span>
  );
}
