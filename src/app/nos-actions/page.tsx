import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Nos actions",
  description:
    "Découvrez les programmes de Lumière d'Enfance : éducation, santé, protection et insertion professionnelle des enfants démunis.",
};

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos programmes"
        title="Nos actions sur le terrain"
        intro="Quatre programmes complémentaires pour répondre aux besoins essentiels des enfants et les accompagner jusqu'à l'autonomie."
        image="/images/project-education.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Nos actions" }]}
      />

      <Section tone="cream">
        <SectionHeading
          eyebrow="Ce que nous faisons"
          title="Des programmes pensés pour durer"
          intro="Chaque action est menée main dans la main avec les familles et les acteurs locaux, pour un impact réel et durable."
        />

        <div className="mt-16 space-y-20">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <article
                  id={p.slug}
                  className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
                >
                  <div className={cn(reversed && "lg:order-2")}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={cn(reversed && "lg:order-1")}>
                    <Badge>{p.tag}</Badge>
                    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-charcoal">
                      {p.title}
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-muted">
                      {p.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {p.objectives.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-soft text-teal">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-charcoal/85">{o}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 grid grid-cols-3 gap-4 rounded-3xl bg-cream p-5">
                      {p.results.map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="font-display text-2xl font-extrabold text-teal">
                            {r.value}
                          </p>
                          <p className="mt-1 text-xs text-muted">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
