import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "./easing";

const NUMBER = /^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/;

function parse(value) {
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
        useGrouping: raw.includes(","),
      }),
  };
}

export default function CountUp({ value, duration = 1.6, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parse(value), [value]);
  const [display, setDisplay] = useState(() =>
    parsed && !reduce ? `${parsed.prefix}${parsed.format(0)}${parsed.suffix}` : String(value)
  );

  useEffect(() => {
    if (!inView || !parsed || reduce) return;
    const controls = animate(0, parsed.target, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(`${parsed.prefix}${parsed.format(v)}${parsed.suffix}`),
    });
    return () => controls.stop();
  }, [inView, parsed, reduce, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {display}
    </span>
  );
}
