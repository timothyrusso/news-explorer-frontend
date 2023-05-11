import './PopupServerError.css';

const PopupServerError = ({ popupServerErrorMessage }) => {
  return <p className="popup-server-error">{popupServerErrorMessage}</p>;
};

export default PopupServerError;
