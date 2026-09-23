import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

// Keep in sync with the `pin` custom variant in index.css.
const PIN_QUERY = "(min-width: 1024px) and (min-height: 700px)";
const NO_PIN_QUERY = `${MOTION_OK} and (max-width: 1023.98px), ${MOTION_OK} and (max-height: 699.98px)`;

export default function HorizontalScroll({ header, children, className = "" }) {
  const ref = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(`${MOTION_OK} and ${PIN_QUERY}`, () => {
        const track = trackRef.current;
        const distance = () => Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 72px",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        gsap.from(track.children, {
          rotationY: -25,
          opacity: 0,
          x: 80,
          stagger: 0.12,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });
      });

      mm.add(NO_PIN_QUERY, () => {
        [...trackRef.current.children].forEach((panel, i) => {
          gsap.from(panel, {
            x: i % 2 ? 60 : -60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 90%", once: true },
          });
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`pin:flex pin:min-h-[calc(100vh-72px)] pin:flex-col pin:justify-center ${className}`}>
      {header}
      <div className="overflow-hidden [perspective:1400px] pin:overflow-visible">
        <div ref={trackRef} className="grid gap-4 sm:gap-5 lg:grid-cols-3 pin:flex pin:w-max pin:flex-row pin:gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}
