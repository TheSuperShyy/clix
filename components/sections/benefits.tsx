"use client";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { GradientText } from "@/components/gradient-text";
import { BenefitsCarousel } from "@/components/benefits-carousel";
import { BENEFITS } from "@/content/benefits";

export function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32">
      <div className="container flex flex-col gap-12">
        <Reveal axis="y" distance={24}>
          <div className="flex flex-col gap-5 max-w-3xl">
            <SectionLabel>Why CLIX</SectionLabel>
            <h2 className="text-size-h2 text-color-white">
              Engineer-led. <GradientText>ROI-first.</GradientText>
            </h2>
            <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
              We don't sell retainers. We ship systems that pay for themselves.
            </p>
          </div>
        </Reveal>

        <BenefitsCarousel items={BENEFITS} />
      </div>
    </section>
  );
}
