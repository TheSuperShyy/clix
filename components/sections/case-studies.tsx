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
            <SectionLabel>סיפורי לקוחות</SectionLabel>
            <h2 className="text-size-h2 text-color-white">
              מערכות אמיתיות, <GradientText>מספרים אמיתיים.</GradientText>
            </h2>
            <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
              פרויקטים נבחרים שבהם השעות שנחסכו והטעויות שנמנעו הם נתון מדיד —
              לא סיסמה שיווקית.
            </p>
          </div>
        </Reveal>

        <CaseStudiesCarousel items={CASE_STUDIES} />
      </div>
    </section>
  );
}
