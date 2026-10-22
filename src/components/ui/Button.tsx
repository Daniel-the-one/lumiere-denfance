"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Variant = "primary" | "amber" | "outline" | "ghost" | "teal";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal focus-visible:ring-offset-cream disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  amber: "bg-amber text-charcoal hover:bg-amber-dark",
  teal: "bg-teal text-white hover:bg-teal-dark",
  outline:
    "border border-teal/40 text-teal hover:border-teal hover:bg-teal hover:text-white",
  ghost: "text-charcoal hover:bg-charcoal/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/** Bouton avec léger soulèvement et halo au survol. */
function useHoverMotion() {
  const reduced = usePrefersReducedMotion();
  return reduced
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { y: 0, scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 22 },
      };
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const hover = useHoverMotion();
  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
        {...hover}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.div className={cn("inline-flex", className)} {...hover}>
      <Link
        href={href}
        className={cn(base, variants[variant], sizes[size], "w-full")}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: "submit" | "button" }) {
  const hover = useHoverMotion();
  return (
    <motion.button
      className={cn(base, variants[variant], sizes[size], className)}
      {...hover}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
