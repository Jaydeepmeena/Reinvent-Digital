import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-soft">
      <Link to="/" className="transition-colors hover:text-ink">
        Home
      </Link>
      {trail.map((crumb, i) => (
        <span key={crumb.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-ink/30" />
          {crumb.href && i < trail.length - 1 ? (
            <Link to={crumb.href} className="transition-colors hover:text-ink">
              {crumb.label}
            </Link>
          ) : (
            <span className="font-medium text-ink">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
