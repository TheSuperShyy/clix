import {
  Phone,
  MessageSquare,
  Truck,
  Stethoscope,
  Clapperboard,
  Cable,
  type LucideIcon,
} from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: FeatureItem[] = [
  {
    title: "AI Voice Agents",
    description:
      "Conversational voice bots that answer phones and make calls in 30+ languages, with human-like latency.",
    icon: Phone,
  },
  {
    title: "Lead Qualification Bots",
    description:
      "WhatsApp and Instagram agents that vet inbound leads and only book qualified ones on your calendar.",
    icon: MessageSquare,
  },
  {
    title: "Logistics Automation",
    description:
      "Invoice collection from email, daily route sync, and mileage reconciliation — hands-off.",
    icon: Truck,
  },
  {
    title: "Healthcare & Therapy Intake",
    description:
      "Ticket management and patient-intake agents that ask the right follow-ups and route cases by urgency.",
    icon: Stethoscope,
  },
  {
    title: "Content Factory",
    description:
      "Automated pipelines that turn one idea into daily LinkedIn, Facebook, and Instagram posts.",
    icon: Clapperboard,
  },
  {
    title: "Custom Integrations",
    description:
      "Salesforce, HubSpot, Monday, ClickUp, Slack — plus custom API bridges for software that doesn't usually talk to AI.",
    icon: Cable,
  },
];
