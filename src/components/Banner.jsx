"use client"

import Image from "next/image";
import banner1 from "@/assets/banner/banner1.jpg"
import banner2 from "@/assets/banner/banner2.jpg"
import banner3 from "@/assets/banner/banner3.jpg"
import React, {useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay  } from 'swiper/modules';

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
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image className="w-full h-[300px] md:h-[450px] object-cover" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-[300px] md:h-[450px] object-cover" src={banner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-[300px] md:h-[450px] object-cover" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-[300px] md:h-[450px] object-cover" src={banner3} alt=""/>
        </SwiperSlide>
      </Swiper>
      <Swiper
         onSwiper={setThumbsSwiper}
         loop={true}
         spaceBetween={10}
         slidesPerView={4}
         freeMode={true}
         watchSlidesProgress={true}
         autoplay={{
           delay: 3000, // 3 seconds delay
           disableOnInteraction: false,
         }}
         modules={[FreeMode, Navigation, Thumbs, Autoplay]}
         className="mySwiper -mt-6 lg:w-6/12 mx-auto md:w-10/12 w-11/12"
      >
        <SwiperSlide>
        <Image className="h-14 w-44 rounded-lg" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="h-14 w-44 rounded-lg" src={banner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="h-14 w-44 rounded-lg" src={banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image className="h-14 w-44 rounded-lg" src={banner3} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner
