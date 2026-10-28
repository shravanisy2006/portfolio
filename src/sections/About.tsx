import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { about } from "../data/content";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="// about" title="Building with purpose">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className={i === 0 ? "text-xl leading-relaxed sm:text-2xl" : "text-lg leading-relaxed text-muted"}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <aside className="rounded-3xl border border-border bg-surface p-6 sm:p-8" aria-label="What I'm doing now">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Right now
            </p>
            <dl className="mt-6 space-y-5">
              {about.now.map((item) => (
                <div key={item.label} className="border-l-2 border-accent/50 pl-4">
                  <dt className="font-mono text-xs text-accent">{item.label}</dt>
                  <dd className="mt-1 leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
