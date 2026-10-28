import { Medal, Trophy } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { achievements } from "../data/content";

export function Achievements() {
  return (
    <Section id="achievements" index="05" eyebrow="// recognition" title="Achievements">
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((a, i) => {
          const win = a.kind === "win";
          return (
            <Reveal key={a.event} delay={i * 0.1}>
              <article
                className={`relative h-full overflow-hidden rounded-3xl border p-6 sm:p-8 ${
                  win ? "border-accent/50 bg-accent/[0.07]" : "border-border bg-surface"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs ${
                      win ? "bg-accent text-accent-ink" : "border border-border text-muted"
                    }`}
                  >
                    {win ? <Trophy size={13} /> : <Medal size={13} />}
                    {win ? "Win" : "Competition"}
                  </span>
                  <span className="font-mono text-sm text-muted">{a.year}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold tracking-tight">{a.title}</h3>
                <p className="mt-2 text-lg">{a.event}</p>
                <p className="mt-1 text-sm text-muted">{a.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
