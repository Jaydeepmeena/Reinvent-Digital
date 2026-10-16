import { useRef } from "react";
import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";
import ScrubText from "./ScrubText";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "./gsap";

export default function StickyChapters({ chapters }) {
  const ref = useRef(null);
  // One chapter is not a sequence, so it is not numbered: no counter rail, no
  // "01", and the prose takes the full width instead of leaving a gap where
  // the rail would be.
  const numbered = chapters.length > 1;

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
        if (bar) {
          gsap.from(bar, {
            scaleY: 0,
            ease: "none",
            scrollTrigger: { trigger: root, start: "top 55%", end: "bottom 55%", scrub: true },
          });
        }
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {numbered && (
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
      )}

      <div className={`space-y-16 sm:space-y-24 ${numbered ? "lg:col-span-8" : "max-w-4xl lg:col-span-12"}`}>
        {/* The minimum height gives each chapter enough scroll distance for the
            counter to track against it. With no counter there is nothing to
            track, and it would only leave a gap under the last line. */}
        {chapters.map(({ eyebrow, heading, body, highlight }, i) => (
          <article key={heading} data-chapter className={numbered ? "lg:min-h-[45vh]" : undefined}>
            {numbered && (
              <span className="inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 text-xs font-bold tabular-nums text-ink lg:hidden">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <SplitReveal
              as="h2"
              type="blur"
              className={`text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)] font-extrabold leading-tight tracking-tight text-ink ${
                numbered ? "mt-4 lg:mt-0" : eyebrow ? "mt-4" : ""
              }`}
            >
              {heading}
            </SplitReveal>
            {/* A chapter is usually one paragraph; a longer one sends an array
                and each paragraph is set on its own. */}
            {(Array.isArray(body) ? body : [body]).filter(Boolean).map((paragraph) => (
              <ScrubText
                key={paragraph.slice(0, 40)}
                className="mt-5 text-[clamp(1.1rem,1rem+0.55vw,1.4rem)] leading-relaxed text-ink"
              >
                {paragraph}
              </ScrubText>
            ))}
            {highlight && (
              <p className="mt-8 border-l-4 border-lime pl-5 text-[clamp(1.15rem,1rem+0.7vw,1.5rem)] font-bold leading-snug text-ink">
                {highlight}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
