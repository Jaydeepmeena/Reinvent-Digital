import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "../motion/CountUp";
import { EASE } from "../motion/easing";
import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";

// The "results by channel" breakdown, as an interactive panel: one tab per
// channel, and the selected channel's metrics draw in as bars that grow from
// zero while the figures count up. Switching tabs replays the animation; the
// first play waits until the panel scrolls into view.
//
// Each `channels` entry is { name, metrics: [{ value, label }] }. Bar length is
// the metric's figure relative to the largest figure in that channel, so the
// bars read as a quick visual ranking rather than an exact chart.
const numeric = (value) => {
  const match = String(value).replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
  return match ? Math.abs(parseFloat(match[0])) : 0;
};

export default function ChannelResults({ channels = [] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  if (!channels.length) return null;

  const index = Math.min(active, channels.length - 1);
  const channel = channels[index];
  const max = Math.max(...channel.metrics.map((metric) => numeric(metric.value)), 1);

  return (
    <section ref={ref} className="section-y bg-ink text-cream">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Eyebrow tone="dark">Results by channel</Eyebrow>
        <SplitReveal
          as="h2"
          type="skewLines"
          className="mt-4 text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.4rem)] font-extrabold leading-tight tracking-tight"
        >
          The Numbers Behind Each Channel
        </SplitReveal>

        {channels.length > 1 && (
          <div role="tablist" aria-label="Channels" className="mt-8 flex flex-wrap gap-2.5">
            {channels.map((entry, i) => (
              <button
                key={entry.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  i === index
                    ? "bg-lime text-ink"
                    : "border border-cream/15 text-cream/70 hover:border-cream/40 hover:text-cream"
                }`}
              >
                {entry.name}
              </button>
            ))}
          </div>
        )}

        <ul key={index} className="mt-9 space-y-6">
          {channel.metrics.map((metric, i) => {
            const pct = Math.max(5, Math.round((numeric(metric.value) / max) * 100));
            return (
              <li key={`${index}-${metric.label}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[14px] leading-snug text-cream/70">{metric.label}</span>
                  <span className="shrink-0 text-[clamp(1.35rem,1.1rem+1vw,2rem)] font-extrabold leading-none text-lime">
                    <CountUp value={metric.value} trigger={inView} />
                  </span>
                </div>
                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-cream/10">
                  <motion.div
                    className="h-full rounded-full bg-lime"
                    style={{ width: `${pct}%`, transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.05 + i * 0.08 }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
