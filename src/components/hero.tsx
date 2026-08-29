import { ArrowDown } from "lucide-react";
import { Button } from "@/components/button";

export function Hero() {
  return (
    <section id="cover" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:pt-12">
        <div className="flex flex-col justify-center rounded-t-xl bg-surface px-6 py-10 shadow-[var(--shadow-border)] sm:px-10 lg:rounded-l-xl lg:rounded-tr-none lg:py-14">
          <p className="font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
            Rashtriya Bal Vigyan Pradarshani
          </p>
          <p className="mt-2 font-sans text-sm text-accent">2026 – 27 · Gujarat</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.03em] text-ink sm:text-6xl">
            Reuleaux
            <span className="mt-1 block italic font-medium">Tetrahedron</span>
          </h1>
          <p className="mt-6 max-w-sm font-sans text-sm tracking-[0.14em] text-muted uppercase">
            Recreational mathematical modelling
          </p>
          <div className="catalogue-rule my-8" />
          <dl className="grid gap-3 font-sans text-sm">
            <Row term="Team leader" detail="Avadh Prajapati" />
            <Row term="Co-leader" detail="Ridham Varma" />
            <Row term="School" detail="PM SHRI Jawahar Navodaya Vidyalaya, Mehsana" />
          </dl>
          <div className="mt-8">
            <Button
              onClick={() =>
                document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enter the exhibit
              <ArrowDown className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-b-xl bg-paper-deep lg:min-h-[540px] lg:rounded-r-xl lg:rounded-bl-none">
          <img
            src="/images/hero.jpg"
            alt="Marble Reuleaux tetrahedron on a museum plinth"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/75 via-ink/25 to-transparent p-6 pt-16">
            <p className="font-display text-lg text-accent-fg italic">
              “Mathematics is the language of the universe.”
            </p>
            <p className="mt-1 font-sans text-xs tracking-[0.16em] text-accent-fg/80 uppercase">
              Galileo Galilei
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="grid grid-cols-[8.5rem_1fr] gap-3 sm:grid-cols-[9.5rem_1fr]">
      <dt className="text-muted">{term}</dt>
      <dd className="text-ink">{detail}</dd>
    </div>
  );
}
