import { cn } from "@/lib/utils";

/**
 * Section de page : gère les espacements verticaux cohérents
 * et un fond optionnel (crème, sable, teal, dégradé).
 */
export function Section({
  children,
  className,
  id,
  tone = "cream",
  container = true,
  as = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "sand" | "teal" | "white" | "none";
  container?: boolean;
  as?: "section" | "div" | "footer";
}) {
  const tones: Record<string, string> = {
    cream: "bg-cream text-foreground",
    sand: "bg-sand text-foreground",
    white: "bg-white text-foreground",
    teal: "bg-teal text-white",
    none: "",
  };
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn("relative py-20 sm:py-24 lg:py-28", tones[tone], className)}
    >
      {container ? <div className="container-x">{children}</div> : children}
    </Tag>
  );
}

/** En-tête de section : petite étiquette + titre + intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.18em]",
            light ? "text-amber" : "text-teal"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-pretty text-lg leading-relaxed",
            light ? "text-white/80" : "text-muted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
