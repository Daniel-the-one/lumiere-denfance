"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScrolled, useLockScroll } from "@/lib/hooks";
import { Reveal } from "../ui/Reveal";

/**
 * Logo « Lumière d'Enfance » �?" un petit soleil stylisé + le nom.
 * Centralisé ici pour être réutilisé en header et footer.
 */
export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3", className)}
      aria-label={`${site.name} �?" accueil`}
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center">
        <svg
          viewBox="0 0 48 48"
          className="h-11 w-11"
          aria-hidden="true"
          fill="none"
        >
          <circle cx="24" cy="24" r="9" fill={light ? "#F4A259" : "#0E7C7B"} />
          <g
            stroke={light ? "#F4A259" : "#F4A259"}
            strokeWidth="2.6"
            strokeLinecap="round"
          >
            <line x1="24" y1="3" x2="24" y2="10" />
            <line x1="24" y1="38" x2="24" y2="45" />
            <line x1="3" y1="24" x2="10" y2="24" />
            <line x1="38" y1="24" x2="45" y2="24" />
            <line x1="9" y1="9" x2="14" y2="14" />
            <line x1="34" y1="34" x2="39" y2="39" />
            <line x1="39" y1="9" x2="34" y2="14" />
            <line x1="14" y1="34" x2="9" y2="39" />
          </g>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            light ? "text-white" : "text-charcoal"
          )}
        >
          Lumière d&apos;Enfance
        </span>
        <span
          className={cn(
            "mt-1 text-[11px] font-medium tracking-wide",
            light ? "text-white/70" : "text-muted"
          )}
        >
          {site.slogan}
        </span>
      </span>
    </Link>
  );
}

/** Icône burger animée (ouvre/ferme). */
function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6">
      <motion.span
        className="absolute left-0 block h-0.5 w-6 rounded-full bg-current"
        animate={open ? { top: 9, rotate: 45 } : { top: 3, rotate: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-current"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 block h-0.5 w-6 rounded-full bg-current"
        animate={open ? { top: 9, rotate: -45 } : { top: 17, rotate: 0 }}
        transition={{ duration: 0.3 }}
      />
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(28);
  const pathname = usePathname();
  useLockScroll(open);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/80 py-2 shadow-[0_8px_30px_-18px_rgba(43,33,24,0.35)] backdrop-blur-xl"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <motion.div
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left"
          >
            <Logo light={!scrolled && pathname === "/"} />
          </motion.div>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                    scrolled || pathname !== "/"
                      ? active
                        ? "text-teal"
                        : "text-charcoal/75 hover:text-teal"
                      : active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-amber"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/faire-un-don"
              className="hidden rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-charcoal shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-dark sm:inline-block"
            >
              Faire un don
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden",
                scrolled || pathname !== "/"
                  ? "text-charcoal hover:bg-charcoal/5"
                  : "text-white hover:bg-white/10"
              )}
            >
              <BurgerIcon open={false} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/**
 * Menu mobile : panneau latéral qui glisse depuis la droite,
 * items décalés (stagger), fond cliquable pour fermer.
 */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Fond */}
      <motion.div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Panneau */}
      <motion.aside
        className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream px-6 pb-8 pt-5 shadow-2xl"
        variants={{
          hidden: { x: "100%" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="grid h-11 w-11 place-items-center rounded-full text-charcoal hover:bg-charcoal/5"
          >
            <BurgerIcon open />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-1">
          {site.nav.map((item, i) => (
            <Reveal key={item.href} delay={0.1 + i * 0.05}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-2xl px-4 py-3.5 font-display text-xl font-semibold text-charcoal transition-colors hover:bg-teal-soft hover:text-teal-dark"
              >
                {item.label}
              </Link>
            </Reveal>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <Link
            href="/faire-un-don"
            onClick={onClose}
            className="rounded-full bg-amber px-6 py-4 text-center font-semibold text-charcoal transition-colors hover:bg-amber-dark"
          >
            Faire un don
          </Link>
          <Link
            href="/devenir-benevole"
            onClick={onClose}
            className="rounded-full border border-teal/30 px-6 py-4 text-center font-semibold text-teal transition-colors hover:bg-teal hover:text-white"
          >
            Devenir bénévole
          </Link>
          <p className="mt-2 text-center text-sm text-muted">
            {site.contact.phone}
          </p>
        </div>
      </motion.aside>
    </div>
  );
}
