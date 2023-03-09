import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout'
import Home from '../features/Home/Home'

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="#" />
        <Route path="#" />
        <Route path="#" />
        <Route path="#" />
      </Route>
    </Routes>
  );
}

export default App;
