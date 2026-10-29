import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, formatDate } from "../../lib/blog";
import { SAMPLE_POSTS } from "../../data/sampleBlogs";
import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";
import { BLOG_PATH } from "../../data/routes";

/**
 * The blog posts a landing page wants to feature, named by slug.
 *
 * The posts live in the blog CMS, so this reads the blog list (the same source
 * the blog page uses, with the bundled posts as a fallback) and shows the ones
 * whose slug the page listed, in the order it listed them. A slug that matches
 * nothing is skipped, and the whole section is hidden when none match, so a
 * page that names no blogs — or names ones that no longer exist — simply does
 * not show it.
 *
 * @param blogs {{ eyebrow?, heading?, body?, slugs: string[] }}
 */
export default function RelatedBlogs({ blogs }) {
  const [fetched, setFetched] = useState([]);

  useEffect(() => {
    let live = true;
    fetchPosts({ perPage: 100 })
      .then(({ posts }) => {
        if (live && posts?.length) setFetched(posts);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  if (!blogs?.slugs?.length) return null;

  // Resolve the named slugs against the live posts and the bundled ones alike:
  // a live post wins where it exists, and the bundled posts cover a slug the
  // feed does not carry yet — so the section shows wherever the page runs. A
  // slug that matches neither is skipped, and the section is hidden when none
  // match, which is also how a page that lists no blogs stays blank.
  const bySlug = new Map();
  for (const post of SAMPLE_POSTS) if (post?.slug) bySlug.set(post.slug, post);
  for (const post of fetched) if (post?.slug) bySlug.set(post.slug, post);

  const featured = blogs.slugs.map((slug) => bySlug.get(slug)).filter(Boolean);
  if (featured.length === 0) return null;

  return (
    <section className="section-y border-t border-ink/[0.06] bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          {blogs.eyebrow && <Eyebrow>{blogs.eyebrow}</Eyebrow>}
          {blogs.heading && (
            <SplitReveal
              as="h2"
              type="blur"
              className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
            >
              {blogs.heading}
            </SplitReveal>
          )}
          {blogs.body && <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{blogs.body}</p>}
        </div>

        <div className="section-head-gap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-xl hover:shadow-ink/10"
            >
              {post.image?.src && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image.src}
                    alt={post.image.alt ?? ""}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {post.date && (
                  <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
                    {formatDate(post.date)}
                  </time>
                )}
                <h3 className="mt-2 text-[17px] font-bold leading-snug text-ink">
                  <Link to={`${BLOG_PATH}/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h3>
                {post.excerpt && (
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
