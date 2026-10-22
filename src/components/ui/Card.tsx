"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Carte réutilisable avec effet de survol soigné :
 * léger soulèvement + ombre colorée. Les enfants « CardImage »
 * zooment au survol du parent (via le groupe `group`).
 */
export function Card({
  children,
  className,
  hoverLift = true,
  as = "article",
}: {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
  as?: "article" | "div" | "li";
}) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500",
        hoverLift && "hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/** Image de carte : ratio stable, zoom doux au survol, overlay optionnel. */
export function CardImage({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  overlay = false,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", ratio, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
      )}
    </div>
  );
}

/** Étiquette/pastille de catégorie. */
export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-dark",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Carte animée (apparition au scroll). */
export function MotionCard({
  children,
  className,
  hoverLift = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <Card className={className}>{children}</Card>;
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5",
        hoverLift &&
          "transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
        className
      )}
    >
      {children}
    </motion.article>
  );
}
