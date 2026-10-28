import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "../components/BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function CyclingWord() {
  const words = profile.headlineWords;
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [reduce, words.length]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* Invisible longest word keeps the line from jumping */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "60%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease }}
          className="col-start-1 row-start-1 text-accent"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SignalLines() {
  // Thin "data" lines drifting across the hero background
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sig" x1="0" x2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="0.5" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[
        "M-50 620 C 250 560, 420 700, 700 600 S 1100 520, 1260 580",
        "M-50 690 C 300 650, 520 760, 820 670 S 1150 640, 1260 700",
        "M-50 180 C 200 240, 480 120, 760 200 S 1080 260, 1260 190",
      ].map((d, k) => (
        <path
          key={k}
          d={d}
          fill="none"
          stroke="url(#sig)"
          strokeWidth="1.2"
          className="signal-line"
          style={{ animationDelay: `${k * 1.6}s` }}
        />
      ))}
    </svg>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      {/* Offset frame */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/40" aria-hidden="true" />
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={400}
            height={400}
            className="h-full w-full object-cover object-[50%_30%]"
            fetchPriority="high"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)]">
            <span className="font-display text-7xl font-bold tracking-tight text-accent/80">
              {profile.initials}
            </span>
          </div>
        )}
      </div>
      {/* Location tag */}
      <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
        <MapPin size={13} className="text-accent" /> {profile.location}
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Soft glow that follows the pointer (desktop only, cheap: just CSS variables)
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce]);

  const secondary = profile.resume
    ? { href: profile.resume, label: "Download Resume", icon: <Download size={18} />, download: true }
    : { href: `mailto:${profile.links.email}`, label: "Email me", icon: <Mail size={18} />, download: false };

  return (
    <section
      id="top"
      ref={ref}
      className="hero-grid relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20"
    >
      <SignalLines />
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr]">
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="flex items-center gap-3 font-mono text-sm text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {profile.role}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Shravani
            <br />
            <span className="text-muted/70">Yalagatti</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 font-display text-2xl font-medium leading-snug sm:text-3xl">
            I build <CyclingWord />
            <br className="hidden sm:block" /> that create real-world impact.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 font-mono text-xs text-muted">
            {profile.education}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition hover:opacity-90"
            >
              Explore Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={secondary.href}
              download={secondary.download || undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium transition hover:border-accent hover:text-accent"
            >
              {secondary.icon} {secondary.label}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="grid size-11 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-text"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-11 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-text"
              >
                <LinkedInIcon />
              </a>
            </div>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {profile.highlights.map((h) => (
              <li
                key={h.label}
                className="rounded-2xl border border-border bg-surface/70 px-4 py-3 backdrop-blur"
              >
                <p className="font-display font-semibold">{h.label}</p>
                <p className="text-xs text-muted">{h.detail}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}
