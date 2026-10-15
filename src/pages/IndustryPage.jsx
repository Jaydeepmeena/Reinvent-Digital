import { Fragment, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { getIndustryBySlug, INDUSTRIES } from "../data/industries";
import SubPageHero from "../components/SubPageHero";
import { INDUSTRY_HERO_IMAGES } from "../data/heroImages";
import CTASection from "../components/CTASection";
import CountUp from "../components/motion/CountUp";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import HorizontalScroll from "../components/fx/HorizontalScroll";
import ScrollTimeline from "../components/fx/ScrollTimeline";
import { gsap, MOTION_OK, useGSAP } from "../components/fx/gsap";

// The chips ring the cross at every width; they used to stack under it below xl.
const CHIP_POSITIONS = [
  "left-0 top-0 xl:top-2",
  "right-0 top-[19%] xl:top-16",
  "left-0 top-[46%] xl:top-[40%]",
  "right-0 top-[56%] xl:top-[55%]",
];
const PANEL_TONES = ["bg-ink text-cream", "bg-lime text-ink", "bg-white text-ink border border-ink/10"];

function IndustryVisual({ highlights, metric }) {
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
    // With the cross gone the chips had nothing to ring, so they are a
    // desktop-only flourish now.
    <div ref={ref} className="relative hidden lg:block">
      {/* The chips and the metric are placed against this box. */}
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
    icon, eyebrow, title, heading, accent, description, ctaLabel,
    heroStats, highlights, metric, problems, help, proof, closing, faqs, testimonial,
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

        <section className="section-y overflow-x-clip border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <HorizontalScroll
              header={
                <div className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-2 lg:items-end">
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
              }
            >
              {problems.points.map(({ title: cTitle, body }, i) => (
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
                </article>
              ))}
            </HorizontalScroll>
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
            <ScrollTimeline steps={help.points} />
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

            <div className="grid gap-4 self-start sm:grid-cols-2">
              {proof.stats.map(({ value, label }, i) => (
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
