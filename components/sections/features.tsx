"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { FEATURES } from "@/content/features";

const TRACES = [
  // Smart-routing: branches converging + pulsing nodes + traveling packet
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t0">
      <motion.path
        d="M10 120 L90 120 L160 72 L230 72 L310 40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 4, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M10 30 L90 30 L160 72"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 4, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      />
      {[10, 90, 230, 310].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={i % 2 ? 72 : 30}
          fill="currentColor"
          animate={{ r: [2.5, 4.5, 2.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
      <motion.circle
        r="2.8"
        fill="currentColor"
        animate={{
          cx: [10, 90, 160, 230, 310],
          cy: [120, 120, 72, 72, 40],
          opacity: [0, 0.9, 0.9, 0.9, 0],
        }}
        transition={{ duration: 2.6, times: [0, 0.15, 0.5, 0.85, 1], repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
      />
    </svg>
  ),
  // Cadence: line + breathing dots + traveling pulse
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t1">
      <motion.line
        x1="10" y1="72" x2="310" y2="72"
        stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 4, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
      />
      {[40, 110, 210, 280].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy="72"
          fill="currentColor"
          animate={{ r: [3, 5.5, 3], opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
        />
      ))}
      <motion.circle
        cy="72"
        r="3.5"
        fill="currentColor"
        animate={{ cx: [10, 310], opacity: [0, 1, 1, 0] }}
        transition={{
          cx: { duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 },
          opacity: { duration: 2.4, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 0.4 },
        }}
      />
    </svg>
  ),
  // Speed: motion trails + comet
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t2">
      {[48, 62, 80].map((y, i) => (
        <motion.line
          key={i}
          x1="20" y1={y} x2="140" y2={y}
          stroke="currentColor"
          strokeWidth={i === 1 ? 2 : 1.2}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 2.2, times: [0, 0.25, 0.75, 1], repeat: Infinity, ease: "easeOut", delay: i * 0.12 }}
        />
      ))}
      <motion.circle
        cy="62"
        r="2.4"
        fill="currentColor"
        animate={{ cx: [20, 140], opacity: [0, 1, 1, 0] }}
        transition={{
          cx: { duration: 1.3, repeat: Infinity, ease: "easeOut", repeatDelay: 0.3 },
          opacity: { duration: 1.3, times: [0, 0.15, 0.85, 1], repeat: Infinity, repeatDelay: 0.3 },
        }}
      />
    </svg>
  ),
  // Network: pulsing nodes + lines + packets converging
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t3">
      {[
        [40, 40], [280, 40], [40, 104], [280, 104], [160, 72],
      ].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          fill="currentColor"
          animate={{
            r: i === 4 ? [3.5, 6, 3.5] : [3, 4.5, 3],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
        />
      ))}
      {[[40, 40], [280, 40], [40, 104], [280, 104]].map(([x, y], i) => (
        <motion.line
          key={i}
          x1={x} y1={y} x2="160" y2="72"
          stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 3.2, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
        />
      ))}
      {[[40, 40], [280, 40], [40, 104], [280, 104]].map(([x, y], i) => (
        <motion.circle
          key={`p${i}`}
          r="2.2"
          fill="currentColor"
          animate={{ cx: [x, 160], cy: [y, 72], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.8,
            times: [0, 0.15, 0.85, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4 + i * 0.35,
            repeatDelay: 0.5,
          }}
        />
      ))}
    </svg>
  ),
  // Content fan: rising rectangles with floating bob
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t4">
      {[
        [60, 30], [100, 20], [140, 30],
        [180, 30], [220, 20], [260, 30],
      ].map(([x, y], i) => (
        <motion.rect
          key={i}
          x={x - 12} width="24" height="38" rx="4"
          stroke="currentColor" strokeWidth="1" fill="none"
          initial={{ y: y + 20, opacity: 0 }}
          animate={{
            y: [y + 20, y - 4, y + 3, y - 2, y + 20],
            opacity: [0, 0.5, 0.5, 0.5, 0],
          }}
          transition={{ duration: 3.6, times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
        />
      ))}
    </svg>
  ),
  // Stacked blocks: scaling breathe with subtle drift
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t5">
      {[
        [90, 40], [160, 30], [230, 40],
        [90, 90], [160, 100], [230, 90],
      ].map(([x, y], i) => (
        <motion.rect
          key={i}
          x={x - 20}
          width="40" height="30" rx="6"
          stroke="currentColor" strokeWidth="1" fill="none"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          initial={{ scale: 0.6, opacity: 0, y: y - 15 }}
          animate={{
            scale: [0.6, 1, 0.94, 1, 0.6],
            opacity: [0, 0.5, 0.5, 0.5, 0],
            y: [y - 15, y - 18, y - 12, y - 16, y - 15],
          }}
          transition={{
            duration: 3.6,
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </svg>
  ),
];

export function Features() {
  return (
    <section id="solutions" className="section-light py-24 lg:py-32">
      <div className="container is-narrow flex flex-col items-center gap-16 text-center">
        <Reveal axis="y" distance={24}>
          <div className="flex flex-col items-center gap-10 max-w-4xl">
            <span className="light-label">Main features</span>
            <h2 className="text-size-h2-compact" style={{ color: "#0b0216" }}>
              Six systems. <span className="span-h1-gradient">One connected stack.</span>
            </h2>
            <p className="text-size-16-16-14 max-w-md" style={{ color: "#55527a" }}>
              AI-driven tools that qualify leads, book meetings, and scale
              revenue — on autopilot.
            </p>
          </div>
        </Reveal>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} axis="y" distance={32} delay={i * 0.06}>
                <article className="light-card h-full text-left">
                  <div className="light-card-illo">
                    <div className="light-card-trace">
                      {TRACES[i % TRACES.length]}
                    </div>
                    <span className="light-card-icon-soft" />
                    <span className="light-card-icon">
                      <Icon strokeWidth={1.75} className="h-5 w-5" />
                    </span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p className="mt-3">{feature.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
