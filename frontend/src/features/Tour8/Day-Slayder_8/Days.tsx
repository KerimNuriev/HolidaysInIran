import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


function Days(): JSX.Element {

return (
         <>
         <div><h1>Days</h1></div><Swiper
                spaceBetween={500}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
        >
                <SwiperSlide><img src="/image/day-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="//image/day-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/image/day-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/image/day-4.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/image/day-5.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/image/day-6.jpg" /></SwiperSlide>
        </Swiper>
        </>
 )
}

export default Days;