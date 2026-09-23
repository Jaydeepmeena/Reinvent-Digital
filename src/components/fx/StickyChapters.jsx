import { useRef } from "react";
import SplitReveal from "./SplitReveal";
import ScrubText from "./ScrubText";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "./gsap";

export default function StickyChapters({ chapters }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const root = ref.current;
      const numbers = [...root.querySelectorAll("[data-chapter-number]")];
      const show = (index) =>
        numbers.forEach((n, i) =>
          gsap.to(n, {
            yPercent: i === index ? 0 : i < index ? -100 : 100,
            opacity: i === index ? 1 : 0,
            duration: 0.7,
            ease: "power3.out",
            overwrite: true,
          })
        );

      numbers.forEach((n, i) => gsap.set(n, { yPercent: i ? 100 : 0, opacity: i ? 0 : 1 }));
      const bar = root.querySelector("[data-chapter-bar]");

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        root.querySelectorAll("[data-chapter]").forEach((chapter, i) => {
          ScrollTrigger.create({
            trigger: chapter,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => self.isActive && show(i),
          });
        });
        gsap.from(bar, {
          scaleY: 0,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top 55%", end: "bottom 55%", scrub: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="hidden lg:col-span-4 lg:block">
        <div className="sticky top-32 flex items-start gap-6">
          <div className="relative h-56 w-1 overflow-hidden rounded-full bg-ink/10">
            <div data-chapter-bar className="h-full w-full origin-top bg-lime" />
          </div>
          <div className="relative h-[clamp(7rem,10vw,10rem)] flex-1 overflow-hidden">
            {chapters.map((_, i) => (
              <span
                key={i}
                data-chapter-number
                className="absolute inset-0 text-[clamp(7rem,10vw,10rem)] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:2px_#1b1b17]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-16 sm:space-y-24 lg:col-span-8">
        {chapters.map(({ heading, body }, i) => (
          <article key={heading} data-chapter className="lg:min-h-[45vh]">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 text-xs font-bold tabular-nums text-ink lg:hidden">
              {String(i + 1).padStart(2, "0")}
            </span>
            <SplitReveal
              as="h2"
              type="blur"
              className="mt-4 text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)] font-extrabold leading-tight tracking-tight text-ink lg:mt-0"
            >
              {heading}
            </SplitReveal>
            <ScrubText className="mt-5 text-[clamp(1.1rem,1rem+0.55vw,1.4rem)] leading-relaxed text-ink">{body}</ScrubText>
          </article>
        ))}
      </div>
    </div>
  );
}
