// Blog data layer.
//
// The site reads posts straight from the CMS, so publishing a post is all
// that's needed for it to appear here. The machinery is shared with the case
// studies in src/lib/cms.js; this file only names the collection and supplies
// the posts shown before the feed is connected.
import { createCollection, isCmsConfigured } from "./cms";
import { SAMPLE_POSTS } from "../data/sampleBlogs";

export { sanitise, formatDate, normaliseEntry as normalisePost } from "./cms";

export const isBlogConfigured = isCmsConfigured;

// Until the CMS is connected, the blog runs on the bundled sample posts so the
// page is never empty. They are never read once the feed is live.
const posts = createCollection({
  resource: "posts",
  perPage: 9,
  samples: () => SAMPLE_POSTS,
});

export async function fetchPosts({ page = 1, perPage = 9, signal } = {}) {
  const { entries, totalPages, total } = await posts.fetchList({ page, size: perPage, signal });
  return { posts: entries, totalPages, total };
}

export const fetchPost = (slug, options) => posts.fetchOne(slug, options);
