import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "../data/industries";
import SectionHeader from "./motion/SectionHeader";
import TiltCard from "./motion/TiltCard";
import CountUp from "./motion/CountUp";
import { EASE } from "./motion/easing";

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-y bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Designed for operational scale"
          title="Best for healthcare groups"
          accent="with more than one front door."
          description="The system earns its keep when patient demand, locations and call teams are too complex for disconnected channel reports."
        />

        <div className="section-head-gap grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {INDUSTRIES.map(({ slug, title, eyebrow, icon: Icon, metric }, i) => (
            <TiltCard
              key={slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              className="group rounded-2xl"
            >
              <Link
                to={`/industries/${slug}`}
                className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm shadow-ink/[0.03] transition-colors duration-300 hover:border-ink hover:bg-ink"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-soft text-green-deep transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                </div>
                <span className="mt-6 text-[11px] font-semibold uppercase tracking-wide text-ink-soft transition-colors duration-300 group-hover:text-cream/50">
                  {eyebrow}
                </span>
                <h3 className="mt-1.5 text-lg font-bold text-ink transition-colors duration-300 group-hover:text-cream">
                  {title}
                </h3>
                {metric && (
                  <div className="mt-auto pt-6">
                    <div className="border-t border-ink/10 pt-4 transition-colors duration-300 group-hover:border-cream/10">
                      <div className="text-2xl font-extrabold text-green-deep transition-colors duration-300 group-hover:text-lime">
                        <CountUp value={metric.value} />
                      </div>
                      <div className="mt-0.5 text-[13px] text-ink-soft transition-colors duration-300 group-hover:text-cream/60">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
