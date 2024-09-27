"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { Img } from "../common/Img";

const achievemetns = [
  {
    image: "/images/home/achievements/achievement-1.png",
    text: "Implementing trading platform for a client in the US",
  },
  {
    image: "/images/home/achievements/achievement-2.png",
    text: "Ability to cast different nfts on different frames in realtime",
  },
  {
    image: "/images/home/achievements/achievement-3.webp",
    text: "Purchase, Trade pixel art NFTs on the blockchain",
  },
  {
    image: "/images/home/achievements/achievement-4.png",
    text: "Developing advanced recommendation algorithms and secure payment gateways",
  },
  {
    image: "/images/home/achievements/achievement-5.png",
    text: "Building a cybersecurity platform that scans and detects vulnerabilities in the repositories",
  },
  {
    image: "/images/home/achievements/achievement-6.png",
    text: "Developing real-time streaming platform, ensuring compatibility across all devices",
  },
];

export function SwiperAchievements() {
  return (
    <div className="max-w-[600px]" data-aos="fade-up">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 5.5,
          slideShadows: false,
        }}
        creativeEffect={{
          next: {
            translate: [0, 0, -400],
          },
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
      >
        {achievemetns.map((achievement, index) => (
          <SwiperSlide
            style={{
              borderRadius: "20px",
              perspective: "1px",
            }}
            key={index}
          >
            <div className="relative rounded-lg h-full w-full">
              <Img src={achievement.image} alt="slide_image" />
              <div className="p-5 absolute bottom-0  w-full bg-zinc-300/20 ">
                <p className="p sm:text-xl font-bold text-white line-clamp-2">{achievement.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
