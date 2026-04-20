import {
  ShieldCheck,
  Code2,
  Link2,
  MessageCircleOff,
  TrendingUp,
  Cpu,
} from "lucide-react";
import type { BenefitItem } from "@/components/benefits-carousel";

export const BENEFITS: BenefitItem[] = [
  {
    title: "Engineer-Led",
    description:
      "No agency middle-layer. You work directly with the people who ship the code and own the outcome.",
    impact: "Decisions happen in hours, not weeks.",
    icon: ShieldCheck,
  },
  {
    title: "Custom-Coded, Not Templated",
    description:
      "We don't glue together no-code templates and hope. Every system is built for your workflow.",
    impact: "No ceilings when you need to scale.",
    icon: Code2,
  },
  {
    title: "Integration-Deep",
    description:
      "We bridge into Salesforce, HubSpot, Monday, WhatsApp, and legacy systems that never got an API.",
    impact: "Your existing stack gets smarter, not replaced.",
    icon: Link2,
  },
  {
    title: "No-Bullshit",
    description:
      "We ship systems, not slide decks. If a project won't clear the ROI bar, we'll tell you before we start.",
    impact: "Zero wasted retainers.",
    icon: MessageCircleOff,
  },
  {
    title: "ROI-First",
    description:
      "Every engagement is scoped against hours saved, errors eliminated, and revenue unlocked — measured monthly.",
    impact: "You see the payback on the invoice.",
    icon: TrendingUp,
  },
  {
    title: "8200-Built",
    description:
      "Founders and engineers from Unit 8200 and the Technion. Systems thinking and signal-to-noise instincts baked in.",
    impact: "Mission-critical rigor, startup velocity.",
    icon: Cpu,
  },
];
