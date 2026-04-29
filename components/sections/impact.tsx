"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Sparkles, Settings2 } from "lucide-react";
import { IMPACT } from "@/content/impact";

type CardPos = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  parallax: number;
  rotate?: number;
};

const POSITIONS: CardPos[] = [
  { top: "10%", left: "2%", parallax: 90, rotate: -2 },
  { top: "6%", right: "3%", parallax: 110, rotate: 1.5 },
  { bottom: "8%", left: "5%", parallax: 130, rotate: -1 },
  { bottom: "4%", right: "2%", parallax: 100, rotate: 2 },
];

function FloatCard({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const metric = IMPACT[index];
  const pos = POSITIONS[index];

  // Pure parallax — each card translates linearly with scroll position.
  // Different parallax magnitudes per card create depth (some move faster
  // than others). No fade or blur: cards are always solid when the section
  // is in the viewport, and naturally absent before/after because they live
  // inside the section's bounds.
  const y = useTransform(progress, [0, 1], [pos.parallax, -pos.parallax]);

  return (
    <motion.div
      className={`impact-float-card${metric.highlight ? " is-highlight" : ""}`}
      style={{
        top: pos.top,
        bottom: pos.bottom,
        left: pos.left,
        right: pos.right,
        y,
        rotate: pos.rotate,
        willChange: "transform",
      }}
    >
      {metric.highlight && (
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f1dfff] text-[#7f00ff]">
            <Settings2 className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#b366ff] to-[#7f00ff] text-white">
            <Sparkles className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>
      )}
      <div className="impact-value">{metric.value}</div>
      <div className="impact-caption">{metric.caption}</div>
    </motion.div>
  );
}

export function Impact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const wordmarkY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="impact"
      ref={ref}
      className="section-light relative overflow-hidden py-32 lg:py-44"
    >
      <div className="container relative min-h-[40rem] lg:min-h-[44rem]">
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-6">
          <span className="light-label">Key Stats</span>
          <motion.div
            className="text-center"
            style={{ y: wordmarkY, willChange: "transform" }}
          >
            <div
              className="text-size-16-16-14 mb-3"
              style={{ color: "#0b0216" }}
            >
              The Impact,
            </div>
            <div className="impact-wordmark font-medium leading-[0.9] tracking-tight text-[clamp(4rem,13vw,13rem)]">
              Quantified
            </div>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="pointer-events-auto relative h-full w-full">
            {IMPACT.map((_, i) => (
              <FloatCard key={i} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
