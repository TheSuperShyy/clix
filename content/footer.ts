export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "AI Voice Agents", href: "#services" },
      { label: "Lead Qualification", href: "#services" },
      { label: "Integrations", href: "#services" },
      { label: "Training & Lectures", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why CLIX", href: "#benefits" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Playbooks", href: "#" },
      { label: "Integrations List", href: "#" },
    ],
  },
];

export const FOOTER_TAGS = [
  "Hyper-Automation",
  "24/7",
  "30+ Languages",
  "8200-Built",
  "No-Bullshit",
  "ROI-First",
  "Custom-Coded",
  "Integration-Deep",
  "Engineer-Led",
];

export const FOOTER_CONTACT = {
  email: "hello@clix.ai",
};
