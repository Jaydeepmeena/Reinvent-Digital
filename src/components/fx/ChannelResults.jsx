import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "../motion/CountUp";
import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";

// The "results by channel" breakdown as side-by-side comparison cards: one card
// per channel, each listing its metrics with a big figure that counts up once
// the panel scrolls into view. No tabs — every channel is visible at once.
//
// Each `channels` entry is { name, metrics: [{ value, label }] }.
export default function ChannelResults({ channels = [] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  if (!channels.length) return null;

  const grid =
    channels.length === 1
      ? "mx-auto max-w-md"
      : channels.length === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section ref={ref} className="section-y bg-ink text-cream">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Eyebrow tone="dark">Results by channel</Eyebrow>
        <SplitReveal
          as="h2"
          type="skewLines"
          className="mt-4 text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.4rem)] font-extrabold leading-tight tracking-tight"
        >
          The Numbers Behind Each Channel
        </SplitReveal>

        <div className={`mt-10 grid gap-4 ${grid}`}>
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 transition-colors duration-300 hover:border-lime/40 hover:bg-cream/[0.05] sm:p-7"
            >
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime" />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime">{channel.name}</h3>
              </div>
              <dl className="mt-6 space-y-4">
                {channel.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-baseline justify-between gap-4 border-t border-cream/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <dt className="text-[13px] leading-snug text-cream/55">{metric.label}</dt>
                    <dd className="shrink-0 text-[clamp(1.4rem,1.1rem+1vw,2rem)] font-extrabold leading-none text-lime">
                      <CountUp value={metric.value} trigger={inView} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
