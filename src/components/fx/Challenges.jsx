import Reveal from "../motion/Reveal";
import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";

// "The challenge" as a set of cards: a big stroked number, the title and the
// detail, each revealing in turn, lifting on hover. A lighter band so it reads
// as the "before" against the darker results that follow.
export default function Challenges({ title = "The challenge", items = [] }) {
  if (!items.length) return null;
  return (
    <section className="section-y bg-paper">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Eyebrow>Where it was stuck</Eyebrow>
        <SplitReveal
          as="h2"
          type="skewLines"
          className="mt-4 text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.4rem)] font-extrabold leading-tight tracking-tight text-ink"
        >
          {title}
        </SplitReveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              as="div"
              key={item.title ?? i}
              delay={i * 0.06}
              className="group rounded-2xl border border-ink/10 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="block text-[2rem] font-extrabold leading-none tracking-tighter tabular-nums text-transparent [-webkit-text-stroke:1.5px_rgba(27,27,23,0.22)] transition-[--tw-text-stroke-color] duration-300 group-hover:[-webkit-text-stroke:1.5px_#a7cf3b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.title && <h3 className="mt-4 text-[16px] font-bold leading-snug text-ink">{item.title}</h3>}
              {item.body && <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.body}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
