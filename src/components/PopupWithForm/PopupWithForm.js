import Popup from "./Popup";
import Form from "./Form";
import './PopupWithForm.css';

const PopupWithForm = ({ name, title, isOpen, onClose, buttonText, onSubmit, loadingText, isLoading, formValidity, onFormUpdate, children }) => {

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <Form name={`myForm${name}`} onSubmit={onSubmit} onFormUpdate={onFormUpdate}>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className={`submit-button popup__button ${!formValidity ? "submit-button_disabled" : ""}`} disabled={!formValidity} >{isLoading ? loadingText : buttonText}</button>
      </Form>
    </Popup>
  )
}

export default PopupWithForm;
