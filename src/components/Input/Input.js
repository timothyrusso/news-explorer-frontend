import React from "react";
import './Input.css'

const Input = ({ type, idName, name, fieldName, placeholder, onChange, minLength, maxLength, value, errorMessage, labelText }) => {

  return (
    <>
      <label htmlFor={idName} className="popup__input-label">{labelText}</label>
      <input type={type} id={idName} name={name} className={`popup__input popup__input_${fieldName}`} placeholder={placeholder} required
        minLength={minLength} maxLength={maxLength} value={value} onChange={onChange} />
      <span id={`${idName}-error`} className="popup__input_type_error">{errorMessage[name]}</span>
    </>
  )
}

export default Input;
