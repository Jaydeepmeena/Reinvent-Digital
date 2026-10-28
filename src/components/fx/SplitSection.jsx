import SmartImage from "./SmartImage";
import Eyebrow from "./Eyebrow";
import SplitReveal from "./SplitReveal";
import Reveal from "../motion/Reveal";

// A content section laid out as an image on one side and the copy — eyebrow,
// heading, lead line and a bullet list — on the other. `flip` puts the image on
// the right; alternate it row to row. A bullet with a body reads "Title: body";
// one with only a title reads as plain text.
export default function SplitSection({ eyebrow, heading, body, points = [], image, flip, shaded }) {
  return (
    <section className={`section-y ${shaded ? "border-t border-ink/[0.06] bg-white" : ""}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink/[0.03]">
            <SmartImage src={image} alt={heading} title={heading} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>

        <div className={flip ? "lg:order-1" : ""}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <SplitReveal
            as="h2"
            type="skewLines"
            className="mt-4 text-balance text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] font-extrabold leading-tight tracking-tight text-ink"
          >
            {heading}
          </SplitReveal>
          {body && <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{body}</p>}
          {points.length > 0 && (
            <ul className="mt-6 space-y-3.5">
              {points.map(({ title, body: pointBody }) => (
                <li key={title} className="flex gap-3 text-[15px] leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {pointBody ? (
                    <span className="text-ink-soft">
                      <span className="font-semibold text-ink">{title}:</span> {pointBody}
                    </span>
                  ) : (
                    <span className="text-ink-soft">{title}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
