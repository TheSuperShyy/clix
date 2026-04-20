"use client";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { GradientText } from "@/components/gradient-text";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel";
import { CASE_STUDIES } from "@/content/case-studies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32">
      <div className="container flex flex-col gap-12">
        <Reveal axis="y" distance={24}>
          <div className="flex flex-col gap-5 max-w-3xl">
            <SectionLabel>Case studies</SectionLabel>
            <h2 className="text-size-h2 text-color-white">
              Real systems, <GradientText>real numbers.</GradientText>
            </h2>
            <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
              Selected engagements where hours saved and errors eliminated are
              measurable — not marketing.
            </p>
          </div>
        </Reveal>

        <CaseStudiesCarousel items={CASE_STUDIES} />
      </div>
    </section>
  );
}
