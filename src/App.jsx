import { lazy } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useSitePages } from "./lib/sitePages";
import { BLOG_PATH, CASE_STUDY_PATH, PREVIOUS_HUBS } from "./data/routes";

const ServicePage = lazy(() => import("./pages/ServicePage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ResourcePage = lazy(() => import("./pages/ResourcePage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PAGES = {
  services: ServicePage,
  industries: IndustryPage,
  locations: LocationPage,
  about: AboutPage,
  resources: ResourcePage,
};

// An old blog or case-study URL, sent to the same post under the new hub.
function HubRedirect({ to }) {
  const { slug } = useParams();
  return <Navigate to={slug ? `${to}/${slug}` : to} replace />;
}

const route = (path) => path.replace(/^\//, "");

export default function App() {
  // One route per page, at the path that page's slug asks for. The pages the
  // site ships are known on the first frame, so the router is right immediately,
  // and a page the CMS has moved or added joins when its answer lands.
  const { pages, redirects } = useSitePages();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        {/* The blog and the case studies are CMS-backed sections of their own,
            indexed at these URLs. They are declared before the pages below and
            their paths are reserved, so nothing the CMS does can take them. */}
        <Route path={route(BLOG_PATH)} element={<BlogsPage />} />
        <Route path={`${route(BLOG_PATH)}/:slug`} element={<BlogPostPage />} />
        <Route path={route(CASE_STUDY_PATH)} element={<CaseStudiesPage />} />
        <Route path={`${route(CASE_STUDY_PATH)}/:slug`} element={<CaseStudyPage />} />
        {Object.entries(PREVIOUS_HUBS).flatMap(([from, to]) => [
          <Route key={from} path={route(from)} element={<HubRedirect to={to} />} />,
          <Route key={`${from}/:slug`} path={`${route(from)}/:slug`} element={<HubRedirect to={to} />} />,
        ])}

        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

        {/* The site's own pages. The path is whatever the slug said, and the
            page is handed its identity directly rather than reading it back
            out of the URL, which no longer has a fixed shape. */}
        {pages.map(({ path, collection, id }) => {
          const Page = PAGES[collection];
          return <Route key={`${collection}/${id}`} path={path} element={<Page slug={id} />} />;
        })}

        {/* Wherever a page used to be. */}
        {redirects.map(({ from, to }) => (
          <Route key={`${from}->${to}`} path={from} element={<Navigate to={to} replace />} />
        ))}

        {/* The API-driven landing pages, one root-level segment. A static path
            above outranks this, so a page that has moved to the root is served
            by its own route and only what is left reaches here. */}
        <Route path=":slug" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
