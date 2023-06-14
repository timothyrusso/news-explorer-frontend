import React from 'react';
import Popup from '../Popup/Popup';
import { usePopup } from '../../hooks/usePopup';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import './InfoTooltip.css';

const InfoTooltip = () => {
  const { handleSigninPopupClick } = usePopup();
  const isOpen = useSelector(
    (state: RootState) => state.toggles.isInfoTooltipOpen
  );

  return (
    <Popup isOpen={isOpen} infoTooltip={true}>
      <div className="info-tooltip">
        <p className="info-tooltip__text">
          Registration successfully completed!
        </p>
        <button
          aria-label="signin"
          type="button"
          className="info-tooltip__button"
          onClick={handleSigninPopupClick}
        >
          Sign in
        </button>
      </div>
    </Popup>
  );
};

export default InfoTooltip;
