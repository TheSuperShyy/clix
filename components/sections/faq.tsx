"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { GradientText } from "@/components/gradient-text";
import { FAQ_ITEMS } from "@/content/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <Reveal axis="y" distance={24}>
          <div className="flex flex-col gap-5">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-size-h2 text-color-white">
              Questions <GradientText>worth asking.</GradientText>
            </h2>
            <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
              If you don't see yours here, send it over — we answer directly.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="faq-item" data-open={isOpen}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#e4a8ff] shrink-0">
                    <Plus strokeWidth={2} size={16} />
                  </span>
                </button>
                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
