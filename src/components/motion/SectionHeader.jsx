import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  accent,
  accentOnNewLine = false,
  description,
  align = "left",
  tone = "light",
  action,
  className = "",
}) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-6 ${
        action && !centered ? "sm:flex-row sm:items-end sm:justify-between" : ""
      } ${centered ? "items-center text-center" : ""} ${className}`}
    >
      <Reveal className={centered ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
              dark ? "text-lime" : "text-green-deep"
            }`}
          >
            <span className={`h-px w-6 ${dark ? "bg-lime/60" : "bg-green-deep/50"}`} />
            {eyebrow}
          </span>
        )}
        <h2
          className={`mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {title}
          {accent && (
            <>
              {" "}
              {accentOnNewLine && <br className="hidden sm:block" />}
              <span className={`font-serif-italic font-medium ${dark ? "text-lime" : "text-ink-soft"}`}>
                {accent}
              </span>
            </>
          )}
        </h2>
        {description && (
          <p
            className={`mt-4 text-[16px] leading-relaxed sm:text-[17px] ${
              dark ? "text-cream/60" : "text-ink-soft"
            } ${centered ? "mx-auto max-w-xl" : "max-w-xl"}`}
          >
            {description}
          </p>
        )}
      </Reveal>
      {action && <Reveal delay={0.1} className="shrink-0">{action}</Reveal>}
    </div>
  );
}
