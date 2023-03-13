import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store"
import DaysSwiper from "../days/DaysSwiper"
import { loadCities } from "../cities/citiesSlice";
import { loadTours } from "../tours/toursSlice";



function Tour (): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(loadTours())
  }, [dispatch]);



const tours= useSelector((state: RootState) => state.tours.toursList)

if (tours.length===0) {
  return <h1>Loading</h1>
} if  (Number(id) > tours.length || Number.isNaN(Number(id)) || Number(id) <= 0 ) {
  navigate('/notfound')
}

const chosenTour = tours.filter((tour) => tour.id === Number(id))



const [oneTour] = chosenTour
const x = [...oneTour.Days]

// console.log(oneTour);
const sortedOneTour = {...oneTour, Days: [...x.sort((a,b) => a.number_day - b.number_day)]}

// console.log(sortedOneTour);


return (
  <>
  <div>
   <h1>Tour  component</h1>
  </div>
  <div>
   <DaysSwiper oneTour={sortedOneTour}/>
   </div>
   </>
 )
}

export default Tour