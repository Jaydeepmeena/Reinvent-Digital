import { useRef } from "react";
import { gsap, MOTION_OK, SplitText, useGSAP } from "./gsap";

const PRESETS = {
  chars3d: {
    type: "words,chars",
    target: "chars",
    vars: {
      rotationX: -90,
      yPercent: 50,
      opacity: 0,
      transformOrigin: "50% 50% -0.4em",
      stagger: 0.016,
      duration: 1,
      ease: "power3.out",
    },
  },
  words: {
    type: "words",
    mask: "words",
    target: "words",
    vars: { yPercent: 110, stagger: 0.05, duration: 0.9, ease: "power3.out" },
  },
  lines: {
    type: "lines",
    mask: "lines",
    target: "lines",
    vars: { yPercent: 105, stagger: 0.09, duration: 1, ease: "power3.out" },
  },
  skewLines: {
    type: "lines",
    mask: "lines",
    target: "lines",
    vars: { yPercent: 120, skewY: 8, transformOrigin: "0% 100%", stagger: 0.12, duration: 1.2, ease: "expo.out" },
  },
  blur: {
    type: "words",
    target: "words",
    vars: { opacity: 0, filter: "blur(14px)", y: 14, stagger: 0.05, duration: 1.1, ease: "power2.out" },
  },
  wave: {
    type: "words,chars",
    target: "chars",
    vars: { yPercent: 130, opacity: 0, rotation: 8, stagger: 0.028, duration: 0.8, ease: "back.out(2.4)" },
  },
};

export default function SplitReveal({
  as: Tag = "div",
  type = "lines",
  onLoad = false,
  delay = 0,
  className,
  children,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const preset = PRESETS[type];
        const split = SplitText.create(ref.current, {
          type: preset.type,
          mask: preset.mask,
          autoSplit: true,
          onSplit(self) {
            if (type === "chars3d") gsap.set(self.words, { perspective: 600 });
            return gsap.from(self[preset.target], {
              ...preset.vars,
              delay,
              scrollTrigger: onLoad ? undefined : { trigger: ref.current, start: "top 88%", once: true },
            });
          },
        });
        return () => split.revert();
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
