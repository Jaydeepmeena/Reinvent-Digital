import { Fragment } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { MapPin, Phone, Check } from "lucide-react";
import { findLocation, LOCATIONS } from "../data/locations";
import SubPageHero from "../components/SubPageHero";
import { LOCATION_HERO_IMAGES } from "../data/heroImages";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import Reveal from "../components/motion/Reveal";

/** A heading, its lead paragraph and a grid of titled points. */
function PointsSection({ heading, body, points, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <section className={`section-y ${dark ? "bg-ink text-cream" : "bg-paper"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SplitReveal
          as="h2"
          type="words"
          className={`max-w-3xl text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-extrabold leading-tight tracking-tight ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {heading}
        </SplitReveal>
        <Reveal delay={0.05}>
          <p className={`mt-5 max-w-3xl text-[16px] leading-relaxed ${dark ? "text-cream/70" : "text-ink-soft"}`}>
            {body}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {points.map(({ title, body: point }, i) => (
            <Reveal key={title ?? point} delay={0.06 * i}>
              <div
                className={`h-full rounded-2xl border p-6 ${
                  dark
                    ? "border-cream/12 bg-cream/[0.04] transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1 hover:border-cream/25 hover:bg-cream/[0.08]"
                    : "border-ink/10 bg-white transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-xl hover:shadow-ink/10"
                }`}
              >
                {title && (
                  <h3 className={`text-[15px] font-bold ${dark ? "text-lime" : "text-green-deep"}`}>{title}</h3>
                )}
                <p className={`${title ? "mt-2" : ""} text-[15px] leading-relaxed ${dark ? "text-cream/70" : "text-ink-soft"}`}>
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LocationPage() {
  const { slug } = useParams();
  const page = findLocation(slug);

  if (!page) return <Navigate to="/" replace />;

  const { city, eyebrow, headingA, headingB, intro, ctaLabel, stats, search, system, trust, office, plan, faqs } = page;
  const others = LOCATIONS.filter((l) => l.slug !== slug);

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          image={LOCATION_HERO_IMAGES[slug]}
          trail={[{ label: "Locations" }, { label: city }]}
          eyebrow={eyebrow}
          title={city}
          headline={headingA}
          accent={headingB}
          description={intro}
          stats={stats}
          ctaLabel={ctaLabel}
          ctaHref="/contact"
          icon={MapPin}
          highlights={system.points.map((point) => point.title)}
          metric={{ value: stats[0].value, label: stats[0].label }}
        />

        <PointsSection heading={search.heading} body={search.body} points={search.points} />
        <PointsSection heading={system.heading} body={system.body} points={system.points} tone="dark" />

        {/* Why they trust us: a plain list, so it reads as proof rather than features. */}
        <section className="section-y bg-paper">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <SplitReveal
                as="h2"
                type="words"
                className="text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-extrabold leading-tight tracking-tight text-ink"
              >
                {trust.heading}
              </SplitReveal>
              <Reveal delay={0.05}>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{trust.body}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{trust.note}</p>
              </Reveal>
            </div>

            <ul className="grid gap-3 self-start">
              {trust.points.map((point, i) => (
                <Reveal as="li" key={point} delay={0.04 * i}>
                  <div className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-xl hover:shadow-ink/10">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-snug text-ink">{point}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Either directions to the office, or how the team comes to you. */}
        <section className="section-y bg-ink text-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SplitReveal
              as="h2"
              type="words"
              className="max-w-3xl text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-extrabold leading-tight tracking-tight text-cream"
            >
              {office.heading}
            </SplitReveal>

            {office.visit ? (
              <Reveal delay={0.05}>
                <div className="mt-6 max-w-3xl rounded-2xl border border-cream/12 bg-cream/[0.04] p-6 transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1 hover:border-cream/25 hover:bg-cream/[0.08]">
                  <p className="text-[16px] leading-relaxed text-cream">{office.address}</p>
                  <p className="mt-2 text-[14px] text-cream/60">Landmark: {office.landmark}</p>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={0.05}>
                <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-cream/70">{office.body}</p>
              </Reveal>
            )}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {office.directions.map(({ title, body }, i) => (
                <Reveal key={title ?? body} delay={0.05 * i}>
                  <div className="h-full rounded-2xl border border-cream/12 bg-cream/[0.04] p-5 transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1 hover:border-cream/25 hover:bg-cream/[0.08]">
                    {title && <h3 className="text-[14px] font-bold text-lime">{title}</h3>}
                    <p className={`${title ? "mt-1.5" : ""} text-[15px] leading-relaxed text-cream/70`}>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-cream/70">{office.note}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 flex flex-wrap items-center gap-2 text-[15px] font-semibold text-cream">
                <Phone className="h-4 w-4 text-lime" />
                {office.booking}
              </p>
            </Reveal>
          </div>
        </section>

        {/* How we plan */}
        <section className="section-y bg-paper">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Eyebrow>{plan.eyebrow}</Eyebrow>
            <SplitReveal
              as="h2"
              type="words"
              className="mt-4 max-w-3xl text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-extrabold leading-tight tracking-tight text-ink"
            >
              {`${plan.headingA} ${plan.headingB}`}
            </SplitReveal>
            <Reveal delay={0.05}>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{plan.note}</p>
            </Reveal>

            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {plan.steps.map(({ title, body }, i) => (
                <Reveal as="li" key={title} delay={0.07 * i}>
                  <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-xl hover:shadow-ink/10">
                    <span className="text-[13px] font-extrabold tracking-[0.12em] text-green-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[16px] font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQs */}
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

        {/* Other cities */}
        <section className="section-y-tight bg-paper">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Eyebrow>Other Locations</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  to={`/locations/${other.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {other.city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Fragment>
    </InnerPage>
  );
}
