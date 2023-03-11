import React from 'react';
import CitySlider from './CitySwiper/CitySwiper';
import ToursForm from './ToursForm/ToursForm';
import TourSlider from './TourSwiper/TourSwiper';

function Home(): JSX.Element {
  return (
    <>
      <CitySlider />
      <div className="container">
        <h1>Ya est' home!</h1>
        <TourSlider />
      </div>
      <ToursForm />
    </>
  );
}

export default Home;
