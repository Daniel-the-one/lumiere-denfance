import type { Variants, Transition } from "framer-motion";

/**
 * Easing doux partagé (courbe "ease-out expo").
 * Utilisé partout pour que toutes les animations respirent pareil.
 */
export const easeSoft: Transition["ease"] = [0.22, 1, 0.36, 1];

export const transition = {
  soft: { duration: 0.7, ease: easeSoft } as Transition,
  fast: { duration: 0.35, ease: easeSoft } as Transition,
  slow: { duration: 1.1, ease: easeSoft } as Transition,
};

/** fade + légère montée — le reveal de base au scroll. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transition.soft },
};

/** fade simple. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.soft },
};

/** fade + montée depuis la gauche. */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: transition.soft },
};

/** fade + montée depuis la droite. */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: transition.soft },
};

/** léger zoom d'apparition. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: transition.soft },
};

/**
 * Conteneur qui décale l'apparition de ses enfants (stagger).
 * Le délai entre enfants est volontairement court (0.08 s) pour rester élégant.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

/** Transition de page (fondu + légère montée). */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeSoft } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: easeSoft } },
};

/** Variantes pour le menu mobile (panneau latéral). */
export const drawerPanel: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.45, ease: easeSoft } },
  exit: { x: "100%", transition: { duration: 0.35, ease: easeSoft } },
};

export const drawerItem: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + i * 0.06, duration: 0.5, ease: easeSoft },
  }),
};
