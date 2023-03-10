import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCityCard from "./CityCard";


function CitySlider (): JSX.Element {

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
      <SwiperSlide><SwiperCityCard/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/380108-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/348503-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/917248-village-mountains-landscape-Iran-Rocky-Mountains.jpg"/></SwiperSlide>
    </Swiper>
)
}

export default CitySlider