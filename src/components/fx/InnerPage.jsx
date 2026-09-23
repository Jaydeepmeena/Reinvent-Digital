import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "./gsap";
import BackToTop from "./BackToTop";

export default function InnerPage({ children }) {
  useLenis(ScrollTrigger.update);

  useEffect(() => {
    // Late layout shifts (fonts, text re-splitting, 3D canvases) move content after triggers were
    // measured; re-measure whenever the page height changes so reveals fire at the right place.
    let timer;
    let lastHeight = document.documentElement.scrollHeight;
    const observer = new ResizeObserver(() => {
      const height = document.documentElement.scrollHeight;
      if (Math.abs(height - lastHeight) < 2) return;
      lastHeight = height;
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    });
    observer.observe(document.body);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {children}
      <BackToTop />
    </>
  );
}
