"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/content/services";

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 64;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ServicesCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const len = SERVICES.length;
  const currentIndex = ((step % len) + len) % len;

  const nextStep = useCallback(() => setStep((s) => s + 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + len) % len;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    let normalized = diff;
    if (diff > len / 2) normalized -= len;
    if (diff < -len / 2) normalized += len;
    if (normalized === 0) return "active";
    if (normalized === -1) return "prev";
    if (normalized === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full">
      <svg
        width="0"
        height="0"
        className="absolute"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="clixServiceIconGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#e4a8ff" />
            <stop offset="100%" stopColor="#b366ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] flex flex-col lg:flex-row min-h-[36rem] lg:min-h-[34rem] border border-white/10">
        <div
          className="w-full lg:w-[44%] min-h-[22rem] lg:h-auto relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-12 lg:px-14"
          style={{
            background:
              "linear-gradient(135deg, #7f00ff 0%, #b300ff 55%, #e100ff 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#7f00ff] via-[#7f00ff]/70 to-transparent z-40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#e100ff] via-[#e100ff]/70 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20 py-16">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(-(len / 2), len / 2, distance);

              return (
                <motion.div
                  key={service.title}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-3 px-5 md:px-7 py-3 md:py-3.5 rounded-full transition-colors duration-500 text-left border",
                      isActive
                        ? "bg-white text-[#7f00ff] border-white"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 transition-colors duration-500",
                        isActive ? "text-[#7f00ff]" : "text-white/50",
                      )}
                      strokeWidth={1.75}
                    />
                    <span className="text-[0.78rem] md:text-[0.85rem] font-medium tracking-[0.08em] uppercase whitespace-nowrap">
                      {service.title}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-h-[28rem] lg:h-auto relative bg-white/[0.02] flex items-center justify-center p-8 md:p-12 lg:p-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="relative w-full max-w-[26rem] aspect-[4/5] flex items-center justify-center">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={service.title}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : 80,
                    scale: isActive ? 1 : 0.88,
                    opacity: isActive ? 1 : 0.35,
                    rotate: isPrev ? -2 : isNext ? 2 : 0,
                    zIndex: isActive ? 20 : 10,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                    mass: 0.9,
                  }}
                  className="absolute inset-0 rounded-[1.75rem] overflow-hidden border border-white/10 origin-center"
                  style={{
                    backgroundColor: "#0a0414",
                    backgroundImage:
                      "radial-gradient(circle at 28% 22%, rgba(127,0,255,0.5) 0%, rgba(127,0,255,0.14) 32%, transparent 62%), radial-gradient(circle at 82% 88%, rgba(225,0,255,0.38) 0%, transparent 60%)",
                    willChange: "transform, opacity",
                    contain: "layout paint",
                  }}
                >
                  <div className="absolute inset-x-0 top-[18%] flex justify-center">
                    <div className="relative">
                      <div
                        className="pointer-events-none absolute -inset-10 rounded-full blur-2xl opacity-70"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(225,0,255,0.5) 0%, rgba(127,0,255,0.26) 45%, transparent 72%)",
                        }}
                      />
                      <div
                        className="relative rounded-[1.85rem] p-[1.5px]"
                        style={{
                          background:
                            "linear-gradient(140deg, rgba(255,255,255,0.55) 0%, rgba(180,100,255,0.18) 32%, rgba(255,255,255,0.06) 58%, rgba(225,0,255,0.55) 100%)",
                          boxShadow: "0 24px 50px -22px rgba(127,0,255,0.55)",
                        }}
                      >
                        <div
                          className="relative h-32 w-32 md:h-36 md:w-36 rounded-[1.75rem] overflow-hidden flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(160deg, rgba(20,8,38,0.96) 0%, rgba(8,3,18,1) 100%), radial-gradient(ellipse at 50% 0%, rgba(225,0,255,0.32) 0%, rgba(127,0,255,0.1) 38%, transparent 70%)",
                          }}
                        >
                          <div
                            className="absolute top-0 left-5 right-5 h-px"
                            style={{
                              background:
                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
                            }}
                          />
                          <Icon
                            strokeWidth={1.3}
                            className="relative h-14 w-14 md:h-16 md:w-16"
                            stroke="url(#clixServiceIconGradient)"
                            style={{
                              filter:
                                "drop-shadow(0 2px 6px rgba(225,0,255,0.45))",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute inset-x-0 bottom-0 p-7 pt-24 bg-gradient-to-t from-black/95 via-black/55 to-transparent flex flex-col gap-3 pointer-events-none"
                      >
                        <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/85">
                          {String(index + 1).padStart(2, "0")} ·{" "}
                          {service.title}
                        </div>
                        <p className="text-white text-base md:text-lg font-normal leading-snug tracking-tight">
                          {service.tagline}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-6 left-6 flex items-center gap-2 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                    <span className="text-white/75 text-[0.6rem] font-medium uppercase tracking-[0.3em]">
                      Live
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCarousel;
