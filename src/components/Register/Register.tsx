import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import PopupServerError from '../PopupServerError/PopupServerError';
import { useDispatch } from 'react-redux';
import { setIsLoadingTextTrueAction } from '../../store/toggles/toggles.actions';
import { useSelector } from 'react-redux';
import { useCheckValidityInput } from '../../hooks/useCheckInputValidity';
import { useAuthenticationApi } from '../../hooks/useAuthenticationApi';
import { RootState } from '../../store/RootState';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const errorMessage = useSelector(
    (state: RootState) => state.errors.errorMessage
  );
  const isOpen = useSelector(
    (state: RootState) => state.toggles.isSignupPopupOpen
  );
  const popupRedirectText = useSelector(
    (state: RootState) => state.toggles.popupRedirectText
  );
  const isLoadingText = useSelector(
    (state: RootState) => state.toggles.isLoadingText
  );
  const popupServerErrorMessage = useSelector(
    (state: RootState) => state.errors.popupServerErrorMessage
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
          minLength={'5'}
          maxLength={'254'}
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