"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerContainerSlow } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Reveal au scroll : fade + léger slide.
 * `once` évite que l'élément disparaisse quand on remonte.
 * Respecte prefers-reduced-motion (rendu statique si demandé).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  variants?: typeof fadeUp;
}) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Conteneur qui décale l'apparition de ses enfants (stagger). */
export function StaggerGroup({
  children,
  className,
  slow = false,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
  as?: "div" | "ul";
}) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={slow ? staggerContainerSlow : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/** Enfant d'un StaggerGroup. */
export function StaggerItem({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  variants?: typeof fadeUp;
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
