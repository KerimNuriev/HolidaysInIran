import React from 'react';
import CitySwiper from '../cities/CitySwiper';
import ToursForm from './ToursForm/ToursForm';
import TourSwiper from '../tours/TourSwiper';
import PhotoSwiper from '../photo/PhotoSwiper';

function Home(): JSX.Element {
  return (
    <>
      <CitySwiper />
      <div className="container">
        <h1 className="main-title">Туры в Иран</h1>
        <TourSwiper />
      </div>
      <ToursForm defaultSchedule={undefined} />
      <div className="container">
        <h2 className="main-title">Путешествия по Ирану</h2>
      </div>
    </>
  );
}

export default Home;
