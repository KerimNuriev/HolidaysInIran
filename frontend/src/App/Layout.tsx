import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Moments from './Momets';

function LayoutUser(): JSX.Element {
  return (
    <div className="App">
      <Header />
      {/* Этот компонент показывает, что сюда нужно рендерить текущую страницу */}
      <Outlet />
      <Moments />
      <Footer />
    </div>
  );
}

export default LayoutUser;
