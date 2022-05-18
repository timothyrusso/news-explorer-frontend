import "./FormRedirect.css";

const FormRedirect = ({ onSwitch, popupRedirectText }) => {
  return (
    <p className="form-redirect">
      or{" "}
      <button
        aria-label="test"
        type="button"
        className="form-redirect_type_link"
        onClick={onSwitch}
      >
        {popupRedirectText}
      </button>
    </p>
  );
};

export default FormRedirect;
