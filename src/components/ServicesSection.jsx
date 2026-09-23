import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Megaphone, Wrench, LifeBuoy, ArrowUpRight, ArrowRight } from "lucide-react";
import { SERVICES } from "../data/services";
// Reuses the photos already bundled for the system cards.
import demandImg from "../assets/cards/demand.jpg";
import reportingImg from "../assets/cards/reporting.jpg";
import callsImg from "../assets/cards/calls.jpg";
import SectionHeader from "./motion/SectionHeader";
import useMediaQuery from "./motion/useMediaQuery";
import { EASE } from "./motion/easing";
import { gsap, ScrollTrigger, useGSAP } from "./fx/gsap";

const CATEGORIES = [
  {
    key: "Digital Marketing",
    icon: Megaphone,
    image: demandImg,
    body: "Full-funnel campaigns engineered to turn search, social and AI visibility into booked patients.",
  },
  {
    key: "Tools",
    icon: Wrench,
    image: reportingImg,
    body: "The CRM that connects every channel to one patient record and real booking data.",
  },
  {
    key: "Support",
    icon: LifeBuoy,
    image: callsImg,
    body: "A call centre discipline that turns fast response into a consistent booking rate.",
  },
];

// Desktop always gets the big-card-plus-two-small layout.
const WIDE_QUERY = "(min-width: 1024px)";
// The scroll swap on top of it just needs room for a card under the navbar. Reduced-motion users
// still get the swap (it is the section's structure), but without the travel animation.
const PIN_QUERY = `${WIDE_QUERY} and (min-height: 560px)`;
// One spring for every card, so the growing and shrinking cards stay in step.
const SWAP = { layout: { type: "spring", stiffness: 85, damping: 20, mass: 1 } };
const SWAP_INSTANT = { layout: { duration: 0 } };
// Card colours flip fast; the text waits for them, so light text never lands on a light card.
const FADE_IN = { duration: 0.35, ease: EASE, delay: 0.22 };
const FADE_OUT = { duration: 0.15, ease: EASE };

export default function ServicesSection() {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(0);
  const wide = useMediaQuery(WIDE_QUERY);
  const reduce = useReducedMotion();
  const swapping = useMediaQuery(PIN_QUERY);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(PIN_QUERY, () => {
        const steps = CATEGORIES.length;
        const st = ScrollTriggerCreate(wrapRef.current, steps, setActive);
        // The desktop grid height lands a frame after this runs, so re-measure once it has.
        const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => {
          cancelAnimationFrame(raf);
          st.kill();
        };
      });
      return () => mm.revert();
    },
    { dependencies: [] }
  );

  return (
    <section
      id="services"
      className="border-y border-ink/[0.06] bg-paper pb-[clamp(2.25rem,1.75rem+2vw,3.5rem)] pt-6 sm:pt-7 lg:pt-8"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Patient acquisition,"
          accent="under one roof."
          action={
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              Discuss your setup
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        />

        <div ref={wrapRef} className="section-head-gap">
          <LayoutGroup>
          <div
            className={`grid gap-4 sm:gap-5 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3 lg:grid-rows-2 ${
              swapping ? "lg:h-[min(40rem,max(30rem,calc(100dvh-9rem)))]" : ""
            }`}
          >
            {CATEGORIES.map(({ key, icon: Icon, image, body }, i) => {
              const items = SERVICES.filter((s) => s.category === key);
              const isActive = wide ? i === active : i === 0;
              const expanded = !wide || isActive;
              const rank = (i - active + CATEGORIES.length) % CATEGORIES.length;

              return (
                <motion.article
                  key={key}
                  layout
                  transition={reduce ? SWAP_INSTANT : SWAP}
                  style={{ order: rank }}
                  className={`relative isolate flex flex-col overflow-hidden rounded-2xl border transition-[background-color,border-color,color,box-shadow] duration-200 ${
                    isActive ? "p-6 sm:p-8" : "p-4 sm:p-5"
                  } ${
                    isActive
                      ? "border-ink bg-ink text-cream shadow-xl shadow-ink/15 lg:col-span-2 lg:row-span-2"
                      : "border-ink/10 bg-cream text-ink hover:border-green/30"
                  } ${!wide && i === 0 ? "md:col-span-2" : ""}`}
                >
                  {/* Only the big card carries a photo */}
                  {isActive && (
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.1]"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-12 w-12 origin-left items-center justify-center rounded-xl transition-[background-color,color,scale] duration-300 ${
                        isActive ? "bg-lime text-ink" : "scale-90 bg-lime-soft text-green-deep"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        isActive ? "bg-white/10 text-cream/70" : "bg-ink/5 text-ink-soft"
                      }`}
                    >
                      {items.length} {items.length === 1 ? "service" : "services"}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 text-xl font-bold transition-colors duration-200 ${
                      isActive ? "text-cream" : "text-ink"
                    }`}
                  >
                    {key}
                  </h3>
                  <p
                    className={`mt-2 max-w-md text-[15px] leading-relaxed transition-colors duration-200 ${
                      isActive ? "text-cream/60" : "text-ink-soft"
                    }`}
                  >
                    {body}
                  </p>

                  <div className="flex-1" />

                  <AnimatePresence mode="wait" initial={false}>
                  {expanded ? (
                    <motion.ul
                      key="list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: FADE_OUT }}
                      transition={FADE_IN}
                      className={`mt-6 grid gap-1 border-t pt-5 ${
                        isActive
                          ? "border-cream/10 sm:grid-cols-2 sm:gap-x-4"
                          : "border-ink/10"
                      }`}
                    >
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/what-we-do/${item.slug}`}
                            className={`group/link flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[14px] leading-snug transition-colors ${
                              isActive
                                ? "text-cream/80 hover:bg-white/5 hover:text-lime"
                                : "font-semibold text-ink hover:bg-lime-soft hover:text-green-deep"
                            }`}
                          >
                            <item.icon className="h-4 w-4 shrink-0 opacity-80" />
                            <span className="flex-1">{item.title}</span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  ) : (
                    <motion.p
                      key="preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: FADE_OUT }}
                      transition={FADE_IN}
                      className="mt-3 line-clamp-1 text-[13px] font-semibold text-green-deep"
                    >
                      {items
                        .slice(0, 2)
                        .map((item) => item.title)
                        .join(" · ")}
                      {items.length > 2 ? " …" : ""}
                    </motion.p>
                  )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
          </LayoutGroup>

          {swapping && (
            <div className="mt-6 flex items-center gap-2">
              {CATEGORIES.map(({ key }, i) => (
                <span
                  key={key}
                  aria-hidden="true"
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-ink" : "w-5 bg-ink/15"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Pins the cards and promotes one category per scroll gesture.
function ScrollTriggerCreate(el, steps, onStep) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: el,
      // Slightly below centre so the pinned cards clear the floating navbar.
      start: "center 55%",
      // Roughly one scroll gesture per card, so a single swipe advances exactly one.
      end: () => `+=${steps * window.innerHeight * 0.45}`,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => onStep(Math.min(steps - 1, Math.floor(self.progress * steps))),
    },
  }).scrollTrigger;
}
