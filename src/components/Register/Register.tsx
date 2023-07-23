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

const EMAIL_MIN_LENGTH = 5;
const EMAIL_MAX_LENGTH = 254;
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 20;
const USERNAME_MIN_LENGTH = 2;
const USERNAME_MAX_LENGTH = 20;

const Register = () => {
  const errorMessage = useAppSelector((state) => state.errors.errorMessage);
  const isOpen = useAppSelector((state) => state.toggles.isSignupPopupOpen);
  const popupRedirectText = useAppSelector(
    (state) => state.toggles.popupRedirectText
  );
  const isLoadingText = useAppSelector((state) => state.toggles.isLoadingText);
  const popupServerErrorMessage = useAppSelector(
    (state) => state.errors.popupServerErrorMessage
  );

  const { email, setEmail, password, setPassword, username, setUsername } =
    useLoginForm();
  const { handleInputChange } = useInputValidity(errorMessage);
  const { handleRegisterSubmit } = useAuthenticationApi(
    email,
    password,
    username
  );

  const dispatch = useDispatch();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    dispatch(setIsLoadingTextTrueAction());
    evt.preventDefault();
    handleRegisterSubmit();
  };

  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setUsername('');
  }, [isOpen, setEmail, setPassword, setUsername]);

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
          minLength={EMAIL_MIN_LENGTH}
          maxLength={EMAIL_MAX_LENGTH}
          value={email}
          onChange={(evt) => handleInputChange(evt, setEmail)}
          errorMessage={errorMessage}
          labelText={'Email'}
        />
        <Input
          type={'password'}
          idName={'password-input'}
          name={'password'}
          fieldName={'field_password'}
          placeholder={'Enter password'}
          minLength={PASSWORD_MIN_LENGTH}
          maxLength={PASSWORD_MAX_LENGTH}
          value={password}
          onChange={(evt) => handleInputChange(evt, setPassword)}
          errorMessage={errorMessage}
          labelText={'Password'}
        />
        <Input
          type={'text'}
          idName={'username-input'}
          name={'username'}
          fieldName={'field_username'}
          placeholder={'Enter your username'}
          minLength={USERNAME_MIN_LENGTH}
          maxLength={USERNAME_MAX_LENGTH}
          value={username}
          onChange={(evt) => handleInputChange(evt, setUsername)}
          errorMessage={errorMessage}
          labelText={'Username'}
        />
        <PopupServerError popupServerErrorMessage={popupServerErrorMessage} />
      </PopupWithForm>
    </>
  );
};

export default Register;
