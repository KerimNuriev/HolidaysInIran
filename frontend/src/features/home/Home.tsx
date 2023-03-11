import React, { useEffect } from "react"
import CitySwiper from "../cities/CitySwiper"
import TourSwiper from "../tours/TourSwiper"
import { loadCities } from '../cities/citiesSlice';
import { loadTours } from '../tours/toursSlice';
import { useAppDispatch } from "../../store";

function Home (): JSX.Element {




return (

    <>
        <div><h1>Ya est' home!</h1>  </div>
        <CitySwiper/>
        <br></br>
        <br></br>
        <TourSwiper/>
    </>
    )
}

export default Home