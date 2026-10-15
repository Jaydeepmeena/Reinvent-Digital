import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

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
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="what-we-do/:slug" element={<ServicePage />} />
        <Route path="industries/:slug" element={<IndustryPage />} />
        <Route path="about/:slug" element={<AboutPage />} />
        {/* The blog and the case studies are CMS-backed, so each has its own
            list and article route. They must sit above resources/:slug. */}
        <Route path="resources/blogs" element={<BlogsPage />} />
        <Route path="resources/blogs/:slug" element={<BlogPostPage />} />
        <Route path="resources/case-study" element={<CaseStudiesPage />} />
        <Route path="resources/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="resources/:slug" element={<ResourcePage />} />
        <Route path="locations/:slug" element={<LocationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
