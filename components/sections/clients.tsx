"use client";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { GradientText } from "@/components/gradient-text";
import { ClientsWall } from "@/components/clients-wall";

export function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden py-24 lg:py-28 min-h-[28rem] lg:min-h-[30rem]"
    >
      <ClientsWall />

      <div className="container relative z-10">
        <Reveal axis="y" distance={24}>
          <div className="flex max-w-xl flex-col gap-5">
            <SectionLabel>Our clients</SectionLabel>
            <h2 className="text-size-h2 text-color-white">
              Trusted by operators{" "}
              <GradientText>who ship at scale.</GradientText>
            </h2>
            <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
              From logistics fleets to private clinics — teams across industries
              running automation that just works.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
