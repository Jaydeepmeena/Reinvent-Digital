import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { Target, Zap, TrendingUp, BadgeCheck } from "lucide-react";
import TiltCard from "./motion/TiltCard";
import useMediaQuery from "./motion/useMediaQuery";
import { EASE } from "./motion/easing";
import Scene3D from "./three/Scene3D";
// Free-licence photos from Unsplash, bundled so nothing loads from a third party at runtime.
import demandImg from "../assets/cards/demand.jpg";
import routingImg from "../assets/cards/routing.jpg";
import callsImg from "../assets/cards/calls.jpg";
import reportingImg from "../assets/cards/reporting.jpg";
import { gsap, ScrollTrigger, useGSAP } from "./fx/gsap";

// The step cards start as a stacked, fanned deck in ConnectBand's stage and fall into this grid on scroll.
const FLY_QUERY = "(prefers-reduced-motion: no-preference)";
const PILE_SCALE = 0.8;
const PILE_FILL = 0.72; // max share of the stage width one piled card may cover
// Offsets in px from the stage centre: a tight, fanned deck.
const PILE = [
  { x: -14, y: 10, rotate: -12 },
  { x: -5, y: 3, rotate: -5 },
  { x: 5, y: -3, rotate: 3 },
  { x: 14, y: -10, rotate: 10 },
];

// Layout box, ignoring transforms, so measurements stay stable mid-animation.
function pageBox(el) {
  let x = 0;
  let y = 0;
  for (let node = el; node; node = node.offsetParent) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  const w = el.offsetWidth;
  const h = el.offsetHeight;
  return { cx: x + w / 2, cy: y + h / 2, w, h };
}

const STEPS = [
  {
    icon: Target,
    image: demandImg,
    title: "Create demand",
    body: "Paid ads, SEO, AEO, GEO and Google Maps capture patients already looking for care.",
    tags: ["Search intent", "Local intent", "AI answers"],
  },
  {
    icon: Zap,
    image: routingImg,
    title: "Route instantly",
    body: "CRM, call tracking and messaging bring every enquiry into one patient record.",
    tags: ["Source tagging", "Auto-routing", "Agent roster"],
  },
  {
    icon: TrendingUp,
    image: callsImg,
    title: "Improve the call",
    body: "Call scoring, coaching and follow-up rules improve the conversations that create bookings.",
    tags: ["Call scoring", "Agent coaching", "Follow-up rules"],
  },
  {
    icon: BadgeCheck,
    image: reportingImg,
    title: "Prove the outcome",
    body: "Bookings connect back to source. Walk-ins connect when clinic systems provide attendance data.",
    tags: ["Cost per booking", "Walk-in match", "Channel decisions"],
  },
];

export default function SystemSection() {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 85%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const fly = useMediaQuery(FLY_QUERY);
  useLenis(ScrollTrigger.update);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(FLY_QUERY, () => {
        const cards = gsap.utils.toArray("[data-fly-card]", gridRef.current);
        const stage = document.querySelector("[data-fly-origin]");
        if (!stage || !cards.length) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "center 60%",
            endTrigger: gridRef.current,
            end: "top 30%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          const spot = PILE[i % PILE.length];
          tl.fromTo(
            card,
            {
              x: () => {
                const s = pageBox(stage);
                return s.cx + spot.x - pageBox(card).cx;
              },
              y: () => {
                const s = pageBox(stage);
                return s.cy + spot.y - pageBox(card).cy;
              },
              scale: () =>
                Math.min(PILE_SCALE, (pageBox(stage).w * PILE_FILL) / pageBox(card).w),
              rotate: spot.rotate,
              transformOrigin: "50% 50%",
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              ease: "power1.inOut",
              duration: 1,
            },
            i * 0.06,
          );
        });
      });
      return () => mm.revert();
    },
    { dependencies: [] },
  );

  return (
    <section
      className="relative overflow-x-clip bg-ink pb-12 pt-4 text-cream sm:pb-14 sm:pt-6 lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_80%_60%_at_80%_20%,black,transparent)]" />

        <div className="absolute -right-40 -top-24 h-[18rem] w-[18rem] opacity-30 sm:-right-24 sm:-top-12 sm:h-[26rem] sm:w-[26rem] sm:opacity-60 lg:hidden">
          <Scene3D scene="patientGlobe" className="h-full w-full" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={gridRef} className="relative">
          {/* Desktop: globe sits behind the card row, clearly larger than the cards. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 left-3/4 hidden aspect-square h-[200%] -translate-x-1/2 lg:block"
          >
            <Scene3D scene="patientGlobe" className="h-full w-full" />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.1rem] hidden h-px bg-cream/10 lg:block"
          >
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full origin-left bg-gradient-to-r from-lime via-lime to-green"
            />
          </div>

          <ol className="relative grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, image, title, body, tags }, i) => (
              <li key={title} data-fly-card className="flex">
                <TiltCard
                  glare="rgba(167,207,59,0.12)"
                  {...(fly
                    ? {}
                    : {
                        initial: { opacity: 0, y: 36 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true, margin: "-60px" },
                        transition: {
                          duration: 0.7,
                          delay: i * 0.12,
                          ease: EASE,
                        },
                      })}
                  className="flex w-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-[#23231e]/90 p-6 backdrop-blur-sm"
                >
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.13]"
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-lime text-xs font-bold tabular-nums text-ink">
                      0{i + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15 text-lime">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-cream/60">
                    {body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cream/15 px-2.5 py-1 text-[11px] font-medium text-cream/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
