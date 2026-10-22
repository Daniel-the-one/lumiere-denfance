/**
 * Configuration centrale du site.
 * ------------------------------------------------------------------
 * Tout ce qui doit pouvoir être changé en un seul endroit (nom de
 * l'ONG, slogan, contacts, réseaux, navigation, textes juridiques)
 * est centralisé ici. Pour rebrander le site, il suffit d'éditer ce
 * fichier : aucune autre occurrence du nom n'est écrite en dur.
 */

export const site = {
  name: "Lumière d'Enfance",
  shortName: "Lumière d'Enfance",
  slogan: "Chaque enfant mérite de briller.",
  description:
    "Lumière d'Enfance accompagne les enfants démunis par l'éducation, la santé et la nutrition, pour leur offrir un avenir digne et plein d'espoir.",
  url: "https://lumiere-denfance.org",
  locale: "fr_FR",
  founded: 2009,

  // Coordonnées ---------------------------------------------------
  contact: {
    email: "contact@lumiere-denfance.org",
    phone: "+229 21 00 00 00",
    whatsapp: "+229 90 00 00 00",
    address: "Boulevard de la Solidarité, Lot 142",
    city: "Cotonou",
    country: "Bénin",
    hours: "Lun – Ven : 8h00 – 17h30",
  },

  // Réseaux sociaux ----------------------------------------------
  social: {
    facebook: "https://facebook.com/lumieredenfance",
    instagram: "https://instagram.com/lumieredenfance",
    linkedin: "https://linkedin.com/company/lumiere-denfance",
    youtube: "https://youtube.com/@lumieredenfance",
    x: "https://x.com/lumieredenfance",
  },

  // Navigation principale ----------------------------------------
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Nos actions", href: "/nos-actions" },
    { label: "Impact", href: "/impact" },
    { label: "Galerie", href: "/galerie" },
    { label: "Actualités", href: "/actualites" },
    { label: "Contact", href: "/contact" },
  ],

  // Liens du footer ----------------------------------------------
  footer: {
    organisation: [
      { label: "À propos", href: "/a-propos" },
      { label: "Nos actions", href: "/nos-actions" },
      { label: "Notre impact", href: "/impact" },
      { label: "Actualités", href: "/actualites" },
    ],
    agir: [
      { label: "Faire un don", href: "/faire-un-don" },
      { label: "Devenir bénévole", href: "/devenir-benevole" },
      { label: "Nous contacter", href: "/contact" },
      { label: "Questions fréquentes", href: "/faq" },
    ],
  },

  // Montants de don proposés -------------------------------------
  donationAmounts: [10, 25, 50, 100],

  legal: {
    association: "Association reconnue d'intérêt général",
    registration: "N° d'enregistrement 2009-BJ-0142",
  },
} as const;

export type Site = typeof site;
