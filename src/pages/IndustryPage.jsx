import { Fragment, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { INDUSTRIES } from "../data/industries";
import { usePageCollection, usePageEntry } from "../lib/pageContent";
import PageLoading from "../components/fx/PageLoading";
import SubPageHero from "../components/SubPageHero";
import { INDUSTRY_HERO_IMAGES } from "../data/heroImages";
import CTASection from "../components/CTASection";
import CountUp from "../components/motion/CountUp";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import ScrollTimeline from "../components/fx/ScrollTimeline";
import IndustryVisual from "../components/fx/IndustryVisual";
import Reveal from "../components/motion/Reveal";
import { gsap, MOTION_OK, useGSAP } from "../components/fx/gsap";

/** One labelled bar of a before-and-after. */
function BarRow({ name, figure, caption, width, tone }) {
  return (
    <div className="mt-5 first:mt-0">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink">{name}</span>
        {caption && <span className="text-[12px] text-ink-soft">{caption}</span>}
      </div>
      <div className="mt-2 h-12 w-full overflow-hidden rounded-xl bg-ink/[0.07] sm:h-14">
        <div
          data-bar
          style={{ width }}
          className={`flex h-full items-center justify-end rounded-xl px-4 ${tone}`}
        >
          <span className="text-[clamp(1.1rem,0.9rem+0.8vw,1.6rem)] font-extrabold tabular-nums leading-none">
            {figure}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * A before and after, read as two bars against each other.
 *
 * The bars are drawn to scale: the larger figure fills the track and the
 * smaller one takes its share of it, so the gap between them is the point
 * rather than the two numbers being read and compared in the head. Shown only
 * when the entry carries a comparison; a page with plain figures keeps them as
 * cards.
 */
function BeforeAfter({ label, growth, growthLabel = "growth", before, after }) {
  const ref = useRef(null);

  // "~48", "3,400", "7,600" all come back as a number to size the bar with.
  const size = (v) => Number(String(v ?? "").replace(/[^0-9.]/g, "")) || 0;
  const peak = Math.max(size(before?.value), size(after?.value)) || 1;
  const width = (v) => `${Math.max(12, Math.round((size(v) / peak) * 100))}%`;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current.querySelectorAll("[data-bar]"), {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">{label}</span>
        {growth && (
          <span className="inline-flex items-baseline gap-1.5 rounded-full bg-lime px-3 py-1">
            <span className="text-sm font-extrabold leading-none text-ink">{growth}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/70">{growthLabel}</span>
          </span>
        )}
      </div>

      <div className="mt-5">
        <BarRow name="Before" figure={before?.value} caption={before?.label} width={width(before?.value)} tone="bg-ink text-cream" />
        <BarRow name="After" figure={after?.value} caption={after?.label} width={width(after?.value)} tone="bg-lime text-ink" />
      </div>
    </div>
  );
}

function OtherIndustries({ current }) {
  const ref = useRef(null);
  const { navEntries } = usePageCollection("industries", INDUSTRIES);
  const others = navEntries.filter((i) => i.id !== current);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-other]", {
          x: 48,
          opacity: 0,
          stagger: 0.12,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="grid gap-3 overflow-x-clip sm:grid-cols-3 sm:gap-4">
      {others.map(({ id, path, title, icon: Icon }) => (
        <Link
          key={id}
          data-other
          to={path}
          className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 sm:p-6"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-lime transition-transform duration-500 ease-out group-hover:scale-x-100" />
          <span className="relative flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-lime">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-bold text-ink">{title}</span>
          </span>
          <ArrowRight className="relative h-5 w-5 text-ink transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

export default function IndustryPage({ slug: given }) {
  const { slug: fromUrl } = useParams();
  const slug = given ?? fromUrl;
  const { entry: industry, status } = usePageEntry("industries", slug, INDUSTRIES);

  if (status === "loading") return <PageLoading />;
  if (!industry) return <Navigate to="/" replace />;

  const {
    icon, eyebrow, title, heading, accent, description, ctaLabel,
    heroStats = [], highlights = [], metric, problems = {}, help = {}, proof = {},
    closing = {}, faqs = [], testimonial,
  } = industry;

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          variant="industries"
          image={INDUSTRY_HERO_IMAGES[slug]}
          trail={[{ label: "Industries", href: "/#industries" }, { label: title }]}
          eyebrow={eyebrow}
          title={title}
          headline={heading}
          accent={accent}
          description={description}
          stats={heroStats}
          ctaLabel={ctaLabel}
          ctaHref="/contact"
          icon={icon}
          visual={<IndustryVisual highlights={highlights} metric={metric} />}
        />

        {/* The gaps this industry keeps hitting. Seven filled panels in a
            pinned horizontal scroll made a loud wall four thousand pixels tall;
            as a numbered list the same seven read in one pass, and the outlined
            figures keep the character the panels had. */}
        <section className="section-y border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <Eyebrow>{problems.eyebrow}</Eyebrow>
                <SplitReveal
                  as="h2"
                  type="skewLines"
                  className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
                >
                  {`${problems.headingA} ${problems.headingB}`}
                </SplitReveal>
              </div>
              <p className="max-w-md text-[16px] leading-relaxed text-ink-soft lg:justify-self-end">
                {problems.body}
              </p>
            </div>

            <ol className="section-head-gap grid border-t border-ink/10 sm:grid-cols-2 sm:gap-x-12">
              {(problems.points ?? []).map(({ title: cTitle, body }, i) => (
                <Reveal
                  as="li"
                  key={cTitle}
                  delay={0.04 * i}
                  className="group flex gap-5 border-b border-ink/10 py-7"
                >
                  <span className="shrink-0 text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-extrabold leading-none tracking-tighter tabular-nums text-transparent [-webkit-text-stroke:1.5px_rgba(27,27,23,0.25)] transition-[--tw-text-stroke-color] duration-300 group-hover:[-webkit-text-stroke:1.5px_#a7cf3b]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.05rem,1rem+0.35vw,1.3rem)] font-bold leading-snug text-ink">
                      {cTitle}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-y bg-ink text-cream">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl sm:mb-16 lg:mx-auto lg:text-center">
              <Eyebrow tone="dark">{help.eyebrow}</Eyebrow>
              <SplitReveal
                as="h2"
                type="skewLines"
                className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight"
              >
                {`${help.headingA} ${help.headingB}`}
              </SplitReveal>
              <p className="mt-5 text-[16px] leading-relaxed text-cream/70">{help.body}</p>
            </div>
            <ScrollTimeline steps={help.points ?? []} />
          </div>
        </section>

        <section className="section-y">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>{proof.eyebrow}</Eyebrow>
              <SplitReveal
                as="h2"
                type="skewLines"
                className="mt-4 text-balance text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] font-extrabold leading-tight tracking-tight text-ink"
              >
                {proof.heading}
              </SplitReveal>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{proof.body}</p>
              <p className="mt-6 text-xs leading-relaxed text-ink-soft/70">
                Client name withheld per engagement agreement. Individual results depend on market, offer and execution.
              </p>
            </div>

            <div className="self-start">
              {proof.comparison && <BeforeAfter {...proof.comparison} />}

              <div className={`grid gap-4 sm:grid-cols-2 ${proof.comparison ? "mt-4" : ""}`}>
                {(proof.stats ?? []).map(({ value, label }, i) => (
                  <div
                    key={label}
                    className={`rounded-2xl p-5 sm:p-6 ${
                      i % 2 ? "bg-lime text-ink" : "bg-ink text-cream"
                    }`}
                  >
                    <div className="text-[clamp(1.75rem,1.3rem+1.8vw,2.5rem)] font-extrabold leading-none">
                      <CountUp value={value} />
                    </div>
                    <div className="mt-2 text-[13px] leading-snug opacity-70">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {testimonial && (
            <div className="mx-auto mt-16 max-w-4xl px-5 text-center sm:mt-24 sm:px-8">
              <Quote className="mx-auto h-10 w-10 text-lime" fill="currentColor" strokeWidth={0} />
              <SplitReveal
                as="blockquote"
                type="skewLines"
                className="mt-6 text-balance font-serif-italic text-[clamp(1.35rem,1.1rem+1.3vw,2.1rem)] leading-snug text-ink"
              >
                “{testimonial.quote}”
              </SplitReveal>
              <div className="mt-6 text-sm font-bold text-ink">{testimonial.name}</div>
              <div className="text-xs text-ink-soft">{testimonial.role}</div>
            </div>
          )}
        </section>

        <section className="section-y border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-6">
                  <dt className="text-[16px] font-bold leading-snug text-ink">{q}</dt>
                  <dd className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="pb-16 sm:pb-24 pt-16 sm:pt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Other industries we serve</p>
            <OtherIndustries current={slug} />
          </div>
        </section>

        <CTASection
          monochrome
          eyebrow={closing.eyebrow}
          heading={closing.heading}
          body={closing.body}
        />
      </Fragment>
    </InnerPage>
  );
}
