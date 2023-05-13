import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsFormValidityTrueAction,
  setIsFormValidityFalseAction,
} from '../../store/errors/errors.actions';
import './Form.css';

const Form = ({ name, onSubmit, children }) => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const onFormUpdate = (data) => {
    data
      ? dispatch(setIsFormValidityTrueAction())
      : dispatch(setIsFormValidityFalseAction());
  };

  const handleFormValidity = () => {
    const formValidityBoolean = formRef.current.checkValidity();
    onFormUpdate(formValidityBoolean);
  };

  return (
    <form
      action="#"
      className="popup__form"
      name={`myForm${name}`}
      onSubmit={onSubmit}
      ref={formRef}
      onChange={handleFormValidity}
    >
      {children}
    </form>
  );
};

export default Form;
