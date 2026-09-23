import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InnerPage from "../components/fx/InnerPage";
import SplitReveal from "../components/fx/SplitReveal";
import Magnetic from "../components/fx/Magnetic";

export default function NotFound() {
  return (
    <InnerPage>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        <SplitReveal
          as="div"
          type="chars3d"
          onLoad
          className="relative text-[clamp(7rem,4rem+18vw,16rem)] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:2px_#1b1b17]"
        >
          404
        </SplitReveal>
        <SplitReveal
          as="h1"
          type="words"
          onLoad
          delay={0.3}
          className="relative mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          This page hasn't been built yet.
        </SplitReveal>
        <p className="relative mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
          The page you're looking for doesn't exist or hasn't been published. Head back home or get in touch directly.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:bg-lime hover:text-ink"
            >
              Back to homepage
            </Link>
          </Magnetic>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink transition-colors hover:underline decoration-lime decoration-2 underline-offset-4"
          >
            Contact us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </InnerPage>
  );
}
