export default function Eyebrow({ tone = "light", className = "", children }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-lime" : "text-ink"
      } ${className}`}
    >
      {children}
    </span>
  );
}
