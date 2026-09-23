import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeader from "./motion/SectionHeader";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

const ROWS = [
  { label: "Primary output", them: "Leads and reports", us: "Bookings and journey visibility" },
  { label: "Call centre", them: "Outside scope", us: "Routed, scored and coached" },
  { label: "Attribution", them: "Platform conversion", us: "Source → booking → walk-in" },
  { label: "Decision metric", them: "Cost per lead", us: "Cost per booked patient" },
];

export default function ComparisonSection() {
  return (
    <section className="section-y border-y border-ink/[0.06] bg-paper">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          align="center"
          eyebrow="A different accountability line"
          title="We don't price our value around a percentage of media spend."
        />

        <Reveal delay={0.1} className="section-head-gap hidden overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-sm shadow-ink/[0.03] md:block">
          <table className="w-full table-fixed text-left text-sm">
            <thead>
              <tr className="bg-paper text-ink-soft">
                <th scope="col" className="w-[28%] p-5 font-semibold">
                  <span className="sr-only">Criteria</span>
                </th>
                <th scope="col" className="border-l border-ink/10 p-5 text-center font-semibold">Typical agency</th>
                <th scope="col" className="border-l border-ink/10 bg-ink p-5 text-center font-semibold text-cream">
                  Reinvent Digital
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Plain rows: animating <tr> forces the whole table to re-layout every frame. */}
              {ROWS.map((row) => (
                <tr key={row.label} className="border-t border-ink/10">
                  <th scope="row" className="p-5 font-semibold text-ink">{row.label}</th>
                  <td className="border-l border-ink/10 p-5 text-center text-ink-soft">
                    <span className="inline-flex items-center gap-2">
                      <X className="h-4 w-4 shrink-0 text-ink/30" />
                      {row.them}
                    </span>
                  </td>
                  <td className="border-l border-ink/10 bg-lime-soft p-5 text-center font-semibold text-green-deep">
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0" />
                      {row.us}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <ul className="section-head-gap space-y-3 md:hidden">
          {ROWS.map((row, i) => (
            <motion.li
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-cream"
            >
              <div className="px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-ink-soft">{row.label}</div>
              <div className="flex items-start gap-2.5 px-4 pb-3 pt-2 text-sm text-ink-soft">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/30" />
                <span>
                  <span className="sr-only">Typical agency: </span>
                  {row.them}
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-lime-soft px-4 py-3 text-sm font-semibold text-green-deep">
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span className="sr-only">Reinvent Digital: </span>
                  {row.us}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
