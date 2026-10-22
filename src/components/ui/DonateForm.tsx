"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { cn, formatEuro } from "@/lib/utils";
import { Button } from "./Button";
import { CheckIcon } from "./SocialIcons";

/**
 * Formulaire de don (maquette interface).
 * Pas de paiement réel : à la soumission, on affiche une confirmation.
 */
export function DonateForm() {
  const [amount, setAmount] = useState<number>(25);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [done, setDone] = useState(false);

  const finalAmount = custom ? Number(custom) : amount;

  if (done) {
    return (
      <div className="rounded-3xl border border-teal/20 bg-white p-8 text-center shadow-[var(--shadow-soft)]">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-amber text-charcoal">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-charcoal">
          Merci pour votre générosité&nbsp;!
        </h3>
        <p className="mt-2 text-muted">
          Votre don {frequency === "monthly" ? "mensuel" : "unique"} de{" "}
          <strong>{formatEuro(finalAmount || 25)}</strong> contribue directement
          à nos programmes pour les enfants.
        </p>
        <p className="mt-4 text-xs text-muted">
          (Démonstration : aucun paiement n&apos;a réellement été effectué.)
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setDone(false)}
        >
          Faire un autre don
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      {/* Fréquence */}
      <fieldset>
        <legend className="text-sm font-semibold text-charcoal">
          Je donne
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {(["monthly", "once"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={cn(
                "rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                frequency === f
                  ? "border-teal bg-teal-soft text-teal-dark"
                  : "border-charcoal/10 text-muted hover:border-teal/40"
              )}
              aria-pressed={frequency === f}
            >
              {f === "monthly" ? "Chaque mois" : "Une seule fois"}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Montants */}
      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-charcoal">
          Montant du don
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {site.donationAmounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
              className={cn(
                "rounded-2xl border-2 px-3 py-4 font-display text-lg font-bold transition-all",
                !custom && amount === a
                  ? "border-amber bg-amber/15 text-charcoal"
                  : "border-charcoal/10 text-charcoal hover:border-amber/50"
              )}
              aria-pressed={!custom && amount === a}
            >
              {a} €
            </button>
          ))}
        </div>

        <label className="mt-3 block">
          <span className="text-sm text-muted">Ou un montant personnalisé</span>
          <div className="mt-2 flex items-center rounded-2xl border border-charcoal/15 bg-white px-4 focus-within:border-teal focus-within:ring-2 focus-within:ring-teal/20">
            <input
              type="number"
              min={1}
              inputMode="numeric"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="ex. 75"
              className="w-full bg-transparent py-3 text-charcoal focus:outline-none"
            />
            <span className="font-semibold text-muted">€</span>
          </div>
        </label>
      </fieldset>

      {/* Impact estimé */}
      <p className="mt-6 rounded-2xl bg-cream px-4 py-3 text-sm text-muted">
        <strong className="text-teal">
          {formatEuro(finalAmount || 25)}
        </strong>{" "}
        {frequency === "monthly"
          ? "chaque mois peut fournir des repas chauds et du matériel scolaire à un enfant."
          : "peut financer des fournitures scolaires pour un enfant pendant un trimestre."}
      </p>

      {/* Coordonnées */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-charcoal">
            Prénom et nom
          </span>
          <input
            required
            placeholder="Votre nom"
            className="w-full rounded-2xl border border-charcoal/15 bg-white px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-charcoal">
            E-mail
          </span>
          <input
            type="email"
            required
            placeholder="vous@exemple.com"
            className="w-full rounded-2xl border border-charcoal/15 bg-white px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </label>
      </div>

      <Button type="submit" variant="amber" size="lg" className="mt-6 w-full">
        Je fais un don de {formatEuro(finalAmount || 25)}
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        Paiement sécurisé · Don ouvrant droit à réduction d&apos;impôt (maquette)
      </p>
    </form>
  );
}
