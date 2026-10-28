import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../motion/Reveal";

/**
 * The hero for a landing page.
 *
 * Deliberately not the dark photo banner the rest of the site uses: a landing
 * page is a focused conversion page, so the copy and the call to action sit on
 * a light branded ground on the left, and the image is a framed card on the
 * right with the headline stat pinned to it. With no image the copy takes the
 * full width.
 *
 * @param hero  the landing page's `hero` block: eyebrow, headline, accent,
 *              description, image, cta {label, href}, stats [{value, label}]
 */
export default function LandingHero({ hero }) {
  const { eyebrow, headline, accent, description, image, cta, stats = [] } = hero;
  const [badge, ...restStats] = stats;

  return (
    <section className="relative overflow-hidden bg-paper pb-14 pt-28 sm:pb-20 sm:pt-36">
      {/* Lime light spilling in from the top-right corner. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(167,207,59,0.28),transparent_68%)]"
      />
      {/* A faint grid under the copy, so the light side is not empty. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_25%_30%,black,transparent)]"
      />

      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 ${
          image ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-16" : ""
        }`}
      >
        <div>
          {eyebrow && (
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {eyebrow}
              </span>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[clamp(2.1rem,1.5rem+3vw,3.6rem)] font-extrabold leading-[1.04] tracking-tight text-ink">
              {headline}
              {accent && (
                <>
                  {" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">{accent}</span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[-0.08em] bottom-[0.08em] z-0 h-[0.42em] -skew-x-6 bg-lime"
                    />
                  </span>
                </>
              )}
            </h1>
          </Reveal>

          {description && (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">{description}</p>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-cream transition-transform duration-300 hover:scale-105"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                to="/contact"
                className="text-sm font-semibold text-ink underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-green-deep"
              >
                Talk to our team
              </Link>
            </div>
          </Reveal>

          {restStats.length > 0 && (
            <Reveal delay={0.2}>
              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-ink/10 pt-8">
                {restStats.map(({ value, label }) => (
                  <div key={label}>
                    <dt className="text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] font-extrabold leading-none tracking-tight text-ink">
                      {value}
                    </dt>
                    <dd className="mt-1.5 max-w-[12rem] text-[13px] leading-snug text-ink-soft">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>

        {image && (
          // Not a scroll-triggered reveal: the hero image is above the fold on
          // desktop and just below it on a phone, where a reveal that waits to
          // be scrolled into view would leave it blank.
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-2xl shadow-ink/15">
              <img
                src={image}
                alt={hero.imageAlt ?? headline}
                title={headline}
                className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
              />
            </div>
            {/* The headline figure, pinned to the image. */}
            {badge && (
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl shadow-ink/25 sm:-left-6">
                <div className="text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] font-extrabold leading-none text-lime">
                  {badge.value}
                </div>
                <div className="mt-1.5 max-w-[10rem] text-[12px] leading-snug text-cream/70">{badge.label}</div>
              </div>
            )}
            {/* A lime chip echoing the corner wash. */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-16 w-16 rounded-2xl border border-lime/50 bg-lime/15 sm:-right-6"
            />
          </div>
        )}
      </div>
    </section>
  );
}
