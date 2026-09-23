import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NAV_OFFSET = -88;

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.querySelector(hash) : null;
      if (target) {
        if (lenis) lenis.scrollTo(target, { offset: NAV_OFFSET });
        else target.scrollIntoView();
      } else if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, lenis]);

  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-green via-lime to-lime"
    />
  );
}

export default function Layout() {
  const reduceMotion = useReducedMotion();

  const page = (
    <div className="relative min-h-screen bg-cream text-ink">
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );

  if (reduceMotion) return page;

  return (
    <ReactLenis root options={{ lerp: 0.14, anchors: { offset: NAV_OFFSET }, autoRaf: true }}>
      {page}
    </ReactLenis>
  );
}
