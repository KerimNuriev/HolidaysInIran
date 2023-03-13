import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import CityCard from './CityCard';
import type { RootState } from '../../store';
import './CitySwiper.scss';


function CitySwiper (): JSX.Element {

const citiesList = useSelector((state: RootState) => state.cities.citiesList)

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      rewind={true}
      centeredSlides={false}
      loop
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
      {citiesList?.map((city) => (
        <SwiperSlide key={city.id}>
          <CityCard city={city} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CitySwiper