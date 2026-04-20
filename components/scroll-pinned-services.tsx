"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { LucideIcon } from "lucide-react";

export type ServiceStep = {
  title: string;
  tagline: string;
  bullets: string[];
  icon: LucideIcon;
};

type Props = {
  steps: ServiceStep[];
};

type ProgressItemProps = {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  title: string;
};

function ProgressItem({
  scrollYProgress,
  index,
  total,
  title,
}: ProgressItemProps) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.02), start, end, Math.min(1, end + 0.02)],
    [0.35, 1, 1, 0.35]
  );
  return (
    <motion.div style={{ opacity }} className="flex items-center gap-4">
      <span className="span-h1-gradient text-4xl font-medium tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-white text-lg font-medium">{title}</span>
    </motion.div>
  );
}

type StepCardProps = {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  step: ServiceStep;
};

function StepCard({ scrollYProgress, index, total, step }: StepCardProps) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [start, end], [20, -20]);
  const Icon = step.icon;
  return (
    <motion.article
      className="glass-card absolute inset-0 flex flex-col gap-5 justify-center"
      style={{ opacity, y }}
    >
      <div className="flex items-center gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-[#e4a8ff]">
          <Icon strokeWidth={1.5} />
        </span>
        <span className="section-label lg:hidden">
          Step {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-3xl lg:text-4xl font-medium leading-tight text-white">
        {step.title}
      </h3>
      <p className="text-color-ddbbf1 text-size-16-16-14">{step.tagline}</p>
      <ul className="flex flex-col gap-3">
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
  );
}

export function ScrollPinnedServices({ steps }: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center">
            <div className="hidden lg:flex flex-col gap-6">
              {steps.map((step, i) => (
                <ProgressItem
                  key={step.title}
                  scrollYProgress={scrollYProgress}
                  index={i}
                  total={steps.length}
                  title={step.title}
                />
              ))}
            </div>

            <div className="relative min-h-[26rem]">
              {steps.map((step, i) => (
                <StepCard
                  key={step.title}
                  scrollYProgress={scrollYProgress}
                  index={i}
                  total={steps.length}
                  step={step}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
