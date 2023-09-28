import React from 'react';
import aboutImage from '../../images/about_me_image.jpg';
import Description from '../Description/Description';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <section className="about">
        <img
          src={aboutImage}
          className="about__image"
          alt="Timothy - a passionate frontend engineer"
        ></img>
        <Description />
      </section>
    </main>
  );
};

export default Main;
