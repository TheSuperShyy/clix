"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Sparkles, Settings2 } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
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
  { top: "12%", left: "4%", parallax: -50, rotate: -2 },
  { top: "6%", right: "6%", parallax: -90, rotate: 1.5 },
  { bottom: "18%", left: "22%", parallax: -130, rotate: -1 },
  { bottom: "10%", right: "8%", parallax: -70, rotate: 2 },
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
  const y = useTransform(progress, [0, 1], [pos.parallax * -0.5, pos.parallax]);

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
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
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
      className="relative overflow-hidden py-40 lg:py-52"
    >
      <div className="container relative">
        <div className="flex justify-center">
          <SectionLabel>Key Stats</SectionLabel>
        </div>

        <motion.div
          className="pointer-events-none mt-6 text-center"
          style={{ y: wordmarkY, willChange: "transform" }}
        >
          <div className="text-size-16-16-14 text-color-white mb-3">
            The Impact,
          </div>
          <div className="span-h1-gradient font-medium leading-[0.9] tracking-tight text-[clamp(5rem,14vw,14rem)]">
            Quantified
          </div>
        </motion.div>

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
