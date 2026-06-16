export type Award = {
  slug: string;
  category: string;
  name: string;
  description: string;
  featured?: boolean;
};

export const AWARDS: Award[] = [
  {
    slug: "business-tycoon",
    category: "Business & Entrepreneurship",
    name: "IVVA Business Tycoon Award",
    description:
      "Reserved for the titans of industry — visionaries who transformed bold ideas into empires. The IVVA Business Tycoon Award celebrates entrepreneurs who didn't just build businesses, they built legacies that redefined markets, empowered communities, and inspired the next generation of leaders.",
    featured: true,
  },
  {
    slug: "legacy",
    category: "IVVA Signature Awards",
    name: "IVVA Legacy Award",
    description:
      "The IVVA Legacy Award honors trailblazers whose dedication and vision have shaped generations. These are the architects of change — individuals whose contributions echo far beyond their era, inspiring humanity to reach for greatness.",
  },
  {
    slug: "nation-builder",
    category: "Social & Nation Building",
    name: "IVVA Nation Builder Award",
    description:
      "Presented to those who gave back before taking — changemakers in social service, healthcare, education, and public welfare whose relentless work has strengthened the very fabric of society and contributed to a stronger, more equitable nation.",
  },
  {
    slug: "women-inspiration",
    category: "Women Recognition",
    name: "IVVA Women Inspiration Award",
    description:
      "A tribute to remarkable women who shattered ceilings, rewrote narratives, and led with compassion and courage. The IVVA Women Inspiration Award celebrates those who didn't just succeed — they made the path wider for every woman who follows.",
  },
  {
    slug: "academic-research",
    category: "Education & Research",
    name: "IVVA Academic & Research Leadership Award",
    description:
      "Honoring the scholars, educators, and researchers who are the true architects of tomorrow. Their tireless pursuit of knowledge has not only advanced their fields but has illuminated minds and opened doors for generations to come.",
  },
  {
    slug: "creative-excellence",
    category: "Arts, Media & Culture",
    name: "IVVA Creative Excellence Award",
    description:
      "Creativity is civilization's highest language. This award recognizes masters of art, media, literature, and culture whose work moves audiences, preserves heritage, and dares to imagine new worlds.",
  },
  {
    slug: "youth-icon",
    category: "Youth & Future Leaders",
    name: "IVVA Youth Icon Award",
    description:
      "The future belongs to the bold. The IVVA Youth Icon Award celebrates extraordinary young achievers whose talent, drive, and vision have already begun to shape tomorrow — proof that age is no barrier to greatness.",
  },
  {
    slug: "lifetime-achievement",
    category: "Premium Honors",
    name: "IVVA Lifetime Achievement Award",
    description:
      "One of IVVA's most revered honors — presented to extraordinary individuals whose sustained decades of excellence have left an indelible mark on their profession and the world. This is not just an award. It is a standing ovation from history.",
  },
  {
    slug: "hall-of-fame",
    category: "Premium Honors",
    name: "IVVA Hall of Fame Award",
    description:
      "The crown jewel of IVVA recognition. Inducted into the Hall of Fame are icons whose names are synonymous with excellence — individuals who have defined their era and set a benchmark that inspires all who follow. Reserved for the truly legendary.",
  },
];
