import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

// Sticky stacking needs room for a whole card below the navbar; short screens (landscape phones) get a plain list.
const TALL_ENOUGH = "(min-height: 460px)";

const THEMES = {
  light: ["bg-ink text-cream", "bg-lime text-ink", "bg-white text-ink border border-ink/10"],
  dark: ["bg-[#26261f] text-cream border border-cream/10", "bg-lime text-ink", "bg-white text-ink"],
};

export default function StackCards({ steps, tone = "light" }) {
  const ref = useRef(null);
  const theme = THEMES[tone];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const root = ref.current;

      mm.add(`${MOTION_OK} and ${TALL_ENOUGH}`, () => {
        const wrappers = [...root.querySelectorAll("[data-stack-item]")];
        const cards = [...root.querySelectorAll("[data-stack-card]")];
        const shades = [...root.querySelectorAll("[data-stack-shade]")];
        const last = wrappers[wrappers.length - 1];

        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          const scrollTrigger = {
            trigger: wrappers[i + 1],
            start: "top bottom",
            endTrigger: last,
            end: "top 30%",
            scrub: true,
          };
          gsap.to(card, {
            scale: 1 - (cards.length - 1 - i) * 0.05,
            rotationX: 6,
            transformPerspective: 1200,
            transformOrigin: "50% 0%",
            ease: "none",
            scrollTrigger,
          });
          gsap.to(shades[i], { opacity: 0.18, ease: "none", scrollTrigger });
        });
      });

      mm.add(`${MOTION_OK} and (max-height: 459.98px)`, () => {
        root.querySelectorAll("[data-stack-card]").forEach((card) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          });
        });
      });
    },
    { scope: ref }
  );

  return (
    <ol ref={ref} className="relative">
      {steps.map(({ title, body, tag }, i) => (
        <li
          key={title}
          data-stack-item
          className="pb-4 last:pb-0 sm:pb-10 [@media(min-height:460px)]:sticky"
          style={{ top: `calc(5rem + ${i}rem)` }}
        >
          <article
            data-stack-card
            className={`relative overflow-hidden rounded-3xl p-5 shadow-2xl shadow-ink/20 will-change-transform sm:p-10 lg:p-12 ${
              theme[i % theme.length]
            }`}
          >
            <div className="grid items-start gap-3 sm:grid-cols-[auto_1fr] sm:gap-10">
              <span className="text-[clamp(2.75rem,1.8rem+6vw,7rem)] font-extrabold leading-[0.85] tracking-tighter [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_currentColor] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                {tag && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">{tag}</span>
                )}
                <h3 className="mt-1 text-balance text-[clamp(1.4rem,1rem+1.6vw,2.25rem)] font-extrabold leading-tight tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed opacity-70 sm:mt-3 sm:text-[17px]">{body}</p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-current opacity-10"
            />
            <div data-stack-shade aria-hidden="true" className="pointer-events-none absolute inset-0 bg-ink opacity-0" />
          </article>
        </li>
      ))}
    </ol>
  );
}
