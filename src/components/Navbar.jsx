import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  { key: "what-we-do", label: "What We Do", type: "mega" },
  { key: "industries", label: "Industries", type: "list", items: INDUSTRIES, base: "/industries" },
  { key: "resources", label: "Resources", type: "list", items: RESOURCE_PAGES, base: "/resources" },
  { key: "locations", label: "Locations", type: "locations" },
  { key: "about", label: "About Us", type: "list", items: ABOUT_PAGES, base: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const navRef = useRef(null);
  const lenis = useLenis();

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
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 sm:px-5 ${
        scrolled ? "pt-2" : "pt-3 sm:pt-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/[0.06] bg-white/92 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 sm:px-5 ${
          scrolled || openMenu
            ? "shadow-[0_18px_45px_-22px_rgba(27,27,23,0.45)]"
            : "shadow-[0_10px_30px_-18px_rgba(27,27,23,0.35)]"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpenMenu(null)}>
          <img src={logo} alt="Reinvent Digital" className="h-11 w-auto sm:h-12" />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          <Link
            to="/"
            className="rounded-full px-3.5 py-2 text-[14.5px] font-medium tracking-[-0.01em] text-ink-soft transition-colors hover:bg-ink/[0.04] hover:text-ink"
          >
            Home
          </Link>
          {MENU.map((menu) => (
            <button
              key={menu.key}
              type="button"
              onClick={() => toggleMenu(menu.key)}
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-medium tracking-[-0.01em] transition-colors ${
                openMenu === menu.key ? "bg-ink/[0.06] text-ink" : "text-ink-soft hover:bg-ink/[0.04] hover:text-ink"
              }`}
            >
              {menu.label}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${openMenu === menu.key ? "rotate-180" : ""}`}
              />
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-cream shadow-[0_12px_24px_-14px_rgba(27,27,23,0.9)] transition-colors hover:bg-green-deep"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime transition-transform group-hover:scale-125" />
            Contact Us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-ink hover:text-cream lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full hidden justify-center px-5 pt-2 lg:flex"
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
                        <div key={group.title}>
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
                        </div>
                      ))}
                    </div>
                  )}

                  {menu.type === "list" && (
                    <ul className="space-y-1">
                      {menu.items.map(({ slug, title, icon: Icon }) => (
                        <li key={slug}>
                          <Link
                            to={`${menu.base}/${slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-lime-soft hover:text-green-deep"
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {menu.type === "locations" && (
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {LOCATIONS.map((city) => (
                        <Link
                          key={city}
                          to="/contact"
                          onClick={() => setOpenMenu(null)}
                          className="flex min-w-0 items-start gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium leading-tight text-ink-soft transition-colors hover:bg-lime-soft hover:text-green-deep"
                        >
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-deep" />
                          <span className="min-w-0 break-words">{city}</span>
                        </Link>
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
            className="mt-2 overflow-hidden rounded-[1.75rem] border border-ink/[0.07] bg-white shadow-[0_30px_60px_-30px_rgba(27,27,23,0.5)] lg:hidden"
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
