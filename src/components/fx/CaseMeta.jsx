// The case study's facts (industry, location, timeframe …) as a labelled grid,
// a hairline-ruled strip rather than a run-on sentence.
export default function CaseMeta({ fields = [] }) {
  if (!fields.length) return null;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-ink/10 py-6 sm:grid-cols-3">
          {fields.map((field) => (
            <div key={field.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft/60">{field.label}</dt>
              <dd className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
