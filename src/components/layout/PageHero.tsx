"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { easeSoft } from "@/lib/motion";

/**
 * Bannière d'en-tête des pages intérieures :
 * image de fond + overlay + fil d'Ariane + titre animés.
 */
export function PageHero({
  title,
  intro,
  image = "/images/cta-children.jpg",
  breadcrumb,
  eyebrow,
  align = "left",
}: {
  title: string;
  intro?: string;
  image?: string;
  breadcrumb?: { label: string; href?: string }[];
  eyebrow?: string;
  align?: "left" | "center";
}) {
  const reduced = usePrefersReducedMotion();

  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: easeSoft },
    }),
  };

  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-charcoal pb-16 pt-32 sm:pb-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="container-x relative z-10">
        <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
          {breadcrumb && (
            <motion.nav
              custom={0}
              variants={item}
              initial={reduced ? false : "hidden"}
              animate="visible"
              aria-label="Fil d'Ariane"
              className={`mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70 ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              {breadcrumb.map((b, i) => (
                <span key={b.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {b.href ? (
                    <Link href={b.href} className="hover:text-white">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {eyebrow && (
            <motion.p
              custom={1}
              variants={item}
              initial={reduced ? false : "hidden"}
              animate="visible"
              className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            custom={1}
            variants={item}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="text-balance font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {intro && (
            <motion.p
              custom={2}
              variants={item}
              initial={reduced ? false : "hidden"}
              animate="visible"
              className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
