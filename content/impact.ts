export type ImpactMetric = {
  value: string;
  caption: string;
  highlight?: boolean;
};

export const IMPACT: ImpactMetric[] = [
  {
    value: "0",
    caption: "Leads lost to slow follow-up or forgotten tasks",
  },
  {
    value: "24/7",
    caption: "Coverage — nights, weekends, holidays. Your agents never sleep.",
  },
  {
    value: "30+",
    caption:
      "Languages handled at human-like latency — one system for global teams.",
    highlight: true,
  },
  {
    value: "10,000+",
    caption: "Hours saved per month across our active engagements.",
  },
];
