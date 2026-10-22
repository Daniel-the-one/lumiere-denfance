import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { DonateForm } from "@/components/ui/DonateForm";
import { site } from "@/config/site";
import { CheckIcon } from "@/components/ui/SocialIcons";
import { formatEuro } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez Lumière d'Enfance : don ponctuel ou mensuel. Chaque euro finance l'éducation, la santé et la protection des enfants démunis.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Agir maintenant"
        title="Votre don change des vies"
        intro="Parce que chaque geste compte, choisissez le montant et la fréquence qui vous correspondent. 92 % de votre don vont directement aux enfants."
        image="/images/cta-children.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Faire un don" }]}
      />

      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Formulaire */}
          <Reveal>
            <div className="rounded-[2rem] bg-white p-7 shadow-[var(--shadow-lift)] ring-1 ring-charcoal/5 sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-charcoal">
                Je fais un don
              </h2>
              <p className="mt-2 text-pretty text-muted">
                Tous les champs marqués d&apos;un astérisque sont obligatoires.
              </p>
              <div className="mt-8">
                <DonateForm />
              </div>
            </div>
          </Reveal>

          {/* Argumentaire */}
          <Reveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Votre impact"
                  title="Ce que permet votre générosité"
                />
                <ul className="mt-6 space-y-4">
                  {[
                    "10 € fournissent des fournitures scolaires à un enfant pour un trimestre.",
                    "25 € financent une consultation médicale et un suivi nutritionnel.",
                    "50 € assurent un mois d'accueil dans l'un de nos foyers.",
                    "100 € permettent la formation professionnelle d'un jeune pendant un mois.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="text-pretty leading-relaxed text-charcoal/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-charcoal p-7 text-white">
                <p className="font-display text-lg font-bold">
                  Un don mensuel, un impact durable
                </p>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-white/75">
                  Le don régulier nous permet de planifier nos programmes sur le
                  long terme et d&apos;accompagner chaque enfant jusqu&apos;à
                  l&apos;autonomie. Un don de{" "}
                  <strong className="text-amber">{formatEuro(20)}</strong> par mois
                  scolarise un enfant pendant un an.
                </p>
              </div>

              <p className="text-sm leading-relaxed text-muted">
                Don sécurisé. Reçu fiscal envoyé par e-mail. Vous pouvez modifier
                ou interrompre votre don à tout moment en nous écrivant à{" "}
                <a href={`mailto:${site.contact.email}`} className="font-semibold text-teal underline-offset-2 hover:underline">
                  {site.contact.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
