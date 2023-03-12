import React from 'react';
import CitySwiper from '../cities/CitySwiper';
import ToursForm from './ToursForm/ToursForm';
import TourSwiper from '../tours/TourSwiper';

function Home(): JSX.Element {
  return (
    <>
      <CitySwiper />
      <div className="container">
        <h1 className="main-title">Туры в Иран</h1>
        <TourSwiper />
      </div>
      <ToursForm />
    </>
  );
}

export default Home;
