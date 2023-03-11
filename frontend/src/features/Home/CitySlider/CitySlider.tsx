import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
<<<<<<< Updated upstream:frontend/src/features/Home/CitySlider/CitySlider.tsx
=======
import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import type { RootState } from "../../store";
>>>>>>> Stashed changes:frontend/src/features/cities/CitySwiper.tsx


function CitySlider (): JSX.Element {

<<<<<<< Updated upstream:frontend/src/features/Home/CitySlider/CitySlider.tsx
=======
const citiesList = useSelector((state: RootState) => state.citySwiper.citiesList)

>>>>>>> Stashed changes:frontend/src/features/cities/CitySwiper.tsx
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
<<<<<<< Updated upstream:frontend/src/features/Home/CitySlider/CitySlider.tsx
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/349502-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/380108-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/348503-4k-wallpaper.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://rare-gallery.com/thumbs/917248-village-mountains-landscape-Iran-Rocky-Mountains.jpg"/></SwiperSlide>
=======
      {citiesList?.map((city) => <SwiperSlide key={city.id}><CityCard city={city}/></SwiperSlide> )}  
>>>>>>> Stashed changes:frontend/src/features/cities/CitySwiper.tsx
    </Swiper>
)
}

export default CitySlider