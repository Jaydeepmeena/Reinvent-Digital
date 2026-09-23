import { Target, Zap, TrendingUp, BadgeCheck } from "lucide-react";
import Reveal from "./motion/Reveal";
import SectionHeader from "./motion/SectionHeader";

const STEPS = [
  { icon: Target, title: "Demand" },
  { icon: Zap, title: "Response" },
  { icon: TrendingUp, title: "Booking" },
  { icon: BadgeCheck, title: "Walk-in" },
];

export default function ConnectBand() {
  return (
    <section id="approach" className="relative overflow-hidden bg-ink pb-6 pt-12 sm:pb-8 sm:pt-14 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-position:0_100%] [mask-image:radial-gradient(ellipse_60%_140%_at_80%_100%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          align="center"
          tone="dark"
          eyebrow="The Reinvent Digital system"
          title="One operating chain, from"
          accent="intent to arrival."
          description="Every stage has an owner, a timestamp and a number your team can act on."
        />
      </div>

      <div className="relative mx-auto mt-10 grid max-w-7xl gap-10 px-5 sm:mt-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-12">
        <div>
          <Reveal as="h2" className="font-serif-italic text-[clamp(1.6rem,1.2rem+1.5vw,2.25rem)] leading-tight text-cream">
            Built around one outcome: booked patients.
          </Reveal>

          <ol className="mt-7 grid max-w-md grid-cols-2 gap-3">
            {STEPS.map(({ icon: Icon, title }, i) => (
              <li
                key={title}
                className="flex items-center gap-2.5 rounded-2xl border border-cream/10 bg-[#23231e]/90 px-4 py-4 sm:gap-3 sm:px-5 sm:py-5"
              >
                <span className="text-2xl font-extrabold tabular-nums leading-none text-lime sm:text-3xl">0{i + 1}</span>
                <span className="flex-1 text-base font-semibold text-cream sm:text-lg">{title}</span>
                <Icon aria-hidden="true" className="hidden h-5 w-5 shrink-0 text-lime/70 sm:block" />
              </li>
            ))}
          </ol>
        </div>

        {/* Stage: SystemSection piles its step cards here, then drops them into its grid on scroll. */}
        <div data-fly-origin aria-hidden="true" className="h-[13rem] motion-reduce:hidden sm:h-[16rem] lg:h-[19rem]" />
      </div>
    </section>
  );
}
