import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { useAppDispatch } from '../../store';
import type TourType from '../tours/types/TourType';

function MyTour(): JSX.Element {
  const dispatch = useAppDispatch();

  const citiesList = useSelector((state: RootState) => state.cities.citiesList);

  return (
    <>
      <div>Тегеран</div>
      <div>
        <button type="button">+</button>
      </div>
      <div>Тегеран</div>
    </>
  );
}

export default MyTour;
