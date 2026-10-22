"use client";

import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Wrapper de défilement fluide (Lenis).
 * Désactivé automatiquement si l'utilisateur préfère les animations réduites.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = usePrefersReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
