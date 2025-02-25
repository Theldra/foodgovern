import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const RootLayouts = () => {
  return (
    <div>
      <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
};

export default RootLayouts;