import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Moments from './Momets';
import PhotoSwiper from '../features/photo/PhotoSwiper';

function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
        <Moments />
      </div>
      <PhotoSwiper />
      <Footer />
    </div>
  );
}

export default Layout;
