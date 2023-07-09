import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import PopupServerError from '../PopupServerError/PopupServerError';
import { useDispatch } from 'react-redux';
import { setIsLoadingTextTrueAction } from '../../store/toggles/toggles.actions';
import { useAuthenticationApi } from '../../hooks/useAuthenticationApi';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useLoginForm } from '../../hooks/useLoginForm';
import { useInputValidity } from '../../hooks/useInputValidity';

const Login = () => {
  const errorMessage = useAppSelector((state) => state.errors.errorMessage);
  const isOpen = useAppSelector((state) => state.toggles.isSigninPopupOpen);
  const popupRedirectText = useAppSelector(
    (state) => state.toggles.popupRedirectText
  );
  const isLoadingText = useAppSelector((state) => state.toggles.isLoadingText);
  const popupServerErrorMessage = useAppSelector(
    (state) => state.errors.popupServerErrorMessage
  );

  const { email, setEmail, password, setPassword } = useLoginForm();
  const { handleLoginSubmit } = useAuthenticationApi(email, password);
  const { handleInputChange } = useInputValidity(errorMessage);

  const dispatch = useDispatch();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    dispatch(setIsLoadingTextTrueAction());
    evt.preventDefault();
    handleLoginSubmit();
  };

  React.useEffect(() => {
    setEmail('');
    setPassword('');
  }, [isOpen, setEmail, setPassword]);

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
          onChange={(evt) => handleInputChange(evt, setEmail)}
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
          onChange={(evt) => handleInputChange(evt, setPassword)}
          errorMessage={errorMessage}
          labelText={'Password'}
        />
        <PopupServerError popupServerErrorMessage={popupServerErrorMessage} />
      </PopupWithForm>
    </>
  );
};

export default Login;
