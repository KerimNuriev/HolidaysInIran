import React from "react"
import CitySlider from "./CitySwiper/CitySwiper"
import TourSlider from "./TourSwiper/TourSwiper"

function Home (): JSX.Element {

return (
    <>
        <div><h1>Ya est' home!</h1>  </div>
        <CitySlider/>
        <br></br>
        <br></br>
        <TourSlider/>
    </>
    )
}

export default Home