// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import citiesReducer from './features/home/citySwiper/citiesSlice';


const store = configureStore({
  reducer: {
    // ключ - название раздела (feature)
    // значение - сам редьюсер
    // у каждого раздела сайт свой собственный редьюсер
    citySwiper: citiesReducer
  },
});

export default store;

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// тип централизованного состояния
export type RootState = ReturnType<typeof store.getState>;