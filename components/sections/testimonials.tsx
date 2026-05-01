"use client";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { GradientText } from "@/components/gradient-text";
import { TestimonialsGrid } from "@/components/testimonials-grid";
import { TESTIMONIALS } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container flex flex-col gap-12">
        <Reveal axis="y" distance={24}>
          <div className="flex flex-col gap-5 max-w-3xl">
            <SectionLabel>Client testimonials</SectionLabel>
            <h2 className="text-size-h2 text-color-white">
              The operators who <GradientText>shipped with us.</GradientText>
            </h2>
            <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
              Hear it from the teams running the systems — what changed, what
              they kept, and what surprised them.
            </p>
          </div>
        </Reveal>

        <TestimonialsGrid items={TESTIMONIALS} />
      </div>
    </section>
  );
}
