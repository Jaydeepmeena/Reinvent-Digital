import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock3 } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import CTASection from "../components/CTASection";
import InnerPage from "../components/fx/InnerPage";
import { fetchPost, fetchPosts, formatDate, isBlogConfigured } from "../lib/blog";

function Related({ posts }) {
  if (posts.length === 0) return null;
  return (
    <section className="section-y border-t border-ink/[0.06] bg-paper">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="text-[clamp(1.4rem,1.1rem+1vw,1.9rem)] font-extrabold tracking-tight text-ink">Keep reading</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/resources/blogs/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition-[border-color,box-shadow] hover:border-ink/25 hover:shadow-xl hover:shadow-ink/10"
            >
              {post.image.src && (
                <img src={post.image.src} alt="" loading="lazy" className="h-32 w-full object-cover" />
              )}
              <span className="block p-5 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-green-deep">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!isBlogConfigured) {
      setStatus("missing");
      return undefined;
    }
    const controller = new AbortController();
    setStatus("loading");

    fetchPost(slug, { signal: controller.signal })
      .then((found) => {
        if (!found) {
          setStatus("missing");
          return;
        }
        setPost(found);
        setStatus("ready");
        document.title = `${found.title} | Reinvent Digital`;
        return fetchPosts({ perPage: 4, signal: controller.signal }).then(({ posts }) =>
          setRelated(posts.filter((p) => p.slug !== slug).slice(0, 3))
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
        <article>
          <header className="relative overflow-hidden bg-ink pb-14 pt-28 text-cream sm:pb-16 sm:pt-36">
            {post?.image.src && (
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <img src={post.image.src} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
              </div>
            )}

            <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
              <Breadcrumb
                tone="dark"
                trail={[{ label: "Blog", href: "/resources/blogs" }, { label: post?.title ?? "Article" }]}
              />

              {status === "loading" && (
                <div className="mt-8 space-y-4">
                  <div className="h-4 w-32 animate-pulse rounded bg-cream/15" />
                  <div className="h-10 w-full animate-pulse rounded bg-cream/20" />
                  <div className="h-10 w-2/3 animate-pulse rounded bg-cream/15" />
                </div>
              )}

              {status === "ready" && post && (
                <>
                  {post.category && (
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cream/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                      {post.category}
                    </span>
                  )}

                  <h1 className="mt-5 text-balance text-[clamp(2rem,1.5rem+2.6vw,3.1rem)] font-extrabold leading-[1.1] tracking-tight text-cream">
                    {post.title}
                  </h1>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-cream/65">
                    {post.author.name && (
                      <span className="flex items-center gap-2">
                        {post.author.avatar && (
                          <img src={post.author.avatar} alt="" className="h-7 w-7 rounded-full object-cover" />
                        )}
                        {post.author.name}
                      </span>
                    )}
                    {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.readingTime} min read
                    </span>
                  </div>
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

              {status === "ready" && post && (
                // Content comes from the CMS and is sanitised in src/lib/blog.js.
                <div className="prose-post" dangerouslySetInnerHTML={{ __html: post.content }} />
              )}

              {status === "missing" && (
                <div className="text-center">
                  <h1 className="text-2xl font-extrabold text-ink">That post isn&rsquo;t available.</h1>
                  <p className="mt-3 text-[15px] text-ink-soft">
                    It may have been unpublished, or the link may be out of date.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="text-center">
                  <h1 className="text-2xl font-extrabold text-ink">We couldn&rsquo;t load this post.</h1>
                  <p className="mt-3 text-[15px] text-ink-soft">Please try again in a moment.</p>
                </div>
              )}

              <div className="mt-14 border-t border-ink/10 pt-8">
                <Link
                  to="/resources/blogs"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-deep transition-colors hover:text-ink"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All blog posts
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Related posts={related} />

        <CTASection monochrome eyebrow="Insights" />
      </Fragment>
    </InnerPage>
  );
}
