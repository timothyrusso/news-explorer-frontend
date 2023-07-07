import React, { FC } from 'react';
import { ErrorMessage } from '../../store/errors/error.type';
import './Input.css';

type InputProps = {
  type: string;
  idName: string;
  name: string;
  fieldName: string;
  placeholder: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
  value: string;
  errorMessage: ErrorMessage | {};
  labelText: string;
};

const Input: FC<InputProps> = ({
  type,
  idName,
  name,
  fieldName,
  placeholder,
  onChange,
  minLength,
  maxLength,
  value,
  errorMessage,
  labelText,
}) => {
  return (
    <>
      <label htmlFor={idName} className="popup__input-label">
        {labelText}
      </label>
      <input
        type={type}
        id={idName}
        name={name}
        className={`popup__input popup__input_${fieldName}`}
        placeholder={placeholder}
        required
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <span id={`${idName}-error`} className="popup__input_type_error">
        {(errorMessage as ErrorMessage)[name]}
      </span>
    </>
  );
};

export default Input;
