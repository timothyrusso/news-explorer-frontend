import { useState, useEffect } from 'react';

export const useScrollBehavior = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackground = () => {
    setNavbarColor(window.scrollY >= 66);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return { navbarColor };
};
