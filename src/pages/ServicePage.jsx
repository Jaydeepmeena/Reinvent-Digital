import { Fragment } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Check } from "lucide-react";
import { getServiceBySlug } from "../data/services";
import SubPageHero from "../components/SubPageHero";
import CTASection from "../components/CTASection";
import CountUp from "../components/motion/CountUp";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import StackCards from "../components/fx/StackCards";
import VelocityMarquee from "../components/fx/VelocityMarquee";
import { BentoGrid, BentoTile, GrowthBars } from "../components/fx/Bento";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  const {
    category, icon, eyebrow, title, accent, description,
    highlights, metric, heroStats, includes, process, proofStats,
  } = service;

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          variant="services"
          trail={[
            { label: "What We Do", href: "/#services" },
            { label: category },
            { label: title },
          ]}
          eyebrow={`${category} · ${eyebrow}`}
          title={title}
          accent={accent}
          description={description}
          stats={heroStats}
          ctaHref="/contact"
          icon={icon}
          highlights={highlights}
          metric={metric}
        />

        <VelocityMarquee items={[title, ...highlights]} className="border-y border-ink/10 bg-white" />

        <section className="section-y">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <BentoGrid className="md:grid-cols-2 lg:grid-cols-4">
              <BentoTile className="flex flex-col justify-between border border-ink/10 bg-white md:col-span-2">
                <Eyebrow>What's included</Eyebrow>
                <SplitReveal
                  as="h2"
                  type="chars3d"
                  className="mt-4 text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-extrabold leading-tight tracking-tight text-ink"
                >
                  Everything needed to turn {title} into booked patients.
                </SplitReveal>
                <p className="mt-4 text-sm text-ink-soft">{includes.length} deliverables, one accountable team.</p>
              </BentoTile>

              <BentoTile className="flex flex-col bg-ink text-cream md:col-span-2 lg:row-span-2">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-spin-slow rounded-full border border-dashed border-lime/30"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">{metric.label}</span>
                <div className="mt-4 text-[clamp(3rem,2rem+5vw,5.5rem)] font-extrabold leading-none tracking-tight">
                  <CountUp value={metric.value} duration={2} />
                </div>
                {metric.sub && <p className="mt-3 max-w-xs text-sm text-cream/60">{metric.sub}</p>}
                <GrowthBars className="mt-auto pt-10" />
              </BentoTile>

              {includes.map((item, i) => (
                <BentoTile
                  key={item}
                  className={`flex flex-col gap-6 border ${
                    i === 2 ? "border-lime bg-lime text-ink" : "border-ink/10 bg-white text-ink hover:border-ink/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tabular-nums opacity-40">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[360deg] ${
                        i === 2 ? "bg-ink text-lime" : "bg-lime text-ink"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-auto text-[15px] font-semibold leading-snug">{item}</p>
                </BentoTile>
              ))}
            </BentoGrid>
          </div>
        </section>

        <section className="section-y border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Eyebrow>How we approach it</Eyebrow>
            <SplitReveal
              as="h2"
              type="chars3d"
              className="mb-10 mt-4 max-w-3xl text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink sm:mb-14"
            >
              A repeatable process, not a one-off campaign.
            </SplitReveal>
            <StackCards steps={process} />
          </div>
        </section>

        <section className="section-y">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <BentoGrid className="sm:grid-cols-3">
              {proofStats.map(({ value, label }, i) => (
                <BentoTile
                  key={label}
                  className={`text-center ${i === 1 ? "bg-lime text-ink" : "bg-ink text-cream"}`}
                >
                  <div className="text-[clamp(2.25rem,1.6rem+2.4vw,3.25rem)] font-extrabold leading-none">
                    <CountUp value={value} />
                  </div>
                  <div className="mt-3 text-[13px] opacity-70">{label}</div>
                </BentoTile>
              ))}
            </BentoGrid>
          </div>
        </section>

        <CTASection
          monochrome
          eyebrow={category}
          heading={`Ready to put ${title} to work for your clinic?`}
          body="Tell us about your current setup — we'll show you exactly where the gaps are and what it would take to close them."
        />
      </Fragment>
    </InnerPage>
  );
}
