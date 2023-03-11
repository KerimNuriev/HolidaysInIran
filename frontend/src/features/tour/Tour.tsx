import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store"
import DaysSwiper from "../days/DaysSwiper"
import { loadCities } from "../cities/citiesSlice";
import { loadTours } from "../tours/toursSlice";



function Tour (): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(loadTours())
  }, [dispatch]);



const tours= useSelector((state: RootState) => state.tours.toursList)

if (tours.length===0) {
  return <h1>Loading</h1>
};


const chosenTour = tours.filter((tour) => tour.id === Number(id))

console.log(tours)

const [oneTour] = chosenTour
console.log(oneTour) 


return (
  <>
  <div>
   <h1>Tour  component</h1>
  </div>
  <div>
   <DaysSwiper oneTour={oneTour}/>
   </div>
   </>
 )
}

export default Tour