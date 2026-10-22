import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur Lumière d'Enfance : dons, bénévolat, transparence, reçus fiscaux et utilisation de vos contributions.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Vos questions"
        title="Questions fréquentes"
        intro="Vous trouverez ici les réponses aux questions que l'on nous pose le plus souvent. Une autre question ? Écrivez-nous."
        image="/images/gallery-6.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
        align="center"
      />
      {/* FAQ */}

      <Section tone="cream">
        <SectionHeading
          eyebrow="Tout savoir"
          title="Ce que vous voulez savoir"
          intro="Nous faisons le maximum pour être transparents sur notre fonctionnement."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <Faq items={faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
