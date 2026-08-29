import type { ReactNode } from "react";
import {
  BadgeCheck,
  BookOpen,
  Box,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  Lightbulb,
  Printer,
  Rocket,
  School,
  Shapes,
} from "lucide-react";
import { EulerBadge, ReuleauxTriangleSvg, TetrahedronSvg } from "@/components/diagrams";
import { Hero } from "@/components/hero";
import { ReuleauxCanvas } from "@/components/reuleaux-canvas";
import { SiteNav } from "@/components/site-nav";
import { cn } from "@/lib/utils";

export function ExhibitPage() {
  return (
    <div className="min-h-screen bg-paper pb-20">
      <SiteNav />
      <Hero />
      <Certificate />
      <Introduction />
      <Objectives />
      <Background />
      <Construction />
      <Derivations />
      <Properties />
      <Applications />
      <Future />
      <Notes />
      <References />
      <Footer />
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
        {title}
      </h2>
      <div className="catalogue-rule my-8" />
      {children}
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className="w-full rounded-lg object-cover" />
      {caption ? (
        <figcaption className="mt-3 font-sans text-sm leading-relaxed text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function Certificate() {
  return (
    <section id="certificate" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl bg-surface p-8 shadow-[var(--shadow-border)] sm:p-10">
          <p className="font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
            Certificate
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Prepared for presentation</h2>
          <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            This is to certify that this write-up is prepared for the presentation of the project
            <span className="italic"> Reuleaux Tetrahedron </span>
            at Rashtriya Bal Vigyan Pradarshani by Avadh Prajapati.
          </p>
          <div className="catalogue-rule my-8" />
          <p className="font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase">
            Acknowledgement
          </p>
          <p className="mt-4 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            I sincerely thank my teachers, parents and mentors for their guidance and support in
            completing this project and exploring advanced geometry through 3D printing.
          </p>
        </div>
        <Figure
          src="/images/still-life.jpg"
          alt="Ceramic Reuleaux tetrahedron with compass and set square"
          caption="A still-life of the solid with classical drawing tools — the same instruments that construct it."
        />
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <Section id="introduction" kicker="01 — Introduction" title="A tetrahedron with spherical faces">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="max-w-prose font-sans text-lg leading-relaxed text-ink-soft">
            The Reuleaux Tetrahedron is a convex three-dimensional body derived from a regular
            tetrahedron by replacing each face with a spherical patch centred at the opposite vertex.
          </p>
          <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            It is the three-dimensional cousin of the Reuleaux triangle — the curved triangle of
            constant width that appears in drill bits and rotary engines. Four balls of equal radius,
            each centred on a vertex of a regular tetrahedron, are intersected. What remains is a
            plump, perfectly symmetric solid: four vertices, six circular-arc edges, four spherical
            faces.
          </p>
          <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            The model demonstrates symmetry, convexity and spatial reasoning — and it can be held in
            the hand once it has been printed.
          </p>
        </div>
        <ReuleauxCanvas />
      </div>
    </Section>
  );
}

const OBJECTIVES = [
  {
    icon: Shapes,
    title: "Study advanced geometry",
    body: "Move from plane figures to curved solids, spherical triangles and tetrahedral symmetry.",
  },
  {
    icon: Compass,
    title: "Understand curved solids",
    body: "See how circular arcs and spherical patches replace straight edges and flat faces.",
  },
  {
    icon: Printer,
    title: "Model with CAD and 3D printing",
    body: "Turn an intersection of balls into a printable mesh — mathematics you can hold.",
  },
  {
    icon: Lightbulb,
    title: "Encourage innovation",
    body: "Use recreational mathematics as a bridge between school geometry and research ideas.",
  },
];

function Objectives() {
  return (
    <Section id="objectives" kicker="02 — Objectives" title="What this project sets out to do">
      <div className="grid gap-4 sm:grid-cols-2">
        {OBJECTIVES.map((item) => (
          <article
            key={item.title}
            className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-7"
          >
            <item.icon className="size-5 text-navy" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 font-sans text-base leading-relaxed text-ink-soft">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Background() {
  return (
    <Section id="background" kicker="03 — Mathematical background" title="From triangle to tetrahedron">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            Franz Reuleaux (1829–1905), a German mechanical engineer, studied shapes of constant
            width. The Reuleaux triangle is formed from an equilateral triangle by drawing, about
            each vertex, an arc through the other two. Between parallel supporting lines the width
            is always the side length.
          </p>
          <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            The same recipe in three dimensions starts with a regular tetrahedron of edge{" "}
            <span className="math">a</span>. About each vertex one draws a sphere of radius{" "}
            <span className="math">a</span>. The intersection of those four balls is the Reuleaux
            tetrahedron.
          </p>
          <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            Unlike its planar cousin, this solid is <em>not</em> of constant width. The width is
            slightly larger across pairs of opposite edges than from a vertex to the opposite face.
            Meissner tetrahedra repair that by rounding three of the edges — a related, deeper
            object.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <p className="font-sans text-xs font-medium tracking-[0.16em] text-muted uppercase">
              2D analog
            </p>
            <ReuleauxTriangleSvg className="mt-4 w-full" />
            <p className="mt-3 text-center font-sans text-sm text-muted">Reuleaux triangle</p>
          </div>
          <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <p className="font-sans text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Skeleton
            </p>
            <TetrahedronSvg className="mt-4 w-full" />
            <p className="mt-3 text-center font-sans text-sm text-muted">Regular tetrahedron</p>
          </div>
        </div>
      </div>
      <Figure
        src="/images/comparison.jpg"
        alt="Wireframe tetrahedron beside a ceramic Reuleaux tetrahedron on a drafting table"
        caption="The skeleton and the solid: a regular tetrahedron of edge a, and the curved body grown from it."
        className="mt-10"
      />
    </Section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Begin with a regular tetrahedron",
    body: "Four vertices, six edges, four faces, all edges equal to a. Euler’s formula already holds: 4 − 6 + 4 = 2.",
  },
  {
    n: "02",
    title: "Centre a ball at every vertex",
    body: "Each sphere has radius r = a, so it passes through the other three vertices and contains the whole tetrahedron.",
  },
  {
    n: "03",
    title: "Keep only the common intersection",
    body: "A point belongs to the Reuleaux tetrahedron if and only if it lies inside every one of the four balls.",
  },
  {
    n: "04",
    title: "Read the new faces",
    body: "Each remaining face is a spherical triangle — a patch of the sphere centred at the opposite vertex. Edges become circular arcs of radius a.",
  },
];

function Construction() {
  return (
    <Section id="construction" kicker="04 — Construction method" title="Four balls, one solid">
      <Figure
        src="/images/spheres.jpg"
        alt="Four overlapping glass spheres whose common intersection is a Reuleaux tetrahedron"
        caption="Construction in one picture: four equal balls, centred on the vertices of a tetrahedron. The solid is their intersection."
      />
      <ol className="mt-10 grid gap-4 sm:grid-cols-2">
        {STEPS.map((step) => (
          <li key={step.n} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="font-display text-sm tracking-[0.18em] text-muted">{step.n}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 font-sans text-base leading-relaxed text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <EulerBadge />
        <div className="rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)]">
          <p className="font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Intersection
          </p>
          <p className="math mt-2 text-xl leading-snug text-ink">
            R = B(v₁, a) ∩ B(v₂, a) ∩ B(v₃, a) ∩ B(v₄, a)
          </p>
          <p className="mt-2 font-sans text-sm text-muted">
            Each B(vᵢ, a) is a closed ball of radius a centred at a vertex.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Derivations() {
  return (
    <Section id="derivations" kicker="05 — Mathematical derivations" title="Volume, area, and the edge a">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            Let the edge of the underlying tetrahedron be <span className="math">a</span>. Each
            curved face belongs to a sphere of radius <span className="math">r = a</span> centred at
            the opposite vertex. The model is the intersection of these spherical regions.
          </p>
          <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
            The regular tetrahedron itself has volume{" "}
            <span className="math">(√2 / 12) a³ ≈ 0.118 a³</span>. The Reuleaux tetrahedron is
            larger, because the faces bulge outward. Its volume and surface area are classical
            results:
          </p>
          <div className="mt-6 space-y-4">
            <FormulaBlock label="Volume">
              V = (a³ / 12) (3√2 − 49π + 162 arctan √2) ≈ 0.422 a³
            </FormulaBlock>
            <FormulaBlock label="Surface area">
              S = [8π − 18 arccos(1/3)] a² ≈ 2.975 a²
            </FormulaBlock>
            <FormulaBlock label="Regular tetrahedron (for comparison)">
              V<sub>tet</sub> = (√2 / 12) a³ ··· S<sub>tet</sub> = √3 a²
            </FormulaBlock>
          </div>
        </div>
        <Figure
          src="/images/closeup.jpg"
          alt="Macro photograph of a spherical marble face of the Reuleaux tetrahedron"
          caption="Each face is a spherical triangle: a piece of a sphere of radius a, bounded by three circular arcs."
        />
      </div>
    </Section>
  );
}

function FormulaBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)]">
      <p className="font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase">{label}</p>
      <p className="math mt-2 text-lg leading-snug text-ink sm:text-xl">{children}</p>
    </div>
  );
}

const PROPERTIES = [
  { k: "Vertices", v: "4" },
  { k: "Edges (underlying tetrahedron)", v: "6 circular arcs" },
  { k: "Curved faces", v: "4 spherical patches" },
  { k: "Symmetry", v: "Tetrahedral (full A₄ / Td)" },
  { k: "Geometry", v: "Convex body in 3-space" },
  { k: "Constant width?", v: "No — almost, but not quite" },
];

function Properties() {
  return (
    <Section id="properties" kicker="06 — Geometric properties" title="What the solid is made of">
      <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <table className="w-full text-left font-sans">
          <thead className="bg-paper-deep font-sans text-xs font-medium tracking-[0.16em] text-muted uppercase">
            <tr>
              <th className="px-6 py-4">Property</th>
              <th className="px-6 py-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {PROPERTIES.map((row, i) => (
              <tr key={row.k} className={cn(i !== PROPERTIES.length - 1 && "border-b border-line")}>
                <td className="px-6 py-4 text-ink">{row.k}</td>
                <td className="px-6 py-4 text-ink-soft">{row.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-prose font-sans text-base leading-relaxed text-ink-soft">
        The same counts as a tetrahedron — four vertices, six edges, four faces — but every face is
        now a spherical triangle and every edge a circular arc of radius{" "}
        <span className="math">a</span>. Convexity is inherited from the balls: an intersection of
        convex sets is convex.
      </p>
    </Section>
  );
}

const APPS = [
  {
    src: "/images/education.jpg",
    icon: GraduationCap,
    title: "Education",
    body: "Teaching advanced geometry and spatial visualisation — a solid students can rotate, print and measure.",
  },
  {
    src: "/images/comparison.jpg",
    icon: BookOpen,
    title: "Research",
    body: "A working example in convex and computational geometry, and a stepping-stone to Meissner bodies.",
  },
  {
    src: "/images/cad.jpg",
    icon: Cpu,
    title: "CAD & 3D printing",
    body: "Modelling the intersection of four balls, meshing spherical patches, and rapid prototyping.",
  },
  {
    src: "/images/spheres.jpg",
    icon: Box,
    title: "Computer graphics",
    body: "A compact test mesh for geometric algorithms: CSG, curvature, and spherical-triangle clipping.",
  },
  {
    src: "/images/architecture.jpg",
    icon: School,
    title: "Design inspiration",
    body: "Architecture and engineering concept exploration — roofs and nodes grown from spherical tetrahedral patches.",
  },
];

function Applications() {
  return (
    <Section id="applications" kicker="07 — Verified applications" title="Where the shape is useful">
      <div className="grid gap-6 sm:grid-cols-2">
        {APPS.map((app, i) => (
          <article
            key={app.title}
            className={cn(
              "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
              i === 0 && "sm:col-span-2",
            )}
          >
            <img
              src={app.src}
              alt=""
              className={cn("w-full object-cover", i === 0 ? "aspect-[16/8]" : "aspect-[16/10]")}
            />
            <div className="p-6">
              <app.icon className="size-5 text-navy" strokeWidth={1.6} />
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{app.title}</h3>
              <p className="mt-2 font-sans text-base leading-relaxed text-ink-soft">{app.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Future() {
  return (
    <Section id="future" kicker="08 — Future scope" title="What the shape might still teach">
      <p className="max-w-prose font-sans text-base leading-relaxed text-ink-soft">
        These are future possibilities rather than established commercial uses: inspiration for
        optimised structural systems, sustainable architecture, AI-assisted geometric optimisation,
        advanced additive manufacturing, and space-structure research.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Figure
          src="/images/architecture.jpg"
          alt="Pavilion with spherical tetrahedral roof patches"
          caption="Spherical patches as a roof language — cream stone, navy ribs."
        />
        <Figure
          src="/images/space.jpg"
          alt="Lattice of tetrahedral spherical nodes in space"
          caption="A conceptual space-structure of tetrahedral spherical nodes."
        />
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {[
          "Optimised structural systems",
          "Sustainable architecture",
          "AI-assisted geometric optimisation",
          "Advanced additive manufacturing",
          "Space-structure research",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-border)]"
          >
            <Rocket className="size-4 shrink-0 text-navy" strokeWidth={1.6} />
            <span className="font-sans text-sm text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Notes() {
  return (
    <Section id="notes" kicker="09 — Advantages & limitations" title="Honest about the shape">
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-xl bg-surface p-7 shadow-[var(--shadow-border)]">
          <BadgeCheck className="size-5 text-navy" strokeWidth={1.6} />
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Advantages</h3>
          <ul className="mt-4 space-y-3 font-sans text-base leading-relaxed text-ink-soft">
            <li>Improves visualisation of curved 3D geometry.</li>
            <li>Links school mathematics with CAD and 3D printing.</li>
            <li>Promotes creativity through a single, rich object.</li>
          </ul>
        </article>
        <article className="rounded-xl bg-surface p-7 shadow-[var(--shadow-border)]">
          <Layers className="size-5 text-navy" strokeWidth={1.6} />
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Limitations</h3>
          <ul className="mt-4 space-y-3 font-sans text-base leading-relaxed text-ink-soft">
            <li>Primarily educational and research-oriented.</li>
            <li>Direct industrial use of the exact shape is limited.</li>
            <li>Not a body of constant width — Meissner tetrahedra are the refined form.</li>
          </ul>
        </article>
      </div>
    </Section>
  );
}

const REFS = [
  "H. S. M. Coxeter, Introduction to Geometry.",
  "George Hart, mathematical sculpture resources.",
  "M. de Berg et al., Computational Geometry: Algorithms and Applications.",
  "NCERT Mathematics resources.",
  "CAD / 3D printing educational documentation.",
];

function References() {
  return (
    <Section id="references" kicker="10 — References" title="Sources">
      <ol className="space-y-3">
        {REFS.map((ref, i) => (
          <li
            key={ref}
            className="flex gap-4 rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)]"
          >
            <span className="font-display text-lg text-muted">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-sans text-base text-ink-soft">{ref}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="catalogue-rule mb-8" />
      <div className="flex flex-col gap-3 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-ink">Reuleaux Tetrahedron</p>
          <p className="mt-1 font-sans text-sm text-muted">
            Avadh Prajapati · PM SHRI JNV Mehsana
          </p>
        </div>
        <p className="font-sans text-sm text-muted">RBVP 2026–27 · Gujarat</p>
      </div>
    </footer>
  );
}
