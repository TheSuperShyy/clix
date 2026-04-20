"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { FEATURES } from "@/content/features";

const TRACES = [
  // Smart-routing style: branches converging to icon
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t0">
      <motion.path
        d="M10 120 L90 120 L160 72 L230 72 L310 40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      <motion.path
        d="M10 30 L90 30 L160 72"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
      />
      {[10, 90, 230, 310].map((x, i) => (
        <circle key={i} cx={x} cy={i % 2 ? 72 : 30} r="3" fill="currentColor" opacity="0.5" />
      ))}
    </svg>
  ),
  // Cadence dots with checkmark marker
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t1">
      <motion.line
        x1="10" y1="72" x2="310" y2="72"
        stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      {[40, 110, 210, 280].map((x, i) => (
        <circle key={i} cx={x} cy="72" r="4" fill="currentColor" opacity="0.35" />
      ))}
    </svg>
  ),
  // Speed / motion trails
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
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
        />
      ))}
    </svg>
  ),
  // Network / integrations
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t3">
      {[
        [40, 40], [280, 40], [40, 104], [280, 104], [160, 72],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="currentColor" opacity="0.45" />
      ))}
      {[[40, 40], [280, 40], [40, 104], [280, 104]].map(([x, y], i) => (
        <motion.line
          key={i}
          x1={x} y1={y} x2="160" y2="72"
          stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.08 }}
        />
      ))}
    </svg>
  ),
  // Content fan
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t4">
      {[
        [60, 30], [100, 20], [140, 30],
        [180, 30], [220, 20], [260, 30],
      ].map(([x, y], i) => (
        <motion.rect
          key={i}
          x={x - 12} y={y} width="24" height="38" rx="4"
          stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"
          initial={{ y: y + 20, opacity: 0 }}
          whileInView={{ y, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
        />
      ))}
    </svg>
  ),
  // Stacked integration blocks
  (
    <svg viewBox="0 0 320 144" fill="none" preserveAspectRatio="none" key="t5">
      {[
        [90, 40], [160, 30], [230, 40],
        [90, 90], [160, 100], [230, 90],
      ].map(([x, y], i) => (
        <motion.rect
          key={i}
          x={x - 20} y={y - 15} width="40" height="30" rx="6"
          stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        />
      ))}
    </svg>
  ),
];

export function Features() {
  return (
    <section id="solutions" className="section-light py-28 lg:py-36">
      <div className="container flex flex-col items-center gap-10 text-center">
        <Reveal axis="y" distance={24}>
          <span className="light-label">Main features</span>
        </Reveal>
        <Reveal axis="y" distance={24} delay={0.05}>
          <h2 className="text-size-h2 max-w-4xl" style={{ color: "#0b0216" }}>
            Six systems. <span className="span-h1-gradient">One connected stack.</span>
          </h2>
        </Reveal>
        <Reveal axis="y" distance={24} delay={0.1}>
          <p className="text-size-16-16-14 max-w-xl" style={{ color: "#55527a" }}>
            AI-driven tools that qualify leads, book meetings, and scale
            revenue — on autopilot.
          </p>
        </Reveal>

        <div className="mt-6 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <Icon strokeWidth={1.75} className="h-6 w-6" />
                    </span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p className="mt-2">{feature.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
