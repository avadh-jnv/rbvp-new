import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

function tetVertices() {
  const s = 1 / (2 * Math.sqrt(2));
  const q = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(1, 1, 1).normalize(),
    new THREE.Vector3(0, 1, 0),
  );
  return [
    new THREE.Vector3(1, 1, 1).multiplyScalar(s),
    new THREE.Vector3(1, -1, -1).multiplyScalar(s),
    new THREE.Vector3(-1, 1, -1).multiplyScalar(s),
    new THREE.Vector3(-1, -1, 1).multiplyScalar(s),
  ].map((v) => v.applyQuaternion(q));
}

function createReuleauxGeometry(div = 22) {
  const verts = tetVertices();
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const tmp = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  const faceN = new THREE.Vector3();

  function idx(i: number, j: number) {
    let off = 0;
    for (let t = 0; t < i; t++) off += div - t + 1;
    return off + j;
  }

  for (let f = 0; f < 4; f++) {
    const center = verts[f]!;
    const others = verts.filter((_, i) => i !== f);
    const a = others[0]!;
    const b = others[1]!;
    const c = others[2]!;
    const base = positions.length / 3;
    const patch: THREE.Vector3[] = [];

    for (let i = 0; i <= div; i++) {
      for (let j = 0; j <= div - i; j++) {
        const k = div - i - j;
        tmp
          .copy(a)
          .multiplyScalar(i / div)
          .addScaledVector(b, j / div)
          .addScaledVector(c, k / div);
        const dir = tmp.sub(center).normalize();
        const v = center.clone().add(dir);
        patch.push(v);
        positions.push(v.x, v.y, v.z);
        normals.push(dir.x, dir.y, dir.z);
      }
    }

    const triples: [number, number, number][] = [];
    for (let i = 0; i < div; i++) {
      for (let j = 0; j < div - i; j++) {
        triples.push([idx(i, j), idx(i + 1, j), idx(i, j + 1)]);
        if (j < div - i - 1) {
          triples.push([idx(i + 1, j), idx(i + 1, j + 1), idx(i, j + 1)]);
        }
      }
    }

    const t0 = triples[0]!;
    ab.subVectors(patch[t0[1]]!, patch[t0[0]]!);
    ac.subVectors(patch[t0[2]]!, patch[t0[0]]!);
    faceN.copy(ab).cross(ac);
    const outward = new THREE.Vector3().subVectors(patch[t0[0]]!, center);
    const flip = faceN.dot(outward) < 0;

    for (const [i0, i1, i2] of triples) {
      if (flip) indices.push(base + i0, base + i2, base + i1);
      else indices.push(base + i0, base + i1, base + i2);
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geom.setIndex(indices);
  geom.computeBoundingSphere();
  return geom;
}

function ReuleauxSolid() {
  const geom = useMemo(() => createReuleauxGeometry(24), []);
  return (
    <mesh geometry={geom} castShadow>
      <meshPhysicalMaterial
        color="#efe8dc"
        roughness={0.34}
        metalness={0.06}
        clearcoat={0.62}
        clearcoatRoughness={0.28}
      />
    </mesh>
  );
}

function CurvedEdges() {
  const meshes = useMemo(() => {
    const v = tetVertices();
    const pairs = [
      [0, 1, 2, 3],
      [0, 2, 1, 3],
      [0, 3, 1, 2],
      [1, 2, 0, 3],
      [1, 3, 0, 2],
      [2, 3, 0, 1],
    ] as const;
    const mat = new THREE.MeshStandardMaterial({
      color: "#1a2744",
      roughness: 0.45,
      metalness: 0.1,
    });
    return pairs.map(([ia, ib, ic, id], n) => {
      const va = v[ia]!;
      const vb = v[ib]!;
      const vc = v[ic]!;
      const vd = v[id]!;
      const m = vc.clone().add(vd).multiplyScalar(0.5);
      const from = va.clone().sub(m);
      const to = vb.clone().sub(m);
      const axis = from.clone().cross(to).normalize();
      const angle = from.angleTo(to);
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= 24; i++) {
        const q = new THREE.Quaternion().setFromAxisAngle(axis, (angle * i) / 24);
        points.push(from.clone().applyQuaternion(q).add(m));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geom = new THREE.TubeGeometry(curve, 28, 0.012, 7, false);
      return <mesh key={n} geometry={geom} material={mat} />;
    });
  }, []);
  return <group>{meshes}</group>;
}

function TetraWire() {
  const geom = useMemo(() => {
    const v = tetVertices();
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
      [2, 3],
    ] as const;
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      const pa = v[a]!;
      const pb = v[b]!;
      positions.set([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z], i * 6);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  return (
    <lineSegments geometry={geom}>
      <lineBasicMaterial color="#1a2744" transparent opacity={0.55} />
    </lineSegments>
  );
}

function SphereGuides() {
  const verts = useMemo(() => tetVertices(), []);
  return (
    <group>
      {verts.map((v, i) => (
        <mesh key={i} position={[v.x, v.y, v.z]}>
          <sphereGeometry args={[1, 24, 16]} />
          <meshBasicMaterial color="#24365c" wireframe transparent opacity={0.22} />
        </mesh>
      ))}
    </group>
  );
}

function Scene({
  showTet,
  showSpheres,
  autoRotate,
}: {
  showTet: boolean;
  showSpheres: boolean;
  autoRotate: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!autoRotate || !group.current) return;
    group.current.rotation.y += Math.min(delta, 0.05) * 0.32;
  });

  return (
    <>
      <color attach="background" args={["#e7dfd0"]} />
      <hemisphereLight args={["#fffdf8", "#3a4a68", 0.7]} />
      <directionalLight position={[2.6, 3.4, 1.2]} intensity={1.7} />
      <directionalLight position={[-2.4, 1.4, 1.8]} intensity={0.55} color="#d4dce8" />
      <directionalLight position={[0.2, 0.4, -2.4]} intensity={0.28} />
      <group ref={group} rotation={[0, 0.55, 0]}>
        <ReuleauxSolid />
        <CurvedEdges />
        {showTet ? <TetraWire /> : null}
        {showSpheres ? <SphereGuides /> : null}
      </group>
      <ContactShadows position={[0, -0.42, 0]} opacity={0.32} scale={3.4} blur={2.2} far={1.4} />
      <OrbitControls
        enablePan={false}
        minDistance={1.4}
        maxDistance={4.4}
        minPolarAngle={0.32}
        maxPolarAngle={Math.PI - 0.32}
        target={[0, 0.08, 0]}
      />
    </>
  );
}

export default function ReuleauxViewer() {
  const [showTet, setShowTet] = useState(true);
  const [showSpheres, setShowSpheres] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="overflow-hidden rounded-xl bg-paper-deep shadow-[var(--shadow-border)]">
      <div className="relative aspect-[4/3] w-full touch-none sm:aspect-[16/10]">
        <Canvas
          camera={{ position: [1.55, 0.72, 1.85], fov: 36 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false }}
        >
          <Scene showTet={showTet} showSpheres={showSpheres} autoRotate={autoRotate} />
        </Canvas>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line bg-surface p-3">
        <Toggle pressed={autoRotate} onPressedChange={setAutoRotate} label="Rotate" />
        <Toggle pressed={showTet} onPressedChange={setShowTet} label="Tetrahedron" />
        <Toggle pressed={showSpheres} onPressedChange={setShowSpheres} label="Four spheres" />
        <p className="ml-auto hidden self-center font-sans text-xs text-muted sm:block">
          Drag to orbit · scroll to zoom
        </p>
      </div>
    </div>
  );
}

function Toggle({
  pressed,
  onPressedChange,
  label,
}: {
  pressed: boolean;
  onPressedChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <Button
      type="button"
      size="sm"
      variant={pressed ? "primary" : "outline"}
      aria-pressed={pressed}
      onClick={() => onPressedChange(!pressed)}
      className={cn("min-h-11")}
    >
      {label}
    </Button>
  );
}
