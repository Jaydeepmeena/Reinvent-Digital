import { Fragment, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { getIndustryBySlug, INDUSTRIES } from "../data/industries";
import SubPageHero from "../components/SubPageHero";
import CTASection from "../components/CTASection";
import CountUp from "../components/motion/CountUp";
import Scene3D from "../components/three/Scene3D";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import HorizontalScroll from "../components/fx/HorizontalScroll";
import ScrollTimeline from "../components/fx/ScrollTimeline";
import BeforeAfter from "../components/fx/BeforeAfter";
import { gsap, MOTION_OK, useGSAP } from "../components/fx/gsap";

const CHIP_POSITIONS = ["xl:left-0 xl:top-2", "xl:right-0 xl:top-16", "xl:left-0 xl:top-[40%]", "xl:right-0 xl:top-[55%]"];
const PANEL_TONES = ["bg-ink text-cream", "bg-lime text-ink", "bg-white text-ink border border-ink/10"];

function IndustryVisual({ highlights, metric }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-chip]", { scale: 0.4, opacity: 0, stagger: 0.12, duration: 0.8, delay: 0.9, ease: "back.out(2)" });
      });
      // Chips only float when they are spread around the cross; in the wrapped mobile row they would collide.
      mm.add(`${MOTION_OK} and (min-width: 1280px)`, () => {
        gsap.utils.toArray("[data-chip]").forEach((chip, i) => {
          gsap.to(chip, { y: i % 2 ? 10 : -10, duration: 2.4 + i * 0.4, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.8 });
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="relative">
      <Scene3D scene="healthCross" className="mx-auto h-64 w-full sm:h-80 lg:h-[22rem] xl:h-[30rem]" />
      <ul className="mt-4 flex flex-wrap justify-center gap-2 xl:pointer-events-none xl:absolute xl:inset-0 xl:mt-0 xl:block">
        {highlights.map((item, i) => (
          <li
            key={item}
            data-chip
            className={`max-w-[16rem] rounded-full border border-ink/10 bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-lg shadow-ink/10 xl:absolute ${CHIP_POSITIONS[i % CHIP_POSITIONS.length]}`}
          >
            {item}
          </li>
        ))}
      </ul>
      {metric && (
        <div
          data-chip
          className="mx-auto mt-3 w-fit rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl shadow-ink/20 xl:absolute xl:bottom-0 xl:left-0 xl:mt-0"
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

function OtherIndustries({ current }) {
  const ref = useRef(null);
  const others = INDUSTRIES.filter((i) => i.slug !== current);

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
      {others.map(({ slug, title, icon: Icon }) => (
        <Link
          key={slug}
          data-other
          to={`/industries/${slug}`}
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

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) return <Navigate to="/" replace />;

  const {
    icon, eyebrow, title, accent, description,
    heroStats, highlights, metric, challenges, approach, proof, testimonial,
  } = industry;
  const [before, after, ...extra] = proof.metrics;

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          variant="industries"
          trail={[{ label: "Industries", href: "/#industries" }, { label: title }]}
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          description={description}
          stats={heroStats}
          ctaHref="/contact"
          icon={icon}
          visual={<IndustryVisual highlights={highlights} metric={metric} />}
        />

        <section className="section-y overflow-x-clip border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <HorizontalScroll
              header={
                <div className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-2 lg:items-end">
                  <div>
                    <Eyebrow>Where growth gets lost</Eyebrow>
                    <SplitReveal
                      as="h2"
                      type="skewLines"
                      className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
                    >
                      The challenges specific to {title} marketing.
                    </SplitReveal>
                  </div>
                  <p className="max-w-md text-[16px] leading-relaxed text-ink-soft lg:justify-self-end">
                    {title} groups rarely have a lead problem. They have a response, conversion and attribution problem.
                  </p>
                </div>
              }
            >
              {challenges.map(({ title: cTitle, body, tag }, i) => (
                <article
                  key={cTitle}
                  className={`flex min-h-[16rem] w-full shrink-0 flex-col rounded-3xl p-6 sm:min-h-[18rem] sm:p-9 pin:min-h-[min(24rem,calc(100vh-22rem))] pin:w-[34rem] pin:xl:w-[38rem] ${
                    PANEL_TONES[i % PANEL_TONES.length]
                  }`}
                >
                  <span className="text-[clamp(4rem,3rem+4vw,6.5rem)] font-extrabold leading-none tracking-tighter [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_currentColor]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-auto pt-8 text-[clamp(1.4rem,1.1rem+1vw,1.9rem)] font-extrabold leading-tight tracking-tight">
                    {cTitle}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed opacity-70">{body}</p>
                  <span className="mt-6 w-fit rounded-full border border-current/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                    {tag}
                  </span>
                </article>
              ))}
            </HorizontalScroll>
          </div>
        </section>

        <section className="section-y bg-ink text-cream">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl sm:mb-16 lg:mx-auto lg:text-center">
              <Eyebrow tone="dark">How we help</Eyebrow>
              <SplitReveal
                as="h2"
                type="skewLines"
                className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight"
              >
                Our approach for {title} groups.
              </SplitReveal>
            </div>
            <ScrollTimeline steps={approach} />
          </div>
        </section>

        <section className="section-y">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Proof, not a promise</Eyebrow>
              <SplitReveal
                as="h2"
                type="skewLines"
                className="mt-4 text-balance text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] font-extrabold leading-tight tracking-tight text-ink"
              >
                {proof.headline}
              </SplitReveal>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{proof.body}</p>
              <p className="mt-6 text-xs leading-relaxed text-ink-soft/70">
                Client name withheld per engagement agreement. Individual results depend on market, offer and execution.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <BeforeAfter before={before} after={after} />
              <div className="grid grid-cols-2 gap-4">
                {extra.map(({ value, label }, i) => (
                  <div key={label} className={`rounded-2xl p-5 sm:p-6 ${i ? "bg-lime text-ink" : "bg-ink text-cream"}`}>
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

        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Other industries we serve</p>
            <OtherIndustries current={slug} />
          </div>
        </section>

        <CTASection
          monochrome
          eyebrow={eyebrow}
          heading={`Build a patient acquisition system for your ${title}.`}
          body="Tell us how enquiries reach you today — we'll show you exactly where they're getting lost."
        />
      </Fragment>
    </InnerPage>
  );
}
