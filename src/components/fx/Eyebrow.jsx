export default function Eyebrow({ tone = "light", className = "", children }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-lime" : "text-ink"
      } ${className}`}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-lime ring-4 ring-lime/25" />
      {children}
    </span>
  );
}
