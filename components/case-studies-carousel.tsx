"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { CircleArrowButton } from "./circle-arrow-button";

export type CaseStudyItem = {
  tags: string[];
  title: string;
  challenge: string;
  solution: string;
  stats: { value: string; caption: string }[];
  quote: string;
};

type Props = {
  items: CaseStudyItem[];
};

export function CaseStudiesCarousel({ items }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const envelopeRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const active = items[activeIndex] ?? items[0];

  const { scrollYProgress } = useScroll({
    target: envelopeRef,
    offset: ["start 90%", "start 30%"],
  });

  const flapRotateX = useTransform(scrollYProgress, [0, 0.5], [0, -180]);
  const letterY = useTransform(
    scrollYProgress,
    [0.35, 1],
    ["110%", "0%"]
  );
  const letterOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-6 lg:gap-8 items-start">
        {/* Left: KPI stats */}
        <div className="flex flex-col gap-4">
          {active.stats.map((stat) => (
            <div
              key={stat.caption}
              className="glass-card py-5 px-6 flex flex-col gap-1"
            >
              <div className="text-4xl font-medium span-h1-gradient">
                {stat.value}
              </div>
              <div className="text-color-ddbbf1 text-sm">{stat.caption}</div>
            </div>
          ))}
        </div>

        {/* Center: envelope with letter */}
        <div ref={envelopeRef} className="envelope-wrap">
          <div className="envelope-back" aria-hidden />

          <motion.div
            className="envelope-letter-layer stack-container"
            style={{ y: letterY, opacity: letterOpacity }}
          >
            <Swiper
              dir="rtl"
              slidesPerView={1}
              loop={false}
              observer
              observeParents
              onSwiper={(s) => {
                swiperRef.current = s;
                setActiveIndex(s.activeIndex);
                setIsBeginning(s.isBeginning);
                setIsEnd(s.isEnd);
                requestAnimationFrame(() => s.update());
              }}
              onSlideChange={(s) => {
                setActiveIndex(s.activeIndex);
                setIsBeginning(s.activeIndex === 0);
                setIsEnd(s.activeIndex === s.slides.length - 1);
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.title}>
                  <article className="case-letter flex flex-col gap-5">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="case-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-[1.65rem] font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <div className="case-letter-divider" />
                    <div className="flex flex-col gap-2">
                      <div className="text-sm text-[#c89bff]">האתגר:</div>
                      <p className="text-white text-size-16-16-14 font-medium">
                        {item.challenge}
                      </p>
                    </div>
                    <div className="case-letter-divider" />
                    <div className="flex flex-col gap-2">
                      <div className="text-sm text-[#c89bff]">הפתרון:</div>
                      <p className="text-white text-size-16-16-14 font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <div className="envelope-front" aria-hidden />

          <motion.div
            className="envelope-flap"
            style={{ rotateX: flapRotateX }}
            aria-hidden
          >
            <svg
              className="envelope-flap-seam"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0 L50 100 L100 0"
                fill="none"
                stroke="rgba(171, 0, 255, 0.35)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <div className="envelope-emblem" aria-hidden>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 22V10l8 12V10"
              />
            </svg>
          </div>
        </div>

        {/* Right: testimonial */}
        <div className="glass-card flex flex-col gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[#e4a8ff]">
            <Quote strokeWidth={1.5} />
          </span>
          <blockquote className="text-white text-size-16-16-14 leading-relaxed">
            {active.quote}
          </blockquote>
        </div>
      </div>

      <div className="flex justify-center gap--16">
        <CircleArrowButton
          direction="prev"
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
          label="Previous case study"
        />
        <CircleArrowButton
          direction="next"
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
          label="Next case study"
        />
      </div>
    </div>
  );
}
