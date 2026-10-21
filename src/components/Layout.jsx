import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NAV_OFFSET = -88;
const SITE_EXPIRATION_DATE = new Date("2027-02-01T00:00:00");
const CONTACT_EMAIL = "sales@reinventdigital.com";

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
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-green via-lime to-lime"
    />
  );
}

function SiteExpirationNotice() {
  const [expired, setExpired] = useState(
    () => new Date() >= SITE_EXPIRATION_DATE,
  );

  useEffect(() => {
    if (expired) return undefined;

    const checkExpiration = () => {
      if (new Date() >= SITE_EXPIRATION_DATE) {
        setExpired(true);
      }
    };

    const timer = window.setInterval(checkExpiration, 60 * 1000);
    document.addEventListener("visibilitychange", checkExpiration);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", checkExpiration);
    };
  }, [expired]);

  if (!expired) return null;

  return (
    <div
      role="alert"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink px-6 text-center text-cream"
    >
      <div className="max-w-lg">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">
          Reinvent Digital
        </span>
        <h1 className="mt-5 text-3xl font-extrabold leading-tight">
          This site is no longer available.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/70">
          Please contact us for more information.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink transition-transform duration-300 hover:scale-105"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
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
      <SiteExpirationNotice />
    </div>
  );

  if (reduceMotion) return page;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.14, anchors: { offset: NAV_OFFSET }, autoRaf: true }}
    >
      {page}
    </ReactLenis>
  );
}