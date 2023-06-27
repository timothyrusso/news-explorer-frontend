import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import PopupServerError from '../PopupServerError/PopupServerError';
import { useDispatch } from 'react-redux';
import { setIsLoadingTextTrueAction } from '../../store/toggles/toggles.actions';
import { useCheckValidityInput } from '../../hooks/useCheckInputValidity';
import { useAuthenticationApi } from '../../hooks/useAuthenticationApi';
import { useAppSelector } from '../../hooks/useAppSelector';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const errorMessage = useAppSelector((state) => state.errors.errorMessage);
  const isOpen = useAppSelector((state) => state.toggles.isSignupPopupOpen);
  const popupRedirectText = useAppSelector(
    (state) => state.toggles.popupRedirectText
  );
  const isLoadingText = useAppSelector((state) => state.toggles.isLoadingText);
  const popupServerErrorMessage = useAppSelector(
    (state) => state.errors.popupServerErrorMessage
  );

  const { checkValidity } = useCheckValidityInput(errorMessage);
  const { handleRegisterSubmit } = useAuthenticationApi(
    email,
    password,
    username
  );

  const dispatch = useDispatch();

  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    checkValidity(evt);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    checkValidity(evt);
    setPassword(evt.target.value);
  };

  const handleUsernameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    checkValidity(evt);
    setUsername(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    dispatch(setIsLoadingTextTrueAction());
    // Prevent the browser from navigating to the form address
    evt.preventDefault();
    handleRegisterSubmit();
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
        popupRedirectText={popupRedirectText}
        buttonText={'Sign up'}
        loadingText={'Saving..'}
        isLoadingText={isLoadingText}
        onSubmit={handleSubmit}
      >
        <Input
          type={'email'}
          idName={'email-input'}
          name={'email'}
          fieldName={'field_email'}
          placeholder={'Enter email'}
          minLength={5}
          maxLength={254}
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
          minLength={8}
          maxLength={20}
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
          minLength={2}
          maxLength={20}
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
