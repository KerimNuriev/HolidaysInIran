import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

function PhotoSwiper(): JSX.Element {
  return (
    <div id="tour-swiper">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        rewind={true}
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
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="tour-swiper"
      >
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo1.jpeg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo2.jpeg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo3.jpeg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo4.jpeg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo5.jpeg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo6.jpg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo7.jpg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo8.jpg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo9.jpg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo10.jpg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo11.jpg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tours__img">
            <img
              src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/photo12.jpg"
              alt="contact"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PhotoSwiper;
