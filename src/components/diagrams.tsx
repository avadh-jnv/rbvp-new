export function ReuleauxTriangleSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 220" className={className} aria-hidden="true">
      <path
        d="M120 28
           A 112 112 0 0 1 217 196
           A 112 112 0 0 1 23 196
           A 112 112 0 0 1 120 28 Z"
        fill="#fffdf8"
        stroke="#1a2744"
        strokeWidth="1.6"
      />
      <path
        d="M120 28 L217 196 L23 196 Z"
        fill="none"
        stroke="#24365c"
        strokeWidth="1"
        strokeDasharray="4 4"
        opacity="0.55"
      />
      <circle cx="120" cy="28" r="3.2" fill="#1a2744" />
      <circle cx="217" cy="196" r="3.2" fill="#1a2744" />
      <circle cx="23" cy="196" r="3.2" fill="#1a2744" />
    </svg>
  );
}

export function TetrahedronSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 220" className={className} aria-hidden="true">
      <polygon points="120,22 210,168 30,168" fill="none" stroke="#1a2744" strokeWidth="1.5" />
      <line x1="120" y1="22" x2="120" y2="168" stroke="#1a2744" strokeWidth="1.5" />
      <line x1="30" y1="168" x2="210" y2="168" stroke="#1a2744" strokeWidth="1.5" />
      <line
        x1="120"
        y1="22"
        x2="78"
        y2="168"
        stroke="#24365c"
        strokeWidth="1.2"
        strokeDasharray="5 4"
        opacity="0.7"
      />
      <circle cx="120" cy="22" r="3.2" fill="#1a2744" />
      <circle cx="210" cy="168" r="3.2" fill="#1a2744" />
      <circle cx="30" cy="168" r="3.2" fill="#1a2744" />
      <circle cx="120" cy="168" r="3.2" fill="#1a2744" />
    </svg>
  );
}

export function EulerBadge() {
  return (
    <div className="rounded-lg bg-surface px-5 py-4 text-center shadow-[var(--shadow-border)]">
      <p className="font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase">
        Euler’s formula
      </p>
      <p className="math mt-2 text-2xl text-ink">V − E + F = 2</p>
      <p className="mt-2 font-sans text-sm text-muted">4 − 6 + 4 = 2</p>
    </div>
  );
}
