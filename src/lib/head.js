// Document head for client-rendered pages.
//
// The site has no head manager, so the few pages that need more than a title
// set the tags themselves. Everything written here is removed on unmount, so a
// landing page's canonical or noindex never leaks onto the page after it.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoMetaFor } from "../data/seoMeta";

const SITE = "Reinvent Digital";

function tag(selector, create) {
  let el = document.head.querySelector(selector);
  if (el) return { el, owned: false };
  el = create();
  document.head.appendChild(el);
  return { el, owned: true };
}

export function useDocumentHead({ title: ownTitle, description: ownDescription, canonical, noindex = false, jsonLd } = {}) {
  // The SEO sheet decides the title and description of every page it lists,
  // and its titles are used as written, brand suffix or not.
  const sheet = seoMetaFor(useLocation().pathname);
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
 * The sheet's title and description for whatever page is showing. Mounted once
 * in the layout, so pages that set no head of their own still get theirs.
 */
export function SheetMeta() {
  useDocumentHead();
  return null;
}
