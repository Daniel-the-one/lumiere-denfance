import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { site } from "@/config/site";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Lumière d'Enfance : adresse, téléphone, e-mail et formulaire. Nous répondons à toutes vos questions sous 48 h.",
};

const infos = [
  {
    icon: MailIcon,
    label: "E-mail",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Téléphone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: PinIcon,
    label: "Adresse",
    value: site.contact.address,
  },
  {
    icon: ClockIcon,
    label: "Horaires",
    value: site.contact.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Nous écrire"
        title="Contactez-nous"
        intro="Une question, une envie de vous engager ou un partenariat à proposer ? Nous vous répondons sous 48 h."
        image="/images/gallery-4.jpg"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Coordonnées */}
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Nos coordonnées"
              title="Parlons-en ensemble"
            />
            <StaggerList />
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={0.15}>
            <div className="rounded-[2rem] bg-white p-7 shadow-[var(--shadow-lift)] ring-1 ring-charcoal/5 sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-charcoal">
                Envoyer un message
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function StaggerList() {
  return (
    <ul className="mt-8 space-y-4">
      {infos.map((info) => {
        const Icon = info.icon;
        const content = (
          <>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal">
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wide text-muted">
                {info.label}
              </span>
              <span className="mt-0.5 block font-medium text-charcoal">
                {info.value}
              </span>
            </span>
          </>
        );
        return (
          <li key={info.label}>
            {info.href ? (
              <a
                href={info.href}
                className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                {content}
              </a>
            ) : (
              <div className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
