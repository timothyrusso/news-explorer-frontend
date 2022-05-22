import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../Input/Input";

const SigninPopup = ({
  isOpen,
  onClose,
  onSwitch,
  popupRedirectText,
  isLoading,
  startLoading,
  formValidity,
  onFormUpdate,
  onInputUpdate,
  errorMessage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    onInputUpdate(evt);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    onInputUpdate(evt);
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    startLoading();
    // Prevent the browser from navigating to the form address
    evt.preventDefault();

    // Add the inputs in the next stage
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  return (
    <>
      <PopupWithForm
        name="signin"
        title="Sign in"
        isOpen={isOpen}
        onClose={onClose}
        onSwitch={onSwitch}
        popupRedirectText={popupRedirectText}
        buttonText={"Sign in"}
        loadingText={"Saving.."}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        formValidity={formValidity}
        onFormUpdate={onFormUpdate}
      >
        <Input
          type={"email"}
          idName={"email-signin-input"}
          name={"email"}
          fieldName={"field_email"}
          placeholder={"Enter email"}
          value={email}
          onChange={handleEmailChange}
          errorMessage={errorMessage}
          labelText={"Email"}
        />
        <Input
          type={"password"}
          idName={"password-signin-input"}
          name={"password"}
          fieldName={"field_password"}
          placeholder={"Enter password"}
          minLength={"8"}
          maxLength={"20"}
          value={password}
          onChange={handlePasswordChange}
          errorMessage={errorMessage}
          labelText={"Password"}
        />
      </PopupWithForm>
    </>
  );
};

export default SigninPopup;
