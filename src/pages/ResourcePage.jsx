import { Fragment } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getResourceBySlug, RESOURCE_PAGES } from "../data/resources";
import SubPageHero from "../components/SubPageHero";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import HoverPreviewList from "../components/fx/HoverPreviewList";
import FannedDocs from "../components/fx/FannedDocs";
import FlipLinkCard from "../components/fx/FlipLinkCard";

export default function ResourcePage() {
  const { slug } = useParams();
  const page = getResourceBySlug(slug);

  if (!page) return <Navigate to="/" replace />;

  const { eyebrow, title, accent, description, items } = page;
  const others = RESOURCE_PAGES.filter((r) => r.slug !== slug);

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          variant="resources"
          trail={[{ label: "Resources", href: "/resources/case-study" }, { label: title }]}
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          description={description}
          ctaHref="/contact"
          visual={<FannedDocs items={items} />}
        />

        <section className="section-y border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>{eyebrow}</Eyebrow>
                <SplitReveal
                  as="h2"
                  type="words"
                  className="mt-4 max-w-2xl text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
                >
                  {`Latest ${title.toLowerCase()}`}
                </SplitReveal>
              </div>
              <span className="rounded-full bg-lime px-4 py-1.5 text-sm font-bold text-ink">
                {items.length} entries
              </span>
            </div>
            <HoverPreviewList items={items} />
          </div>
        </section>

        <section className="section-y">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Keep exploring</p>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {others.map((r) => (
                <FlipLinkCard
                  key={r.slug}
                  to={`/resources/${r.slug}`}
                  eyebrow={r.eyebrow}
                  title={r.title}
                  back={r.description}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          monochrome
          eyebrow={eyebrow}
          heading="Want the detail behind the numbers?"
          body="Get in touch and we'll walk you through the full report or case study relevant to your team."
        />
      </Fragment>
    </InnerPage>
  );
}
