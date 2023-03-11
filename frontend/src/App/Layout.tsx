import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Moments from './Momets';

function LayoutUser(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
        <Moments />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutUser;
