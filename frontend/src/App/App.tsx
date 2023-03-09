import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout'
import Home from '../features/Home/Home'
import NotFound from '../features/NotFound/NotFound';
import Tour8 from '../features/Tour8/Tour8';
import Tour10 from '../features/Tour10/Tour10';
import MyTour from '../features/MyTour/MyTour';
import Faq from '../features/Faq/Faq';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/tour8" element={<Tour8/>} />
        <Route path="/tour10" element={<Tour10/>}/>
        <Route path="/mytour" element={<MyTour/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/admin" />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
