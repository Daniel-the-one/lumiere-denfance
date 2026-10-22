"use client";

import { cn } from "@/lib/utils";

/** Champ de saisie étiqueté, style cohérent avec le site. */
export function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
  rows,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  rows?: number;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  const inputClass =
    "w-full rounded-2xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-muted/60 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
        {required && <span className="text-coral"> *</span>}
      </span>
      {rows ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(inputClass, "resize-y")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      )}
    </label>
  );
}

/** Message de succès affiché après envoi d'un formulaire (maquette). */
export function FormSuccess({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="rounded-3xl border border-teal/20 bg-teal-soft p-8 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-teal-dark">
        {title}
      </h3>
      <p className="mt-2 text-pretty text-muted">{message}</p>
    </div>
  );
}
