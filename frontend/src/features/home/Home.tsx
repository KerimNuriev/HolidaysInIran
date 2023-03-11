import React, { useEffect } from "react"
import CitySwiper from "../cities/CitySwiper"
import TourSwiper from "../tours/TourSwiper"
import { loadCities } from '../cities/citiesSlice';
import { loadTours } from '../tours/toursSlice';
import { useAppDispatch } from "../../store";
import Form from "../formApplication/Form";

function Home (): JSX.Element {


const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(loadCities());
  dispatch(loadTours())
}, [dispatch]);

return (

    <>
        <div><h1>Ya est' home!</h1>  </div>
        <CitySwiper/>
        <br />
        <Form />
        <br />
        <TourSwiper/>
    </>
    )
}

export default Home