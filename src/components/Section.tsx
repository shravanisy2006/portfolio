import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// Shared section shell: big outlined number, eyebrow label and title.
export function Section({
  id,
  index,
  eyebrow,
  title,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-20 py-24 sm:py-32" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-end gap-5">
            <span className="section-index font-display text-6xl font-bold leading-none sm:text-8xl" aria-hidden="true">
              {index}
            </span>
            <div className="pb-1">
              <p className="font-mono text-sm text-accent">{eyebrow}</p>
              <h2 id={`${id}-title`} className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h2>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
