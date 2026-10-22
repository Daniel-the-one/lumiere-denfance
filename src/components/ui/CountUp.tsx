"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCountUp, usePrefersReducedMotion } from "@/lib/hooks";
import { fadeUp } from "@/lib/motion";

/**
 * Chiffre d'impact animé : compte de 0 à `value` au premier passage en vue.
 * `suffix` permet d'ajouter « + », « % », « € », etc.
 */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  className?: string;
}) {
  const { ref, display } = useCountUp(value, 2.2, decimals);
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className={cn("flex flex-col items-center text-center", className)}
      role="group"
      aria-label={`${label} : ${prefix}${value}${suffix}`}
    >
      <span
        ref={ref}
        className="font-display text-4xl font-extrabold tracking-tight text-teal sm:text-5xl"
      >
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-muted">{label}</span>
      {!reduced && null}
    </div>
  );
}

/** Bande de statistiques animée. */
export function StatsBand({
  stats,
  className,
}: {
  stats: { value: number; suffix?: string; label: string }[];
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4",
        className
      )}
    >
      {stats.map((s, i) => {
        const content = (
          <CountUp value={s.value} suffix={s.suffix} label={s.label} />
        );
        if (reduced) return <div key={s.label}>{content}</div>;
        return (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08 }}
          >
            {content}
          </motion.div>
        );
      })}
    </div>
  );
}
