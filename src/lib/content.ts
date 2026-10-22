/**
 * Contenu éditorial du site.
 * Textes d'exemple crédibles et cohérents avec la mission de l'ONG
 * (aucun lorem ipsum). Centralisé ici pour faciliter la mise à jour.
 */

export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  image: string;
  objectives: string[];
  results: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "ecole-pour-tous",
    title: "L'école pour tous",
    tag: "Éducation",
    summary:
      "Scolarisation, fournitures et cantine pour les enfants les plus éloignés de l'école.",
    description:
      "Dans les quartiers défavorisés de Cotonou et des villages environnants, des milliers d'enfants restent à la porte de l'école. Ce programme finance les frais de scolarité, remet un kit complet de fournitures et garantit un repas chaud par jour, conditions indispensables pour que chaque enfant puisse rester sur les bancs de l'école.",
    image: "/images/project-education.jpg",
    objectives: [
      "Financer les frais de scolarité des enfants en difficulté",
      "Fournir un kit de fournitures scolaires complet à chaque rentrée",
      "Assurer un repas chaud quotidien en cantine scolaire",
      "Accompagner les familles dans la régularité de la scolarisation",
    ],
    results: [
      { value: "1 480", label: "enfants scolarisés" },
      { value: "12", label: "écoles partenaires" },
      { value: "95 %", label: "de taux de présence" },
    ],
  },
  {
    slug: "sante-maternelle-infantile",
    title: "Santé maternelle et infantile",
    tag: "Santé",
    summary:
      "Consultations, vaccins et sensibilisation pour réduire la mortalité infantile.",
    description:
      "La santé reste la première inquiétude des familles que nous accompagnons. En lien avec des centres de santé communautaires, nous organisons des consultations gratuites, des campagnes de vaccination et des séances de sensibilisation à l'hygiène et à la nutrition pour les mères et leurs jeunes enfants.",
    image: "/images/project-health.jpg",
    objectives: [
      "Organiser des consultations pédiatriques gratuites",
      "Financer les campagnes de vaccination infantile",
      "Former les mères à la nutrition et à l'hygiène",
      "Détecter tôt les cas de malnutrition",
    ],
    results: [
      { value: "3 200", label: "consultations gratuites" },
      { value: "86 %", label: "d'enfants vaccinés" },
      { value: "24", label: "campagnes de santé" },
    ],
  },
  {
    slug: "foyers-daccueil",
    title: "Foyers d'accueil",
    tag: "Protection",
    summary:
      "Un toit, un cadre sûr et un accompagnement pour les enfants sans famille.",
    description:
      "Pour les enfants orphelins ou séparés de leur famille, un foyer sûr change tout. Nos structures d'accueil offrent un cadre stable, une éducation, un suivi psychologique et un accompagnement vers l'autonomie, dans le respect du droit de chaque enfant à grandir entouré.",
    image: "/images/project-shelter.jpg",
    objectives: [
      "Offrir un hébergement et une alimentation adaptés",
      "Assurer un suivi psychologique et éducatif individualisé",
      "Préparer l'insertion sociale et professionnelle des grands enfants",
      "Accompagner la réunification familiale lorsque c'est possible",
    ],
    results: [
      { value: "6", label: "foyers d'accueil" },
      { value: "310", label: "enfants hébergés" },
      { value: "78", label: "jeunes accompagnés vers l'autonomie" },
    ],
  },
  {
    slug: "avenir-professionnel",
    title: "Un avenir professionnel",
    tag: "Insertion",
    summary:
      "Formation professionnelle et accompagnement à l'emploi des jeunes adultes.",
    description:
      "À 16 ans, beaucoup de jeunes quittent notre accompagnement sans perspective. Ce programme finance des formations en couture, menuiserie, informatique ou agriculture, puis accompagne la création d'activité pour que chaque jeune puisse subvenir à ses besoins et devenir à son tour une lumière pour sa communauté.",
    image: "/images/project-vocational.jpg",
    objectives: [
      "Financer des formations professionnelles adaptées",
      "Equiper les jeunes pour lancer leur activité",
      "Assurer un suivi de leur parcours pendant deux ans",
      "Créer un réseau de tuteurs et d'entreprises partenaires",
    ],
    results: [
      { value: "240", label: "jeunes formés" },
      { value: "67 %", label: "d'insertion professionnelle" },
      { value: "18", label: "filières de formation" },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "rentree-scolaire-2026",
    title: "Une rentrée sous le signe de l'espoir",
    excerpt:
      "1 480 enfants ont fait leur rentrée grâce à votre soutien. Retour sur une journée pleine d'émotions.",
    date: "2026-09-15",
    category: "Éducation",
    image: "/images/news-rentree.jpg",
    body: [
      "C'est une rentrée que nous n'oublierons pas. Dans les douze écoles partenaires, 1 480 enfants ont retrouvé le chemin de la classe, un cartable neuf sur le dos et un sourire immense.",
      "Grâce à la mobilisation de nos donateurs, chaque enfant a reçu un kit complet : cahiers, stylos, uniforme et sac. Pour beaucoup de familles, ce geste change tout : il rend possible une année scolaire entière, sans peur du lendemain.",
      "La cantine scolaire, rouverte dès le premier jour, garantit à chacun un repas chaud. Parce qu'on ne peut pas apprendre le ventre vide. Merci à toutes celles et ceux qui ont rendu cette rentrée possible.",
    ],
  },
  {
    slug: "campagne-vaccination",
    title: "3 200 consultations gratuites en un mois",
    excerpt:
      "Notre campagne santé a permis de dépister tôt de nombreux cas de malnutrition.",
    date: "2026-08-03",
    category: "Santé",
    image: "/images/news-health.jpg",
    body: [
      "Tout au long du mois dernier, nos équipes médicales bénévoles ont parcouru la région pour offrir des consultations gratuites aux enfants et à leurs mères.",
      "Au total, 3 200 consultations ont été réalisées, dont 480 dépistages de malnutrition pris en charge immédiatement. Les campagnes de vaccination ont quant à elles couvert plus de 86 % des enfants suivis.",
      "Ces chiffres sont le fruit d'un travail de terrain patient, mené main dans la main avec les centres de santé communautaires et les relais locaux.",
    ],
  },
  {
    slug: "ateliers-couture",
    title: "Seize jeunes lancent leur atelier de couture",
    excerpt:
      "Après dix mois de formation, ils sont désormais à la tête de leur propre activité.",
    date: "2026-06-21",
    category: "Insertion",
    image: "/images/news-vocational.jpg",
    body: [
      "Ils s'appellent Awa, Kossi, Rebecca et treize autres. Après dix mois de formation intensive, ils ont reçu leur machine à coudre et lancé leur premier atelier de couture.",
      "Ce programme d'insertion ne s'arrête pas à la formation : nous les accompagnons pendant deux ans, sur la gestion, la comptabilité et la recherche de clients.",
      "Voir ces jeunes devenir entrepreneurs et à leur tour faire vivre leur quartier, c'est la plus belle preuve que l'accompagnement porte ses fruits.",
    ],
  },
  {
    slug: "nouveau-foyer",
    title: "Un sixième foyer ouvre ses portes",
    excerpt:
      "40 enfants supplémentaires disposent désormais d'un cadre de vie sûr et chaleureux.",
    date: "2026-04-12",
    category: "Protection",
    image: "/images/news-shelter.jpg",
    body: [
      "Le nouveau foyer d'accueil, situé en périphérie de la ville, peut héberger jusqu'à 40 enfants dans des conditions dignes et sécurisées.",
      "Chambres partagées, salle d'étude, cour de jeux et cuisine : tout a été pensé pour offrir un quotidien apaisé et favoriser les apprentissages.",
      "Les premiers enfants sont arrivés au printemps. Les voir jouer dans la cour quelques heures après leur arrivée est notre plus belle récompense.",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Grâce à Lumière d'Enfance, mes trois enfants sont scolarisés et mangent à la cantine chaque jour. Ma vie a changé.",
    name: "Grâce M.",
    role: "Maman bénéficiaire, Cotonou",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote:
      "Je suis bénévole depuis quatre ans. Voir un enfant reprendre confiance en lui, c'est ce qui me pousse à continuer.",
    name: "Thomas A.",
    role: "Bénévole soutien scolaire",
    avatar: "/images/avatar-2.jpg",
  },
  {
    quote:
      "Après ma formation en couture, j'ai ouvert mon atelier. Aujourd'hui, j'embauche à mon tour deux apprenties.",
    name: "Rebeca K.",
    role: "Ancienne bénéficiaire, aujourd'hui entrepreneure",
    avatar: "/images/avatar-3.jpg",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Aïcha Danho",
    role: "Directrice générale",
    bio: "Engagée depuis la création de l'association, elle coordonne l'ensemble de nos programmes et de nos partenariats.",
    photo: "/images/team-1.jpg",
  },
  {
    name: "Julien Apovi",
    role: "Responsable des programmes",
    bio: "Il pilote le suivi des enfants et l'évaluation de l'impact de nos actions sur le terrain.",
    photo: "/images/team-2.jpg",
  },
  {
    name: "Mariam Seïd",
    role: "Coordinatrice santé",
    bio: "Infirmière de formation, elle organise les campagnes de vaccination et de dépistage.",
    photo: "/images/team-3.jpg",
  },
  {
    name: "David Kponou",
    role: "Responsable bénévolat",
    bio: "Il accueille, forme et accompagne nos bénévoles tout au long de leur engagement à nos côtés.",
    photo: "/images/team-4.jpg",
  },
];

/** Chiffres clés d'impact. */
export const impactStats = [
  { value: 4800, suffix: "+", label: "Enfants accompagnés" },
  { value: 1480, suffix: "", label: "Enfants scolarisés" },
  { value: 12, suffix: "", label: "Écoles partenaires" },
  { value: 92, suffix: "%", label: "Des dons vont au terrain" },
];

export const impactDetails = [
  {
    icon: "book",
    title: "Éducation",
    text: "Scolarisation, fournitures, cantine et soutien scolaire pour permettre à chaque enfant d'apprendre dans de bonnes conditions.",
    value: 1480,
    suffix: "",
    label: "enfants scolarisés",
  },
  {
    icon: "health",
    title: "Santé",
    text: "Consultations gratuites, vaccination et sensibilisation à la nutrition pour protéger les plus jeunes.",
    value: 3200,
    suffix: "",
    label: "consultations par an",
  },
  {
    icon: "home",
    title: "Protection",
    text: "Foyers d'accueil et accompagnement pour les enfants sans famille, dans le respect de leurs droits.",
    value: 310,
    suffix: "",
    label: "enfants hébergés",
  },
  {
    icon: "spark",
    title: "Insertion",
    text: "Formation professionnelle et accompagnement à l'emploi pour offrir un avenir aux jeunes adultes.",
    value: 240,
    suffix: "",
    label: "jeunes formés",
  },
];

/** Questions fréquentes. */
export const faqs = [
  {
    q: "Comment mes dons sont-ils utilisés ?",
    a: "92 % de chaque don financent directement nos programmes de terrain (éducation, santé, protection, insertion). Les 8 % restants couvrent les frais administratifs indispensables à la bonne gestion de l'association.",
  },
  {
    q: "Puis-je choisir le programme que je soutiens ?",
    a: "Oui. Sur la page « Faire un don », vous pouvez orienter votre don vers un programme précis. À défaut, il est affecté là où les besoins sont les plus urgents.",
  },
  {
    q: "Comment devenir bénévole ?",
    a: "Remplissez le formulaire de la page « Devenir bénévole ». Notre responsable vous recontacte pour un premier échange, puis vous proposez une mission selon vos disponibilités et vos compétences.",
  },
  {
    q: "Mon don est-il déductible des impôts ?",
    a: "Dans de nombreux pays, les dons aux associations reconnues d'intérêt général ouvrent droit à une réduction d'impôt. Renseignez-vous selon votre situation : un reçu vous est délivré automatiquement.",
  },
  {
    q: "Puis-je visiter les projets sur le terrain ?",
    a: "Nous organisons régulièrement des visites et des journées portes ouvertes. Contactez-nous pour connaître les prochaines dates et les modalités.",
  },
  {
    q: "Comment être sûr que mon don arrive à bon port ?",
    a: "Nous publions chaque année un rapport d'activité détaillé, avec les comptes et les résultats de nos programmes. La transparence est au cœur de notre engagement.",
  },
];

/** Mission, vision, valeurs (page À propos). */
export const aboutContent = {
  mission:
    "Offrir aux enfants démunis les moyens de grandir dignement, en agissant sur l'éducation, la santé et la protection.",
  vision:
    "Un monde où chaque enfant, quel que soit son point de départ, a la possibilité de construire son avenir et de devenir une lumière pour les autres.",
  values: [
    {
      title: "Dignité",
      text: "Chaque enfant est accueilli avec respect, sans jugement, quelle que soit son histoire.",
    },
    {
      title: "Transparence",
      text: "Nos comptes et nos résultats sont publiés chaque année. Votre confiance se mérite.",
    },
    {
      title: "Proximité",
      text: "Nos actions sont menées avec les familles et les acteurs locaux, jamais à leur place.",
    },
    {
      title: "Durabilité",
      text: "Nous accompagnons chaque enfant dans la durée, jusqu'à son autonomie.",
    },
  ],
  timeline: [
    {
      year: "2009",
      title: "Naissance de l'association",
      text: "Un groupe de bénévoles se réunit autour d'un premier centre de soutien scolaire.",
    },
    {
      year: "2014",
      title: "Ouverture du premier foyer",
      text: "Un lieu d'accueil voit le jour pour les enfants sans famille.",
    },
    {
      year: "2019",
      title: "Programme santé élargi",
      text: "Les campagnes de vaccination et de dépistage s'étendent à toute la région.",
    },
    {
      year: "2026",
      title: "4 800 enfants accompagnés",
      text: "Une communauté de donateurs et de bénévoles de plus en plus large nous soutient.",
    },
  ],
};
