import { motion } from "motion/react";
import { Mic } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { roles, stagePhotos } from "../data/content";

export function Leadership() {
  return (
    <Section id="leadership" index="06" eyebrow="// leadership" title="Roles & responsibilities">
      <ol className="relative space-y-5 border-l border-border pl-6 sm:pl-10">
        {roles.map((r, i) => (
          <Reveal key={r.org} delay={i * 0.08}>
            <li className="relative">
              <span className="absolute -left-[31px] top-7 size-3 rounded-full border-2 border-accent bg-bg sm:-left-[47px]" aria-hidden="true" />
              <article className="rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{r.position}</h3>
                  <span className="font-mono text-xs text-accent">{r.period}</span>
                </div>
                <p className="mt-1 text-muted">{r.org}</p>
                <ul className="mt-4 space-y-2">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-muted">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-16">
        <h3 className="flex items-center gap-2 font-display text-2xl font-bold">
          <Mic size={20} className="text-accent" /> On stage
        </h3>
        <p className="mt-2 text-muted">Event anchoring at college events.</p>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {stagePhotos.map((ph, i) => (
          <motion.figure
            key={ph.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group overflow-hidden rounded-3xl border border-border bg-surface ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <img
              src={ph.src}
              alt={ph.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
