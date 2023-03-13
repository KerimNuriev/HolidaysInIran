import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import PhotoCard from './PhotoCard';

function PhotoSwiper(): JSX.Element {
  const photoList = useSelector((state: RootState) => state.photo.photoList);

  return (
    <div id="tour-swiper">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        rewind
        centeredSlides={false}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        navigation
        modules={[Autoplay, Navigation]}
        className="tour-swiper"
      >
        {photoList.map((elem) => (
          <PhotoCard key={elem.id} elem={elem} />
        ))}
      </Swiper>
    </div>
  );
}

export default PhotoSwiper;
