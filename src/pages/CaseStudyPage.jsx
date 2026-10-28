import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock3 } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import CountUp from "../components/motion/CountUp";
import ChannelResults from "../components/fx/ChannelResults";
import { fetchCaseStudies, fetchCaseStudy, formatDate } from "../lib/caseStudies";

const cap = (text) => (text ? text.charAt(0).toUpperCase() + text.slice(1) : text);

// Pulls the "Results by channel" block out of the article body so it can be
// rendered as an interactive panel, and returns the body with that block
// removed. The block is a <h2> titled "Results by channel", followed by an
// <h3> per channel and a <ul> of "<strong>value</strong> — label" metrics,
// up to the next <h2>. Any content without it is returned unchanged.
function extractChannels(html) {
  if (!html || typeof window === "undefined") return { channels: [], body: html ?? "" };
  const doc = new DOMParser().parseFromString(`<div id="cs-root">${html}</div>`, "text/html");
  const root = doc.getElementById("cs-root");
  const heading = [...root.querySelectorAll("h2")].find((h) => /results?\s+by\s+channel/i.test(h.textContent));
  if (!heading) return { channels: [], body: html };

  const channels = [];
  const remove = [heading];
  let current = null;
  let node = heading.nextElementSibling;
  while (node && node.tagName !== "H2") {
    remove.push(node);
    if (node.tagName === "H3") {
      current = { name: node.textContent.trim(), metrics: [] };
      channels.push(current);
    } else if (node.tagName === "UL" && current) {
      node.querySelectorAll("li").forEach((li) => {
        const value = (li.querySelector("strong")?.textContent ?? li.textContent.split(/[—–-]/)[0]).trim();
        const label = cap(li.textContent.replace(value, "").replace(/^\s*[—–-]\s*/, "").trim());
        if (value && label) current.metrics.push({ value, label });
      });
    }
    node = node.nextElementSibling;
  }
  remove.forEach((el) => el.remove());
  return { channels: channels.filter((c) => c.metrics.length), body: root.innerHTML };
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
  const contentRef = useRef(null);

  const { channels, body } = useMemo(
    () => (study?.content ? extractChannels(study.content) : { channels: [], body: "" }),
    [study]
  );

  // Reveal each top-level block of the article as it scrolls into view. The body
  // is injected HTML, so this walks its children rather than wrapping each one.
  useEffect(() => {
    if (status !== "ready") return undefined;
    const root = contentRef.current;
    if (!root) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const blocks = Array.from(root.children);
    const reveal = (el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      io.unobserve(el);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal on entry, and also when a block has been scrolled (or jumped)
          // to at or above the viewport, so a fast jump never leaves one hidden.
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            reveal(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    blocks.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      const delay = Math.min(i, 6) * 0.04;
      el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [status, study]);

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

          <div className="section-y bg-white">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
              {status === "loading" && (
                <div className="space-y-4">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="h-4 w-full animate-pulse rounded bg-ink/[0.06]" />
                  ))}
                </div>
              )}

              {status === "ready" && study && (
                // Content comes from the CMS and is sanitised in src/lib/cms.js.
                <div ref={contentRef} className="prose-post" dangerouslySetInnerHTML={{ __html: body }} />
              )}

              {status === "missing" && (
                <div className="text-center">
                  <h1 className="text-2xl font-extrabold text-ink">That case study isn&rsquo;t available.</h1>
                  <p className="mt-3 text-[15px] text-ink-soft">
                    It may have been unpublished, or the link may be out of date.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="text-center">
                  <h1 className="text-2xl font-extrabold text-ink">We couldn&rsquo;t load this case study.</h1>
                  <p className="mt-3 text-[15px] text-ink-soft">Please try again in a moment.</p>
                </div>
              )}
            </div>
          </div>

          {status === "ready" && channels.length > 0 && <ChannelResults channels={channels} />}

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
