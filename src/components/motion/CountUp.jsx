import { useEffect, useMemo, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "./easing";

const NUMBER = /^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/;

function parse(value, pad) {
  const match = String(value).match(NUMBER);
  if (!match) return null;
  const [, prefix, raw, suffix] = match;
  if (!prefix && !suffix && /^(19|20)\d{2}$/.test(raw)) return null; // a year, not a quantity
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return {
    prefix,
    suffix,
    target: parseFloat(raw.replace(/,/g, "")),
    format: (n) =>
      n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        minimumIntegerDigits: pad ?? 1,
        useGrouping: raw.includes(","),
      }),
  };
}

// Writes straight to the DOM while counting: no React re-render per frame.
export default function CountUp({ value, duration = 1.6, pad, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parse(value, pad), [value, pad]);
  const animated = parsed && !reduce;

  useEffect(() => {
    if (!inView || !animated) return;
    const el = ref.current;
    const controls = animate(0, parsed.target, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = `${parsed.prefix}${parsed.format(v)}${parsed.suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, animated, parsed, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {animated ? `${parsed.prefix}${parsed.format(0)}${parsed.suffix}` : String(value)}
    </span>
  );
}
