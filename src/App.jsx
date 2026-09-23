import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const ServicePage = lazy(() => import("./pages/ServicePage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ResourcePage = lazy(() => import("./pages/ResourcePage"));
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
        <Route path="resources/:slug" element={<ResourcePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
