import { Fragment } from "react";
import { PRIVACY } from "../data/privacy";
import { useDocumentHead } from "../lib/head";
import InnerPage from "../components/fx/InnerPage";
import Reveal from "../components/motion/Reveal";

const EMAIL = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const IS_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Turn any email address in a run of text into a mailto link, leaving the rest
// of the copy untouched. `split` keeps the captured emails as their own parts.
function withEmailLinks(text) {
  return text.split(EMAIL).map((part, i) =>
    IS_EMAIL.test(part) ? (
      <a key={i} href={`mailto:${part}`} className="font-medium text-green-deep underline underline-offset-2">
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function Block({ block }) {
  if (block.sub) {
    return <h3 className="mt-8 text-[17px] font-bold tracking-tight text-ink">{block.sub}</h3>;
  }
  if (block.list) {
    return (
      <ul className="mt-4 space-y-2.5">
        {block.list.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
            <span>{withEmailLinks(item)}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{withEmailLinks(block.p)}</p>;
}

export default function PrivacyPolicyPage() {
  useDocumentHead({
    title: "Privacy Policy | Reinvent Digital",
    description:
      "How Reinvent Digital Media Pvt. Ltd. collects, uses, stores and protects personal data across its website, services, healthcare clients and job applications.",
  });

  return (
    <InnerPage>
      <article className="relative bg-cream pb-20 pt-28 text-ink sm:pb-28 sm:pt-36">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <header className="border-b border-ink/10 pb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-deep">Legal</span>
            <h1 className="mt-4 text-[clamp(2rem,1.5rem+2.4vw,3.1rem)] font-extrabold leading-tight tracking-tight">
              {PRIVACY.title}
            </h1>
            <p className="mt-3 text-sm text-ink-soft">Last updated: {PRIVACY.updated}</p>
            <div className="mt-6 space-y-4">
              {PRIVACY.intro.map((text) => (
                <p key={text} className="text-[16px] leading-relaxed text-ink-soft">
                  {withEmailLinks(text)}
                </p>
              ))}
            </div>
          </header>

          <div className="mt-12 space-y-12">
            {PRIVACY.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2 className="text-[clamp(1.3rem,1.1rem+1vw,1.7rem)] font-extrabold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                  {section.body.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
    </InnerPage>
  );
}
