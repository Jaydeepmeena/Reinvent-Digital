import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock3 } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import CountUp from "../components/motion/CountUp";
import ChannelResults from "../components/fx/ChannelResults";
import Challenges from "../components/fx/Challenges";
import CaseSteps from "../components/fx/CaseSteps";
import { fetchCaseStudies, fetchCaseStudy, formatDate } from "../lib/caseStudies";
import { parseCaseStudy } from "../lib/caseStudySections";

// A run of prose, revealing each top-level block as it scrolls into view. The
// body is injected HTML, so this walks its children rather than wrapping each.
function ProseBlock({ html }) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const reveal = (el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      io.unobserve(el);
    };
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          // Reveal on entry, and also once scrolled (or jumped) to at/above the
          // viewport, so a fast jump never leaves a block hidden.
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) reveal(entry.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    Array.from(root.children).forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      const delay = Math.min(i, 6) * 0.04;
      el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [html]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-12">
        <div ref={ref} className="prose-post" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

// A thin bar that fills as the reader moves through the article. Written to the
// DOM on scroll, so there is no re-render per frame.
function ReadingProgress({ targetRef }) {
  const barRef = useRef(null);
  useEffect(() => {
    const update = () => {
      const el = targetRef.current;
      const bar = barRef.current;
      if (!el || !bar) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 1));
      bar.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef]);
  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div ref={barRef} className="h-full origin-left bg-lime" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

function Related({ studies }) {
  if (studies.length === 0) return null;
  return (
    <section className="section-y border-t border-ink/[0.06] bg-paper">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-[clamp(1.4rem,1.1rem+1vw,1.9rem)] font-extrabold tracking-tight text-ink">
          More proof of work
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {studies.map((study) => (
            <Link
              key={study.id}
              to={`/resources/case-study/${study.slug}`}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-xl hover:shadow-ink/10"
            >
              {study.image.src && (
                <div className="h-32 w-full overflow-hidden">
                  <img
                    src={study.image.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <span className="block p-5 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-green-deep">
                {study.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const [study, setStudy] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState("loading");
  const articleRef = useRef(null);

  // The article body, split into ordered sections. "The challenge", "what we
  // did" and "results by channel" render as interactive blocks; the rest stay
  // as prose, with consecutive prose sections flowed back into one.
  const sections = useMemo(() => (study?.content ? parseCaseStudy(study.content) : []), [study]);
  const rendered = useMemo(() => {
    const out = [];
    let buffer = [];
    const flushProse = (key) => {
      if (buffer.length) {
        out.push(<ProseBlock key={`prose-${key}`} html={buffer.join("")} />);
        buffer = [];
      }
    };
    sections.forEach((section, i) => {
      if (section.type === "prose") {
        buffer.push(section.html);
        return;
      }
      flushProse(i);
      if (section.type === "challenge") out.push(<Challenges key={i} title={section.title} items={section.items} />);
      else if (section.type === "whatWeDid")
        out.push(<CaseSteps key={i} title={section.title} steps={section.steps} note={section.note} />);
      else if (section.type === "channels") out.push(<ChannelResults key={i} channels={section.channels} />);
    });
    flushProse("tail");
    return out;
  }, [sections]);

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");

    fetchCaseStudy(slug, { signal: controller.signal })
      .then((found) => {
        if (!found) {
          setStatus("missing");
          return;
        }
        setStudy(found);
        setStatus("ready");
        document.title = `${found.title} | Reinvent Digital`;
        return fetchCaseStudies({ perPage: 4, signal: controller.signal }).then(({ caseStudies }) =>
          setRelated(caseStudies.filter((item) => item.slug !== slug).slice(0, 3))
        );
      })
      .catch((error) => {
        if (error.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, [slug]);

  return (
    <InnerPage>
      <Fragment key={slug}>
        {status === "ready" && <ReadingProgress targetRef={articleRef} />}
        <article ref={articleRef}>
          <header className="relative overflow-hidden bg-ink pb-14 pt-28 text-cream sm:pb-16 sm:pt-36">
            {study?.image.src && (
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <img src={study.image.src} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
              </div>
            )}

            <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
              <Breadcrumb
                tone="dark"
                trail={[
                  { label: "Case Studies", href: "/resources/case-study" },
                  { label: study?.title ?? "Case study" },
                ]}
              />

              {status === "loading" && (
                <div className="mt-8 space-y-4">
                  <div className="h-4 w-32 animate-pulse rounded bg-cream/15" />
                  <div className="h-10 w-full animate-pulse rounded bg-cream/20" />
                  <div className="h-10 w-2/3 animate-pulse rounded bg-cream/15" />
                </div>
              )}

              {status === "ready" && study && (
                <>
                  {study.category && (
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cream/80">
                      {study.category}
                    </span>
                  )}

                  {study.client && (
                    <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-lime">
                      {study.client}
                    </p>
                  )}

                  <h1 className="mt-3 text-balance text-[clamp(2rem,1.5rem+2.6vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-cream">
                    {study.title}
                  </h1>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-cream/65">
                    {study.date && <time dateTime={study.date}>{formatDate(study.date)}</time>}
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {study.readingTime} min read
                    </span>
                  </div>

                  {study.results.length > 0 && (
                    <dl className="mt-10 grid grid-cols-2 gap-3 border-t border-cream/15 pt-8 sm:grid-cols-4 sm:gap-4">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="group rounded-2xl border border-cream/10 bg-cream/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-cream/[0.07] sm:p-5"
                        >
                          <dd className="text-[clamp(1.6rem,1.3rem+1.4vw,2.4rem)] font-extrabold leading-none tracking-tight text-lime">
                            <CountUp value={result.value} />
                          </dd>
                          <dt className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-cream/60 transition-colors group-hover:text-cream/80">
                            {result.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  )}
                </>
              )}
            </div>
          </header>

          {status === "loading" && (
            <div className="bg-white">
              <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
                <div className="space-y-4">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="h-4 w-full animate-pulse rounded bg-ink/[0.06]" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {status === "ready" && study && rendered}

          {(status === "missing" || status === "error") && (
            <div className="bg-white">
              <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
                <h1 className="text-2xl font-extrabold text-ink">
                  {status === "missing" ? "That case study isn’t available." : "We couldn’t load this case study."}
                </h1>
                <p className="mt-3 text-[15px] text-ink-soft">
                  {status === "missing"
                    ? "It may have been unpublished, or the link may be out of date."
                    : "Please try again in a moment."}
                </p>
              </div>
            </div>
          )}

          <div className="bg-white pb-16 sm:pb-20">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
              <div className="border-t border-ink/10 pt-8">
                <Link
                  to="/resources/case-study"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-deep transition-colors hover:text-ink"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All case studies
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Related studies={related} />

        <CTASection monochrome eyebrow="Proof of Work" />
      </Fragment>
    </InnerPage>
  );
}
