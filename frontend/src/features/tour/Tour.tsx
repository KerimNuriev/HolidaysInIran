import React, { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store"
import type { RootState } from "../../store"
import DaysSwiper from "../days/DaysSwiper"
import { loadCities } from "../cities/citiesSlice";
import { loadTours } from "../tours/toursSlice";
import './Tour.scss'
import TourTitle from "./TourTitle";
import Schedules from "./Schedules";
import ToursForm from "../toursForm/ToursForm";
import DayInfo from "./DayInfo";
import type DayType from "../days/types/DayType";
import { chooseDay } from "../days/daysSlice"
import TourInfo from "./TourInfo";



function Tour (): JSX.Element {

  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const [defaultSchedule, setDefaultSchedule] = useState('')

  const tours= useSelector((state: RootState) => state.tours.toursList)
  const day = useSelector((state: RootState) => state.days.day)

  const [oneTour] = tours.filter((tour) => tour.id === Number(id))

  const onChooseSchedule = (chosenSchedule: string):void => {
     setDefaultSchedule(chosenSchedule)
  }
  
  // if (tours.length === 0) { return ( <div>Loading</div>)}
  useEffect( () => {
    dispatch(chooseDay({id: Number(oneTour?.Days[0].id)}))
  },[dispatch, oneTour])
 
if (tours.length===0) {
  return <h1>Loading</h1>
  } if  (Number(id) > tours.length || Number.isNaN(Number(id)) || Number(id) <= 0 ) {
    navigate('/notfound')
  }

    return (
      <div className="tourContainer">
    <div className="oneTourTitle">
     <TourTitle oneTour={oneTour}/>
    </div>
    <div>
      <DaysSwiper oneTour={oneTour}/>
    </div>
    <div>
      <DayInfo day={day}/>
    </div>
        <div>
           <TourInfo oneTour={oneTour}/>
        </div>
        <div>
            <Schedules schedules={oneTour.Schedules} onClick={onChooseSchedule}/>
    </div>
    <ToursForm defaultSchedule={defaultSchedule} />
       </div>
    );
}

export default Tour;
