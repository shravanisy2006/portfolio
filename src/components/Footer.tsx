import { ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">© {new Date().getFullYear()} · Built with React, Tailwind CSS and Motion</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid size-10 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-text">
            <GitHubIcon size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid size-10 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-text">
            <LinkedInIcon size={18} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="group ml-2 grid size-10 place-items-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
          >
            <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
