import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Theme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navLinks.map((l) => l.id);

export function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape, and stop the page scrolling behind it
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const cta = profile.resume
    ? { href: profile.resume, label: "Resume", download: true }
    : { href: "#contact", label: "Let's talk", download: false };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name}, back to top`}>
          <span className="grid size-9 place-items-center rounded-lg border border-border bg-surface font-display text-sm font-bold text-accent transition-colors group-hover:border-accent">
            {profile.initials}
          </span>
          <span className="hidden font-display font-semibold tracking-tight sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={cta.href}
            download={cta.download || undefined}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:opacity-90 sm:inline-block"
          >
            {cta.label}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-full border border-border text-muted hover:text-text xl:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border xl:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 font-display text-lg ${
                      active === link.id ? "bg-surface-2 text-accent" : "text-text"
                    }`}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="mt-3 sm:hidden">
                <a
                  href={cta.href}
                  download={cta.download || undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-accent px-4 py-3 text-center font-medium text-accent-ink"
                >
                  {cta.label}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
