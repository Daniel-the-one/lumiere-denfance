import Hero from "@/components/sections/Hero";
import { MissionBlock } from "@/components/sections/MissionBlock";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { CTASection } from "@/components/sections/CTASection";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatsStrip } from "@/components/sections/CTASection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { impactStats } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/SocialIcons";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Introduction + chiffres clés */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Bienvenue"
            title="Ensemble, faisons briller l'avenir des enfants"
            intro="Lumière d'Enfance accompagne les enfants démunis par l'éducation, la santé, la protection et l'insertion. Découvrez notre mission et l'impact de vos dons."
          />
        </Reveal>
        <Reveal delay={0.15} className="mt-16">
          <StatsStrip stats={impactStats} />
        </Reveal>
      </Section>

      <MissionBlock />
      <ProjectsPreview />

      {/* Bloc « comment aider » */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Comment aider"
              title="Trois façons de faire la différence, dès aujourd'hui"
              intro="Quel que soit votre temps ou votre budget, il existe une manière de contribuer à notre mission."
            />
            <div className="mt-8">
              <ButtonLink href="/faire-un-don" variant="amber" size="lg">
                Faire un don maintenant
                <ArrowRightIcon className="h-5 w-5" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid gap-4">
            {[
              {
                t: "Je fais un don",
                d: "Un geste ponctuel ou régulier qui finance directement nos programmes de terrain.",
                href: "/faire-un-don",
              },
              {
                t: "Je deviens bénévole",
                d: "Donnez de votre temps et de vos talents, selon vos disponibilités.",
                href: "/devenir-benevole",
              },
              {
                t: "Je relaie notre cause",
                d: "Parlez-en autour de vous et partagez nos actions sur vos réseaux.",
                href: "/actualites",
              },
            ].map((c) => (
              <a
                key={c.t}
                href={c.href}
                className="group flex items-start justify-between gap-4 rounded-3xl border border-charcoal/10 bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[var(--shadow-lift)]"
              >
                <span>
                  <span className="block font-display text-lg font-bold text-charcoal">
                    {c.t}
                  </span>
                  <span className="mt-1 block text-pretty text-muted">
                    {c.d}
                  </span>
                </span>
                <ArrowRightIcon className="mt-1 h-5 w-5 shrink-0 text-teal transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ))}
          </Reveal>
        </div>
      </Section>

      <Testimonials />
      <CTASection />
    </>
  );
}
