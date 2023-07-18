import React, { FC } from 'react';
import './PopupServerError.css';

type PopupServerErrorProps = {
  popupServerErrorMessage: string;
};

const PopupServerError: FC<PopupServerErrorProps> = ({
  popupServerErrorMessage,
}) => {
  return (
    <p className="popup-server-error" aria-live="polite">
      {popupServerErrorMessage}
    </p>
  );
};

export default PopupServerError;
