import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function FlipLinkCard({ to, eyebrow, title, back }) {
  return (
    <Link to={to} className="group block h-52 [perspective:1200px] sm:h-60">
      <span className="relative block h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
        <span className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-ink/10 bg-paper p-6 [backface-visibility:hidden] sm:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{eyebrow}</span>
          <span className="flex items-end justify-between gap-4">
            <span className="text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] font-extrabold leading-tight tracking-tight text-ink">
              {title}
            </span>
            <ArrowUpRight className="h-6 w-6 shrink-0 text-ink" />
          </span>
        </span>
        <span className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-lime p-6 text-ink [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
          <span className="text-[15px] font-medium leading-relaxed">{back}</span>
          <span className="inline-flex items-center gap-2 text-lg font-extrabold">
            Explore {title}
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </span>
      </span>
    </Link>
  );
}
