import { i as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Printer, c as GraduationCap, d as Box, f as BookOpen, i as Rocket, l as Cpu, m as ArrowDown, n as Shapes, o as Lightbulb, p as BadgeCheck, r as School, s as Layers, u as Compass } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-_CTY_v8e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var button = cva("inline-flex items-center justify-center gap-2 font-sans font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-navy text-accent-fg hover:bg-ink",
			ghost: "bg-transparent text-ink hover:bg-paper-deep",
			outline: "bg-surface text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
		},
		size: {
			md: "h-11 px-5 rounded-md text-sm",
			sm: "h-9 px-3 rounded-sm text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(button({
			variant,
			size
		}), className),
		...props
	});
}
function ReuleauxTriangleSvg({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 220",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M120 28\n           A 112 112 0 0 1 217 196\n           A 112 112 0 0 1 23 196\n           A 112 112 0 0 1 120 28 Z",
				fill: "#fffdf8",
				stroke: "#1a2744",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M120 28 L217 196 L23 196 Z",
				fill: "none",
				stroke: "#24365c",
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "28",
				r: "3.2",
				fill: "#1a2744"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "217",
				cy: "196",
				r: "3.2",
				fill: "#1a2744"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23",
				cy: "196",
				r: "3.2",
				fill: "#1a2744"
			})
		]
	});
}
function TetrahedronSvg({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 220",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "120,22 210,168 30,168",
				fill: "none",
				stroke: "#1a2744",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "120",
				y1: "22",
				x2: "120",
				y2: "168",
				stroke: "#1a2744",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "30",
				y1: "168",
				x2: "210",
				y2: "168",
				stroke: "#1a2744",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "120",
				y1: "22",
				x2: "78",
				y2: "168",
				stroke: "#24365c",
				strokeWidth: "1.2",
				strokeDasharray: "5 4",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "22",
				r: "3.2",
				fill: "#1a2744"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "210",
				cy: "168",
				r: "3.2",
				fill: "#1a2744"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "168",
				r: "3.2",
				fill: "#1a2744"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "168",
				r: "3.2",
				fill: "#1a2744"
			})
		]
	});
}
function EulerBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface px-5 py-4 text-center shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase",
				children: "Euler’s formula"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "math mt-2 text-2xl text-ink",
				children: "V − E + F = 2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-sans text-sm text-muted",
				children: "4 − 6 + 4 = 2"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cover",
		className: "scroll-mt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-stretch gap-0 px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:pt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center rounded-t-xl bg-surface px-6 py-10 shadow-[var(--shadow-border)] sm:px-10 lg:rounded-l-xl lg:rounded-tr-none lg:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase",
						children: "Rashtriya Bal Vigyan Pradarshani"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-sm text-accent",
						children: "2026 – 27 · Gujarat"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.03em] text-ink sm:text-6xl",
						children: ["Reuleaux", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block italic font-medium",
							children: "Tetrahedron"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm font-sans text-sm tracking-[0.14em] text-muted uppercase",
						children: "Recreational mathematical modelling"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "catalogue-rule my-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-3 font-sans text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								term: "Team leader",
								detail: "Avadh Prajapati"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								term: "Co-leader",
								detail: "Ridham Varma"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								term: "School",
								detail: "PM SHRI Jawahar Navodaya Vidyalaya, Mehsana"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" }),
							children: ["Enter the exhibit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[280px] overflow-hidden rounded-b-xl bg-paper-deep lg:min-h-[540px] lg:rounded-r-xl lg:rounded-bl-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Marble Reuleaux tetrahedron on a museum plinth",
					className: "absolute inset-0 h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/75 via-ink/25 to-transparent p-6 pt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-accent-fg italic",
						children: "“Mathematics is the language of the universe.”"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-xs tracking-[0.16em] text-accent-fg/80 uppercase",
						children: "Galileo Galilei"
					})]
				})]
			})]
		})
	});
}
function Row({ term, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[8.5rem_1fr] gap-3 sm:grid-cols-[9.5rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: term
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-ink",
			children: detail
		})]
	});
}
var Viewer = (0, import_react.lazy)(() => import("./reuleaux-viewer-CHa815y6.mjs"));
function ReuleauxCanvas() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewerFallback, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewerFallback, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewer, {})
	});
}
function ViewerFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-paper-deep sm:aspect-[16/10]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg italic text-muted",
			children: "Preparing the solid…"
		})
	});
}
var SECTIONS = [
	{
		id: "cover",
		label: "Cover"
	},
	{
		id: "certificate",
		label: "Certificate"
	},
	{
		id: "introduction",
		label: "Introduction"
	},
	{
		id: "objectives",
		label: "Objectives"
	},
	{
		id: "background",
		label: "Background"
	},
	{
		id: "construction",
		label: "Construction"
	},
	{
		id: "derivations",
		label: "Derivations"
	},
	{
		id: "properties",
		label: "Properties"
	},
	{
		id: "applications",
		label: "Applications"
	},
	{
		id: "future",
		label: "Future"
	},
	{
		id: "notes",
		label: "Notes"
	},
	{
		id: "references",
		label: "References"
	}
];
function SiteNav() {
	const [active, setActive] = (0, import_react.useState)("cover");
	(0, import_react.useEffect)(() => {
		const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter((n) => Boolean(n));
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-20% 0px -60% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		nodes.forEach((n) => obs.observe(n));
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#cover",
				className: "shrink-0 font-display text-lg font-semibold tracking-tight text-ink",
				children: "Reuleaux"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Exhibit sections",
				className: "-mx-1 flex min-w-0 flex-1 gap-1 overflow-x-auto pb-0.5",
				children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${s.id}`,
					className: cn("inline-flex h-10 shrink-0 items-center rounded-sm px-3 font-sans text-sm transition-colors duration-150", active === s.id ? "bg-navy text-accent-fg" : "text-muted hover:bg-paper-deep hover:text-ink"),
					children: s.label
				}, s.id))
			})]
		})
	});
}
function ExhibitPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certificate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Introduction, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Objectives, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Construction, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Derivations, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Properties, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Applications, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Future, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(References, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Section({ id, kicker, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "catalogue-rule my-8" }),
			children
		]
	});
}
function Figure({ src, alt, caption, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "w-full rounded-lg object-cover"
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 font-sans text-sm leading-relaxed text-muted",
			children: caption
		}) : null]
	});
}
function Certificate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certificate",
		className: "scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-8 shadow-[var(--shadow-border)] sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase",
						children: "Certificate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold text-ink",
						children: "Prepared for presentation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
						children: [
							"This is to certify that this write-up is prepared for the presentation of the project",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: " Reuleaux Tetrahedron "
							}),
							"at Rashtriya Bal Vigyan Pradarshani by Avadh Prajapati."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "catalogue-rule my-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-[0.22em] text-muted uppercase",
						children: "Acknowledgement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
						children: "I sincerely thank my teachers, parents and mentors for their guidance and support in completing this project and exploring advanced geometry through 3D printing."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/still-life.jpg",
				alt: "Ceramic Reuleaux tetrahedron with compass and set square",
				caption: "A still-life of the solid with classical drawing tools — the same instruments that construct it."
			})]
		})
	});
}
function Introduction() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "introduction",
		kicker: "01 — Introduction",
		title: "A tetrahedron with spherical faces",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-prose font-sans text-lg leading-relaxed text-ink-soft",
					children: "The Reuleaux Tetrahedron is a convex three-dimensional body derived from a regular tetrahedron by replacing each face with a spherical patch centred at the opposite vertex."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
					children: "It is the three-dimensional cousin of the Reuleaux triangle — the curved triangle of constant width that appears in drill bits and rotary engines. Four balls of equal radius, each centred on a vertex of a regular tetrahedron, are intersected. What remains is a plump, perfectly symmetric solid: four vertices, six circular-arc edges, four spherical faces."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
					children: "The model demonstrates symmetry, convexity and spatial reasoning — and it can be held in the hand once it has been printed."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReuleauxCanvas, {})]
		})
	});
}
var OBJECTIVES = [
	{
		icon: Shapes,
		title: "Study advanced geometry",
		body: "Move from plane figures to curved solids, spherical triangles and tetrahedral symmetry."
	},
	{
		icon: Compass,
		title: "Understand curved solids",
		body: "See how circular arcs and spherical patches replace straight edges and flat faces."
	},
	{
		icon: Printer,
		title: "Model with CAD and 3D printing",
		body: "Turn an intersection of balls into a printable mesh — mathematics you can hold."
	},
	{
		icon: Lightbulb,
		title: "Encourage innovation",
		body: "Use recreational mathematics as a bridge between school geometry and research ideas."
	}
];
function Objectives() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "objectives",
		kicker: "02 — Objectives",
		title: "What this project sets out to do",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: OBJECTIVES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
						className: "size-5 text-navy",
						strokeWidth: 1.6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl font-semibold text-ink",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-base leading-relaxed text-ink-soft",
						children: item.body
					})
				]
			}, item.title))
		})
	});
}
function Background() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "background",
		kicker: "03 — Mathematical background",
		title: "From triangle to tetrahedron",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-prose font-sans text-base leading-relaxed text-ink-soft",
					children: "Franz Reuleaux (1829–1905), a German mechanical engineer, studied shapes of constant width. The Reuleaux triangle is formed from an equilateral triangle by drawing, about each vertex, an arc through the other two. Between parallel supporting lines the width is always the side length."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
					children: [
						"The same recipe in three dimensions starts with a regular tetrahedron of edge",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "math",
							children: "a"
						}),
						". About each vertex one draws a sphere of radius",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "math",
							children: "a"
						}),
						". The intersection of those four balls is the Reuleaux tetrahedron."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
					children: [
						"Unlike its planar cousin, this solid is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "not" }),
						" of constant width. The width is slightly larger across pairs of opposite edges than from a vertex to the opposite face. Meissner tetrahedra repair that by rounding three of the edges — a related, deeper object."
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-[0.16em] text-muted uppercase",
							children: "2D analog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReuleauxTriangleSvg, { className: "mt-4 w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center font-sans text-sm text-muted",
							children: "Reuleaux triangle"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-[0.16em] text-muted uppercase",
							children: "Skeleton"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TetrahedronSvg, { className: "mt-4 w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center font-sans text-sm text-muted",
							children: "Regular tetrahedron"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
			src: "/images/comparison.jpg",
			alt: "Wireframe tetrahedron beside a ceramic Reuleaux tetrahedron on a drafting table",
			caption: "The skeleton and the solid: a regular tetrahedron of edge a, and the curved body grown from it.",
			className: "mt-10"
		})]
	});
}
var STEPS = [
	{
		n: "01",
		title: "Begin with a regular tetrahedron",
		body: "Four vertices, six edges, four faces, all edges equal to a. Euler’s formula already holds: 4 − 6 + 4 = 2."
	},
	{
		n: "02",
		title: "Centre a ball at every vertex",
		body: "Each sphere has radius r = a, so it passes through the other three vertices and contains the whole tetrahedron."
	},
	{
		n: "03",
		title: "Keep only the common intersection",
		body: "A point belongs to the Reuleaux tetrahedron if and only if it lies inside every one of the four balls."
	},
	{
		n: "04",
		title: "Read the new faces",
		body: "Each remaining face is a spherical triangle — a patch of the sphere centred at the opposite vertex. Edges become circular arcs of radius a."
	}
];
function Construction() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "construction",
		kicker: "04 — Construction method",
		title: "Four balls, one solid",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/spheres.jpg",
				alt: "Four overlapping glass spheres whose common intersection is a Reuleaux tetrahedron",
				caption: "Construction in one picture: four equal balls, centred on the vertices of a tetrahedron. The solid is their intersection."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-[0.18em] text-muted",
							children: step.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl font-semibold text-ink",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-base leading-relaxed text-ink-soft",
							children: step.body
						})
					]
				}, step.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EulerBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase",
							children: "Intersection"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "math mt-2 text-xl leading-snug text-ink",
							children: "R = B(v₁, a) ∩ B(v₂, a) ∩ B(v₃, a) ∩ B(v₄, a)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm text-muted",
							children: "Each B(vᵢ, a) is a closed ball of radius a centred at a vertex."
						})
					]
				})]
			})
		]
	});
}
function Derivations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "derivations",
		kicker: "05 — Mathematical derivations",
		title: "Volume, area, and the edge a",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-prose font-sans text-base leading-relaxed text-ink-soft",
					children: [
						"Let the edge of the underlying tetrahedron be ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "math",
							children: "a"
						}),
						". Each curved face belongs to a sphere of radius ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "math",
							children: "r = a"
						}),
						" centred at the opposite vertex. The model is the intersection of these spherical regions."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
					children: [
						"The regular tetrahedron itself has volume",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "math",
							children: "(√2 / 12) a³ ≈ 0.118 a³"
						}),
						". The Reuleaux tetrahedron is larger, because the faces bulge outward. Its volume and surface area are classical results:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, {
							label: "Volume",
							children: "V = (a³ / 12) (3√2 − 49π + 162 arctan √2) ≈ 0.422 a³"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, {
							label: "Surface area",
							children: "S = [8π − 18 arccos(1/3)] a² ≈ 2.975 a²"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormulaBlock, {
							label: "Regular tetrahedron (for comparison)",
							children: [
								"V",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "tet" }),
								" = (√2 / 12) a³ ··· S",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "tet" }),
								" = √3 a²"
							]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/closeup.jpg",
				alt: "Macro photograph of a spherical marble face of the Reuleaux tetrahedron",
				caption: "Each face is a spherical triangle: a piece of a sphere of radius a, bounded by three circular arcs."
			})]
		})
	});
}
function FormulaBlock({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "math mt-2 text-lg leading-snug text-ink sm:text-xl",
			children
		})]
	});
}
var PROPERTIES = [
	{
		k: "Vertices",
		v: "4"
	},
	{
		k: "Edges (underlying tetrahedron)",
		v: "6 circular arcs"
	},
	{
		k: "Curved faces",
		v: "4 spherical patches"
	},
	{
		k: "Symmetry",
		v: "Tetrahedral (full A₄ / Td)"
	},
	{
		k: "Geometry",
		v: "Convex body in 3-space"
	},
	{
		k: "Constant width?",
		v: "No — almost, but not quite"
	}
];
function Properties() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "properties",
		kicker: "06 — Geometric properties",
		title: "What the solid is made of",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left font-sans",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-paper-deep font-sans text-xs font-medium tracking-[0.16em] text-muted uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-4",
						children: "Property"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-4",
						children: "Description"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PROPERTIES.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: cn(i !== PROPERTIES.length - 1 && "border-b border-line"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-4 text-ink",
						children: row.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-6 py-4 text-ink-soft",
						children: row.v
					})]
				}, row.k)) })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 max-w-prose font-sans text-base leading-relaxed text-ink-soft",
			children: [
				"The same counts as a tetrahedron — four vertices, six edges, four faces — but every face is now a spherical triangle and every edge a circular arc of radius",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "math",
					children: "a"
				}),
				". Convexity is inherited from the balls: an intersection of convex sets is convex."
			]
		})]
	});
}
var APPS = [
	{
		src: "/images/education.jpg",
		icon: GraduationCap,
		title: "Education",
		body: "Teaching advanced geometry and spatial visualisation — a solid students can rotate, print and measure."
	},
	{
		src: "/images/comparison.jpg",
		icon: BookOpen,
		title: "Research",
		body: "A working example in convex and computational geometry, and a stepping-stone to Meissner bodies."
	},
	{
		src: "/images/cad.jpg",
		icon: Cpu,
		title: "CAD & 3D printing",
		body: "Modelling the intersection of four balls, meshing spherical patches, and rapid prototyping."
	},
	{
		src: "/images/spheres.jpg",
		icon: Box,
		title: "Computer graphics",
		body: "A compact test mesh for geometric algorithms: CSG, curvature, and spherical-triangle clipping."
	},
	{
		src: "/images/architecture.jpg",
		icon: School,
		title: "Design inspiration",
		body: "Architecture and engineering concept exploration — roofs and nodes grown from spherical tetrahedral patches."
	}
];
function Applications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "applications",
		kicker: "07 — Verified applications",
		title: "Where the shape is useful",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2",
			children: APPS.map((app, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]", i === 0 && "sm:col-span-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: app.src,
					alt: "",
					className: cn("w-full object-cover", i === 0 ? "aspect-[16/8]" : "aspect-[16/10]")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(app.icon, {
							className: "size-5 text-navy",
							strokeWidth: 1.6
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-semibold text-ink",
							children: app.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-base leading-relaxed text-ink-soft",
							children: app.body
						})
					]
				})]
			}, app.title))
		})
	});
}
function Future() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "future",
		kicker: "08 — Future scope",
		title: "What the shape might still teach",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-prose font-sans text-base leading-relaxed text-ink-soft",
				children: "These are future possibilities rather than established commercial uses: inspiration for optimised structural systems, sustainable architecture, AI-assisted geometric optimisation, advanced additive manufacturing, and space-structure research."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/architecture.jpg",
					alt: "Pavilion with spherical tetrahedral roof patches",
					caption: "Spherical patches as a roof language — cream stone, navy ribs."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/space.jpg",
					alt: "Lattice of tetrahedral spherical nodes in space",
					caption: "A conceptual space-structure of tetrahedral spherical nodes."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [
					"Optimised structural systems",
					"Sustainable architecture",
					"AI-assisted geometric optimisation",
					"Advanced additive manufacturing",
					"Space-structure research"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {
						className: "size-4 shrink-0 text-navy",
						strokeWidth: 1.6
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-sans text-sm text-ink",
						children: item
					})]
				}, item))
			})
		]
	});
}
function Notes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "notes",
		kicker: "09 — Advantages & limitations",
		title: "Honest about the shape",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-7 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
						className: "size-5 text-navy",
						strokeWidth: 1.6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl font-semibold text-ink",
						children: "Advantages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 font-sans text-base leading-relaxed text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Improves visualisation of curved 3D geometry." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Links school mathematics with CAD and 3D printing." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Promotes creativity through a single, rich object." })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-7 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
						className: "size-5 text-navy",
						strokeWidth: 1.6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl font-semibold text-ink",
						children: "Limitations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 font-sans text-base leading-relaxed text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Primarily educational and research-oriented." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Direct industrial use of the exact shape is limited." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Not a body of constant width — Meissner tetrahedra are the refined form." })
						]
					})
				]
			})]
		})
	});
}
var REFS = [
	"H. S. M. Coxeter, Introduction to Geometry.",
	"George Hart, mathematical sculpture resources.",
	"M. de Berg et al., Computational Geometry: Algorithms and Applications.",
	"NCERT Mathematics resources.",
	"CAD / 3D printing educational documentation."
];
function References() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "references",
		kicker: "10 — References",
		title: "Sources",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-3",
			children: REFS.map((ref, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4 rounded-lg bg-surface px-5 py-4 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg text-muted",
					children: String(i + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-base text-ink-soft",
					children: ref
				})]
			}, ref))
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mx-auto max-w-6xl px-4 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "catalogue-rule mb-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 pb-8 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-semibold text-ink",
				children: "Reuleaux Tetrahedron"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-sans text-sm text-muted",
				children: "Avadh Prajapati · Ridham Varma · PM SHRI JNV Mehsana"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-sm text-muted",
				children: "RBVP 2026–27 · Gujarat"
			})]
		})]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExhibitPage, {});
}
//#endregion
export { Button as n, cn as r, routes_exports as t };
