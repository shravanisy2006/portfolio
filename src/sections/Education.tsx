import { GraduationCap } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { education } from "../data/content";

export function Education() {
  const [degree, ...school] = education;

  return (
    <Section id="education" index="02" eyebrow="// education" title="Where I'm learning">
      {/* Main degree: large editorial card */}
      <Reveal>
        <article className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 font-mono text-sm text-accent">
                <GraduationCap size={16} /> {degree.period}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-4xl">{degree.degree}</h3>
              <p className="mt-2 text-lg text-muted">{degree.school}</p>
            </div>
            <dl className="flex gap-3">
              {degree.results.map((r) => (
                <div key={r.label} className="min-w-28 rounded-2xl border border-border bg-surface-2 px-5 py-4">
                  <dt className="font-mono text-xs text-muted">{r.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-bold text-accent">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          {degree.coursework && (
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Relevant coursework</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {degree.coursework.map((c) => (
                  <li key={c} className="rounded-full border border-border px-3 py-1.5 text-sm">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </Reveal>

      {/* School: compact cards */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {school.map((e, i) => (
          <Reveal key={e.degree} delay={0.1 + i * 0.08}>
            <article className="flex h-full items-center justify-between gap-6 rounded-3xl border border-border bg-surface p-6">
              <div>
                <p className="font-mono text-xs text-accent">{e.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
              </div>
              <p className="shrink-0 font-display text-3xl font-bold">{e.results[0].value}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
