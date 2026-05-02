"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function GridBeam({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 38%, black 35%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 38%, black 35%, transparent 85%)",
        }}
      />
      {BEAMS.map((b, i) => (
        <Beam key={i} positionClass={b.position} delay={b.delay} />
      ))}
    </div>
  );
}

const BEAMS: { position: string; delay: number }[] = [
  { position: "left-[6%] top-[12%]", delay: 0 },
  { position: "right-[14%] top-[22%]", delay: 0.7 },
  { position: "left-[32%] top-[58%]", delay: 1.5 },
  { position: "right-[8%] top-[68%]", delay: 2.2 },
  { position: "left-[12%] top-[80%]", delay: 0.4 },
  { position: "right-[28%] top-[44%]", delay: 1.1 },
];

function Beam({
  positionClass,
  delay,
}: {
  positionClass: string;
  delay: number;
}) {
  const id = useId();
  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute", positionClass)}
      aria-hidden
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke={`url(#${id})`}
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id={id}
          variants={{
            initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
            animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay,
          }}
        >
          <stop stopColor="#e4a8ff" stopOpacity="0" />
          <stop stopColor="#e4a8ff" />
          <stop offset="0.325" stopColor="#7f00ff" />
          <stop offset="1" stopColor="#e100ff" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

export default GridBeam;
