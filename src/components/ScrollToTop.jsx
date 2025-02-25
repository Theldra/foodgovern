import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Add smooth scrolling effect
    });
  }, [pathname]);

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;