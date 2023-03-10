import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import DayCard from "./DayCard";


function Days(): JSX.Element {

return (
<>
   <div>
     <h1>Days</h1>
   </div>
         <Swiper slidesPerView={6} spaceBetween={200} pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                   "@0.00": {
                     slidesPerView: 1,
                     spaceBetween: 10,
                   },
                   "@0.75": {
                     slidesPerView: 2,
                     spaceBetween: 20,
                   },
                   "@1.00": {
                     slidesPerView: 3,
                     spaceBetween: 40,
                   },
                   "@1.50": {
                     slidesPerView: 4,
                     spaceBetween: 50,
                   },
                 } }>
                        
                <SwiperSlide><DayCard/></SwiperSlide>
                <SwiperSlide><img src="/image/day-2.jpg" alt="" style={{width: 150, height: 100}}/></SwiperSlide>
                <SwiperSlide><img src="/image/day-3.jpg" alt="" style={{width: 200, height: 100}}/></SwiperSlide>
                <SwiperSlide><img src="/image/day-4.jpg" alt="" style={{width: 200, height: 100}}/></SwiperSlide>
                <SwiperSlide><img src="/image/day-5.jpg" alt="" style={{width: 200, height: 100}}/></SwiperSlide>
                <SwiperSlide><img src="/image/day-6.jpg" alt="" style={{width: 200, height: 100}} /></SwiperSlide>
                <SwiperSlide><img src="/image/day-7.jpg" alt="" style={{width: 200, height: 100}}/></SwiperSlide>
                <SwiperSlide><img src="/image/day-10.jpg" alt="" style={{width: 200, height: 100}}/></SwiperSlide>
        </Swiper>
</>
 )
}

export default Days;