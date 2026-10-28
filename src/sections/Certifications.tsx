import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { certifications, workshops } from "../data/content";

type Cert = (typeof certifications)[number];

function CertCard({ c, compact = false }: { c: Cert; compact?: boolean }) {
  return (
    <a
      href={c.verify}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
    >
      <div className={`overflow-hidden border-b border-border bg-white ${compact ? "aspect-[3/2]" : "aspect-[4/3]"}`}>
        <img
          src={c.image}
          alt={`${c.title} certificate`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs text-accent">{c.date}</p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{c.title}</h3>
        <p className="mt-1 flex-1 text-sm text-muted">{c.issuer}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors group-hover:text-accent">
          <BadgeCheck size={16} /> Verify credential
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" index="07" eyebrow="// credentials" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <Reveal key={c.verify} delay={i * 0.06}>
            <CertCard c={c} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="font-display text-xl font-semibold">Workshops</h3>
      </Reveal>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {workshops.map((c, i) => (
          <Reveal key={c.verify} delay={i * 0.06}>
            <CertCard c={c} compact />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
