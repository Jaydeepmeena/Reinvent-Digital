import { useId, useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

export default function RotatingBadge({ text, icon: Icon, className = "" }) {
  const ref = useRef(null);
  const pathId = useId().replace(/:/g, "");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current, { scale: 0.6, rotation: -120, opacity: 0, duration: 1.6, ease: "expo.out", delay: 0.2 });
        gsap.to("[data-ring]", { rotation: 360, duration: 26, ease: "none", repeat: -1 });
        gsap.to("[data-ring-outer]", {
          rotation: -200,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom top", scrub: 1 },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`relative aspect-square ${className}`}>
      <div data-ring-outer className="absolute inset-0 rounded-full border border-dashed border-ink/25" />
      <div className="absolute inset-[7%] rounded-full bg-ink shadow-2xl shadow-ink/25" />
      <svg data-ring aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-[7%] h-[86%] w-[86%]">
        <defs>
          <path id={pathId} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-lime text-[12px] font-bold uppercase">
          <textPath href={`#${pathId}`} textLength={2 * Math.PI * 78 - 6} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-lime text-ink">
        {Icon && <Icon className="h-1/3 w-1/3" />}
      </div>
    </div>
  );
}
