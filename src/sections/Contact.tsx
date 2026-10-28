import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { GitHubIcon, LinkedInIcon } from "../components/BrandIcons";
import { profile } from "../data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.links.email}`;
    }
  };

  const channels = [
    { label: "LinkedIn", href: profile.links.linkedin, icon: <LinkedInIcon size={22} />, handle: "in/shravani-yalagatti" },
    { label: "GitHub", href: profile.links.github, icon: <GitHubIcon size={22} />, handle: "shravanisy2006" },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32" aria-labelledby="contact-title">
      <div className="hero-dots pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent">08 // contact</p>
          <h2 id="contact-title" className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Let's build something <span className="text-accent">that matters.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I'm looking for ML Engineer and Data Scientist internships. If you have a role, a project or a question, my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.links.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-medium text-accent-ink transition hover:opacity-90"
            >
              <Mail size={18} /> {profile.links.email}
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-4 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <span className="sr-only" aria-live="polite">{copied ? "Email address copied" : ""}</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.15 + i * 0.08}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <span className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-surface-2 text-muted transition-colors group-hover:text-accent">{c.icon}</span>
                  <span>
                    <span className="block font-display text-lg font-semibold">{c.label}</span>
                    <span className="font-mono text-xs text-muted">{c.handle}</span>
                  </span>
                </span>
                <ArrowUpRight className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
