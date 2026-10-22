import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { aboutContent, team } from "@/lib/content";
import { ArrowRightIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la mission, la vision, les valeurs et l'équipe de Lumière d'Enfance, aux côtés des enfants démunis depuis 2009.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Une ONG au service de l'enfance"
        intro="Depuis 2009, nous accompagnons les enfants les plus vulnérables pour leur offrir une chance de grandir dignement."
        image="/images/about-mission.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
      />

      {/* Mission & vision */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
              <Image
                src="/images/gallery-3.jpg"
                alt="Enfants réunis lors d'une activité organisée par l'association."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Badge>Notre raison d&apos;être</Badge>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              Une mission claire, une vision ambitieuse
            </h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5">
                <h3 className="font-display text-lg font-bold text-teal">
                  Notre mission
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted">
                  {aboutContent.mission}
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5">
                <h3 className="font-display text-lg font-bold text-amber-dark">
                  Notre vision
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted">
                  {aboutContent.vision}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Valeurs */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Nos valeurs"
          title="Ce qui guide chacune de nos actions"
          intro="Quatre principes non négociables, au cœur de notre engagement quotidien."
        />
        <StaggerGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.values.map((v) => (
            <StaggerItem as="li" key={v.title}>
              <div className="h-full rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <h3 className="font-display text-xl font-bold text-charcoal">
                  {v.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">
                  {v.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Histoire */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Notre histoire"
          title="Quinze années d'engagement"
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative space-y-8 border-l-2 border-teal/20 pl-8">
            {aboutContent.timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.05} className="relative">
                <span className="absolute -left-[2.6rem] grid h-8 w-8 place-items-center rounded-full bg-teal text-xs font-bold text-white">
                  ●
                </span>
                <span className="font-display text-2xl font-extrabold text-amber-dark">
                  {t.year}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-charcoal">
                  {t.title}
                </h3>
                <p className="mt-1 text-pretty leading-relaxed text-muted">
                  {t.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Équipe */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Notre équipe"
          title="Des visages derrière chaque action"
          intro="Une équipe engagée, épaulée par des dizaines de bénévoles sur le terrain."
        />
        <StaggerGroup as="ul" className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <StaggerItem as="li" key={m.name}>
              <figure className="group overflow-hidden rounded-[var(--radius-card)] bg-cream shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={`Portrait de ${m.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <span className="block font-display text-lg font-bold text-charcoal">
                    {m.name}
                  </span>
                  <span className="block text-sm font-semibold text-teal">
                    {m.role}
                  </span>
                  <span className="mt-2 block text-pretty text-sm leading-relaxed text-muted">
                    {m.bio}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* CTA */}
      <Section tone="teal">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
            Rejoignez notre mission
          </h2>
          <p className="mt-4 text-pretty text-lg text-white/80">
            Que ce soit par un don ou du temps donné, chaque contribution nous
            rapproche d&apos;un monde plus juste pour les enfants.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/faire-un-don" variant="amber" size="lg">
              Faire un don
            </ButtonLink>
            <ButtonLink href="/devenir-benevole" variant="outline" size="lg" className="!border-white/40 !text-white hover:!bg-white hover:!text-teal">
              Devenir bénévole
              <ArrowRightIcon className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
