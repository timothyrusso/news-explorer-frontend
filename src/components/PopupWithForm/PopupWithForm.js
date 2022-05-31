import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import "./PopupWithForm.css";
import FormRedirect from "../FormRedirect/FormRedirect";

const PopupWithForm = ({
  name,
  title,
  isOpen,
  onClose,
  onSwitch,
  popupRedirectText,
  buttonText,
  onSubmit,
  loadingText,
  isLoadingText,
  formValidity,
  onFormUpdate,
  children,
}) => {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <Form
        name={`myForm${name}`}
        onSubmit={onSubmit}
        onFormUpdate={onFormUpdate}
      >
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          type="submit"
          className={`submit-button popup__button ${
            !formValidity ? "submit-button_disabled" : ""
          }`}
          disabled={!formValidity}
        >
          {isLoadingText ? loadingText : buttonText}
        </button>
        <FormRedirect
          onSwitch={onSwitch}
          popupRedirectText={popupRedirectText}
        />
      </Form>
    </Popup>
  );
};

export default PopupWithForm;
