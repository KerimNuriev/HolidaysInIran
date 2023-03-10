// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import citiesReducer from './features/Home/CitySwiper/citiesSlice';
import daysSlice from './features/Tour8/Day8Swiper/DaysSlice';


const store = configureStore({
  reducer: {
    // ключ - название раздела (feature)
    // значение - сам редьюсер
    // у каждого раздела сайт свой собственный редьюсер
    citySwiper: citiesReducer,
    day8Swiper: daysSlice,
  },
});

export default store;

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// тип централизованного состояния
export type RootState = ReturnType<typeof store.getState>;