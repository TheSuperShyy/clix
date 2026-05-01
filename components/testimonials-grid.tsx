"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/content/testimonials";

type Props = { items: Testimonial[] };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

function TestimonialCard({
  testimonial,
  isActive,
  onPlay,
  onPause,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  onPlay: () => void;
  onPause: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (!isActive && !v.paused) v.pause();
  }, [isActive]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      onPlay();
      v.play().catch(() => {});
    } else {
      onPause();
      v.pause();
    }
  };

  const initial = testimonial.name.charAt(0);

  return (
    <motion.figure
      variants={itemVariants}
      className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-3 transition-colors duration-300 hover:border-white/20"
    >
      <div className="flex items-center justify-end gap-1.5 px-2 pb-2 pt-1">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
      </div>

      <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-3 pb-5">
        <div className="mb-3 flex items-center justify-between px-1">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                fill="currentColor"
                strokeWidth={0}
                className="text-[#7f00ff]"
              />
            ))}
          </div>
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#b366ff]/40"
            style={{ background: "rgba(127,0,255,0.22)" }}
          >
            <Quote
              size={11}
              fill="currentColor"
              strokeWidth={0}
              className="text-[#e4a8ff]"
            />
          </div>
        </div>

        <div className="relative aspect-[9/14] overflow-hidden rounded-xl bg-black">
          {testimonial.videoSrc ? (
            <>
              <video
                ref={videoRef}
                src={testimonial.videoSrc}
                poster={testimonial.posterSrc}
                preload="metadata"
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isActive ? "Pause video" : "Play video"}
                className="group absolute inset-0 flex items-center justify-center"
              >
                <span
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300",
                    isActive
                      ? "pointer-events-none scale-75 opacity-0"
                      : "scale-100 opacity-100 group-hover:scale-110",
                  )}
                  style={{
                    background:
                      "linear-gradient(135deg, #8a1aff 0%, #7f00ff 100%)",
                    boxShadow:
                      "0 12px 40px rgba(127,0,255,0.55), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <Play
                    size={22}
                    fill="white"
                    strokeWidth={0}
                    className="translate-x-[1px] text-white"
                  />
                </span>
              </button>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0414]">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(138,26,255,0.5), rgba(127,0,255,0.4))",
                  boxShadow:
                    "0 12px 40px rgba(127,0,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <Play
                  size={20}
                  fill="white"
                  strokeWidth={0}
                  className="translate-x-[1px] text-white"
                />
              </span>
            </div>
          )}
        </div>
      </div>

      <div dir="rtl" className="flex items-center gap-3 px-3 pt-4 pb-1">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-medium text-white"
          style={{ background: "linear-gradient(135deg, #7f00ff, #e100ff)" }}
        >
          {initial}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[0.95rem] font-medium text-white">
            {testimonial.name}
          </span>
          <span className="text-xs text-color-ddbbf1/70">
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.figure>
  );
}

export function TestimonialsGrid({ items }: Props) {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map((t) => (
        <TestimonialCard
          key={t.id}
          testimonial={t}
          isActive={playingId === t.id}
          onPlay={() => setPlayingId(t.id)}
          onPause={() => setPlayingId(null)}
        />
      ))}
    </motion.div>
  );
}
