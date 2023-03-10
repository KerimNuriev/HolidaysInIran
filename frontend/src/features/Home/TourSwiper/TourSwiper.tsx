import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


function TourSlider (): JSX.Element {

return (
    <Swiper
      spaceBetween={500}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/349502-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/380108-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/348503-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/917248-village-mountains-landscape-Iran-Rocky-Mountains.jpg"/></SwiperSlide>
    </Swiper>
)
}

export default TourSlider