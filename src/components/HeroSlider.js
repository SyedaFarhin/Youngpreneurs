"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      loop={true}
      slidesPerView={1}
      style={{ width: '100%', height: 'auto' }}
    >
      {['1','2','3','4','5','SIX'].map((s, i) => (
        <SwiperSlide key={i}>
          <img src={`/${s}.png`} alt={s} style={{ width: '100%', display: 'block' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
