import React from "react"
import CitySlider from "../cities/CitySwiper"
import TourSlider from "./TourSlider/TourSlider"

function Home (): JSX.Element {

return (
    <>
        <div><h1>Ya est' home!</h1>  </div>
        <CitySlider />
        <br></br>
        <br></br>
        <TourSlider/>
    </>
    )
}

export default Home