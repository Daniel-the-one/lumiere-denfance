import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { StatsStrip } from "@/components/sections/CTASection";
import { CTASection } from "@/components/sections/CTASection";
import { CountUp } from "@/components/ui/CountUp";
import { impactStats, impactDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notre impact",
  description:
    "Chiffres clés et résultats des programmes de Lumière d'Enfance : enfants scolarisés, consultations médicales, enfants hébergés, jeunes formés.",
};

const icons: Record<string, string> = {
  book: "📚",
  health: "❤️",
  home: "🏠",
  spark: "🌱",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos résultats"
        title="L'impact de vos dons"
        intro="La transparence est au cœur de notre engagement. Voici, en chiffres, ce que votre soutien permet de réaliser."
        image="/images/gallery-5.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Impact" }]}
        align="center"
      />

      {/* Chiffres clés */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Chiffres clés"
          title="Des résultats concrets, mesurés sur le terrain"
          intro="Ces chiffres sont issus de notre dernier rapport d'activité annuel."
        />
        <Reveal delay={0.15} className="mt-16">
          <StatsStrip stats={impactStats} />
        </Reveal>
      </Section>

      {/* Détail par programme */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Par programme"
          title="L'impact, domaine par domaine"
        />
        <StaggerGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2">
          {impactDetails.map((d) => (
            <StaggerItem as="li" key={d.title}>
              <div className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-8 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <span className="text-3xl" aria-hidden="true">
                  {icons[d.icon]}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-charcoal">
                  {d.title}
                </h3>
                <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted">
                  {d.text}
                </p>
                <div className="mt-6 border-t border-charcoal/8 pt-5">
                  <CountUp
                    value={d.value}
                    suffix={d.suffix}
                    label={d.label}
                    className="items-start text-left"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Répartition des dons */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Transparence"
              title="Où va votre argent ?"
              intro="Nous nous engageons à utiliser vos dons de la manière la plus efficace et responsable possible."
            />
            <ul className="mt-8 space-y-5">
              {[
                { label: "Programmes de terrain", value: 92, color: "bg-teal" },
                { label: "Frais de gestion", value: 5, color: "bg-amber" },
                { label: "Communication & collecte", value: 3, color: "bg-coral" },
              ].map((r) => (
                <li key={r.label}>
                  <div className="flex items-center justify-between text-sm font-semibold text-charcoal">
                    <span>{r.label}</span>
                    <span>{r.value} %</span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-sand">
                    <div
                      className={`h-full rounded-full ${r.color}`}
                      style={{ width: `${r.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
              <Image
                src="/images/gallery-8.jpg"
                alt="Distribution de fournitures et d'aide aux familles."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
