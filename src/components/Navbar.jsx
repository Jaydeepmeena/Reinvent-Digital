import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X, ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import logo from "../assets/rd-logo.png";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";
import { RESOURCE_PAGES } from "../data/resources";
import { ABOUT_PAGES } from "../data/about";

const WHAT_WE_DO = ["Digital Marketing", "Tools", "Support"].map((category) => ({
  title: category,
  items: SERVICES.filter((s) => s.category === category),
}));

const LOCATIONS = [
  "Jaipur", "Hyderabad", "Delhi", "Noida", "Mumbai", "Calicut",
  "Kochi", "Chennai", "Gurgaon", "Bangalore", "Thiruvananthapuram", "Vijaywada",
];

const MENU = [
  { key: "what-we-do", label: "What We Do", type: "mega", match: "/what-we-do" },
  { key: "industries", label: "Industries", type: "list", items: INDUSTRIES, base: "/industries", match: "/industries" },
  { key: "resources", label: "Resources", type: "list", items: RESOURCE_PAGES, base: "/resources", match: "/resources" },
  { key: "locations", label: "Locations", type: "locations" },
  { key: "about", label: "About Us", type: "list", items: ABOUT_PAGES, base: "/about", match: "/about" },
];

const PILL = { type: "spring", stiffness: 380, damping: 32 };

// Dropdown contents fade up one after another rather than all at once.
const panel = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: "easeOut", staggerChildren: 0.035, delayChildren: 0.04 },
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.12 } },
};
const panelItem = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const [hovered, setHovered] = useState(null);
  const navRef = useRef(null);
  const hoverTimer = useRef(null);
  const lenis = useLenis();
  const { pathname } = useLocation();

  // The sliding pill follows the pointer, falls back to the open menu, then to the current page.
  const activeKey =
    pathname === "/" ? "home" : (MENU.find((m) => m.match && pathname.startsWith(m.match))?.key ?? null);
  const pillKey = hovered ?? openMenu ?? activeKey;

  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };
  const scheduleOpen = (key) => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setOpenMenu(key), 90);
  };
  const scheduleClose = () => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };
  const onItemEnter = (e, key) => {
    setHovered(key);
    if (e.pointerType !== "mouse") return;
    if (key === "home") scheduleClose();
    else scheduleOpen(key);
  };

  useEffect(() => clearHoverTimer, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, lenis]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggleMenu = (key) => setOpenMenu((prev) => (prev === key ? null : key));

  return (
    <header
      ref={navRef}
      onPointerLeave={() => {
        setHovered(null);
        scheduleClose();
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`relative flex items-stretch bg-ink transition-shadow duration-300 lg:bg-lime ${
          scrolled || openMenu ? "shadow-[0_16px_40px_-22px_rgba(27,27,23,0.55)]" : ""
        }`}
      >
        {/* Black block: logo and links */}
        <div className="flex items-center gap-6 bg-ink py-3 pl-5 pr-5 sm:pl-8 lg:gap-8 lg:pr-8">
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2"
            onClick={() => setOpenMenu(null)}
            onPointerEnter={(e) => onItemEnter(e, "home")}
          >
            <img
              src={logo}
              alt="Reinvent Digital"
              className="h-11 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-[1.04] sm:h-12"
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            <Link
              to="/"
              onPointerEnter={(e) => onItemEnter(e, "home")}
              className={`relative rounded-full px-3 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors ${
                pillKey === "home" || activeKey === "home" ? "text-cream" : "text-cream/70"
              }`}
            >
              {pillKey === "home" && (
                <motion.span
                  layoutId="nav-pill"
                  transition={PILL}
                  className="absolute inset-0 rounded-full bg-cream/10"
                />
              )}
              <span className="relative">Home</span>
            </Link>
            {MENU.map((menu) => (
              <button
                key={menu.key}
                type="button"
                onClick={() => toggleMenu(menu.key)}
                onPointerEnter={(e) => onItemEnter(e, menu.key)}
                aria-expanded={openMenu === menu.key}
                className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors ${
                  pillKey === menu.key || activeKey === menu.key ? "text-cream" : "text-cream/70"
                }`}
              >
                {pillKey === menu.key && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={PILL}
                    className="absolute inset-0 rounded-full bg-cream/10"
                  />
                )}
                <span className="relative">{menu.label}</span>
                {/* Lime badge marks the items that open a menu, like the reference */}
                <span
                  className={`relative flex h-[18px] w-[18px] items-center justify-center rounded-full transition-colors duration-300 ${
                    activeKey === menu.key ? "bg-lime text-ink" : "bg-lime/85 text-ink"
                  }`}
                >
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${
                      openMenu === menu.key ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* The black block sweeps into the lime band */}
        <svg
          aria-hidden="true"
          viewBox="0 0 64 80"
          preserveAspectRatio="none"
          className="hidden w-12 self-stretch text-ink lg:block xl:w-16"
        >
          <path d="M0 0 H64 C44 4 40 32 24 58 C16 70 8 76 0 80 Z" fill="currentColor" />
        </svg>

        <div className="ml-auto flex items-center gap-3 self-center pr-5 sm:pr-8">
          <Link
            to="/contact"
            className="group hidden items-center gap-3 rounded-xl bg-ink py-2 pl-2 pr-4 text-[13px] font-bold uppercase tracking-[0.08em] text-cream transition-[background-color,scale] duration-300 hover:bg-green-deep active:scale-95 lg:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime text-ink transition-transform duration-300 group-hover:scale-105">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime text-ink transition-colors hover:bg-lime-deep lg:hidden"
            aria-label="Toggle menu"
          >
            <span className={`transition-transform duration-300 ${mobileOpen ? "rotate-90" : ""}`}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute inset-x-0 top-full hidden justify-center px-5 pt-3 lg:flex"
          >
            {(() => {
              const menu = MENU.find((m) => m.key === openMenu);
              if (!menu) return null;
              return (
                <div
                  className={`rounded-[1.75rem] border border-ink/[0.07] bg-white/97 p-6 shadow-[0_34px_70px_-34px_rgba(27,27,23,0.5)] backdrop-blur-sm ${
                    menu.type === "mega"
                      ? "w-[640px] max-w-full"
                      : menu.type === "locations"
                      ? "w-80"
                      : "w-64"
                  }`}
                >
                  {menu.type === "mega" && (
                    <div className="grid grid-cols-3 gap-6">
                      {WHAT_WE_DO.map((group) => (
                        <motion.div key={group.title} variants={panelItem}>
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-green-deep">
                            {group.title}
                          </h4>
                          <ul className="mt-3 space-y-1">
                            {group.items.map(({ slug, title, icon: Icon }) => (
                              <li key={slug}>
                                <Link
                                  to={`/what-we-do/${slug}`}
                                  onClick={() => setOpenMenu(null)}
                                  className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-[13px] leading-snug text-ink-soft transition-colors hover:bg-lime-soft hover:text-green-deep"
                                >
                                  <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {menu.type === "list" && (
                    <ul className="space-y-1">
                      {menu.items.map(({ slug, title, icon: Icon }) => (
                        <motion.li key={slug} variants={panelItem}>
                          <Link
                            to={`${menu.base}/${slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-lime-soft hover:text-green-deep"
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            {title}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {menu.type === "locations" && (
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {LOCATIONS.map((city) => (
                        <motion.div key={city} variants={panelItem}>
                        <Link
                          to="/contact"
                          onClick={() => setOpenMenu(null)}
                          className="flex min-w-0 items-start gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium leading-tight text-ink-soft transition-colors hover:bg-lime-soft hover:text-green-deep"
                        >
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-deep" />
                          <span className="min-w-0 break-words">{city}</span>
                        </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mx-3 mt-3 overflow-hidden rounded-[1.75rem] border border-ink/[0.07] bg-white shadow-[0_30px_60px_-30px_rgba(27,27,23,0.5)] sm:mx-5 lg:hidden"
          >
            <div data-lenis-prevent className="flex h-[calc(100dvh-7rem)] flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-ink"
              >
                Home
              </Link>

              {MENU.map((menu) => (
                <div key={menu.key} className="border-t border-ink/5 pt-1 first:border-t-0 first:pt-0">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSection((prev) => (prev === menu.key ? null : menu.key))
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-ink"
                  >
                    {menu.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileSection === menu.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openMobileSection === menu.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3"
                      >
                        {menu.type === "mega" &&
                          WHAT_WE_DO.map((group) => (
                            <div key={group.title} className="py-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-green-deep">
                                {group.title}
                              </span>
                              <div className="mt-1 flex flex-col">
                                {group.items.map(({ slug, title, icon: Icon }) => (
                                  <Link
                                    key={slug}
                                    to={`/what-we-do/${slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-ink-soft"
                                  >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    {title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}

                        {menu.type === "list" &&
                          menu.items.map(({ slug, title, icon: Icon }) => (
                            <Link
                              key={slug}
                              to={`${menu.base}/${slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-ink-soft"
                            >
                              <Icon className="h-4 w-4 shrink-0" />
                              {title}
                            </Link>
                          ))}

                        {menu.type === "locations" && (
                          <div className="grid grid-cols-2 gap-x-2 py-1">
                            {LOCATIONS.map((city) => (
                              <Link
                                key={city}
                                to="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="flex min-w-0 items-start gap-1.5 rounded-lg px-2 py-2 text-sm leading-tight text-ink-soft"
                              >
                                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-deep" />
                                <span className="min-w-0 break-words">{city}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-cream"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
