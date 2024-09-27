"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { Img } from "@/components/common/Img";

export const SwiperImagesForProject = ({ images }: { images: string[] }) => {
  return (
    <div className="max-w-[600px] pointer-events-none" data-aos="fade-up">
      <Swiper
        modules={[A11y]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Img src={image} imgClassName="object-cover rounded-none" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
