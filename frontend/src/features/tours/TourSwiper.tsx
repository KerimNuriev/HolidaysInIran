import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import SwiperTourCard from "./TourCard";


function TourSlider (): JSX.Element {

const toursList = useSelector((state: RootState) => state.tourSwiper.toursList)

return (
    <Swiper
      spaceBetween={500}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {toursList?.map((tour) => <SwiperSlide key={tour.id}><SwiperTourCard tour={tour}/></SwiperSlide>)}
      
    </Swiper>
)
}

export default TourSlider