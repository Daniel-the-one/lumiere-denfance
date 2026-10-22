"use client";

import { Section } from "../ui/Section";
import { StaggerGroup, StaggerItem } from "../ui/Reveal";
import { Badge } from "../ui/Card";
import { ButtonLink } from "../ui/Button";
import { ArrowRightIcon } from "../ui/SocialIcons";

const pillars = [
  {
    title: "Éducation",
    text: "Scolarisation, fournitures et cantine pour que chaque enfant puisse apprendre sereinement.",
    icon: "📚",
  },
  {
    title: "Santé",
    text: "Consultations gratuites, vaccination et sensibilisation à la nutrition.",
    icon: "❤️",
  },
  {
    title: "Protection",
    text: "Foyers d'accueil sûrs et accompagnement pour les enfants sans famille.",
    icon: "🏠",
  },
  {
    title: "Insertion",
    text: "Formations professionnelles et accompagnement vers l'emploi des jeunes.",
    icon: "🌱",
  },
];

/** Présentation de l'association + piliers d'action (page d'accueil). */
export function MissionBlock() {
  return (
    <Section tone="cream">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-mission.jpg"
              alt="Des bénévoles accompagnent des enfants dans leurs activités."
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-3xl bg-teal px-7 py-6 text-white shadow-[var(--shadow-lift)] sm:block">
            <p className="font-display text-4xl font-extrabold">15 ans</p>
            <p className="mt-1 text-sm text-white/80">d&apos;engagement</p>
          </div>
        </div>

        <div>
          <Badge>Notre mission</Badge>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
            Agir pour que chaque enfant puisse grandir dignement
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            Depuis 2009, Lumière d&apos;Enfance accompagne les enfants les plus
            vulnérables. Parce qu&apos;un enfant qui mange à sa faim, qui est
            soigné et qui va à l&apos;école a toutes les chances de s&apos;épanouir,
            nous agissons sur ces trois besoins fondamentaux — et bien plus.
          </p>

          <StaggerGroup as="ul" className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <StaggerItem as="li" key={p.title}>
                <div className="flex h-full gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5">
                  <span className="text-2xl" aria-hidden="true">
                    {p.icon}
                  </span>
                  <span>
                    <span className="block font-semibold text-charcoal">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {p.text}
                    </span>
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-9">
            <ButtonLink href="/a-propos" variant="outline">
              Découvrir l&apos;association
              <ArrowRightIcon className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
