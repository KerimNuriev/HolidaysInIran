import React from 'react';
import CitySwiper from '../cities/CitySwiper';
import ToursForm from './ToursForm/ToursForm';
import TourSwiper from '../tours/TourSwiper';

function Home(): JSX.Element {
  return (
    <>
      <CitySwiper />
      <div className="container">
        <TourSwiper />
      </div>
      <ToursForm defaultSchedule={undefined} />
    </>
  );
}

export default Home;
