import type { CaseStudyItem } from "@/components/case-studies-carousel";

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    tags: ["Logistics", "Voice", "Integrations"],
    title: "A 40-truck fleet stopped losing invoices in email.",
    challenge:
      "Ops was manually pulling invoices and POD docs out of a shared inbox, then keying them into the TMS. Errors were frequent and month-end close slipped for weeks.",
    solution:
      "We deployed a document-parsing agent on the inbox, synced recognized fields into the TMS via API bridge, and handed exceptions to a Slack-based review queue.",
    stats: [
      { value: "11k", caption: "Invoices/yr processed" },
      { value: "92%", caption: "Straight-through rate" },
      { value: "6d", caption: "Faster close" },
    ],
    quote:
      "The month-end scramble is gone. The agent handles the boring 90%, and our controller only sees the exceptions worth seeing.",
  },
  {
    tags: ["Healthcare", "Agents", "WhatsApp"],
    title: "Patient intake that qualifies and books while the clinic sleeps.",
    challenge:
      "A private therapy practice was losing evening and weekend leads because reception couldn't keep up with WhatsApp and Instagram DMs.",
    solution:
      "A reasoning agent now triages inbound messages, asks the screening questions a human would, books the right therapist, and escalates urgent cases to an on-call line.",
    stats: [
      { value: "3x", caption: "More booked intakes" },
      { value: "24/7", caption: "Coverage without staff" },
      { value: "< 30s", caption: "First response" },
    ],
    quote:
      "It sounds like one of our coordinators. New patients don't realize it's an agent until we tell them — and honestly, it's more consistent than a person on hour nine.",
  },
  {
    tags: ["B2B SaaS", "Sales", "Voice"],
    title: "Outbound voice agents doubled a rep team without adding headcount.",
    challenge:
      "A SaaS sales team had a backlog of 20,000 free-tier accounts to qualify. Hiring BDRs to call through them wasn't economical.",
    solution:
      "We built a multi-language voice agent that runs pre-qualification calls, books demos on the AE calendar when intent is confirmed, and hands off full transcripts.",
    stats: [
      { value: "20k", caption: "Accounts reached" },
      { value: "4.2x", caption: "Pipeline vs. cohort" },
      { value: "30+", caption: "Languages" },
    ],
    quote:
      "Our AEs walk into every call with full context. The agent does the work nobody wanted to do, and the demos that land are real.",
  },
];
