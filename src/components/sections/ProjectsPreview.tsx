"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { StaggerGroup, StaggerItem } from "../ui/Reveal";
import { Badge } from "../ui/Card";
import { ArrowRightIcon } from "../ui/SocialIcons";

/** Aperçu des projets sur la page d'accueil (3 premières cartes). */
export function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <Section tone="sand">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Nos actions"
          title="Des programmes qui changent des vies"
          intro="Nous agissons sur quatre leviers complémentaires : l'éducation, la santé, la protection et l'insertion professionnelle."
          className="max-w-xl"
        />
        <Link
          href="/nos-actions"
          className="group inline-flex shrink-0 items-center gap-2 font-semibold text-teal hover:text-teal-dark"
        >
          Voir tous nos projets
          <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <StaggerGroup as="ul" className="mt-14 grid gap-7 md:grid-cols-3">
        {featured.map((p) => (
          <StaggerItem as="li" key={p.slug}>
            <Link href={`/nos-actions#${p.slug}`} className="group block h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4">
                    <Badge className="bg-white/90 backdrop-blur-sm">
                      {p.tag}
                    </Badge>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted">
                    {p.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-teal">
                    En savoir plus
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
