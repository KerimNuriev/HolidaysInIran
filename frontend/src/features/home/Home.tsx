import React from 'react';
import CitySwiper from '../cities/CitySwiper';
import ToursForm from '../toursForm/ToursForm';
import TourSwiper from '../tours/TourSwiper';

function Home(): JSX.Element {
  return (
    <>
      <CitySwiper />
      <div className="container">
        <h1>Ya est' home!</h1>
        <TourSwiper />
      </div>
      <ToursForm />
    </>
  );
}

export default Home;
