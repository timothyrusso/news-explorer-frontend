import "./InfoTooltip.css";
import Popup from "../Popup/Popup";

const InfoTooltip = ({ isOpen, onClose, openSignin }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} infoTooltip={true}>
      <div className="info-tooltip">
        <p className="info-tooltip__text">
          Registration successfully completed!
        </p>
        <button
          aria-label="signin"
          type="button"
          className="info-tooltip__button"
          onClick={openSignin}
        >
          Sign in
        </button>
      </div>
    </Popup>
  );
};

export default InfoTooltip;
