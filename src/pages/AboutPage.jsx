import { Fragment, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Quote } from "lucide-react";
import { ABOUT_PAGES } from "../data/about";
import { usePageCollection, usePageEntry } from "../lib/pageContent";
import PageLoading from "../components/fx/PageLoading";
import SubPageHero from "../components/SubPageHero";
import { ABOUT_HERO_IMAGES } from "../data/heroImages";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SmartImage from "../components/fx/SmartImage";
import SplitReveal from "../components/fx/SplitReveal";
import ScrubText from "../components/fx/ScrubText";
import RotatingBadge from "../components/fx/RotatingBadge";
import StickyChapters from "../components/fx/StickyChapters";
import StatRows from "../components/fx/StatRows";
import TextDrum from "../components/fx/TextDrum";
import ScrollTimeline from "../components/fx/ScrollTimeline";
import Reveal from "../components/motion/Reveal";
import { gsap, MOTION_OK, useGSAP } from "../components/fx/gsap";

const VALUES = ["Ownership", "Evidence", "Healthcare only", "Booked Patients", "No hand-offs", "Accountability"];

/**
 * The departments behind a page, grouped by the stage of the journey they own.
 *
 * Ten of anything in a grid of boxes reads as a wall, so these are rows in the
 * same language the rest of the site uses for figures: the headcount set large
 * in ink, the name and the lead's experience beside it, what the team does
 * across from that, and a hairline between each. A group is a band with its
 * own rule, which gives the three stages of the journey their own weight.
 */
function Departments({ eyebrow, heading, groups = [] }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        ref.current.querySelectorAll("[data-dept]").forEach((row) => {
          gsap.from(row.querySelectorAll("[data-dept-item]"), {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 88%", once: true },
          });
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="section-y-tight border-t border-ink/[0.06] bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SplitReveal
            as="h2"
            type="blur"
            className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
          >
            {heading}
          </SplitReveal>
        </div>

        <div className="mt-14 space-y-16 sm:space-y-20">
          {groups.map(({ title, teams = [] }) => (
            <div key={title}>
              <Reveal>
                <div className="flex items-baseline gap-5">
                  <h3 className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-ink">{title}</h3>
                  <span className="h-px flex-1 bg-ink/15" />
                  <span className="shrink-0 text-xs font-semibold tabular-nums text-ink-soft">
                    {teams.length} {teams.length === 1 ? "department" : "departments"}
                  </span>
                </div>
              </Reveal>

              <ul>
                {teams.map(({ name, size, experience, body }) => (
                  <li
                    key={name}
                    data-dept
                    className="group relative grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-b border-ink/[0.08] py-7 transition-colors duration-300 hover:bg-paper sm:grid-cols-[5.5rem_minmax(0,1fr)] lg:grid-cols-[6rem_minmax(0,22rem)_minmax(0,1fr)] lg:gap-x-10"
                  >
                    {/* The lime edge is the only thing that moves on hover, so a
                        long list does not jump about as the pointer crosses it. */}
                    <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-lime transition-transform duration-300 group-hover:scale-y-100" />

                    <div data-dept-item className="pl-4 lg:pl-5">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Team</div>
                      <div className="mt-1 text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] font-extrabold leading-none tracking-tighter tabular-nums text-ink">
                        {size}
                      </div>
                    </div>

                    {/* Beside the figure on a phone, not under it: ten rows of
                        a number on its own line is a long scroll. */}
                    <div data-dept-item className="min-w-0 self-center sm:self-start lg:col-span-1">
                      <h4 className="text-[clamp(1.05rem,1rem+0.3vw,1.25rem)] font-bold leading-snug text-ink">{name}</h4>
                      {experience && (
                        <div className="mt-1.5 text-[13px] font-semibold text-ink-soft">Lead: {experience}</div>
                      )}
                    </div>

                    {body && (
                      <p
                        data-dept-item
                        className="col-span-2 text-[15px] leading-relaxed text-ink-soft sm:col-start-2 lg:col-span-1 lg:col-start-3 lg:pt-0.5"
                      >
                        {body}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * The years that got the agency here, on the same rail the industry pages use
 * for their process: a dark band, a lime line that fills as you scroll, and the
 * milestones alternating either side of it. Each one labels itself with its
 * year in place of the step number.
 */
function Journey({ eyebrow, heading, milestones = [] }) {
  const steps = milestones.map(({ year, title, body }) => ({ label: year, title, body }));

  return (
    <section className="section-y-tight bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl sm:mb-16 lg:mx-auto lg:text-center">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <SplitReveal
            as="h2"
            type="skewLines"
            className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight"
          >
            {heading}
          </SplitReveal>
        </div>
        <ScrollTimeline steps={steps} />
      </div>
    </section>
  );
}

/**
 * The founder: portrait on the left, his words on the right.
 *
 * Until there is a photograph, the frame holds his initials rather than a
 * stand-in face, so the layout is already right and the picture is a one-line
 * swap. On a phone the heading comes first and the portrait follows, because a
 * section that opens with a face and no context reads as an advert.
 */
function Founder({ eyebrow, heading, body, name, role, note, image, imageFallback, imageAlt }) {
  const initials = (name ?? "")
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  // The hairline matters here: the journey above is on the same ink, and
  // without it the two sections read as one long dark slab.
  return (
    <section className="section-y-tight border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="max-lg:order-2">
          <div className="overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.04]">
            {image ? (
              <SmartImage
                src={image}
                fallback={imageFallback}
                alt={imageAlt ?? name}
                title={name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center">
                <span className="font-serif-italic text-[clamp(3rem,2rem+6vw,5.5rem)] leading-none text-lime/60">
                  {initials}
                </span>
              </div>
            )}
          </div>
          <div className="mt-6">
            <div className="text-base font-bold text-cream">{name}</div>
            {role && <div className="mt-1 text-sm text-cream/70">{role}</div>}
            {note && (
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime">{note}</div>
            )}
          </div>
        </Reveal>

        <div className="max-lg:order-1">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <SplitReveal
            as="h2"
            type="blur"
            className="mt-4 text-balance font-serif-italic text-[clamp(1.6rem,1.2rem+1.8vw,2.6rem)] leading-[1.15] text-lime"
          >
            {heading}
          </SplitReveal>
          <ScrubText className="mt-6 text-[clamp(1.05rem,1rem+0.45vw,1.3rem)] leading-relaxed text-cream/80">
            {body}
          </ScrubText>
        </div>
      </div>
    </section>
  );
}

/** Vision and mission, side by side, because they are read as a pair. */
function Drivers({ eyebrow, heading, items = [] }) {
  return (
    <section className="section-y-tight border-t border-ink/[0.06] bg-white">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SplitReveal
          as="h2"
          type="blur"
          className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
        >
          {heading}
        </SplitReveal>
        <div className="section-head-gap grid gap-5 text-left sm:grid-cols-2">
          {items.map(({ title, body }, i) => (
            <Reveal key={title} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-ink/10 bg-paper p-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-soft">{title}</h3>
                <p className="mt-4 text-[clamp(1.05rem,1rem+0.4vw,1.25rem)] leading-relaxed text-ink">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One chapter told beside a picture: words on the left, image on the right.
 *
 * Used when a page has a single narrative section with a photograph. The
 * picture stays with the copy while it scrolls on a wide screen, and drops
 * below it on a phone, where a half-width image would be a postage stamp.
 */
function Story({ eyebrow, heading, body, highlight, image, imageFallback, imageAlt }) {
  const paragraphs = (Array.isArray(body) ? body : [body]).filter(Boolean);

  return (
    <section className="section-y-tight">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <SplitReveal
            as="h2"
            type="blur"
            className="mt-4 text-balance text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)] font-extrabold leading-tight tracking-tight text-ink"
          >
            {heading}
          </SplitReveal>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
          {highlight && (
            <p className="mt-8 border-l-4 border-lime pl-5 text-[clamp(1.1rem,1rem+0.5vw,1.35rem)] font-bold leading-snug text-ink">
              {highlight}
            </p>
          )}
        </div>

        <Reveal className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-3xl border border-ink/10">
            <SmartImage
              src={image}
              fallback={imageFallback}
              alt={imageAlt || heading}
              title={imageAlt || heading}
              loading="lazy"
              /* Left at the photograph's own 4:3. A portrait crop would cut
                 people off either end of a group shot. */
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function AboutPage({ slug: given }) {
  const { slug: fromUrl } = useParams();
  const slug = given ?? fromUrl;
  const { entry: page, status } = usePageEntry("about", slug, ABOUT_PAGES);
  // The crumb points at whichever page opens the section, wherever it now sits.
  const { navEntries: aboutPages } = usePageCollection("about", ABOUT_PAGES);
  const aboutHome = aboutPages.find((entry) => entry.id === "our-story")?.path ?? aboutPages[0]?.path ?? "/";

  if (status === "loading") return <PageLoading />;
  if (!page) return <Navigate to="/" replace />;

  const {
    icon, eyebrow, title, headline, accent, description,
    sections = [], stats, highlights, quote, departments, closing,
    journey, founder, drivers, faqs = [], faqTitle, ctaLabel,
  } = page;
  // The figures already run as the strip under the hero, so this band is only
  // for a page that carries highlights of its own. Showing both read as the
  // same numbers twice.
  const hasFacts = highlights?.length > 0;

  return (
    <InnerPage>
      <Fragment key={slug}>
        <SubPageHero
          variant="about"
          image={ABOUT_HERO_IMAGES[slug]}
          trail={[{ label: "About Us", href: aboutHome }, { label: title }]}
          eyebrow={eyebrow}
          title={title}
          headline={headline}
          accent={accent}
          description={description}
          stats={stats}
          ctaLabel={ctaLabel}
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

        {/* A single chapter with a picture is told beside it; anything else
            runs as the numbered chapters it was written for. */}
        {sections.length === 1 && sections[0].image ? (
          <Story {...sections[0]} />
        ) : (
          <section className={sections.length > 1 ? "section-y" : "section-y-tight"}>
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <StickyChapters chapters={sections} />
            </div>
          </section>
        )}

        {departments && <Departments {...departments} />}

        {journey && <Journey {...journey} />}

        {founder && <Founder {...founder} />}

        {drivers && <Drivers {...drivers} />}

        {hasFacts && (
          <section className="section-y border-t border-ink/[0.06] bg-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <Eyebrow>What you get</Eyebrow>
                <SplitReveal
                  as="h2"
                  type="blur"
                  className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
                >
                  What working with us looks like
                </SplitReveal>
              </div>
              <StatRows highlights={highlights} />
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

        {faqs.length > 0 && (
          <section className="section-y-tight border-t border-ink/[0.06] bg-white">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <Eyebrow>{faqTitle ?? "Frequently asked questions"}</Eyebrow>
              <SplitReveal
                as="h2"
                type="chars3d"
                className="mt-4 text-balance text-[clamp(1.75rem,1.3rem+2vw,2.4rem)] font-extrabold leading-[1.12] tracking-tight text-ink"
              >
                {`Common Questions About ${title}, Answered`}
              </SplitReveal>

              <dl className="section-head-gap divide-y divide-ink/10 border-y border-ink/10">
                {faqs.map(({ q, a }, i) => (
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
          eyebrow={closing?.eyebrow ?? eyebrow}
          heading={closing?.heading ?? "Want to see if we're the right fit for your team?"}
          body={closing?.body ?? "Reach out and we'll walk you through how we work, account by account."}
        />
      </Fragment>
    </InnerPage>
  );
}
