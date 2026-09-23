import { useRef } from "react";
import TiltCard from "../motion/TiltCard";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

const MESSAGES = [
  { from: "clinic", text: "Hi — we run 12 dental clinics and evening enquiries keep going unanswered." },
  { from: "rd", text: "That's usually a coverage gap, not a lead gap. Want a free funnel review this week?" },
  { from: "clinic", text: "Yes please. Tuesday works for our team." },
  { from: "rd", text: "Booked ✓ We'll bring your call data mapped hour by hour." },
];

export default function ChatVisual() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const bubbles = gsap.utils.toArray("[data-bubble]");
        const typing = ref.current.querySelector("[data-typing]");
        gsap.set(bubbles, { opacity: 0, y: 16, scale: 0.9 });
        gsap.set(typing, { opacity: 0 });

        const tl = gsap.timeline({ delay: 0.9 });
        bubbles.forEach((bubble, i) => {
          const fromRd = bubble.dataset.from === "rd";
          if (fromRd) {
            tl.to(typing, { opacity: 1, duration: 0.2 }).to({}, { duration: 0.9 }).to(typing, { opacity: 0, duration: 0.15 });
          }
          tl.to(bubble, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "back.out(2)",
            transformOrigin: fromRd ? "0% 100%" : "100% 100%",
          }, i === 0 ? 0 : "+=0.35");
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      <TiltCard max={5} glare="rgba(255,255,255,0.08)" className="rounded-3xl bg-ink p-5 shadow-2xl shadow-ink/25 sm:p-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-sm font-extrabold text-ink">RD</span>
          <div>
            <div className="text-sm font-bold text-cream">Reinvent Digital</div>
            <div className="flex items-center gap-1.5 text-xs text-cream/50">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-soft" />
              Typically replies within a day
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          {MESSAGES.map(({ from, text }) => (
            <p
              key={text}
              data-bubble
              data-from={from}
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-snug ${
                from === "rd" ? "self-start rounded-bl-md bg-lime text-ink" : "self-end rounded-br-md bg-white text-ink"
              }`}
            >
              {text}
            </p>
          ))}
          <div data-typing aria-hidden="true" className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-lime animate-bob" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
