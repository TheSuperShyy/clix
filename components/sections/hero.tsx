import { Sparkles, Check, Globe } from "lucide-react";
import type { ReactNode } from "react";
import { GlassButton } from "@/components/glass-button";
import { GradientText } from "@/components/gradient-text";
import { HeroLabel } from "@/components/hero-label";
import { Reveal } from "@/components/reveal";
import { GridBeam } from "@/components/ui/background-grid-beam";
import { HERO } from "@/content/hero";

const ICONS: Record<string, ReactNode> = {
  Sparkles: <Sparkles strokeWidth={1.75} />,
  Check: <Check strokeWidth={1.75} />,
  Globe: <Globe strokeWidth={1.75} />,
};

const CHIP_OFFSETS = ["lg:-ml-10", "lg:ml-16", "lg:-ml-4"];

export function Hero() {
  return (
    <section className="position-relative overflow-hidden">
      <GridBeam />
      <div className="container is-hero relative z-10">
        <div className="grid h-full grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12">
          <div className="flex-v justify-center gap--48-48-32">
            <Reveal axis="y" distance={32}>
              <h1 className="text-size-h1 text-color-white max-w-[18ch] leading-[1.02]">
                {HERO.headingLead}
                <br />
                <GradientText>{HERO.headingGradient}</GradientText>
              </h1>
            </Reveal>

            <Reveal axis="y" distance={24} delay={0.08}>
              <p className="text-size-16-16-14 text-color-ddbbf1 max-w-[56ch] text-weight-300">
                {HERO.sub}
              </p>
            </Reveal>

            <Reveal axis="y" distance={24} delay={0.16}>
              <div className="flex flex-wrap items-center gap--16">
                <GlassButton href={HERO.cta.href}>{HERO.cta.label}</GlassButton>
              </div>
            </Reveal>
          </div>

          <div className="flex-v items-stretch lg:items-end gap--24">
            {HERO.chips.map((chip, i) => (
              <Reveal
                key={chip.text}
                axis="x"
                distance={40}
                delay={0.15 + i * 0.1}
                className={CHIP_OFFSETS[i] ?? ""}
              >
                <HeroLabel icon={ICONS[chip.iconName] ?? null}>
                  {chip.text}
                </HeroLabel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
