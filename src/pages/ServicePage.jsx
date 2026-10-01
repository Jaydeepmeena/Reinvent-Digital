import { Fragment } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Check } from "lucide-react";
import { getServiceBySlug } from "../data/services";
import SubPageHero from "../components/SubPageHero";
import { SERVICE_HERO_IMAGES } from "../data/heroImages";
import CTASection from "../components/CTASection";
import CountUp from "../components/motion/CountUp";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import StackCards from "../components/fx/StackCards";
import VelocityMarquee from "../components/fx/VelocityMarquee";
import IncludesCarousel from "../components/fx/IncludesCarousel";
import { BentoGrid, BentoTile, GrowthBars } from "../components/fx/Bento";

// AEO and GEO used to share one page; keep the old link working.
const RENAMED = { "aeo-geo": "aeo" };

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    const renamed = RENAMED[slug];
    return <Navigate to={renamed ? `/what-we-do/${renamed}` : "/"} replace />;
  }

  const {
    category, icon, eyebrow, title, accent, description,
    highlights, metric, heroStats, includes, process, proofStats,
    ctaLabel, includesTitle, includesIntro, processEyebrow, processTitle, processNote,
    faqs, faqTitle, closing,
  } = service;

  // Older entries list deliverables as plain strings; newer ones carry a body too.
  const deliverables = includes.map((item) => (typeof item === "string" ? { title: item } : item));

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          variant="services"
          image={SERVICE_HERO_IMAGES[slug]}
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
          ctaLabel={ctaLabel ?? "Discuss your growth plan"}
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
                  {includesTitle ?? `Everything needed to turn ${title} into booked patients.`}
                </SplitReveal>
                <p className="mt-4 text-sm text-ink-soft">
                  {includesIntro ?? `${deliverables.length} deliverables, one accountable team.`}
                </p>
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

              {deliverables.map(({ title: name, body }, i) => (
                <BentoTile
                  key={name}
                  className={`hidden flex-col gap-6 border md:flex ${
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
                  <div className="mt-auto">
                    <p className="text-[15px] font-semibold leading-snug">{name}</p>
                    {body && <p className="mt-2 text-[13px] leading-relaxed opacity-70">{body}</p>}
                  </div>
                </BentoTile>
              ))}
            </BentoGrid>
          </div>

          <IncludesCarousel items={deliverables} className="mt-5 md:hidden" />
        </section>

        <section className="section-y border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Eyebrow>{processEyebrow ?? "How we approach it"}</Eyebrow>
            <SplitReveal
              as="h2"
              type="chars3d"
              className="mt-4 max-w-3xl text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
            >
              {processTitle ?? "A repeatable process, not a one-off campaign."}
            </SplitReveal>
            {processNote && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{processNote}</p>}
            <div className="mb-10 sm:mb-14" />
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

        {faqs?.length > 0 && (
          <section className="section-y border-t border-ink/[0.06] bg-white">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <Eyebrow>Frequently asked questions</Eyebrow>
              <SplitReveal
                as="h2"
                type="chars3d"
                className="mt-4 text-balance text-[clamp(1.75rem,1.3rem+2vw,2.4rem)] font-extrabold leading-[1.12] tracking-tight text-ink"
              >
                {faqTitle ?? `Common queries about ${title}, answered.`}
              </SplitReveal>

              <dl className="section-head-gap divide-y divide-ink/10 border-y border-ink/10">
                {faqs.map(({ q, a }, i) => (
                  <div key={q} className="grid gap-2 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
                    <dt className="flex gap-3 text-[15px] font-bold text-ink sm:text-base">
                      <span className="tabular-nums text-ink-soft/50">{String(i + 1).padStart(2, "0")}</span>
                      <span className="sm:w-72">{q}</span>
                    </dt>
                    <dd className="pl-8 text-[15px] leading-relaxed text-ink-soft sm:pl-0">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        <CTASection
          monochrome
          eyebrow={closing?.eyebrow ?? category}
          heading={closing?.heading ?? `Ready to put ${title} to work for your clinic?`}
          body={
            closing?.body ??
            "Tell us about your current setup — we'll show you exactly where the gaps are and what it would take to close them."
          }
          ctaLabel={closing?.ctaLabel}
        />
      </Fragment>
    </InnerPage>
  );
}
