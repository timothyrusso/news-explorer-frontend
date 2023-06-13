import React, { FC } from 'react';
import { usePopup } from '../../hooks/usePopup';
import './FormRedirect.css';

type FormRedirectProps = {
  popupRedirectText: string;
};

const FormRedirect: FC<FormRedirectProps> = ({ popupRedirectText }) => {
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
