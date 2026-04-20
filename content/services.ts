import {
  PhoneCall,
  Bot,
  Network,
  PlugZap,
  GraduationCap,
} from "lucide-react";
import type { ServiceStep } from "@/components/scroll-pinned-services";

export const SERVICES: ServiceStep[] = [
  {
    title: "AI Voice Solutions",
    tagline:
      "Realistic, conversational voice agents that pick up the phone and make outbound calls — in 30+ languages, at human latency.",
    bullets: [
      "Seamless language switching for global teams",
      "Round-the-clock availability without fatigue",
      "Transfers live to a rep when intent is confirmed",
    ],
    icon: PhoneCall,
  },
  {
    title: "Lead Qualification Agents",
    tagline:
      "Reasoning agents on WhatsApp, Instagram, and web that vet inbound leads and only book qualified ones on your calendar.",
    bullets: [
      "Ask follow-ups based on the prospect's answers",
      "Disqualify noise, protect your reps' time",
      "Hand off with full context — no repeats",
    ],
    icon: Bot,
  },
  {
    title: "Business Architecture",
    tagline:
      "We map manual workflows and replace them with automated data pathways using Make.com, n8n, and Python.",
    bullets: [
      "Process discovery — find the bottlenecks first",
      "Custom-coded, not templated",
      "Measurable ROI: hours saved, errors eliminated",
    ],
    icon: Network,
  },
  {
    title: "Custom Integrations",
    tagline:
      "Salesforce, HubSpot, Monday, ClickUp, WhatsApp, Slack — plus API bridges for the tools that weren't built to talk to AI.",
    bullets: [
      "Bidirectional sync across your existing stack",
      "Bridges for legacy systems",
      "Built once, owned by you",
    ],
    icon: PlugZap,
  },
  {
    title: "Training & Transformation",
    tagline:
      "Workshops and consulting that move traditional companies into the AI-first era — your team runs the system after us.",
    bullets: [
      "Lectures for leadership and operators",
      "Playbooks tailored to your industry",
      "Ongoing enablement, not a handoff",
    ],
    icon: GraduationCap,
  },
];
