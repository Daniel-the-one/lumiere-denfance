"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { usePrefersReducedMotion, useCountUp } from "@/lib/hooks";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { ButtonLink } from "../ui/Button";
import { HeartIcon, ArrowRightIcon } from "../ui/SocialIcons";

/** Bande de statistiques d'impact (compteurs animés) sur fond teal. */
export function StatsStrip({
  stats,
}: {
  stats: { value: number; suffix?: string; label: string }[];
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="rounded-[2rem] bg-charcoal px-6 py-12 sm:px-12 sm:py-14">
      <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} reduced={reduced} />
        ))}
      </div>
    </div>
  );
}

function StatItem({
  value,
  suffix,
  label,
  reduced,
}: {
  value: number;
  suffix?: string;
  label: string;
  reduced: boolean;
}) {
  const { ref, display } = useCountUp(value, 2.2, 0);
  return (
    <div className="flex flex-col items-center text-center">
      <span
        ref={ref}
        className="font-display text-4xl font-extrabold text-white sm:text-5xl"
      >
        {display}
        {suffix}
      </span>
      <span className="mt-2 text-sm text-white/65">{label}</span>
      {!reduced && null}
    </div>
  );
}

/** Section d'appel à l'action (don) — bannière avec image et overlay. */
export function CTASection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-children.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/75 to-teal/70" />
      </div>

      <div className="container-x relative z-10 py-24 sm:py-28">
        <motion.div
          className="max-w-2xl"
          variants={reduced ? undefined : staggerContainer}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/20 px-4 py-2 text-sm font-semibold text-amber"
          >
            <HeartIcon className="h-4 w-4" />
            Votre geste change tout
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-balance font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            25 € peuvent offrir un mois de repas chauds à un enfant.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-pretty text-lg leading-relaxed text-white/85"
          >
            Chaque don, quelle que soit sa taille, contribue directement à
            scolariser, nourrir et protéger un enfant. Ensemble, faisons briller
            leur avenir.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <ButtonLink href="/faire-un-don" variant="amber" size="lg">
              <HeartIcon className="h-5 w-5" />
              Faire un don
            </ButtonLink>
            <Link
              href="/devenir-benevole"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Devenir bénévole
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-sm text-white/60">
            {site.legal.association} · {site.legal.registration}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
