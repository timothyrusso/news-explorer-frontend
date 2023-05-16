import Popup from '../Popup/Popup';
import Form from '../Form/Form';
import './PopupWithForm.css';
import FormRedirect from '../FormRedirect/FormRedirect';

const PopupWithForm = ({
  name,
  title,
  isOpen,
  popupRedirectText,
  buttonText,
  onSubmit,
  loadingText,
  isLoadingText,
  formValidity,
  children,
}) => {
  return (
    <Popup isOpen={isOpen} name={name}>
      <Form name={`myForm${name}`} onSubmit={onSubmit}>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          type="submit"
          className={`submit-button popup__button ${
            !formValidity ? 'submit-button_disabled' : ''
          }`}
          disabled={!formValidity}
        >
          {isLoadingText ? loadingText : buttonText}
        </button>
        <FormRedirect popupRedirectText={popupRedirectText} />
      </Form>
    </Popup>
  );
};

export default PopupWithForm;
