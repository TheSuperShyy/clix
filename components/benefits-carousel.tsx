"use client";

import { useRef } from "react";
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

  return (
    <div className="benefits-tilt-wrap flex flex-col gap-4">
      <div className="benefits-tilt-nav flex items-start justify-end">
        <div className="flex gap--16">
          <CircleArrowButton
            direction="prev"
            onClick={() => swiperRef.current?.slidePrev()}
            label="Previous benefit"
          />
          <CircleArrowButton
            direction="next"
            onClick={() => swiperRef.current?.slideNext()}
            label="Next benefit"
          />
        </div>
      </div>

      <div className="benefits-tilt-stage">
        <Swiper
          dir="rtl"
          className="benefits-swiper benefits-tilt-swiper"
          slidesPerView={1.1}
          spaceBetween={24}
          grabCursor
          loop
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            992: { slidesPerView: 3, spaceBetween: 32 },
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <SwiperSlide key={item.title} style={{ height: "auto" }}>
                <article className="benefit-tilt-card glass-card flex h-full flex-col gap-4 p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[#e4a8ff]">
                    <Icon strokeWidth={1.5} />
                  </span>
                  <h3 className="text-xl font-medium leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-color-ddbbf1 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="mb-1 text-[0.65rem] uppercase tracking-wide text-[#c89bff]">
                      התוצאה
                    </div>
                    <div className="text-sm font-medium text-white">
                      {item.impact}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
