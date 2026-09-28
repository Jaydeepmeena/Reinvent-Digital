import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

// The deliverables read as a long column on a phone, so below `md` they become
// a swipeable track instead. One card at a time, with the count and arrows.
export default function IncludesCarousel({ items, className = "" }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.firstElementChild;
      if (!card) return;
      const step = card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
      setIndex(Math.max(0, Math.min(items.length - 1, Math.round(track.scrollLeft / step))));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [items.length]);

  const go = (next) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;
    const step = card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
    const clamped = Math.max(0, Math.min(items.length - 1, next));
    track.scrollTo({ left: clamped * step, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div className="mb-4 flex items-center justify-between px-5">
        <span className="text-[13px] font-semibold tabular-nums text-ink-soft">
          <span className="text-ink">{String(index + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}
        </span>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous deliverable"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors disabled:opacity-35 enabled:active:bg-ink enabled:active:text-cream"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === items.length - 1}
            aria-label="Next deliverable"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors disabled:opacity-35 enabled:active:bg-ink enabled:active:text-cream"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* data-lenis-prevent so the page's smooth scroll doesn't swallow the swipe */}
      <ul
        ref={trackRef}
        data-lenis-prevent
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <li
            key={item}
            className={`flex min-h-[13rem] w-[78%] shrink-0 snap-start flex-col justify-between rounded-3xl border p-6 transition-colors duration-300 ${
              i === index ? "border-lime bg-lime text-ink" : "border-ink/10 bg-white text-ink"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold tabular-nums opacity-40">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
                  i === index ? "bg-ink text-lime" : "bg-lime text-ink"
                }`}
              >
                <Check className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-6 text-[15px] font-semibold leading-snug">{item}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
        {items.map((item, i) => (
          <button
            key={item}
            type="button"
            tabIndex={-1}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-ink" : "w-1.5 bg-ink/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
