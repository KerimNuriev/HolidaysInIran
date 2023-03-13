import React from 'react';
import { SwiperSlide } from 'swiper/react';
import type PhotoType from './types/PhotoType';

function PhotoCard({ elem }: { elem: PhotoType }): JSX.Element {
  return (
    <SwiperSlide>
      <div className="tours__img">
        <img src={elem.photo} alt="contact" />
      </div>
    </SwiperSlide>
  );
}
export default PhotoCard;
