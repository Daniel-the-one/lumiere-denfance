import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Gallery, type GalleryItem } from "@/components/ui/Gallery";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Plongez dans le quotidien de nos actions : photos des programmes éducatifs, de santé, de protection et d'insertion de Lumière d'Enfance.",
};

const captions = [
  "Retour à l'école",
  "Atelier de lecture",
  "Activités en groupe",
  "Consultation médicale",
  "Distribution de fournitures",
  "Moment de partage",
  "Journée à l'école",
  "Atelier de formation",
  "Sensibilisation santé",
  "Le foyer d'accueil",
  "Insertion professionnelle",
  "Nos bénévoles motivés",
];

const galleryItems: GalleryItem[] = captions.map((caption, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  alt: caption,
  caption,
}));

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="En images"
        title="Notre galerie"
        intro="Des visages, des sourires et des moments qui racontent mieux que des mots l'impact de vos dons."
        image="/images/gallery-7.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Galerie" }]}
        align="center"
      />

      <Section tone="cream">
        <SectionHeading
          eyebrow="Instants partagés"
          title="La lumière en images"
          intro="Cliquez sur une photo pour l'agrandir. Utilisez les flèches du clavier pour naviguer."
        />
        <div className="mt-14">
          <Gallery items={galleryItems} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
