"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barre de progression de lecture, en haut de page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-amber"
      aria-hidden="true"
    />
  );
}
