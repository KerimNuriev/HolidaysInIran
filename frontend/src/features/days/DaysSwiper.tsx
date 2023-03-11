import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from "react-redux";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper";
import DayCard from "./DayCard";
import type { RootState } from "../../store";


function DaysSwiper(): JSX.Element {

  const days = useSelector((state: RootState ) => state.day8Swiper.daysList.filter((day) => day.tourId === 1))
  console.log(days);
  
return (
<>  <h1>Days</h1>
         <Swiper slidesPerView={2} spaceBetween={400} pagination={{
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
            {days.map((day) => <SwiperSlide key={day.id}><DayCard day={day}/></SwiperSlide>)}  
        </Swiper>
   
</>
 )
}

export default DaysSwiper;