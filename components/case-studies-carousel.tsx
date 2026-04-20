"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Quote } from "lucide-react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const active = items[activeIndex] ?? items[0];

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

        {/* Center: stack carousel */}
        <div className="stack-container relative min-h-[28rem]">
          <Swiper
            className="stack-container"
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
                <article className="glass-card flex flex-col gap-5">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#e4c2ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-medium leading-tight text-white">
                    {item.title}
                  </h3>
                  <div>
                    <div className="text-sm text-[#c89bff] mb-2">Challenge</div>
                    <p className="text-color-ddbbf1 text-size-16-16-14">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm text-[#c89bff] mb-2">Solution</div>
                    <p className="text-color-ddbbf1 text-size-16-16-14">
                      {item.solution}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
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
