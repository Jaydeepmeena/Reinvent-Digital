import { Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { fetchLandingPage } from "../lib/landingPages";
import { useDocumentHead } from "../lib/head";
import SubPageHero from "../components/SubPageHero";
import VelocityMarquee from "../components/fx/VelocityMarquee";
import { BentoGrid, BentoTile, GrowthBars } from "../components/fx/Bento";
import StackCards from "../components/fx/StackCards";
import IncludesCarousel from "../components/fx/IncludesCarousel";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import CountUp from "../components/motion/CountUp";
import CTASection from "../components/CTASection";
import RelatedBlogs from "../components/fx/RelatedBlogs";
import InnerPage from "../components/fx/InnerPage";
import Reveal from "../components/motion/Reveal";
import NotFound from "./NotFound";

// Landing pages borrow the service page's layout, but they carry different
// content blocks, so each service-page section is fed from the nearest landing
// field: reasons fill the "what's included" grid, services fill the process
// cards, and the hero's first stat stands in for the service metric.
const SECTION_HEADING =
  "text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight";
const PROSE =
  "text-[17px] leading-relaxed text-ink-soft [&_a]:font-semibold [&_a]:text-green-deep [&_a]:underline [&_p+p]:mt-5 [&_strong]:text-ink";

const CLOSING_FALLBACK = {
  heading: "Want This Running for Your Practice?",
  body: "Tell us where the enquiries are going today and what happens to them after they arrive. We will tell you what it would take to connect the two.",
};

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-ink/15 border-t-lime" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

function Failed() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="text-2xl font-extrabold tracking-tight text-ink">This page could not be loaded</h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
        Something went wrong reaching the content. Refresh the page, or get in touch and we will point you to
        what you were after.
      </p>
      <a
        href="/contact"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-lime hover:text-ink"
      >
        Contact us
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function LandingPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    setPage(null);

    fetchLandingPage(slug, { signal: controller.signal })
      .then((found) => {
        if (controller.signal.aborted) return;
        setPage(found);
        setStatus(found ? "ready" : "missing");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, [slug]);

  // Google reads the FAQ block as structured data, which is most of why these
  // pages earn their place in the results.
  const jsonLd = useMemo(() => {
    if (!page?.faqs.length) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
  }, [page]);

  useDocumentHead({
    title: page?.seo.title,
    description: page?.seo.description,
    canonical: page?.seo.canonical,
    noindex: page?.seo.noindex ?? false,
    jsonLd,
  });

  // A slug with no landing page behind it is an ordinary 404: this route sits
  // on the root path, so it catches every mistyped URL on the site.
  if (status === "missing") return <NotFound />;

  // Map the landing fields onto the pieces the service-page sections expect.
  const hero = page?.hero;
  const heroStats = hero?.stats ?? [];
  const heroMetric = heroStats[0] ? { label: heroStats[0].label, value: heroStats[0].value } : null;
  const serviceItems = page?.services?.items ?? [];
  const serviceTitles = serviceItems.map((item) => item.title).filter(Boolean);
  const deliverables = (page?.reasons?.points ?? []).map((point) => ({ title: point }));

  return (
    <InnerPage>
      <Fragment key={slug}>
        {status === "loading" && <Loading />}
        {status === "error" && <Failed />}

        {status === "ready" && page && (
          <>
            <SubPageHero
              variant="services"
              image={hero.image}
              trail={[{ label: "Home", href: "/" }, { label: page.title }]}
              eyebrow={hero.eyebrow ?? "Patient acquisition, engineered for healthcare"}
              title={page.title}
              headline={hero.headline ?? page.title}
              accent={hero.accent}
              description={hero.description}
              stats={heroStats}
              ctaLabel={hero.cta?.label ?? "Let's Connect"}
              ctaHref={hero.cta?.href ?? "/contact"}
              highlights={serviceTitles.slice(0, 4)}
              metric={heroMetric}
            />

            <VelocityMarquee items={[page.title, ...serviceTitles]} className="border-y border-ink/10 bg-white" />

            {page.intro && (
              <section className="section-y-tight">
                <div className="mx-auto max-w-3xl px-5 sm:px-8">
                  <Reveal>
                    <div className={PROSE} dangerouslySetInnerHTML={{ __html: page.intro }} />
                  </Reveal>
                </div>
              </section>
            )}

            {deliverables.length > 0 && (
              <section className="section-y">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                  <BentoGrid className="md:grid-cols-2 lg:grid-cols-4">
                    <BentoTile className="flex flex-col justify-between border border-ink/10 bg-white md:col-span-2">
                      <Eyebrow>{page.reasons?.eyebrow ?? "Why work with us"}</Eyebrow>
                      <SplitReveal
                        as="h2"
                        type="chars3d"
                        className="mt-4 text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-extrabold leading-tight tracking-tight text-ink"
                      >
                        {page.reasons?.heading ?? `Why practices choose us for ${page.title}.`}
                      </SplitReveal>
                      {page.reasons?.body && <p className="mt-4 text-sm text-ink-soft">{page.reasons.body}</p>}
                    </BentoTile>

                    {heroMetric && (
                      <BentoTile className="flex flex-col bg-ink text-cream md:col-span-2 lg:row-span-2">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-spin-slow rounded-full border border-dashed border-lime/30"
                        />
                        <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                          {heroMetric.label}
                        </span>
                        <div className="relative mt-4 text-[clamp(3rem,2rem+5vw,5.5rem)] font-extrabold leading-none tracking-tight">
                          <CountUp value={heroMetric.value} duration={2} />
                        </div>
                        <GrowthBars className="relative mt-auto pt-10" />
                      </BentoTile>
                    )}

                    {deliverables.map(({ title: name }, i) => (
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
                        <p className="mt-auto text-[15px] font-semibold leading-snug">{name}</p>
                      </BentoTile>
                    ))}
                  </BentoGrid>
                </div>

                <IncludesCarousel items={deliverables} className="mt-5 md:hidden" />
              </section>
            )}

            {serviceItems.length > 0 && (
              <section className="section-y border-t border-ink/[0.06] bg-white">
                <div className="mx-auto max-w-5xl px-5 sm:px-8">
                  <Eyebrow>{page.services?.eyebrow ?? "What we run"}</Eyebrow>
                  <SplitReveal
                    as="h2"
                    type="chars3d"
                    className={`mt-4 max-w-3xl ${SECTION_HEADING} text-ink`}
                  >
                    {page.services?.heading ?? "A repeatable system, not a one-off campaign."}
                  </SplitReveal>
                  {page.services?.body && (
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{page.services.body}</p>
                  )}
                  <div className="mb-10 sm:mb-14" />
                  <StackCards steps={serviceItems} />
                </div>
              </section>
            )}

            {heroStats.length > 0 && (
              <section className="section-y">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                  <BentoGrid className="sm:grid-cols-3">
                    {heroStats.map(({ value, label }, i) => (
                      <BentoTile key={label} className={`text-center ${i === 1 ? "bg-lime text-ink" : "bg-ink text-cream"}`}>
                        <div className="text-[clamp(2.25rem,1.6rem+2.4vw,3.25rem)] font-extrabold leading-none">
                          <CountUp value={value} />
                        </div>
                        <div className="mt-3 text-[13px] opacity-70">{label}</div>
                      </BentoTile>
                    ))}
                  </BentoGrid>
                </div>
              </section>
            )}

            {page.blogs && <RelatedBlogs blogs={page.blogs} />}

            {page.overview && (
              <section className="section-y border-t border-ink/[0.06]">
                <div className="mx-auto max-w-3xl px-5 sm:px-8">
                  <Reveal>
                    <div className={PROSE} dangerouslySetInnerHTML={{ __html: page.overview }} />
                  </Reveal>
                </div>
              </section>
            )}

            {page.faqs.length > 0 && (
              <section className="section-y border-t border-ink/[0.06] bg-white">
                <div className="mx-auto max-w-4xl px-5 sm:px-8">
                  <Eyebrow>Frequently asked questions</Eyebrow>
                  <SplitReveal
                    as="h2"
                    type="chars3d"
                    className="mt-4 text-balance text-[clamp(1.75rem,1.3rem+2vw,2.4rem)] font-extrabold leading-[1.12] tracking-tight text-ink"
                  >
                    Common Questions, Answered
                  </SplitReveal>

                  <dl className="section-head-gap divide-y divide-ink/10 border-y border-ink/10">
                    {page.faqs.map(({ q, a }, i) => (
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
              eyebrow={page.closing?.eyebrow ?? "Contact Us"}
              heading={page.closing?.heading ?? CLOSING_FALLBACK.heading}
              body={page.closing?.body ?? CLOSING_FALLBACK.body}
            />
          </>
        )}
      </Fragment>
    </InnerPage>
  );
}
