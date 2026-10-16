// Every page the site answers for, and every URL that redirects to one.
//
// The router needs all five collections to know what a URL means, because a
// slug now carries its own path and nothing about /google-ads says whether it
// is a service, a city or a landing page. The menus already read all five, so
// this costs nothing extra.
import { useMemo } from "react";
import { usePageCollection } from "./pageContent";
import { buildPageRoutes } from "./pagePaths";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";
import { LOCATIONS } from "../data/locations";
import { ABOUT_PAGES } from "../data/about";
import { RESOURCE_PAGES } from "../data/resources";

/**
 * @returns {{pages, redirects, conflicts, status}} `pages` is one entry per
 *          live page with its path, `redirects` maps an old path to the current
 *          one, and `conflicts` is the paths that were refused.
 */
export function useSitePages() {
  const services = usePageCollection("services", SERVICES);
  const industries = usePageCollection("industries", INDUSTRIES);
  const locations = usePageCollection("locations", LOCATIONS);
  const about = usePageCollection("about", ABOUT_PAGES);
  const resources = usePageCollection("resources", RESOURCE_PAGES);

  const loading = [services, industries, locations, about, resources].some(
    (collection) => collection.status === "loading"
  );

  return useMemo(() => {
    const built = buildPageRoutes({ services, industries, locations, about, resources });
    for (const { path, collection, id, why } of built.conflicts) {
      // The blog and case-study hubs are a deliberate overlap, so they are not
      // worth a warning every time the site loads.
      if (why.startsWith("reserved")) continue;
      console.warn(`[cms] ${collection}/${id} cannot be at ${path}: ${why}.`);
    }
    return { ...built, status: loading ? "loading" : "ready" };
  }, [services, industries, locations, about, resources, loading]);
}
