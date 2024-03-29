import React, { useRef, FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsFormValidityTrueAction,
  setIsFormValidityFalseAction,
} from '../../store/errors/errors.actions';
import './Form.css';

type FormProps = {
  name: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

const Form: FC<FormProps> = ({ name, onSubmit, children }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  const onFormUpdate = (data: boolean) => {
    data
      ? dispatch(setIsFormValidityTrueAction())
      : dispatch(setIsFormValidityFalseAction());
  };

  const handleFormChange = () => {
    const formValidityBoolean = formRef.current?.checkValidity();
    if (formValidityBoolean) {
      onFormUpdate(formValidityBoolean);
    }
  };

  return (
    <form
      action="#"
      className="popup__form"
      name={`myForm${name}`}
      onSubmit={onSubmit}
      ref={formRef}
      onChange={handleFormChange}
    >
      {children}
    </form>
  );
};

export default Form;
