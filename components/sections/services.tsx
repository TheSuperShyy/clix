"use client";

import { HorizontalServices } from "@/components/horizontal-services";
import { SERVICES } from "@/content/services";
import { CTA_HREF } from "@/content/nav";

export function Services() {
  return (
    <section id="services">
      <HorizontalServices steps={SERVICES} ctaHref={CTA_HREF} />
    </section>
  );
}
