import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3 } from "lucide-react";
import SubPageHero from "../components/SubPageHero";
import { RESOURCE_HERO_IMAGES } from "../data/heroImages";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import FannedDocs from "../components/fx/FannedDocs";
import { getResourceBySlug } from "../data/resources";
import { fetchPosts, formatDate, isBlogConfigured } from "../lib/blog";

const page = getResourceBySlug("blogs");

function PostCard({ post, featured = false }) {
  return (
    <article
      className={`group relative isolate flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-2xl hover:shadow-ink/10 ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-lime-soft ${featured ? "lg:w-1/2" : ""}`}>
        {post.image.src ? (
          <img
            src={post.image.src}
            alt={post.image.alt}
            loading="lazy"
            decoding="async"
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
              featured ? "h-56 lg:h-full" : "h-48"
            }`}
          />
        ) : (
          <div className={`w-full bg-gradient-to-br from-lime-soft to-lime-mist ${featured ? "h-56 lg:h-full" : "h-48"}`} />
        )}
        {post.category && (
          <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream backdrop-blur">
            {post.category}
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? "lg:justify-center lg:p-10" : ""}`}>
        <div className="flex items-center gap-3 text-[12px] text-ink-soft">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readingTime} min read
          </span>
        </div>

        <h3
          className={`mt-3 text-balance font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-green-deep ${
            featured ? "text-[clamp(1.4rem,1.1rem+1.2vw,2rem)]" : "text-lg"
          }`}
        >
          <Link to={`/resources/blogs/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className={`mt-3 text-[15px] leading-relaxed text-ink-soft ${featured ? "" : "line-clamp-3"}`}>
            {post.excerpt}
          </p>
        )}

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green-deep">
          Read the post
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}

function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white">
      <div className="h-48 animate-pulse bg-ink/[0.06]" />
      <div className="space-y-3 p-6">
        <div className="h-3 w-28 animate-pulse rounded bg-ink/[0.06]" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-ink/[0.08]" />
        <div className="h-3 w-full animate-pulse rounded bg-ink/[0.06]" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-ink/[0.06]" />
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(isBlogConfigured ? "loading" : "unconfigured");
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const abort = useRef(null);

  const load = useCallback(async (next) => {
    if (!isBlogConfigured) return;
    abort.current?.abort();
    const controller = new AbortController();
    abort.current = controller;

    if (next > 1) setLoadingMore(true);
    else setStatus("loading");

    try {
      const { posts: batch, totalPages: pages } = await fetchPosts({ page: next, signal: controller.signal });
      setPosts((prev) => (next === 1 ? batch : [...prev, ...batch]));
      setTotalPages(pages);
      setPageNo(next);
      setStatus(batch.length === 0 && next === 1 ? "empty" : "ready");
    } catch (error) {
      if (error.name !== "AbortError") setStatus("error");
    } finally {
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    load(1);
    return () => abort.current?.abort();
  }, [load]);

  const [featured, ...rest] = posts;
  const heroDocs =
    posts.length > 0
      ? posts.slice(0, 3).map((post) => ({
          title: post.title,
          tag: post.category ?? "Insights",
          summary: post.excerpt,
        }))
      : page.items;

  return (
    <InnerPage>
      <Fragment>
        <SubPageHero
          variant="resources"
          image={RESOURCE_HERO_IMAGES.blogs}
          trail={[{ label: "Resources", href: "/resources/case-study" }, { label: page.title }]}
          eyebrow={page.eyebrow}
          title={page.title}
          accent={page.accent}
          description={page.description}
          ctaHref="/contact"
          visual={<FannedDocs items={heroDocs} />}
        />

        <section className="section-y border-t border-ink/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Eyebrow>Latest blogs</Eyebrow>
            <SplitReveal
              as="h2"
              type="words"
              className="mt-4 max-w-3xl text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
            >
              Fresh writing from the accounts we run.
            </SplitReveal>

            {status === "loading" && (
              <div className="section-head-gap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }, (_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            )}

            {status === "ready" && (
              <>
                <div className="section-head-gap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {featured && <PostCard post={featured} featured />}
                  {rest.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>

                {pageNo < totalPages && (
                  <div className="mt-12 flex justify-center">
                    <button
                      type="button"
                      onClick={() => load(pageNo + 1)}
                      disabled={loadingMore}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream disabled:opacity-50"
                    >
                      {loadingMore ? "Loading…" : "Load more posts"}
                    </button>
                  </div>
                )}
              </>
            )}

            {status === "empty" && (
              <p className="section-head-gap text-[15px] text-ink-soft">
                No posts have been published yet. New articles appear here automatically.
              </p>
            )}

            {status === "error" && (
              <div className="section-head-gap rounded-2xl border border-ink/10 bg-paper p-6">
                <p className="text-[15px] font-semibold text-ink">We couldn&rsquo;t load the blog just now.</p>
                <button
                  type="button"
                  onClick={() => load(1)}
                  className="mt-3 text-sm font-semibold text-green-deep underline underline-offset-4"
                >
                  Try again
                </button>
              </div>
            )}

            {status === "unconfigured" && (
              <div className="section-head-gap rounded-2xl border border-dashed border-ink/20 bg-paper p-6">
                <p className="text-[15px] font-semibold text-ink">The blog feed isn&rsquo;t connected yet.</p>
                <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-soft">
                  Set <code className="rounded bg-ink/[0.06] px-1.5 py-0.5">VITE_BLOG_API_URL</code> to the WordPress
                  REST endpoint (for example{" "}
                  <code className="rounded bg-ink/[0.06] px-1.5 py-0.5">https://blog.example.com/wp-json/wp/v2</code>)
                  and published posts will appear here.
                </p>
              </div>
            )}
          </div>
        </section>

        <CTASection monochrome eyebrow={page.eyebrow} />
      </Fragment>
    </InnerPage>
  );
}
