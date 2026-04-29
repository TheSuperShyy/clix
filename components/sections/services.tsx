"use client";

import { HorizontalServices } from "@/components/horizontal-services";
import { SERVICES } from "@/content/services";
import { CTA_HREF } from "@/content/nav";

export function Services() {
  return (
    <section id="services">
      <HorizontalServices
        steps={SERVICES}
        ctaHref={CTA_HREF}
        intro={{
          label: "How it Works",
          headingLead: "Your path from leads to",
          headingGradient: "live conversations.",
          description:
            "Convert leads from your CRM, lists, or calls into qualified prospects eager to engage with your sales team or set appointments.",
        }}
      />
    </section>
  );
}
