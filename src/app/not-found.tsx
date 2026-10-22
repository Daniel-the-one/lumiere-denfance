import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon, HeartIcon } from "@/components/ui/SocialIcons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-amber/10 blur-3xl"
      />

      <div className="container-x relative z-10 text-center">
        <p className="font-display text-[6rem] font-extrabold leading-none text-teal sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-2 text-balance font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
          Cette page a disparu, mais pas notre mission
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Revenez
          à l&apos;accueil pour découvrir nos actions, ou soutenez nos programmes
          dès maintenant.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="teal" size="lg">
            Retour à l&apos;accueil
          </ButtonLink>
          <ButtonLink href="/faire-un-don" variant="amber" size="lg">
            <HeartIcon className="h-5 w-5" />
            Faire un don
          </ButtonLink>
        </div>

        <nav className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">
            Pages utiles
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              { label: "Nos actions", href: "/nos-actions" },
              { label: "Impact", href: "/impact" },
              { label: "Galerie", href: "/galerie" },
              { label: "Actualités", href: "/actualites" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 text-charcoal/80 transition-colors hover:text-teal"
                >
                  {l.label}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
