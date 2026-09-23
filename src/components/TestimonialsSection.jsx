import { Quote } from "lucide-react";
import SectionHeader from "./motion/SectionHeader";
import TiltCard from "./motion/TiltCard";
import { EASE } from "./motion/easing";

const TESTIMONIALS = [
  {
    quote:
      "Reinvent Digital didn't just send us leads — they rebuilt how our front desk handles them. Our chair utilisation has never been this consistent.",
    name: "Dr. Aakash Mehta",
    role: "Clinical Director, multi-location dental group",
  },
  {
    quote:
      "They understood that our patients aren't comparing prices, they're building trust. The nurture sequences and call training changed how many consultations actually became cycles.",
    name: "Dr. Sunita Rao",
    role: "Medical Director, fertility & IVF network",
  },
  {
    quote:
      "For the first time, our board sees one number for marketing performance across every department — not fourteen different spreadsheets.",
    name: "Ms. Kavitha Iyer",
    role: "VP Growth & Marketing, multi-speciality hospital group",
  },
];

const initials = (name) =>
  name
    .replace(/^(Dr|Ms|Mr|Mrs)\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export default function TestimonialsSection() {
  return (
    <section className="section-y bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Client testimonials"
          title="Trusted for clarity,"
          accent="speed and results."
        />

        <div className="section-head-gap grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role }, i) => (
            <TiltCard
              as="figure"
              key={name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className={`flex flex-col rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm shadow-ink/[0.03] sm:p-7 ${
                i === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Quote className="h-7 w-7 text-lime" fill="currentColor" strokeWidth={0} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink sm:text-base">
                “{quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-lime">
                  {initials(name)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{name}</span>
                  <span className="block text-xs leading-snug text-ink-soft">{role}</span>
                </span>
              </figcaption>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
