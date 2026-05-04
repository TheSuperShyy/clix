"use client";

import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { GradientText } from "@/components/gradient-text";
import { ServicesCarousel } from "@/components/services-carousel";
import { BackgroundPaths } from "@/components/background-paths";
import { CTA_HREF } from "@/content/nav";

function FinalCTA({ ctaHref }: { ctaHref: string }) {
  return (
    <div className="hscroll-final">
      <div className="hscroll-logo relative">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundColor: "rgba(179, 102, 255, 0.35)",
            WebkitMaskImage: "url('/logos/clix-logo.png')",
            maskImage: "url('/logos/clix-logo.png')",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            transform: "scale(1.45) translate(-20%, 2%)",
          }}
        />
        <svg
          viewBox="0 0 320 240"
          fill="none"
          className="relative z-10 h-full w-full"
        >
          <defs>
            <linearGradient id="clixGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f0ccff" />
              <stop offset="45%" stopColor="#b366ff" />
              <stop offset="100%" stopColor="#6a00d9" />
            </linearGradient>
            <linearGradient id="clixShine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="inherit"
            fontWeight="600"
            fontSize="150"
            letterSpacing="-8"
            fill="url(#clixGrad)"
          >
            CLIX
          </text>
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="inherit"
            fontWeight="600"
            fontSize="150"
            letterSpacing="-8"
            fill="url(#clixShine)"
          >
            CLIX
          </text>
        </svg>
      </div>
      <div className="hscroll-final-text">
        <SectionLabel>השלב הבא</SectionLabel>
        <h3 className="text-4xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-white">
          רוצים יותר{" "}
          <GradientText>שיחות איכותיות,</GradientText> ופחות עבודה
          ידנית?
        </h3>
        <a href={ctaHref} className="try-now-btn">
          <span>התחילו עכשיו</span>
          <span className="arrow">
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          </span>
        </a>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <>
      <section id="services" className="pt-40 lg:pt-48 pb-24 lg:pb-28">
        <div className="container flex flex-col gap-14 lg:gap-16">
          <Reveal axis="y" distance={24}>
            <div className="flex flex-col gap-5 max-w-3xl">
              <SectionLabel>איך זה עובד</SectionLabel>
              <h2 className="text-size-h2 text-color-white">
                הדרך מהלידים שלכם{" "}
                <GradientText>לשיחות חיות.</GradientText>
              </h2>
              <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
                הופכים לידים מה-CRM, מהרשימות ומהשיחות לפרוספקטים מסוננים
                שמחכים לדבר עם צוות המכירות או לתאם פגישה.
              </p>
            </div>
          </Reveal>

          <Reveal axis="y" distance={24} delay={0.08}>
            <ServicesCarousel />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <BackgroundPaths />
        <div className="container relative z-10">
          <FinalCTA ctaHref={CTA_HREF} />
        </div>
      </section>
    </>
  );
}
