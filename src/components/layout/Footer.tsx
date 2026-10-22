"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  XIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
  ArrowRightIcon,
  HeartIcon,
  CheckIcon,
} from "../ui/SocialIcons";
import { Logo } from "../layout/Header";

const socials = [
  { name: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { name: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { name: "YouTube", href: site.social.youtube, Icon: YoutubeIcon },
  { name: "X", href: site.social.x, Icon: XIcon },
];

/** Formulaire newsletter (maquette interface, pas de back-end). */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setEmail("");
      }}
      className="mt-4"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Votre adresse e-mail
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre e-mail"
          className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-amber focus:outline-none"
        />
        <Button type="submit" variant="amber" size="md" className="shrink-0">
          S&apos;inscrire
        </Button>
      </div>
      {sent && (
        <p className="mt-3 flex items-center gap-2 text-sm text-amber">
          <CheckIcon className="h-4 w-4" />
          Merci ! Votre inscription est enregistrée (démonstration).
        </p>
      )}
    </form>
  );
}

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-charcoal text-white/80">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Marque + newsletter */}
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-white/70">
              {site.description}
            </p>

            <div className="mt-8">
              <p className="font-display text-lg font-semibold text-white">
                Restez informé
              </p>
              <p className="mt-1 text-sm text-white/60">
                Nos actions et nouvelles, une fois par mois.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Liens */}
          <nav className="lg:col-span-3" aria-label="Liens de pied de page">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
                  L&apos;ONG
                </p>
                <ul className="mt-4 space-y-3">
                  {site.footer.organisation.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="link-underline text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
                  Agir
                </p>
                <ul className="mt-4 space-y-3">
                  {site.footer.agir.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="link-underline text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Coordonnées */}
          <div className="lg:col-span-4">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
              Nous contacter
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                <span>
                  {site.contact.address}
                  <br />
                  {site.contact.city}, {site.contact.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-amber" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="link-underline hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-amber" />
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="link-underline hover:text-white"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 shrink-0 text-amber" />
                <span>{site.contact.hours}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber hover:text-charcoal"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {year ?? ""} {site.name}. Tous droits réservés. ·{" "}
            {site.legal.registration}
          </p>
          <a
            href="/faire-un-don"
            className={cn(
              "inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-amber-dark"
            )}
          >
            <HeartIcon className="h-4 w-4" />
            Soutenir nos actions
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
