import { i as __toESM } from "../_runtime.mjs";
import { c as CatmullRomCurve3, d as Quaternion, f as TubeGeometry, h as require_react, i as useFrame, l as Float32BufferAttribute, m as require_jsx_runtime, n as OrbitControls, o as BufferAttribute, p as Vector3, r as Canvas, s as BufferGeometry, t as ContactShadows, u as MeshStandardMaterial } from "../_libs/@react-three/drei+[...].mjs";
import { n as Button, r as cn } from "./routes-_CTY_v8e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reuleaux-viewer-CHa815y6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function tetVertices() {
	const s = 1 / (2 * Math.sqrt(2));
	const q = new Quaternion().setFromUnitVectors(new Vector3(1, 1, 1).normalize(), new Vector3(0, 1, 0));
	return [
		new Vector3(1, 1, 1).multiplyScalar(s),
		new Vector3(1, -1, -1).multiplyScalar(s),
		new Vector3(-1, 1, -1).multiplyScalar(s),
		new Vector3(-1, -1, 1).multiplyScalar(s)
	].map((v) => v.applyQuaternion(q));
}
function createReuleauxGeometry(div = 22) {
	const verts = tetVertices();
	const positions = [];
	const normals = [];
	const indices = [];
	const tmp = new Vector3();
	const ab = new Vector3();
	const ac = new Vector3();
	const faceN = new Vector3();
	function idx(i, j) {
		let off = 0;
		for (let t = 0; t < i; t++) off += div - t + 1;
		return off + j;
	}
	for (let f = 0; f < 4; f++) {
		const center = verts[f];
		const others = verts.filter((_, i) => i !== f);
		const a = others[0];
		const b = others[1];
		const c = others[2];
		const base = positions.length / 3;
		const patch = [];
		for (let i = 0; i <= div; i++) for (let j = 0; j <= div - i; j++) {
			const k = div - i - j;
			tmp.copy(a).multiplyScalar(i / div).addScaledVector(b, j / div).addScaledVector(c, k / div);
			const dir = tmp.sub(center).normalize();
			const v = center.clone().add(dir);
			patch.push(v);
			positions.push(v.x, v.y, v.z);
			normals.push(dir.x, dir.y, dir.z);
		}
		const triples = [];
		for (let i = 0; i < div; i++) for (let j = 0; j < div - i; j++) {
			triples.push([
				idx(i, j),
				idx(i + 1, j),
				idx(i, j + 1)
			]);
			if (j < div - i - 1) triples.push([
				idx(i + 1, j),
				idx(i + 1, j + 1),
				idx(i, j + 1)
			]);
		}
		const t0 = triples[0];
		ab.subVectors(patch[t0[1]], patch[t0[0]]);
		ac.subVectors(patch[t0[2]], patch[t0[0]]);
		faceN.copy(ab).cross(ac);
		const outward = new Vector3().subVectors(patch[t0[0]], center);
		const flip = faceN.dot(outward) < 0;
		for (const [i0, i1, i2] of triples) if (flip) indices.push(base + i0, base + i2, base + i1);
		else indices.push(base + i0, base + i1, base + i2);
	}
	const geom = new BufferGeometry();
	geom.setAttribute("position", new Float32BufferAttribute(positions, 3));
	geom.setAttribute("normal", new Float32BufferAttribute(normals, 3));
	geom.setIndex(indices);
	geom.computeBoundingSphere();
	return geom;
}
function ReuleauxSolid() {
	const geom = (0, import_react.useMemo)(() => createReuleauxGeometry(24), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		geometry: geom,
		castShadow: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
			color: "#efe8dc",
			roughness: .34,
			metalness: .06,
			clearcoat: .62,
			clearcoatRoughness: .28
		})
	});
}
function CurvedEdges() {
	const meshes = (0, import_react.useMemo)(() => {
		const v = tetVertices();
		const pairs = [
			[
				0,
				1,
				2,
				3
			],
			[
				0,
				2,
				1,
				3
			],
			[
				0,
				3,
				1,
				2
			],
			[
				1,
				2,
				0,
				3
			],
			[
				1,
				3,
				0,
				2
			],
			[
				2,
				3,
				0,
				1
			]
		];
		const mat = new MeshStandardMaterial({
			color: "#1a2744",
			roughness: .45,
			metalness: .1
		});
		return pairs.map(([ia, ib, ic, id], n) => {
			const va = v[ia];
			const vb = v[ib];
			const vc = v[ic];
			const vd = v[id];
			const m = vc.clone().add(vd).multiplyScalar(.5);
			const from = va.clone().sub(m);
			const to = vb.clone().sub(m);
			const axis = from.clone().cross(to).normalize();
			const angle = from.angleTo(to);
			const points = [];
			for (let i = 0; i <= 24; i++) {
				const q = new Quaternion().setFromAxisAngle(axis, angle * i / 24);
				points.push(from.clone().applyQuaternion(q).add(m));
			}
			const curve = new CatmullRomCurve3(points);
			const geom = new TubeGeometry(curve, 28, .012, 7, false);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: geom,
				material: mat
			}, n);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: meshes });
}
function TetraWire() {
	const geom = (0, import_react.useMemo)(() => {
		const v = tetVertices();
		const edges = [
			[0, 1],
			[0, 2],
			[0, 3],
			[1, 2],
			[1, 3],
			[2, 3]
		];
		const positions = new Float32Array(edges.length * 6);
		edges.forEach(([a, b], i) => {
			const pa = v[a];
			const pb = v[b];
			positions.set([
				pa.x,
				pa.y,
				pa.z,
				pb.x,
				pb.y,
				pb.z
			], i * 6);
		});
		const g = new BufferGeometry();
		g.setAttribute("position", new BufferAttribute(positions, 3));
		return g;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
		geometry: geom,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
			color: "#1a2744",
			transparent: true,
			opacity: .55
		})
	});
}
function SphereGuides() {
	const verts = (0, import_react.useMemo)(() => tetVertices(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: verts.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			v.x,
			v.y,
			v.z
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			1,
			24,
			16
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: "#24365c",
			wireframe: true,
			transparent: true,
			opacity: .22
		})]
	}, i)) });
}
function Scene({ showTet, showSpheres, autoRotate }) {
	const group = (0, import_react.useRef)(null);
	useFrame((_, delta) => {
		if (!autoRotate || !group.current) return;
		group.current.rotation.y += Math.min(delta, .05) * .32;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#e7dfd0"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#fffdf8",
			"#3a4a68",
			.7
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				2.6,
				3.4,
				1.2
			],
			intensity: 1.7
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-2.4,
				1.4,
				1.8
			],
			intensity: .55,
			color: "#d4dce8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				.2,
				.4,
				-2.4
			],
			intensity: .28
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			ref: group,
			rotation: [
				0,
				.55,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReuleauxSolid, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurvedEdges, {}),
				showTet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TetraWire, {}) : null,
				showSpheres ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SphereGuides, {}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
			position: [
				0,
				-.42,
				0
			],
			opacity: .32,
			scale: 3.4,
			blur: 2.2,
			far: 1.4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enablePan: false,
			minDistance: 1.4,
			maxDistance: 4.4,
			minPolarAngle: .32,
			maxPolarAngle: Math.PI - .32,
			target: [
				0,
				.08,
				0
			]
		})
	] });
}
function ReuleauxViewer() {
	const [showTet, setShowTet] = (0, import_react.useState)(true);
	const [showSpheres, setShowSpheres] = (0, import_react.useState)(false);
	const [autoRotate, setAutoRotate] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-paper-deep shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[4/3] w-full touch-none sm:aspect-[16/10]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
				camera: {
					position: [
						1.55,
						.72,
						1.85
					],
					fov: 36
				},
				dpr: [1, 2],
				gl: {
					antialias: true,
					alpha: false
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {
					showTet,
					showSpheres,
					autoRotate
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2 border-t border-line bg-surface p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					pressed: autoRotate,
					onPressedChange: setAutoRotate,
					label: "Rotate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					pressed: showTet,
					onPressedChange: setShowTet,
					label: "Tetrahedron"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					pressed: showSpheres,
					onPressedChange: setShowSpheres,
					label: "Four spheres"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ml-auto hidden self-center font-sans text-xs text-muted sm:block",
					children: "Drag to orbit · scroll to zoom"
				})
			]
		})]
	});
}
function Toggle({ pressed, onPressedChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		size: "sm",
		variant: pressed ? "primary" : "outline",
		"aria-pressed": pressed,
		onClick: () => onPressedChange(!pressed),
		className: cn("min-h-11"),
		children: label
	});
}
//#endregion
export { ReuleauxViewer as default };
