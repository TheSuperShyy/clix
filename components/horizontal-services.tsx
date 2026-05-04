"use client";

import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "motion/react";
import type { ServiceStep } from "@/components/scroll-pinned-services";
import { SectionLabel } from "@/components/section-label";
import { GradientText } from "@/components/gradient-text";

type IntroProps = {
  label: string;
  headingLead: string;
  headingGradient: string;
  description: string;
};

type Props = {
  steps: ServiceStep[];
  ctaHref: string;
  intro?: IntroProps;
};

function IntroPanel({ intro }: { intro: IntroProps }) {
  return (
    <div className="hscroll-panel">
      <div className="hscroll-intro">
        <SectionLabel>{intro.label}</SectionLabel>
        <h2 className="text-size-h2 text-color-white">
          {intro.headingLead}{" "}
          <GradientText>{intro.headingGradient}</GradientText>
        </h2>
        <p className="text-size-16-16-14 text-color-ddbbf1 text-weight-300">
          {intro.description}
        </p>
      </div>
    </div>
  );
}

function StepPanel({ index, step }: { index: number; step: ServiceStep }) {
  const Icon = step.icon;
  const offset = index % 2 === 0 ? "" : "mt-40";
  const cardRef = useRef<HTMLElement | null>(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(127, 0, 255, 0.22), rgba(127, 0, 255, 0) 55%)`;

  return (
    <div className="hscroll-panel">
      <div className="hscroll-chain-link" />
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className={`hscroll-step ${offset}`}
      >
        <motion.div
          aria-hidden
          className="hscroll-step-spotlight"
          style={{ background: spotlight }}
        />
        <span className="hscroll-step-border" aria-hidden />
        <div className="relative z-[1] flex items-center gap-3">
          <span className="hscroll-step-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="hscroll-step-icon inline-flex h-10 w-10 items-center justify-center rounded-xl">
            <Icon strokeWidth={1.5} className="h-5 w-5" />
          </span>
        </div>
        <h3 className="relative z-[1] text-2xl lg:text-3xl font-medium leading-tight text-white">
          {step.title}
        </h3>
        <p className="relative z-[1] text-color-ddbbf1 text-size-16-16-14">{step.tagline}</p>
        <ul className="relative z-[1] flex flex-col gap-2.5">
          {step.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-color-ddbbf1 text-size-16-16-14"
            >
              <span
                className="mt-2 h-1.5 w-1.5 rounded-full"
                style={{ background: "linear-gradient(90deg,#7f00ff,#e100ff)" }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </div>
  );
}

function FinalPanel({ ctaHref }: { ctaHref: string }) {
  return (
    <div className="hscroll-panel">
      <div className="hscroll-final">
        <div className="hscroll-logo">
          <svg viewBox="0 0 320 240" fill="none" className="h-full w-full">
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
            <GradientText>שיחות איכותיות,</GradientText> ופחות
            עבודה ידנית?
          </h3>
          <a href={ctaHref} className="try-now-btn">
            <span>התחילו עכשיו</span>
            <span className="arrow">
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function HorizontalServices({ steps, ctaHref, intro }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const totalPanels = (intro ? 1 : 0) + steps.length + 1;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalPanels - 1) * 100}vw`]
  );

  return (
    <div
      ref={ref}
      className="hscroll-section"
      style={{ height: `${totalPanels * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="hscroll-chain" />
        <motion.div className="hscroll-track" style={{ x }}>
          {intro && <IntroPanel intro={intro} />}
          {steps.map((step, i) => (
            <StepPanel key={step.title} step={step} index={i} />
          ))}
          <FinalPanel ctaHref={ctaHref} />
        </motion.div>
      </div>
    </div>
  );
}
