import React, { FC, ReactNode } from 'react';
import Popup from '../Popup/Popup';
import Form from '../Form/Form';
import FormRedirect from '../FormRedirect/FormRedirect';
import { useAppSelector } from '../../hooks/useAppSelector';
import './PopupWithForm.css';

type PopupWithFormProps = {
  name: string;
  title: string;
  isOpen: boolean;
  popupRedirectText: string;
  buttonText: string;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  loadingText: string;
  isLoadingText: boolean;
  children: ReactNode;
};

const PopupWithForm: FC<PopupWithFormProps> = ({
  name,
  title,
  isOpen,
  popupRedirectText,
  buttonText,
  onSubmit,
  loadingText,
  isLoadingText,
  children,
}) => {
  const formValidity = useAppSelector((state) => state.errors.formValidity);
  const infoTooltip = useAppSelector(
    (state) => state.toggles.isInfoTooltipOpen
  );

  return (
    <Popup isOpen={isOpen} name={name} infoTooltip={infoTooltip}>
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
