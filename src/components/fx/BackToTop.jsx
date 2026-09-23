import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { gsap, ScrollTrigger, useGSAP } from "./gsap";

const R = 22;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function BackToTop() {
  const ref = useRef(null);
  const ringRef = useRef(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      gsap.set(ref.current, { autoAlpha: 0, y: 16 });
      const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          gsap.set(ringRef.current, { strokeDashoffset: CIRCUMFERENCE * (1 - self.progress) });
          const show = self.scroll() > 480;
          gsap.to(ref.current, { autoAlpha: show ? 1 : 0, y: show ? 0 : 16, duration: 0.35, overwrite: "auto" });
        },
      });
      return () => trigger.kill();
    },
    { scope: ref }
  );

  const toTop = () => (lenis ? lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: "smooth" }));

  return (
    <button
      ref={ref}
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      className="group fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream shadow-xl shadow-ink/25 transition-colors hover:bg-lime hover:text-ink sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
    >
      <svg aria-hidden="true" viewBox="0 0 56 56" className="absolute inset-0 -rotate-90">
        <circle cx="28" cy="28" r={R} fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />
        <circle
          ref={ringRef}
          cx="28"
          cy="28"
          r={R}
          fill="none"
          stroke="#a7cf3b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <ArrowUp className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
