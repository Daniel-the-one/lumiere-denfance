"use client";

import Image from "next/image";
import { testimonials } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { StaggerGroup, StaggerItem } from "../ui/Reveal";
import { QuoteIcon } from "../ui/SocialIcons";

/** Témoignages : cartes en stagger avec avatars. */
export function Testimonials() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Témoignages"
        title="Des vies qui changent"
        intro="Derrière chaque chiffre, il y a une histoire. Voici quelques voix de celles et ceux qui vivent nos actions de l'intérieur."
      />

      <StaggerGroup
        as="ul"
        slow
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <StaggerItem as="li" key={t.name}>
            <figure className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
              <QuoteIcon className="h-8 w-8 text-amber" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-charcoal/85">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-charcoal/8 pt-5">
                <span className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={`Portrait de ${t.name}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block font-semibold text-charcoal">
                    {t.name}
                  </span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
