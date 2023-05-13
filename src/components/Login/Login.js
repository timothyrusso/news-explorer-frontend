import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import PopupServerError from '../PopupServerError/PopupServerError';
import { useDispatch } from 'react-redux';
import { setIsLoadingTextTrueAction } from '../../store/toggles/toggles.actions';

const Login = ({
  isOpen,
  onSwitch,
  popupRedirectText,
  isLoadingText,
  formValidity,
  onInputUpdate,
  errorMessage,
  handleLoginSubmit,
  popupServerErrorMessage,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = (evt) => {
    onInputUpdate(evt);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    onInputUpdate(evt);
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    dispatch(setIsLoadingTextTrueAction());
    evt.preventDefault();
    handleLoginSubmit(password, email);
  };

  React.useEffect(() => {
    setEmail('');
    setPassword('');
  }, [isOpen]);

  return (
    <>
      <PopupWithForm
        name="signin"
        title="Sign in"
        isOpen={isOpen}
        onSwitch={onSwitch}
        popupRedirectText={popupRedirectText}
        buttonText={'Sign in'}
        loadingText={'Loading..'}
        isLoadingText={isLoadingText}
        onSubmit={handleSubmit}
        formValidity={formValidity}
      >
        <Input
          type={'email'}
          idName={'email-signin-input'}
          name={'email'}
          fieldName={'field_email'}
          placeholder={'Enter email'}
          value={email}
          onChange={handleEmailChange}
          errorMessage={errorMessage}
          labelText={'Email'}
        />
        <Input
          type={'password'}
          idName={'password-signin-input'}
          name={'password'}
          fieldName={'field_password'}
          placeholder={'Enter password'}
          minLength={'8'}
          maxLength={'20'}
          value={password}
          onChange={handlePasswordChange}
          errorMessage={errorMessage}
          labelText={'Password'}
        />
        <PopupServerError popupServerErrorMessage={popupServerErrorMessage} />
      </PopupWithForm>
    </>
  );
};

export default Login;
