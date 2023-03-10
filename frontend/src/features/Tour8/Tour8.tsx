import React, { useEffect } from "react"
import { useAppDispatch } from "../../store"
import Days8Swiper from "./Day8Swiper/Days8Swiper"
import { loadDays } from "./Day8Swiper/DaysSlice";



function Tour8 (): JSX.Element {
  const dispatch = useAppDispatch();
  
  useEffect(()=> {
    dispatch(loadDays())
  }, [dispatch])

return (
  <>
  <div>
   <h1>Tour8 component</h1>
  </div>
  <div>
   <Days8Swiper />
   </div>
   </>
 )
}

export default Tour8