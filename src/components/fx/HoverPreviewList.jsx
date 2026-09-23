import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FINE_POINTER, gsap, MOTION_OK, useGSAP } from "./gsap";

export default function HoverPreviewList({ items, href = "/contact" }) {
  const ref = useRef(null);
  const previewRef = useRef(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const root = ref.current;
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        root.querySelectorAll("[data-row]").forEach((row, i) => {
          gsap.fromTo(
            row,
            { clipPath: "inset(0% 100% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              delay: i * 0.08,
              ease: "power4.inOut",
              clearProps: "clipPath",
              scrollTrigger: { trigger: row, start: "top 90%", once: true },
            }
          );
        });
      });

      mm.add(`${MOTION_OK} and ${FINE_POINTER} and (min-width: 1024px)`, () => {
        const preview = previewRef.current;
        const xTo = gsap.quickTo(preview, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(preview, "y", { duration: 0.6, ease: "power3.out" });
        gsap.set(preview, { xPercent: -50, yPercent: -50, scale: 0, rotation: -8 });

        const move = (e) => {
          const r = root.getBoundingClientRect();
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
        };
        const enter = () => gsap.to(preview, { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.6)" });
        const leave = () => gsap.to(preview, { scale: 0, rotation: -8, duration: 0.35, ease: "power2.in" });

        root.addEventListener("pointermove", move);
        root.addEventListener("pointerenter", enter);
        root.addEventListener("pointerleave", leave);
        return () => {
          root.removeEventListener("pointermove", move);
          root.removeEventListener("pointerenter", enter);
          root.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: ref }
  );

  const current = items[active];

  return (
    <div ref={ref} className="relative border-t border-ink/15">
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden w-72 rounded-3xl bg-ink p-6 text-cream shadow-2xl shadow-ink/30 lg:block"
        style={{ transform: "scale(0)" }}
      >
        <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">{current.tag}</span>
        <p className="mt-4 text-[15px] leading-relaxed text-cream/75">{current.summary}</p>
        <div className="mt-5 space-y-2" aria-hidden="true">
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-lime/60" />
        </div>
      </div>

      <ul>
        {items.map(({ title, tag, summary }, i) => (
          <li key={title} data-row className="border-b border-ink/15">
            <Link
              to={href}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden py-6 sm:gap-8 sm:py-8"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-lime transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              <span className="relative w-8 text-sm font-bold tabular-nums text-ink/40 sm:w-12 sm:pl-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative min-w-0 transition-transform duration-500 group-hover:translate-x-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">{tag}</span>
                <span className="mt-1 block text-balance text-[clamp(1.2rem,1rem+1.1vw,2rem)] font-extrabold leading-tight tracking-tight text-ink">
                  {title}
                </span>
                <span className="mt-2 block text-[15px] leading-relaxed text-ink-soft lg:hidden">{summary}</span>
              </span>
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-lime sm:mr-2 sm:h-14 sm:w-14">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
