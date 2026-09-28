import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ trail, tone = "light" }) {
  const dark = tone === "dark";
  const base = dark ? "text-cream/60" : "text-ink-soft";
  const hover = dark ? "hover:text-cream" : "hover:text-ink";
  const divider = dark ? "text-cream/30" : "text-ink/30";
  const current = dark ? "text-cream" : "text-ink";

  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-[13px] ${base}`}>
      <Link to="/" className={`transition-colors ${hover}`}>
        Home
      </Link>
      {trail.map((crumb, i) => (
        <span key={crumb.label} className="flex items-center gap-1.5">
          <ChevronRight className={`h-3.5 w-3.5 ${divider}`} />
          {crumb.href && i < trail.length - 1 ? (
            <Link to={crumb.href} className={`transition-colors ${hover}`}>
              {crumb.label}
            </Link>
          ) : (
            <span className={`font-medium ${current}`}>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
