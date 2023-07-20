import React, { FC } from 'react';
import './Preloader.css';

type PreloaderProps = {
  text?: string;
};

const Preloader: FC<PreloaderProps> = ({ text = 'Searching for news...' }) => {
  return (
    <div className="preloader" aria-live="polite">
      <i className="circle-preloader"></i>
      <p className="preloader__text">{text}</p>
    </div>
  );
};

export default Preloader;
