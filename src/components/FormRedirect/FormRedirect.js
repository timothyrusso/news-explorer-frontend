import './FormRedirect.css';
import { usePopup } from '../../hooks/usePopup';

const FormRedirect = ({ popupRedirectText }) => {
  const { handleSwitchPopup } = usePopup();

  return (
    <p className="form-redirect">
      or{' '}
      <button
        aria-label="test"
        type="button"
        className="form-redirect_type_link"
        onClick={handleSwitchPopup}
      >
        {popupRedirectText}
      </button>
    </p>
  );
};

export default FormRedirect;
