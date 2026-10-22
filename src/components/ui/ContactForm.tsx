"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Field, FormSuccess } from "./FormFields";

/** Formulaire de contact (maquette interface). */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <FormSuccess
        title="Message envoyé !"
        message="Merci de nous avoir écrit. Notre équipe vous répondra dans les plus brefs délais (démonstration)."
      />
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Prénom et nom" name="name" required placeholder="Votre nom" />
        <Field
          label="E-mail"
          name="email"
          type="email"
          required
          placeholder="vous@exemple.com"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Téléphone" name="phone" type="tel" placeholder="+229 ..." />
        <Field label="Objet" name="subject" placeholder="Don, bénévolat, partenariat…" />
      </div>
      <Field
        label="Votre message"
        name="message"
        rows={5}
        required
        placeholder="Écrivez-nous…"
      />
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Envoyer le message
      </Button>
      <p className="text-xs text-muted">
        (Démonstration : le message n&apos;est pas réellement envoyé.)
      </p>
    </form>
  );
}

/** Formulaire de candidature bénévole (maquette interface). */
export function VolunteerForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <FormSuccess
        title="Merci pour votre engagement !"
        message="Votre candidature est bien reçue. Nous vous contacterons pour un premier échange (démonstration)."
      />
    );
  }

  const missions = [
    "Soutien scolaire",
    "Distribution alimentaire",
    "Communication / réseaux sociaux",
    "Collecte de fonds / événements",
    "Santé & sensibilisation",
    "Photographie / vidéo",
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Prénom et nom" name="name" required placeholder="Votre nom" />
        <Field
          label="E-mail"
          name="email"
          type="email"
          required
          placeholder="vous@exemple.com"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Téléphone" name="phone" type="tel" placeholder="+229 ..." />
        <Field label="Ville / quartier" name="city" placeholder="Cotonou, Fidjrossè…" />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-charcoal">
          Missions qui vous intéressent
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {missions.map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-charcoal/10 px-4 py-3 text-sm transition-colors hover:border-teal/40"
            >
              <input
                type="checkbox"
                name="missions"
                value={m}
                className="h-4 w-4 accent-teal"
              />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        label="Disponibilité"
        name="availability"
        placeholder="Ex. week-ends, 4h par semaine…"
      />

      <Field
        label="Pourquoi souhaitez-vous devenir bénévole ?"
        name="motivation"
        rows={4}
        placeholder="Partagez votre motivation…"
      />

      <Button type="submit" variant="teal" size="lg" className="w-full sm:w-auto">
        Envoyer ma candidature
      </Button>
      <p className="text-xs text-muted">
        (Démonstration : la candidature n&apos;est pas réellement enregistrée.)
      </p>
    </form>
  );
}
