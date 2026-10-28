import { motion } from "motion/react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { skillGroups } from "../data/content";

export function Skills() {
  return (
    <Section id="skills" index="03" eyebrow="// skills" title="Tools I've shipped with">
      <Reveal>
        <p className="-mt-6 mb-10 max-w-2xl text-muted">
          Every skill here comes from a project I built. Hover over or tap a skill to see where I used it.
        </p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.06} className={gi === skillGroups.length - 1 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:col-end-4" : ""}>
            <div className="h-full rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s, si) => (
                  <motion.li
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + si * 0.04 }}
                    className="group relative"
                  >
                    <span
                      tabIndex={s.usedIn.length ? 0 : undefined}
                      className="inline-block cursor-default rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm transition-colors group-hover:border-accent group-hover:text-accent group-focus-within:border-accent group-focus-within:text-accent"
                    >
                      {s.name}
                    </span>
                    {s.usedIn.length > 0 && (
                      <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-56 -translate-x-1/2 translate-y-1 rounded-lg border border-border bg-bg px-3 py-2 text-xs text-muted opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                      >
                        <span className="text-accent">Used in:</span> {s.usedIn.join(", ")}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
