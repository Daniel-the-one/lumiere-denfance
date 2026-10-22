import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { VolunteerForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Devenir bénévole",
  description:
    "Rejoignez l'équipe de bénévoles de Lumière d'Enfance : donnez de votre temps et de vos compétences au service des enfants.",
};

const missions = [
  {
    title: "Soutien scolaire",
    text: "Accompagnez des enfants dans leurs devoirs, 2 h par semaine.",
    tag: "Éducation",
  },
  {
    title: "Accompagnement santé",
    text: "Participez à nos campagnes de sensibilisation et de dépistage.",
    tag: "Santé",
  },
  {
    title: "Logistique & événements",
    text: "Aidez à organiser nos collectes et journées portes ouvertes.",
    tag: "Terrain",
  },
  {
    title: "Compétences pro bono",
    text: "Mettez vos talents (web, graphisme, comptabilité) au service de la cause.",
    tag: "Pro bono",
  },
  {
    title: "Mentorat des jeunes",
    text: "Accompagnez un jeune dans son orientation et son insertion.",
    tag: "Insertion",
  },
  {
    title: "Traduction & communication",
    text: "Relayez nos messages et traduisez nos supports.",
    tag: "Communication",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Rejoignez-nous"
        title="Devenez bénévole"
        intro="Le temps que vous offrez a une valeur inestimable. Choisissez la mission qui vous ressemble et engagez-vous à nos côtés."
        image="/images/gallery-12.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Devenir bénévole" }]}
      />

      <Section tone="cream">
        <SectionHeading
          eyebrow="Nos besoins"
          title="Des façons concrètes de vous engager"
          intro="Quelle que soit votre disponibilité ou vos compétences, il y a une place pour vous."
        />
        <StaggerGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((m) => (
            <StaggerItem as="li" key={m.title}>
              <div className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-dark">
                  {m.tag}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-charcoal">
                  {m.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">
                  {m.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery-11.jpg"
                alt="Bénévoles de l'association en action sur le terrain."
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="font-display text-2xl font-extrabold text-charcoal">
                Comment ça se passe ?
              </h2>
              <ol className="space-y-4">
                {[
                  "Vous remplissez le formulaire ci-contre en précisant vos disponibilités.",
                  "Un membre de l'équipe vous rappelle sous 48 h pour faire connaissance.",
                  "Vous suivez une courte session d'intégration à nos valeurs et méthodes.",
                  "Vous démarrez votre mission accompagné(e) par un référent.",
                ].map((s, i) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-pretty leading-relaxed text-muted">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[2rem] bg-white p-7 shadow-[var(--shadow-lift)] ring-1 ring-charcoal/5 sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-charcoal">
                Formulaire de candidature
              </h2>
              <p className="mt-2 text-pretty text-muted">
                Dites-nous comment vous souhaitez vous engager.
              </p>
              <div className="mt-8">
                <VolunteerForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
