import React, { FC } from 'react';
import './NothingFound.css';

type NothingFoundProps = {
  title: string;
  text: string;
  nothingFoundIcon: string;
};

const NothingFound: FC<NothingFoundProps> = ({
  title,
  text,
  nothingFoundIcon,
}) => {
  return (
    <div className="nothing-found">
      <img
        src={nothingFoundIcon}
        alt={`No results for ${title}`}
        className="nothing-found__icon"
      />
      <h2 className="nothing-found__title">{title}</h2>
      <p className="nothing-found__text">{text}</p>
    </div>
  );
};

export default NothingFound;
