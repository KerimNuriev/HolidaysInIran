import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LayoutUser from './Layout';
import Home from '../features/home/Home';
import NotFound from '../features/notFound/NotFound';
import Tour from '../features/tour/Tour';
import Admin from '../features/admin/Admin';
import MyTour from '../features/myTour/MyTour';
import Faq from '../features/faq/Faq';
import './App.scss';
import 'swiper/css';
import type { RootState } from '../store';
import { useAppDispatch } from '../store';
import { loadCities } from '../features/cities/citiesSlice';
import { loadTours } from '../features/tours/toursSlice';
import { getAdmin } from '../features/admin/adminSlice';
import Contact from '../features/contact/Contact';
import { loadDays } from '../features/days/daysSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authChecked = useSelector(
    (state: RootState) => state.admin.authChecked,
  );
  const admin = useSelector((state: RootState) => state.admin.admin);

  useEffect(() => {
    dispatch(loadCities());
    dispatch(loadTours());
    dispatch(loadDays());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch, authChecked, admin]);

  if (!authChecked) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<LayoutUser />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour/:id" element={<Tour />} />
        <Route path="/mytour" element={<MyTour />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
