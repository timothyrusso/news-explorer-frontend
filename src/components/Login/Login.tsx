import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import PopupServerError from '../PopupServerError/PopupServerError';
import { useDispatch } from 'react-redux';
import { setIsLoadingTextTrueAction } from '../../store/toggles/toggles.actions';
import { useCheckValidityInput } from '../../hooks/useCheckInputValidity';
import { useAuthenticationApi } from '../../hooks/useAuthenticationApi';
import { useAppSelector } from '../../hooks/useAppSelector';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorMessage = useAppSelector((state) => state.errors.errorMessage);
  const isOpen = useAppSelector((state) => state.toggles.isSigninPopupOpen);
  const popupRedirectText = useAppSelector(
    (state) => state.toggles.popupRedirectText
  );
  const isLoadingText = useAppSelector((state) => state.toggles.isLoadingText);
  const popupServerErrorMessage = useAppSelector(
    (state) => state.errors.popupServerErrorMessage
  );

  const { checkValidity } = useCheckValidityInput(errorMessage);

  const { handleLoginSubmit } = useAuthenticationApi(email, password);

  const dispatch = useDispatch();

  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    checkValidity(evt);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    checkValidity(evt);
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    dispatch(setIsLoadingTextTrueAction());
    evt.preventDefault();
    handleLoginSubmit();
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
        popupRedirectText={popupRedirectText}
        buttonText={'Sign in'}
        loadingText={'Loading..'}
        isLoadingText={isLoadingText}
        onSubmit={handleSubmit}
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
          minLength={8}
          maxLength={20}
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
