import React from "react"
import CitySlider from "./citySwiper/CitySwiper"
import TourSlider from "./tourSwiper/TourSwiper"

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