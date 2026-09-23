import { motion } from "framer-motion";
import { Activity, Check } from "lucide-react";
import { EASE } from "./motion/easing";
import CountUp from "./motion/CountUp";
import TiltCard from "./motion/TiltCard";
import RobotDoctor from "./RobotDoctor";

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
