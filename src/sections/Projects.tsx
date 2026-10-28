import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Trophy } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { ProjectPreview } from "../components/ProjectPreview";
import { GitHubIcon } from "../components/BrandIcons";
import { featuredProjects, moreProjects, type FeaturedProject } from "../data/projects";

function ProjectCard({ p, index }: { p: FeaturedProject; index: number }) {
  const [open, setOpen] = useState(false);
  const flip = index % 2 === 1;
  const panelId = `case-${p.slug}`;

  return (
    <Reveal>
      <article className="group rounded-3xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 sm:p-8">
        <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <ProjectPreview kind={p.preview} />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-muted">0{index + 1} / {p.context}</span>
            </div>
            <h3 className="mt-3 flex flex-wrap items-center gap-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {p.name}
              {p.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 font-mono text-xs font-medium text-accent">
                  {p.badge.includes("Runner") && <Trophy size={13} />} {p.badge}
                </span>
              )}
              {p.status && (
                <span className="rounded-full border border-border px-3 py-1 font-mono text-xs font-medium text-muted">{p.status}</span>
              )}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">{p.tagline}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted">{s}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {p.links.live && (
                <a href={p.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:opacity-90">
                  Live demo <ArrowUpRight size={16} />
                </a>
              )}
              {p.links.github && (
                <a href={p.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">
                  <GitHubIcon size={16} /> Code
                </a>
              )}
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls={panelId}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:text-text"
              >
                {open ? "Hide case study" : "Read case study"}
                <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Problem</h4>
                  <p className="mt-3 leading-relaxed text-muted">{p.problem}</p>
                  <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">My role</h4>
                  <p className="mt-3 leading-relaxed text-muted">{p.role}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Approach</h4>
                  <ol className="mt-3 space-y-3">
                    {p.approach.map((a, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed text-muted">
                        <span className="font-mono text-xs leading-7 text-accent">{i + 1}</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Outcome</h4>
                  <ul className="mt-3 space-y-3">
                    {p.results.map((r) => (
                      <li key={r} className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm">{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="// projects" title="Selected work">
      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} />
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl font-bold">More projects</h3>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {moreProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <span className="w-fit rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">{p.status}</span>
              <h4 className="mt-4 font-display text-xl font-semibold">{p.name}</h4>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{p.tagline}</p>
              <p className="mt-5 font-mono text-xs text-accent">{p.stack.join(" · ")}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
