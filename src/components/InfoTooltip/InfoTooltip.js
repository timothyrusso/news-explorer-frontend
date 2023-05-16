import './InfoTooltip.css';
import Popup from '../Popup/Popup';
import { useHandleSigninPopupClick } from '../../hooks/useHandleSigninPopupClick';

const InfoTooltip = ({ isOpen }) => {
  const { handleSigninPopupClick } = useHandleSigninPopupClick();

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
