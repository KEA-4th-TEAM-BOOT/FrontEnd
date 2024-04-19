import React from 'react'
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';
import Player from '../Player';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <Player />
      </>
    );
  };
  
  export default DefaultLayout;