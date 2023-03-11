import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import Layout from './Layout';
import Home from '../features/home/Home';
import NotFound from '../features/notFound/NotFound';
import Tour8 from '../features/tour8/Tour8';
import Tour10 from '../features/tour10/Tour10';
import Admin from '../features/Admin/Admin';
import MyTour from '../features/myTour/MyTour';
import Faq from '../features/faq/Faq';
import './App.scss';
import 'swiper/css';
import { useAppDispatch } from '../store';
import { loadCities } from '../features/cities/citiesSlice';
import { loadTours } from '../features/tours/toursSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCities());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tour8" element={<Tour8 />} />
        <Route path="/tour10" element={<Tour10 />} />
        <Route path="/mytour" element={<MyTour />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
