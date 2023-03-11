import React, { useEffect } from "react"
import { useAppDispatch } from "../../store"
import DaysSwiper from "../days/DaysSwiper"
import { loadDays } from "../days/daysSlice";
import TourSwiper from "../tours/TourSwiper";


function Tour8 (): JSX.Element {

return (
  <><div>
    <h1>Tour8 component</h1>
  </div><div>
      <DaysSwiper />
    </div></>
 )
}

export default Tour8