export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "שירותים",
    links: [
      { label: "סוכני קול AI", href: "#services" },
      { label: "סינון לידים", href: "#services" },
      { label: "אינטגרציות", href: "#services" },
      { label: "הדרכות והרצאות", href: "#services" },
    ],
  },
  {
    title: "החברה",
    links: [
      { label: "למה CLIX", href: "#benefits" },
      { label: "לקוחות", href: "#clients" },
      { label: "שאלות נפוצות", href: "#faq" },
      { label: "צרו קשר", href: "#contact" },
    ],
  },
  {
    title: "משאבים",
    links: [
      { label: "בלוג", href: "#" },
      { label: "פלייבוקים", href: "#" },
      { label: "רשימת אינטגרציות", href: "#" },
    ],
  },
];

export const FOOTER_TAGS = [
  "היפר-אוטומציה",
  "24/7",
  "מעל 30 שפות",
  "באים מ-8200",
  "בלי בולשיט",
  "ROI במרכז",
  "קוד מותאם אישית",
  "אינטגרציות לעומק",
  "ישירות מהמהנדסים",
];

export const FOOTER_CONTACT = {
  email: "hello@clix.ai",
};
