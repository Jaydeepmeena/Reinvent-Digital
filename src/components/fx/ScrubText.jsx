import { useRef } from "react";
import { gsap, MOTION_OK, SplitText, useGSAP } from "./gsap";

export default function ScrubText({ as: Tag = "p", dim = 0.16, className, children }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(ref.current, {
          type: "words",
          autoSplit: true,
          onSplit(self) {
            return gsap.fromTo(
              self.words,
              { opacity: dim },
              {
                opacity: 1,
                stagger: 0.1,
                ease: "none",
                scrollTrigger: { trigger: ref.current, start: "top 85%", end: "bottom 50%", scrub: 0.6 },
              }
            );
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
