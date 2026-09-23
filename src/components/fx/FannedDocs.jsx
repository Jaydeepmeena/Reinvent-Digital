import { useRef } from "react";
import { FINE_POINTER, gsap, MOTION_OK, useGSAP } from "./gsap";

const CARDS = [
  {
    tone: "bg-white text-ink border border-ink/10",
    pose: "[transform:translateX(calc(var(--fan)*-1))_rotate(-10deg)]",
    bar: "bg-ink/10",
  },
  { tone: "bg-lime text-ink", pose: "[transform:translateX(var(--fan))_rotate(7deg)_translateZ(30px)]", bar: "bg-ink/15" },
  { tone: "bg-ink text-cream", pose: "[transform:rotate(-2deg)_translateZ(60px)]", bar: "bg-white/10" },
];

export default function FannedDocs({ items }) {
  const ref = useRef(null);
  const docs = items.slice(0, 3);

  useGSAP(
    () => {
      const root = ref.current;
      const cards = [...root.querySelectorAll("[data-doc]")];
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap.from(cards, {
          rotation: 0,
          x: 0,
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1.3,
          delay: 0.35,
          ease: "expo.out",
          clearProps: "transform",
        });
      });

      mm.add(`${MOTION_OK} and ${FINE_POINTER}`, () => {
        const rx = gsap.quickTo(root, "rotationX", { duration: 0.8, ease: "power3.out" });
        const ry = gsap.quickTo(root, "rotationY", { duration: 0.8, ease: "power3.out" });
        const move = (e) => {
          ry((e.clientX / window.innerWidth - 0.5) * 18);
          rx(-(e.clientY / window.innerHeight - 0.5) * 12);
        };
        window.addEventListener("pointermove", move);
        return () => window.removeEventListener("pointermove", move);
      });
    },
    { scope: ref }
  );

  return (
    <div aria-hidden="true" className="[perspective:1400px]">
      <div ref={ref} className="relative mx-auto h-[20rem] w-full max-w-sm [--fan:9%] [transform-style:preserve-3d] sm:h-[26rem] sm:[--fan:20%]">
        {docs.map(({ title, tag }, i) => {
          const card = CARDS[i];
          return (
            <article
              key={title}
              data-doc
              className={`absolute inset-x-8 top-4 flex h-[82%] flex-col rounded-3xl p-6 shadow-2xl shadow-ink/20 sm:p-7 ${card.tone} ${card.pose}`}
            >
              <span className="w-fit rounded-full bg-current/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
                {tag}
              </span>
              <h3 className="mt-5 text-lg font-extrabold leading-snug">{title}</h3>
              <div className="mt-auto space-y-2" aria-hidden="true">
                <div className={`h-1.5 w-full rounded-full ${card.bar}`} />
                <div className={`h-1.5 w-5/6 rounded-full ${card.bar}`} />
                <div className={`h-1.5 w-2/3 rounded-full ${card.bar}`} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
