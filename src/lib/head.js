// Document head for client-rendered pages.
//
// The site has no head manager, so the few pages that need more than a title
// set the tags themselves. Everything written here is removed on unmount, so a
// landing page's canonical or noindex never leaks onto the page after it.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoMetaFor } from "../data/seoMeta";

const SITE = "Reinvent Digital";

// The site's real address, for canonical URLs. Set VITE_SITE_URL to the main
// domain so every copy of the site (vercel.app, previews) points at it.
const ORIGIN = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/+$/, "");

/**
 * The one URL a page should be indexed at: the main domain, lowercase, no
 * trailing slash, no query string or hash. /Healthcare-SEO/?utm_source=x and
 * /healthcare-seo are the same page, and this is the address they share.
 */
export function canonicalUrl(pathname) {
  const path = (pathname ?? "/").toLowerCase().replace(/\/+$/, "");
  return `${ORIGIN}${path || "/"}`;
}

function tag(selector, create) {
  let el = document.head.querySelector(selector);
  if (el) return { el, owned: false };
  el = create();
  document.head.appendChild(el);
  return { el, owned: true };
}

export function useDocumentHead({ title: ownTitle, description: ownDescription, canonical: ownCanonical, noindex = false, jsonLd } = {}) {
  const { pathname } = useLocation();
  // The SEO sheet decides the title and description of every page it lists,
  // and its titles are used as written, brand suffix or not.
  const sheet = seoMetaFor(pathname);
  // Every page names its canonical URL: one the page sets itself (a landing
  // page's CMS can), or else the clean form of its own address.
  const canonical = ownCanonical || canonicalUrl(pathname);
  const title = sheet?.title ?? ownTitle;
  const description = sheet?.description ?? ownDescription;
  const exact = Boolean(sheet?.title);

  useEffect(() => {
    const previousTitle = document.title;
    const added = [];
    const restored = [];

    if (title) document.title = exact || title.includes(SITE) ? title : `${title} | ${SITE}`;

    const setMeta = (attr, name, content) => {
      if (!content) return;
      const { el, owned } = tag(`meta[${attr}="${name}"]`, () => {
        const meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        return meta;
      });
      if (owned) added.push(el);
      else restored.push([el, "content", el.getAttribute("content")]);
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    // Pages opt out of indexing one at a time; by default they are findable,
    // which is the whole point of publishing them.
    setMeta("name", "robots", noindex ? "noindex, nofollow" : null);

    if (canonical) {
      const { el, owned } = tag('link[rel="canonical"]', () => {
        const node = document.createElement("link");
        node.rel = "canonical";
        return node;
      });
      if (owned) added.push(el);
      else restored.push([el, "href", el.getAttribute("href")]);
      el.href = canonical;
    }

    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = previousTitle;
      added.forEach((el) => el.remove());
      restored.forEach(([el, attr, value]) =>
        value === null ? el.removeAttribute(attr) : el.setAttribute(attr, value)
      );
      script?.remove();
    };
  }, [title, description, exact, canonical, noindex, jsonLd]);
}

/**
 * The sheet's title and description, and the canonical URL, for whatever page
 * is showing. Mounted once in the layout, so every page gets them.
 */
export function SheetMeta() {
  useDocumentHead();
  return null;
}
