import { Fragment } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Quote } from "lucide-react";
import { getAboutBySlug } from "../data/about";
import SubPageHero from "../components/SubPageHero";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import ScrubText from "../components/fx/ScrubText";
import RotatingBadge from "../components/fx/RotatingBadge";
import StickyChapters from "../components/fx/StickyChapters";
import StatRows from "../components/fx/StatRows";
import TextDrum from "../components/fx/TextDrum";

const VALUES = ["Ownership", "Evidence", "Healthcare only", "Booked patients", "No hand-offs", "Accountability"];

export default function AboutPage() {
  const { slug } = useParams();
  const page = getAboutBySlug(slug);

  if (!page) return <Navigate to="/" replace />;

  const { icon, eyebrow, title, accent, description, sections, stats, highlights, quote } = page;
  const hasFacts = stats?.length > 0 || highlights?.length > 0;

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          variant="about"
          trail={[{ label: "About Us", href: "/about/our-story" }, { label: title }]}
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          description={description}
          stats={stats}
          ctaHref="/contact"
          visual={
            <RotatingBadge
              icon={icon}
              text={`${title} • Reinvent Digital • `}
              className="mx-auto w-full max-w-[22rem] lg:max-w-[26rem]"
            />
          }
        />

        {quote && (
          <section className="section-y border-y border-ink/[0.06] bg-white">
            <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
              <Quote className="mx-auto h-10 w-10 text-lime" fill="currentColor" strokeWidth={0} />
              <ScrubText
                as="blockquote"
                className="mx-auto mt-6 max-w-4xl text-balance font-serif-italic text-[clamp(1.6rem,1.1rem+2.4vw,3rem)] leading-[1.2] text-ink"
              >
                “{quote.text}”
              </ScrubText>
              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">{quote.name}</div>
            </div>
          </section>
        )}

        <section className="section-y">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <StickyChapters chapters={sections} />
          </div>
        </section>

        {hasFacts && (
          <section className="section-y border-t border-ink/[0.06] bg-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <Eyebrow>{stats?.length ? "By the numbers" : "What you get"}</Eyebrow>
                <SplitReveal
                  as="h2"
                  type="blur"
                  className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
                >
                  {stats?.length ? "The numbers behind the story." : "Life at RD, in practice."}
                </SplitReveal>
              </div>
              <StatRows stats={stats} highlights={highlights} />
            </div>
          </section>
        )}

        <section className="section-y bg-ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <Eyebrow tone="dark">What we stand for</Eyebrow>
            </div>
            <TextDrum items={VALUES} />
          </div>
        </section>

        <CTASection
          monochrome
          eyebrow={eyebrow}
          heading="Want to see if we're the right fit for your team?"
          body="Reach out and we'll walk you through how we work, account by account."
        />
      </Fragment>
    </InnerPage>
  );
}
