import { lazy, Suspense, useEffect, useState } from "react";

const Viewer = lazy(() => import("./reuleaux-viewer"));

export function ReuleauxCanvas() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) return <ViewerFallback />;

  return (
    <Suspense fallback={<ViewerFallback />}>
      <Viewer />
    </Suspense>
  );
}

function ViewerFallback() {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-paper-deep sm:aspect-[16/10]">
      <p className="font-display text-lg italic text-muted">Preparing the solid…</p>
    </div>
  );
}
