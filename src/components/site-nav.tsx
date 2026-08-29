import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SECTIONS = [
  { id: "cover", label: "Cover" },
  { id: "certificate", label: "Certificate" },
  { id: "introduction", label: "Introduction" },
  { id: "objectives", label: "Objectives" },
  { id: "background", label: "Background" },
  { id: "construction", label: "Construction" },
  { id: "derivations", label: "Derivations" },
  { id: "properties", label: "Properties" },
  { id: "applications", label: "Applications" },
  { id: "future", label: "Future" },
  { id: "notes", label: "Notes" },
  { id: "references", label: "References" },
] as const;

export function SiteNav() {
  const [active, setActive] = useState("cover");

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (n): n is HTMLElement => Boolean(n),
    );
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#cover" className="shrink-0 font-display text-lg font-semibold tracking-tight text-ink">
          Reuleaux
        </a>
        <nav
          aria-label="Exhibit sections"
          className="-mx-1 flex min-w-0 flex-1 gap-1 overflow-x-auto pb-0.5"
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "inline-flex h-10 shrink-0 items-center rounded-sm px-3 font-sans text-sm transition-colors duration-150",
                active === s.id ? "bg-navy text-accent-fg" : "text-muted hover:bg-paper-deep hover:text-ink",
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
