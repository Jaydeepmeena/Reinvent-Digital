import { Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { fetchLandingPage } from "../lib/landingPages";
import { useDocumentHead } from "../lib/head";
import SubPageHero from "../components/SubPageHero";
import TrustedBy from "../components/TrustedBy";
import CTASection from "../components/CTASection";
import NotFound from "./NotFound";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import Magnetic from "../components/fx/Magnetic";
import Reveal from "../components/motion/Reveal";
import RelatedBlogs from "../components/fx/RelatedBlogs";

// The services grid alternates the way the rest of the site does: ink, lime,
// white, so four cards read as two pairs rather than a wall.
const CARD_TONES = ["bg-ink text-cream", "bg-lime text-ink", "bg-white text-ink border border-ink/10"];

const HEADING =
  "text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight";

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

  return (
    <InnerPage>
      <Fragment key={slug}>
        {status === "loading" && <Loading />}
        {status === "error" && <Failed />}

        {status === "ready" && page && (
          <>
            <SubPageHero
              variant="services"
              image={page.hero.image}
              trail={[{ label: page.title }]}
              eyebrow={page.hero.eyebrow ?? "Patient acquisition, engineered for healthcare"}
              title={page.title}
              headline={page.hero.headline}
              accent={page.hero.accent}
              description={page.hero.description}
              stats={page.hero.stats}
              ctaLabel={page.hero.cta.label}
              ctaHref={page.hero.cta.href}
            />

            <TrustedBy />

            {page.intro && (
              <section className="section-y-tight">
                <div className="mx-auto max-w-3xl px-5 sm:px-8">
                  <Reveal>
                    <div
                      className="text-[17px] leading-relaxed text-ink-soft [&_a]:font-semibold [&_a]:text-green-deep [&_a]:underline [&_p+p]:mt-5 [&_strong]:text-ink"
                      dangerouslySetInnerHTML={{ __html: page.intro }}
                    />
                  </Reveal>
                </div>
              </section>
            )}

            {page.reasons && (
              <section className="section-y border-t border-ink/[0.06] bg-white">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                  <div className="max-w-3xl">
                    {page.reasons.eyebrow && <Eyebrow>{page.reasons.eyebrow}</Eyebrow>}
                    {page.reasons.heading && (
                      <SplitReveal as="h2" type="skewLines" className={`mt-4 ${HEADING} text-ink`}>
                        {page.reasons.heading}
                      </SplitReveal>
                    )}
                    {page.reasons.body && (
                      <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{page.reasons.body}</p>
                    )}
                  </div>

                  <ul className="section-head-gap grid gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
                    {page.reasons.points.map((point, i) => (
                      <li key={point} className="bg-paper p-6 sm:p-8">
                        <span className="text-[13px] font-extrabold tracking-[0.18em] text-lime-deep">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {page.services && (
              <section className="section-y bg-ink text-cream">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                  <div className="max-w-3xl">
                    {page.services.eyebrow && <Eyebrow tone="dark">{page.services.eyebrow}</Eyebrow>}
                    {page.services.heading && (
                      <SplitReveal as="h2" type="skewLines" className={`mt-4 ${HEADING}`}>
                        {page.services.heading}
                      </SplitReveal>
                    )}
                    {page.services.body && (
                      <p className="mt-5 text-[16px] leading-relaxed text-cream/70">{page.services.body}</p>
                    )}
                  </div>

                  <div className="section-head-gap grid gap-4 sm:grid-cols-2">
                    {page.services.items.map((item, i) => (
                      <Reveal
                        key={item.title ?? i}
                        delay={i * 0.06}
                        className={`flex flex-col rounded-3xl p-6 sm:p-9 ${CARD_TONES[i % CARD_TONES.length]}`}
                      >
                        <span className="text-[clamp(3rem,2.4rem+2.4vw,4.5rem)] font-extrabold leading-none tracking-tighter [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_currentColor]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.title && (
                          <h3 className="mt-auto pt-8 text-[clamp(1.25rem,1.05rem+0.8vw,1.6rem)] font-extrabold leading-tight tracking-tight">
                            {item.title}
                          </h3>
                        )}
                        {item.body && <p className="mt-3 text-[15px] leading-relaxed opacity-75">{item.body}</p>}
                      </Reveal>
                    ))}
                  </div>

                  {page.services.cta && (
                    <div className="mt-10 sm:mt-12">
                      <Magnetic className="w-full sm:w-auto">
                        <a
                          href={page.services.cta.href}
                          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-cream sm:w-auto"
                        >
                          {page.services.cta.label}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      </Magnetic>
                    </div>
                  )}
                </div>
              </section>
            )}

            {page.faqs.length > 0 && (
              <section className="section-y border-t border-ink/[0.06] bg-white">
                <div className="mx-auto max-w-4xl px-5 sm:px-8">
                  <Eyebrow>Frequently Asked Questions</Eyebrow>
                  <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                    {page.faqs.map(({ q, a }) => (
                      <div key={q} className="py-6">
                        <dt className="text-[16px] font-bold leading-snug text-ink">{q}</dt>
                        <dd className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            )}

            {page.blogs && <RelatedBlogs blogs={page.blogs} />}

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
