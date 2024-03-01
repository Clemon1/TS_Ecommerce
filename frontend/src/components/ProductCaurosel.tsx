"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, Image } from "@mantine/core";
import NextImage from "next/image";
import im1 from "@/assets/WATCHULTRA.jpeg.jpg";
import im2 from "@/assets/IPADPRO.jpeg.jpg";
import im3 from "@/assets/S24U2.jpg";
import im4 from "@/assets/MACBOOKPRO.jpeg.jpg";
import im5 from "@/assets/XM5.jpg";
import im6 from "@/assets/TATUM2.png";

export default function ItemCaurosel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const data: any = [
    {
      id: 1,
      url: im1,
    },

    {
      id: 2,

      url: im3,
    },
    {
      id: 3,
      url: im6,
    },
    {
      id: 4,

      url: im4,
    },
    {
      id: 5,

      url: im5,
    },
    {
      id: 6,

      url: im2,
    },
  ];
  return (
    <Box w={"100%"} h={"100%"}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'>
        {data.map((data: any) => (
          <SwiperSlide key={data.id}>
            <Image component={NextImage} src={data.url} alt={data.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        {data.map((data: any) => (
          <SwiperSlide key={data.id}>
            <Image component={NextImage} src={data.url} alt={data.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
