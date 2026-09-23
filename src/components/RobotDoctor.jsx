import { useEffect, useId, useRef } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE } from "./motion/easing";

const SPRING = { stiffness: 70, damping: 15, mass: 0.8 };
const PIVOT = { transformBox: "fill-box", transformOrigin: "50% 90%" };
const CENTER = { transformBox: "fill-box", transformOrigin: "50% 50%" };

export default function RobotDoctor({ className = "" }) {
  const uid = useId().replace(/:/g, "");
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "120px" });
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);

  const { scrollY } = useScroll();
  const scroll = useSpring(useTransform(scrollY, [0, 700], [0, 1], { clamp: true }), SPRING);

  const headX = useTransform(sx, (v) => v * 16);
  const headY = useTransform([sy, scroll], ([y, s]) => y * 8 + s * 16);
  const headRotate = useTransform([sx, scroll], ([x, s]) => x * 9 - s * 7);
  const visorX = useTransform(sx, (v) => v * 5);
  const visorY = useTransform([sy, scroll], ([y, s]) => y * 3 + s * 4);
  const eyesX = useTransform(sx, (v) => v * 13);
  const eyesY = useTransform([sy, scroll], ([y, s]) => y * 8 + s * 6);
  const antennaRotate = useTransform(sx, (v) => v * -16);
  const bodyX = useTransform(sx, (v) => v * 4);

  useEffect(() => {
    if (reduce || !inView) return;
    const move = (e) => {
      px.set((e.clientX / window.innerWidth) * 2 - 1);
      py.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    const reset = () => {
      px.set(0);
      py.set(0);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", reset);
    };
  }, [reduce, inView, px, py]);

  const id = (name) => `${name}-${uid}`;

  return (
    <motion.svg
      ref={ref}
      viewBox="48 28 304 412"
      preserveAspectRatio="xMidYMax meet"
      role="img"
      aria-label="Friendly robot doctor"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
      className={className}
    >
      <defs>
        <linearGradient id={id("helmet")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dedcd2" />
        </linearGradient>
        <linearGradient id={id("coat")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e4e2d8" />
        </linearGradient>
        <linearGradient id={id("metal")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b9b8ae" />
          <stop offset="50%" stopColor="#e9e8e0" />
          <stop offset="100%" stopColor="#a9a89e" />
        </linearGradient>
        <radialGradient id={id("mirror")} cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#cfcec4" />
          <stop offset="100%" stopColor="#9d9c92" />
        </radialGradient>
        <radialGradient id={id("glow")} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a7cf3b" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#a7cf3b" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#a7cf3b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <motion.g style={{ x: bodyX }}>
        <path d="M34 440 C40 388 92 360 150 350 L250 350 C308 360 360 388 366 440 Z" fill={`url(#${id("coat")})`} stroke="rgba(27,27,23,0.12)" strokeWidth="2" />
        <path d="M168 350 L200 414 L232 350 Z" fill="#1b1b17" />
        <path d="M150 350 L200 424 L178 440 L118 440 C124 402 136 372 150 350 Z" fill="#ffffff" stroke="#d8d6cc" strokeWidth="2" />
        <path d="M250 350 L200 424 L222 440 L282 440 C276 402 264 372 250 350 Z" fill="#ffffff" stroke="#d8d6cc" strokeWidth="2" />
        <rect x="268" y="392" width="38" height="38" rx="10" fill="#a7cf3b" />
        <rect x="284" y="399" width="6" height="24" rx="2" fill="#1b1b17" />
        <rect x="275" y="408" width="24" height="6" rx="2" fill="#1b1b17" />
        <path d="M166 352 C148 382 150 410 180 420" fill="none" stroke="#1b1b17" strokeWidth="6" strokeLinecap="round" />
        <path d="M234 352 C252 382 250 410 220 420" fill="none" stroke="#1b1b17" strokeWidth="6" strokeLinecap="round" />
        <path d="M180 420 Q200 430 220 420" fill="none" stroke="#1b1b17" strokeWidth="6" strokeLinecap="round" />
        <circle cx="200" cy="430" r="10" fill="#a7cf3b" stroke="#1b1b17" strokeWidth="4" />
      </motion.g>

      <rect x="176" y="296" width="48" height="60" rx="12" fill={`url(#${id("metal")})`} />
      <rect x="176" y="314" width="48" height="4" fill="#9d9c92" opacity="0.6" />
      <rect x="176" y="330" width="48" height="4" fill="#9d9c92" opacity="0.6" />

      <motion.g style={{ x: headX, y: headY, rotate: headRotate, ...PIVOT }}>
        <motion.g style={{ rotate: antennaRotate, transformBox: "fill-box", transformOrigin: "50% 100%" }}>
          <line x1="200" y1="98" x2="200" y2="62" stroke="#b9b8ae" strokeWidth="7" strokeLinecap="round" />
          <circle cx="200" cy="52" r="24" fill={`url(#${id("glow")})`} />
          <circle cx="200" cy="52" r="12" fill="#a7cf3b" />
        </motion.g>

        <circle cx="96" cy="206" r="24" fill="#a7cf3b" />
        <circle cx="96" cy="206" r="10" fill="#1b1b17" />
        <circle cx="304" cy="206" r="24" fill="#a7cf3b" />
        <circle cx="304" cy="206" r="10" fill="#1b1b17" />

        <rect x="104" y="94" width="192" height="216" rx="72" fill={`url(#${id("helmet")})`} stroke="rgba(27,27,23,0.12)" strokeWidth="2" />
        <path d="M112 150 Q200 118 288 150" fill="none" stroke="#1b1b17" strokeWidth="9" strokeLinecap="round" />
        <circle cx="152" cy="118" r="24" fill={`url(#${id("mirror")})`} stroke="#a7cf3b" strokeWidth="5" />
        <circle cx="152" cy="118" r="6" fill="#1b1b17" />
        <ellipse cx="144" cy="110" rx="6" ry="3.5" fill="#ffffff" opacity="0.8" />

        <motion.g style={{ x: visorX, y: visorY }}>
          <rect x="124" y="152" width="152" height="112" rx="46" fill="#1b1b17" />
          <path d="M150 164 Q170 156 196 158" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.18" />

          <motion.g style={{ x: eyesX, y: eyesY }}>
            <motion.g
              style={CENTER}
              animate={reduce ? undefined : { scaleY: [1, 1, 0.08, 1] }}
              transition={{ duration: 0.35, times: [0, 0.4, 0.6, 1], repeat: Infinity, repeatDelay: 3.4, delay: 2 }}
            >
              <ellipse cx="171" cy="204" rx="26" ry="32" fill={`url(#${id("glow")})`} />
              <ellipse cx="229" cy="204" rx="26" ry="32" fill={`url(#${id("glow")})`} />
              <rect x="158" y="186" width="26" height="36" rx="13" fill="#a7cf3b" />
              <rect x="216" y="186" width="26" height="36" rx="13" fill="#a7cf3b" />
              <circle cx="166" cy="196" r="4" fill="#ffffff" opacity="0.9" />
              <circle cx="224" cy="196" r="4" fill="#ffffff" opacity="0.9" />
            </motion.g>
            <path d="M178 240 Q200 256 222 240" fill="none" stroke="#a7cf3b" strokeWidth="5" strokeLinecap="round" />
          </motion.g>
        </motion.g>

        <circle cx="140" cy="276" r="5" fill="#a7cf3b" opacity="0.7" />
        <circle cx="260" cy="276" r="5" fill="#a7cf3b" opacity="0.7" />
      </motion.g>
    </motion.svg>
  );
}
