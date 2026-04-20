"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { CircleArrowButton } from "./circle-arrow-button";
import type { LucideIcon } from "lucide-react";

export type BenefitItem = {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
};

type Props = {
  items: BenefitItem[];
};

export function BenefitsCarousel({ items }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-end">
        <div className="flex gap--16">
          <CircleArrowButton
            direction="prev"
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            label="Previous benefit"
          />
          <CircleArrowButton
            direction="next"
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            label="Next benefit"
          />
        </div>
      </div>

      <Swiper
        className="benefits-swiper"
        slidesPerView={1.2}
        centeredSlides
        spaceBetween={24}
        grabCursor
        observer
        observeParents
        watchOverflow
        breakpoints={{
          640: { slidesPerView: 1.8, spaceBetween: 24 },
          992: { slidesPerView: 2.6, spaceBetween: 32 },
          1280: { slidesPerView: 3, spaceBetween: 32 },
        }}
        onSwiper={(s) => {
          swiperRef.current = s;
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
          requestAnimationFrame(() => s.update());
        }}
        onSlideChange={(s) => {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <SwiperSlide key={item.title}>
              <article className="glass-card h-full flex flex-col gap-5 min-h-[22rem]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[#e4a8ff]">
                  <Icon strokeWidth={1.5} />
                </span>
                <h3 className="text-2xl font-medium leading-tight text-white">
                  {item.title}
                </h3>
                <p className="text-color-ddbbf1 text-size-16-16-14">
                  {item.description}
                </p>
                <div className="mt-auto rounded-xl bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wide text-[#c89bff] mb-1">
                    Impact
                  </div>
                  <div className="text-white text-sm font-medium">
                    {item.impact}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
