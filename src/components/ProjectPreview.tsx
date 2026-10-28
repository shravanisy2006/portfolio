import type { Preview } from "../data/projects";

// Designed previews built from each project's real details (no fake screenshots).

function PipelineChart() {
  const versions = [0.897, 0.936, 0.953, 0.956, 0.969];
  const min = 0.88, max = 0.975;
  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="flex items-center justify-between font-mono text-xs text-muted">
        <span>public F0.5 by version</span>
        <span className="text-accent">↑ 0.072</span>
      </div>
      <div className="flex h-44 items-end gap-3" role="img" aria-label="F0.5 improved from 0.897 to 0.969 across five versions">
        {versions.map((v, i) => (
          <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className={`font-mono text-[11px] ${i === versions.length - 1 ? "text-accent" : "text-muted"}`}>{v.toFixed(3)}</span>
            <div
              className={`w-full rounded-t-md transition-all duration-500 group-hover:opacity-100 ${i === versions.length - 1 ? "bg-accent" : "bg-accent/35 opacity-80"}`}
              style={{ height: `${((v - min) / (max - min)) * 72}%` }}
            />
            <span className="font-mono text-[11px] text-muted">v{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-muted">
        {["clean", "partition", "search", "rank", "features", "LightGBM"].map((s, i, a) => (
          <span key={s} className="flex items-center gap-1.5">
            <span className="rounded border border-border px-1.5 py-0.5">{s}</span>
            {i < a.length - 1 && <span className="text-accent">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function TriageFlow() {
  const steps = [
    { k: "input", v: "photo + description + area" },
    { k: "security", v: "EXIF strip · PII redaction · injection check" },
    { k: "gemini", v: "category · severity · hazard (JSON)" },
    { k: "rules", v: "priority score → P1–P4 · dept · SLA" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      {steps.map((s, i) => (
        <div key={s.k} className="flex items-center gap-3 rounded-xl border border-border bg-bg/60 px-3 py-2.5 transition-transform duration-500 group-hover:translate-x-1" style={{ transitionDelay: `${i * 60}ms` }}>
          <span className="w-16 shrink-0 font-mono text-[11px] text-accent">{s.k}</span>
          <span className="truncate text-xs text-muted">{s.v}</span>
        </div>
      ))}
      <div className="mt-1 flex items-center justify-between rounded-xl border border-accent/50 bg-accent/10 px-3 py-2.5">
        <span className="text-xs">Officer queue</span>
        <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] font-semibold text-accent-ink">P1 · hazard</span>
      </div>
    </div>
  );
}

function ModelCompare() {
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-6">
      <p className="font-mono text-xs text-muted">models compared</p>
      {["Logistic Regression", "Decision Tree", "Random Forest"].map((m, i) => (
        <div key={m} className="space-y-1.5">
          <span className="text-sm">{m}</span>
          <div className="h-2 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full origin-left rounded-full bg-accent/60 transition-transform duration-700 group-hover:scale-x-100" style={{ transform: `scaleX(${0.55 + i * 0.12})` }} />
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {["accuracy", "precision", "recall", "F1", "ROC-AUC"].map((m) => (
          <span key={m} className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">{m}</span>
        ))}
      </div>
    </div>
  );
}

function TripRoute() {
  return (
    <div className="relative h-full p-6">
      <p className="font-mono text-xs text-muted">ಪ್ರವಾಸ · day-by-day route</p>
      <svg viewBox="0 0 300 180" className="mt-2 h-[78%] w-full" aria-hidden="true">
        <path d="M30 140 C 80 60, 120 150, 160 90 S 240 40, 270 70" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 6" className="route-dash" />
        {[[30, 140], [105, 108], [160, 90], [270, 70]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <text x={x} y={y + 3.5} textAnchor="middle" fontSize="9" fill="var(--accent)" fontFamily="JetBrains Mono, monospace">{i + 1}</text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-5 left-6 flex gap-1.5">
        {["ಕನ್ನಡ", "English", "🎙 voice"].map((t) => (
          <span key={t} className="rounded border border-border bg-bg/60 px-1.5 py-0.5 font-mono text-[10px] text-muted">{t}</span>
        ))}
      </div>
    </div>
  );
}

export function ProjectPreview({ kind }: { kind: Preview }) {
  const map = { "pipeline-chart": PipelineChart, "triage-flow": TriageFlow, "model-compare": ModelCompare, "trip-route": TripRoute };
  const C = map[kind];
  return (
    <div className="relative h-72 overflow-hidden rounded-2xl border border-border bg-surface-2 transition-transform duration-500 group-hover:scale-[1.015] sm:h-80">
      <div className="hero-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative h-full">
        <C />
      </div>
    </div>
  );
}
