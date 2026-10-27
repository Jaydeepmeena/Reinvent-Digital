import { useRef } from "react";
import CountUp from "../motion/CountUp";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

// The chips ring the cross at every width; they used to stack under it below xl.
const CHIP_POSITIONS = [
  "left-0 top-0 xl:top-2",
  "right-0 top-[19%] xl:top-16",
  "left-0 top-[46%] xl:top-[40%]",
  "right-0 top-[56%] xl:top-[55%]",
];

// The right-hand hero flourish on industry-style pages: a few highlights that
// float around a box, with one metric chip pinned to it. Desktop only.
export default function IndustryVisual({ highlights = [], metric }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-chip]", { scale: 0.4, opacity: 0, stagger: 0.12, duration: 0.8, delay: 0.9, ease: "back.out(2)" });
      });
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray("[data-chip]").forEach((chip, i) => {
          gsap.to(chip, { y: i % 2 ? 10 : -10, duration: 2.4 + i * 0.4, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.8 });
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="relative hidden lg:block">
      <div aria-hidden="true" className="mx-auto h-[24rem] w-full sm:h-[26rem] lg:h-[24rem] xl:h-[30rem]" />
      <ul className="pointer-events-none absolute inset-0 block">
        {highlights.map((item, i) => (
          <li
            key={item}
            data-chip
            className={`absolute max-w-[9.5rem] rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[11px] font-semibold leading-snug text-ink shadow-lg shadow-ink/10 sm:max-w-[13rem] sm:px-4 sm:py-2 sm:text-[12px] xl:max-w-[16rem] xl:text-[13px] ${CHIP_POSITIONS[i % CHIP_POSITIONS.length]}`}
          >
            {item}
          </li>
        ))}
      </ul>
      {metric && (
        <div
          data-chip
          className="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 rounded-2xl bg-ink px-4 py-3 text-cream shadow-xl shadow-ink/20 sm:px-5 sm:py-4 xl:left-0 xl:translate-x-0"
        >
          <div className="text-2xl font-extrabold text-lime">
            <CountUp value={metric.value} />
          </div>
          <div className="text-xs text-cream/60">{metric.label}</div>
        </div>
      )}
    </div>
  );
}
