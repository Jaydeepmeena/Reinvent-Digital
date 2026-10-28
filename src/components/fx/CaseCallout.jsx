import { Building2, Compass } from "lucide-react";
import Reveal from "../motion/Reveal";
import Eyebrow from "./Eyebrow";

// A focused panel for a short narrative section ("about the client", "our
// approach"): an accent rail, an icon and a label, then the body. The approach
// panel is tinted lime to set the strategy apart from the context.
const VARIANTS = {
  about: { Icon: Building2, label: "About the client", card: "border-ink/10 bg-paper" },
  approach: { Icon: Compass, label: "Our approach", card: "border-lime/30 bg-lime/[0.06]" },
};

export default function CaseCallout({ variant = "about", title, html }) {
  const v = VARIANTS[variant] ?? VARIANTS.about;
  const Icon = v.Icon;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-6 sm:px-8 sm:py-8">
        <Reveal className={`relative overflow-hidden rounded-2xl border p-7 shadow-sm shadow-ink/5 sm:p-9 ${v.card}`}>
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-lime" />
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-lime">
              <Icon className="h-5 w-5" />
            </span>
            <Eyebrow>{title ?? v.label}</Eyebrow>
          </div>
          <div
            className="prose-post mt-5 [&>:first-child]:mt-0 [&>p]:text-[17px] [&>p]:leading-relaxed [&>p]:text-ink/80"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Reveal>
      </div>
    </div>
  );
}
