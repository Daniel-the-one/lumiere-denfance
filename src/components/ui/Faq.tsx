"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { easeSoft } from "@/lib/motion";
import { ChevronDownIcon } from "./SocialIcons";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

/** Accordéon FAQ accessible, animé, une seule réponse ouverte à la fois. */
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = usePrefersReducedMotion();

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.q}
            className={cn(
              "overflow-hidden rounded-3xl bg-white ring-1 transition-shadow duration-300",
              isOpen ? "shadow-[var(--shadow-lift)] ring-teal/20" : "shadow-[var(--shadow-soft)] ring-charcoal/5",
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg font-bold text-charcoal">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-soft text-teal transition-transform duration-300",
                    isOpen && "rotate-180 bg-teal text-white",
                  )}
                >
                  <ChevronDownIcon className="h-5 w-5" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: easeSoft }}
                >
                  <p className="px-6 pb-6 text-pretty leading-relaxed text-muted">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
