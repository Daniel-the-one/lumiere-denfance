"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useScrolled } from "@/lib/hooks";
import { ArrowRightIcon } from "./SocialIcons";

/** Bouton « remonter en haut », apparaît après un défilement. */
export default function BackToTop() {
  const visible = useScrolled(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Remonter en haut"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-teal text-white shadow-[var(--shadow-lift)] transition-colors hover:bg-teal-dark"
        >
          <ArrowRightIcon className="h-5 w-5 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
