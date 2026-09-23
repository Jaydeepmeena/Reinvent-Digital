import { motion } from "framer-motion";
import { Activity, Check } from "lucide-react";
import { EASE } from "./motion/easing";
import CountUp from "./motion/CountUp";
import TiltCard from "./motion/TiltCard";
import RobotDoctor from "./RobotDoctor";

// Social channels riding a lime ring, with a dot orbiting the outer track.
const CHANNELS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    path: "M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2Zm5.6 14.2c-.24.67-1.4 1.28-1.94 1.32-.5.04-1.13.06-1.82-.11a15 15 0 0 1-1.65-.61c-2.9-1.25-4.8-4.17-4.94-4.37-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.27-.3.59-.37.78-.37h.56c.18 0 .42-.7.66.5.24.58.82 2 .89 2.15.7.14.12.31.02.5-.1.2-.15.32-.3.5l-.44.51c-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.64-.8.17-.2.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.12.07.7-.17 1.37Z",
  },
  {
    label: "X",
    href: "https://x.com/",
    path: "M17.2 3h3.3l-7.2 8.24L21.8 21h-6.6l-4.4-5.7L5.8 21H2.5l7.7-8.8L2.4 3H9l4 5.24L17.2 3Zm-1.15 16h1.83L7.9 4.9H5.94L16.05 19Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.6 8.75 23 11 23 14.6V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 2a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm6.95-2.4a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8h3.2Z",
  },
];

function SocialRing() {
  return (
    <div className="relative h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
      {/* Outer track with a single dot running round it */}
      <div aria-hidden="true" className="animate-spin-slow absolute inset-0 rounded-full border border-ink/20">
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_8px_2px_rgba(167,207,59,0.6)]" />
      </div>

      {/* The lime band itself */}
      <div
        aria-hidden="true"
        className="absolute inset-3 rounded-full border-[1.25rem] border-lime sm:inset-[0.9rem] sm:border-[1.6rem] lg:inset-4 lg:border-[1.9rem]"
      />

      {/* Icons ride the middle of the band, turning the other way */}
      <div className="animate-spin-slow absolute inset-[1.375rem] [animation-direction:reverse] sm:inset-[1.7rem] lg:inset-[1.95rem]">
        {CHANNELS.map(({ label, href, path }, i) => {
          const angle = (i / CHANNELS.length) * (Math.PI * 2);
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-ink transition-opacity hover:opacity-60 sm:h-6 sm:w-6"
              style={{
                left: `${50 + Math.sin(angle) * 50}%`,
                top: `${50 - Math.cos(angle) * 50}%`,
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-full w-full">
                <path d={path} />
              </svg>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
      className="relative mx-auto w-full max-w-[26rem] sm:max-w-md lg:max-w-none"
    >
      <TiltCard max={4} glare={false} className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[7/8]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[2.25rem] border border-ink/15" />

        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0% round 1.9rem)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 1.9rem)" }}
          transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
          className="absolute inset-3 overflow-hidden rounded-[1.9rem] sm:inset-4"
        >
          <span aria-hidden="true" className="absolute left-[12%] top-[46%] h-2 w-2 rounded-full bg-white" />
          <span aria-hidden="true" className="absolute right-[16%] top-[14%] h-1.5 w-1.5 rounded-full bg-ink/30" />

          <span aria-hidden="true" className="absolute bottom-[13%] left-1/2 h-8 w-[55%] -translate-x-1/2 rounded-[100%] bg-ink/20 blur-xl" />
          <RobotDoctor className="absolute inset-x-0 bottom-[12%] top-[3%] mx-auto h-[85%] w-full" />

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="absolute inset-x-2.5 bottom-2.5 flex items-end justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-ink/85 p-4 shadow-2xl shadow-ink/20 backdrop-blur-xl sm:inset-x-3 sm:bottom-3 sm:p-6"
          >
            <div className="min-w-0">
              <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cream sm:text-xs">
                <span className="flex items-center gap-1" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-cream" />
                  <span className="h-2 w-4 rounded-full bg-lime" />
                </span>
                Walk-ins tracked
              </span>
              <div className="mt-2 text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] font-extrabold leading-none tracking-tight text-lime">
                <CountUp value="11,500+" duration={2.2} />
              </div>
              <p className="mt-2 text-[12px] leading-snug text-cream/60 sm:text-[13px]">monthly, across 115+ clinics</p>
            </div>

            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:h-24 sm:w-24">
              <svg aria-hidden="true" viewBox="0 0 48 48" className="absolute h-11 w-11 animate-spin-slow sm:h-16 sm:w-16">
                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(246,245,239,0.2)" strokeWidth="3" />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#a7cf3b"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="88 126"
                />
              </svg>
              <Activity className="relative h-5 w-5 text-cream sm:h-7 sm:w-7" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          className="absolute -right-3 top-[28%] sm:-right-8 lg:-right-14"
        >
          <SocialRing />
        </motion.div>

        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
          className="absolute -top-5 left-4 sm:-top-6 sm:left-8"
        >
          <div className="animate-float flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-xl shadow-ink/15 sm:px-4 sm:py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-ink">
              <Check className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[12px] font-bold leading-tight text-ink sm:text-[13px]">Patient booked</span>
              <span className="block text-[11px] leading-tight text-ink-soft">Routed in 00:42</span>
            </span>
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}
