import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import TourCard from './TourCard';
import type { RootState } from '../../store';
import './TourSwiper.scss';

function TourSwiper(): JSX.Element {
  const toursList = useSelector((state: RootState) => state.tours.toursListPlusMyTour);



  return (
    <div id="tour-swiper">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        rewind={true}
        centeredSlides={false}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="tour-swiper"
      >
        {toursList?.map((tour) => (
          <SwiperSlide key={tour.id}>
            <TourCard tour={tour} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TourSwiper;
