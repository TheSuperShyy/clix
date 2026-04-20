"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Axis = "x" | "y";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  axis?: Axis;
  distance?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  axis = "x",
  distance = -64,
  className,
  once = true,
}: RevealProps) {
  const initial =
    axis === "x"
      ? { opacity: 0, x: distance }
      : { opacity: 0, y: distance };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
}
