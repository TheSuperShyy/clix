"use client";

import { Reveal } from "@/components/reveal";
import { GradientText } from "@/components/gradient-text";
import { FAQAccordion, SignalPill } from "@/components/faq-accordion";
import { FAQ_ITEMS } from "@/content/faq";

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container max-w-4xl mx-auto flex flex-col gap-10">
        <Reveal axis="y" distance={24}>
          <div className="flex flex-col items-start gap-5">
            <SignalPill label="שאלות נפוצות" />
            <h2 className="text-size-h2 text-color-white max-w-2xl">
              השאלות <GradientText>ששווה לשאול.</GradientText>
            </h2>
            <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300 max-w-xl">
              לא מצאתם את השאלה שלכם? שלחו לנו אותה — אנחנו עונים אישית.
            </p>
          </div>
        </Reveal>

        <FAQAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
