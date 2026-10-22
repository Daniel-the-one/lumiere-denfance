import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Suivez les actualités et les temps forts de Lumière d'Enfance : rentrée scolaire, campagnes de santé, ouvertures de foyers et réussites des jeunes.",
};

export default function NewsPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Le journal"
        title="Actualités & temps forts"
        intro="Nos dernières nouvelles du terrain et les réussites de celles et ceux que vous soutenez."
        image="/images/news-rentree.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Actualités" }]}
      />

      <Section tone="cream">
        {/* Article à la une */}
        <Link
          href={`/actualites/${featured.slug}`}
          className="group block overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:shadow-[var(--shadow-lift)]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-3">
                <Badge>{featured.category}</Badge>
                <span className="text-sm text-muted">
                  {formatDate(featured.date)}
                </span>
              </div>
              <h2 className="mt-4 text-balance font-display text-2xl font-extrabold leading-tight text-charcoal sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-teal">
                Lire l&apos;article
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Autres articles */}
        <SectionHeading
          className="mt-20"
          eyebrow="Toutes les actualités"
          title="À lire également"
        />
        <StaggerGroup as="ul" className="mt-12 grid gap-7 md:grid-cols-3">
          {rest.map((p) => (
            <StaggerItem as="li" key={p.slug}>
              <Link href={`/actualites/${p.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <Badge>{p.category}</Badge>
                      <span className="text-xs text-muted">
                        {formatDate(p.date)}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-charcoal">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                      Lire la suite
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CTASection />
    </>
  );
}
