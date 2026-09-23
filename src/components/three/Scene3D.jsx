import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SCENES = {
  patientGlobe: () => import("./patientGlobe.js"),
  healthCross: () => import("./healthCross.js"),
};

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function Scene3D({ scene, className = "" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduceMotion || !supportsWebGL()) return;
    const el = ref.current;
    let dispose;
    let cancelled = false;

    const loadWhenNear = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        loadWhenNear.disconnect();
        const [{ createStage }, mod] = await Promise.all([import("./engine.js"), SCENES[scene]()]);
        if (cancelled) return;
        try {
          dispose = createStage(el, mod.default, mod.camera);
          requestAnimationFrame(() => setReady(true));
        } catch {
          // Some blocklisted GPUs refuse a context even when WebGL is reported as available.
        }
      },
      { rootMargin: "300px" }
    );
    loadWhenNear.observe(el);

    return () => {
      cancelled = true;
      loadWhenNear.disconnect();
      dispose?.();
    };
  }, [scene, reduceMotion]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none transition-opacity duration-[1200ms] ease-out ${
        ready ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
