import { useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import TiltCard from "./motion/TiltCard";
import CountUp from "./motion/CountUp";
import SplitReveal from "./fx/SplitReveal";
import Magnetic from "./fx/Magnetic";
import Typewriter from "./fx/Typewriter";
import { gsap, MOTION_OK, useGSAP } from "./fx/gsap";

const HEADLINE = { services: "chars3d", industries: "skewLines", about: "blur", resources: "words", contact: "wave" };
const COPY = { services: "lines", industries: "lines", about: "blur", resources: "lines", contact: "lines" };

const MARKER = "hl-marker font-serif-italic font-medium text-ink";

function ServiceCard({ icon: Icon, highlights, metric }) {
  return (
    <div data-hero-card>
      <div className="animate-float">
        <TiltCard
          max={5}
          glare="rgba(255,255,255,0.08)"
          className="rounded-3xl border border-white/10 bg-ink p-6 shadow-2xl shadow-ink/20 sm:p-8"
        >
          {Icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-ink">
              <Icon className="h-6 w-6" />
            </div>
          )}
          {highlights.length > 0 && (
            <ul className="mt-6 space-y-2.5 sm:space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  data-hero-highlight
                  className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-3 text-[14px] font-medium text-cream/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {metric && (
            <div className="mt-6 rounded-2xl bg-lime p-5 text-ink">
              <div className="text-[11px] font-semibold uppercase tracking-wide opacity-70">{metric.label}</div>
              <div className="mt-1 text-3xl font-extrabold">
                <CountUp value={metric.value} />
              </div>
              {metric.sub && <div className="mt-1 text-xs opacity-70">{metric.sub}</div>}
            </div>
          )}
        </TiltCard>
      </div>
    </div>
  );
}

export default function SubPageHero({
  variant = "services",
  trail,
  eyebrow,
  title,
  accent,
  description,
  stats = [],
  ctaLabel = "Discuss your growth plan",
  ctaHref = "/contact",
  icon,
  highlights = [],
  metric,
  visual,
}) {
  const ref = useRef(null);
  const isServices = variant === "services";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from("[data-hero-fade]", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 })
          .from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.8 }, 0.55)
          .from("[data-hero-stats] > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.7);

        const scrub = { trigger: ref.current, start: "top top", end: "bottom top", scrub: true };

        if (isServices) {
          intro
            .from("[data-hero-card]", { rotationY: -28, rotationX: 12, y: 70, opacity: 0, duration: 1.4, ease: "expo.out" }, 0.25)
            .from("[data-hero-highlight]", { x: 28, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.7);
          gsap.to("[data-hero-copy]", { yPercent: -12, opacity: 0.35, ease: "none", scrollTrigger: scrub });
          gsap.to("[data-hero-visual]", { yPercent: 14, ease: "none", scrollTrigger: scrub });
          gsap.to("[data-watermark]", { xPercent: -18, ease: "none", scrollTrigger: scrub });
          gsap.utils.toArray("[data-shape]").forEach((shape, i) => {
            gsap.to(shape, { y: (i + 1) * -60, rotation: i % 2 ? -140 : 140, ease: "none", scrollTrigger: scrub });
          });
        }

        if (variant === "industries") {
          intro.from("[data-disc]", { scale: 0, duration: 1.6, ease: "expo.out" }, 0.1);
          gsap.to("[data-disc]", { scale: 1.25, ease: "none", scrollTrigger: scrub });
          gsap.to("[data-hero-visual]", { scale: 0.88, yPercent: 8, ease: "none", scrollTrigger: scrub });
        }
      });
    },
    { scope: ref }
  );

  const accentNode = accent && (
    <>
      {" "}
      {variant === "resources" ? (
        <Typewriter text={accent} className={MARKER} />
      ) : (
        <span className={MARKER}>{accent}</span>
      )}
    </>
  );

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 right-[-25%] h-96 w-96 rounded-full bg-lime/25 blur-3xl sm:right-[-10%]" />

      {isServices && (
        <>
          <div
            aria-hidden="true"
            data-watermark
            className="pointer-events-none absolute bottom-2 left-0 select-none whitespace-nowrap text-[clamp(5rem,16vw,15rem)] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(27,27,23,0.07)]"
          >
            {title} · {title}
          </div>
          <Plus aria-hidden="true" data-shape className="pointer-events-none absolute left-[54%] top-40 hidden h-6 w-6 text-ink/25 lg:block" />
          <Plus aria-hidden="true" data-shape className="pointer-events-none absolute bottom-20 left-[55%] hidden h-5 w-5 text-ink/20 lg:block" />
          <div aria-hidden="true" data-shape className="pointer-events-none absolute right-[8%] top-28 hidden h-16 w-16 rounded-full border border-dashed border-ink/20 md:block" />
        </>
      )}

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div data-hero-copy className="min-w-0">
          <div data-hero-fade>
            <Breadcrumb trail={trail} />
          </div>

          <div
            data-hero-fade
            className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-ink/10 bg-paper/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-soft backdrop-blur sm:px-4 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime ring-4 ring-lime/25" />
            <span className="truncate">{eyebrow}</span>
          </div>

          {variant === "resources" ? (
            <h1 className="mt-5 text-balance text-[clamp(2.1rem,1.5rem+3vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
              <SplitReveal as="span" type="words" onLoad delay={0.15}>
                {title}
              </SplitReveal>
              {accentNode}
            </h1>
          ) : (
            <SplitReveal
              as="h1"
              type={HEADLINE[variant]}
              onLoad
              delay={0.15}
              className="mt-5 text-balance text-[clamp(2.1rem,1.5rem+3vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
            >
              {title}
              {accentNode}
            </SplitReveal>
          )}

          <SplitReveal
            as="p"
            type={COPY[variant]}
            onLoad
            delay={0.45}
            className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft sm:mt-6 sm:text-[17px]"
          >
            {description}
          </SplitReveal>

          <div data-hero-cta className="mt-8">
            <Magnetic className="w-full sm:w-auto">
              <a
                href={ctaHref}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-cream shadow-lg shadow-ink/15 transition-colors hover:bg-lime hover:text-ink sm:w-auto"
              >
                {ctaLabel}
                <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                  <ArrowUpRight className="absolute h-4 w-4 transition-transform duration-300 group-hover:-translate-y-5 group-hover:translate-x-5" />
                  <ArrowUpRight className="absolute h-4 w-4 -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                </span>
              </a>
            </Magnetic>
          </div>

          {stats.length > 0 && (
            <dl data-hero-stats className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6 sm:mt-12 sm:gap-8 sm:pt-7">
              {stats.map(({ value, label }) => (
                <div key={label} className="min-w-0">
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-[clamp(1.25rem,0.95rem+1.5vw,1.6rem)] font-extrabold leading-none text-ink">
                    <CountUp value={value} />
                  </dd>
                  <dd className="mt-1.5 text-[12px] leading-snug text-ink-soft sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div data-hero-visual className="relative mx-auto w-full max-w-md [perspective:1400px] lg:max-w-none">
          {variant === "industries" && (
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div data-disc className="aspect-square w-[92%] rounded-full bg-lime/30" />
            </div>
          )}
          {visual ?? <ServiceCard icon={icon} highlights={highlights} metric={metric} />}
        </div>
      </div>
    </section>
  );
}
