import React from 'react';
import CitySwiper from '../cities/CitySwiper';
import ToursForm from './ToursForm/ToursForm';
import TourSwiper from '../tours/TourSwiper';
import Form from "../formApplication/Form";
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
