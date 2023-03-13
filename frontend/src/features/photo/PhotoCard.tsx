import React from 'react';

import type PhotoType from './types/PhotoType';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PhotoCard({ elem }: { elem: PhotoType }): JSX.Element {
  return (
    <div className="tours__img">
      <img src={elem?.photo} alt="contact" />
    </div>
  );
}
export default PhotoCard;
