import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import PopupServerError from '../PopupServerError/PopupServerError';
import { useDispatch } from 'react-redux';
import { setIsLoadingTextTrueAction } from '../../store/toggles/toggles.actions';

const Register = ({
  isOpen,
  onSwitch,
  popupRedirectText,
  isLoadingText,
  formValidity,
  onInputUpdate,
  errorMessage,
  handleRegisterSubmit,
  popupServerErrorMessage,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = (evt) => {
    onInputUpdate(evt);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    onInputUpdate(evt);
    setPassword(evt.target.value);
  };

  const handleUsernameChange = (evt) => {
    onInputUpdate(evt);
    setUsername(evt.target.value);
  };

  const handleSubmit = (evt) => {
    dispatch(setIsLoadingTextTrueAction());
    // Prevent the browser from navigating to the form address
    evt.preventDefault();
    handleRegisterSubmit(email, password, username);
  };

  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setUsername('');
  }, [isOpen]);

  return (
    <>
      <PopupWithForm
        name="signup"
        title="Sign up"
        isOpen={isOpen}
        onSwitch={onSwitch}
        popupRedirectText={popupRedirectText}
        buttonText={'Sign up'}
        loadingText={'Saving..'}
        isLoadingText={isLoadingText}
        onSubmit={handleSubmit}
        formValidity={formValidity}
      >
        <Input
          type={'email'}
          idName={'email-input'}
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
          idName={'password-input'}
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
        <Input
          type={'text'}
          idName={'username-input'}
          name={'username'}
          fieldName={'field_username'}
          placeholder={'Enter your username'}
          minLength={'2'}
          maxLength={'20'}
          value={username}
          onChange={handleUsernameChange}
          errorMessage={errorMessage}
          labelText={'Username'}
        />
        <PopupServerError popupServerErrorMessage={popupServerErrorMessage} />
      </PopupWithForm>
    </>
  );
};

export default Register;
