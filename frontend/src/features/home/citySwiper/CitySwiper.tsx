import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCityCard from "./CityCard";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";


function CitySlider (): JSX.Element {

const dispatch = useAppDispatch()
const citiesList = useSelector((state: RootState) => state.citySwiper.citiesList)

return (
    <Swiper
    slidesPerView={1}
        spaceBetween={30}
        rewind={true}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {citiesList?.map((city) => <SwiperSlide key={city.id}><SwiperCityCard city={city}/></SwiperSlide> )}  
    </Swiper>
)
}

export default CitySlider