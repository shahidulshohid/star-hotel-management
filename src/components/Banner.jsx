"use client"

import Image from "next/image";
import banner1 from "@/assets/banner/banner1.jpg"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image className="w-full h-[450px]" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-[450px]" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-[450px]" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-[450px]" src={banner1} alt=""/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper -mt-14 w-10/12 mx-auto"
      >
        <SwiperSlide>
        <Image className="h-20 rounded-tl-full rounded-br-full" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="h-20 rounded-tl-full rounded-br-full" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="h-20 rounded-tl-full rounded-br-full" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="h-20 rounded-tl-full rounded-br-full" src={banner1} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner
