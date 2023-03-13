import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { useAppDispatch } from '../../store';
import type TourType from '../tours/types/TourType';
import MyTourCard from './MyTourCard';

function MyTour(): JSX.Element {

  const myTourCities = useSelector((state: RootState) => state.cities.myTourCities);
  
  return (
    <>
    <h1 style={{ margin: 'auto'}}>Собери свой тур</h1>
    <div className='container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    {myTourCities.map((el, index, array) => <MyTourCard key={index} array={array} myTourCity={el} index={index}/>)}
   
    </div>
    </>
  );
}

export default MyTour;
