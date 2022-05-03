import './App.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import { useState } from "react";
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const App = () => {

  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false)
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false)
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formValidity, setFormValidity] = useState(true)
  const [errorMessage, setErrorMessage] = useState({})
  const [status, setStatus] = useState("");
  const [popupRedirectText, setPopupRedirectText] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const closeAllPopups = () => {
    setIsSigninPopupOpen(false)
    setIsSignupPopupOpen(false)
    setIsInfoTooltipOpen(false)
  }

  const startLoading = () => {
    setIsLoading(true)
  }

  const onFormUpdate = (data) => {
    data ? setFormValidity(true) : setFormValidity(false)
  }

  const checkValidity = (evt) => {
    const name = evt.target.name;
    setErrorMessage({ ...errorMessage, [name]: evt.target.validationMessage });
  }

  const handleSigninPopupClick = () => {
    setFormValidity(true)
    setErrorMessage({})
    closeAllPopups()
    setPopupRedirectText("Sign up")
    setIsSigninPopupOpen(true)
  }

  const handleSwitchPopup = () => {
    if (isSigninPopupOpen) {
      setIsSigninPopupOpen(false)
      setIsSignupPopupOpen(true)
      setPopupRedirectText("Sign in")
    } else if (isSignupPopupOpen) {
      setIsSignupPopupOpen(false)
      setIsSigninPopupOpen(true)
      setPopupRedirectText("Sign up")
    }
  }

  // const handleRegisterSubmit = (password, email) => {
  //   register(password, email)
  //     .then((res) => {
  //       if (res.data._id) {
  //         console.log('res OK');
  //         setStatus("success");
  //         history('/signin');
  //       } else {
  //         console.log('Something went wrong.');
  //         setStatus("failed");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setStatus("failed");
  //     })
  //     .finally(() => {
  //       setTooltipOpen(true);
  //     })
  // }

  return (
    <div className="content">
      <Navigation onSigninPopupClick={handleSigninPopupClick} loggedIn={loggedIn} />
      <Header />
      <Main />
      <Footer />
      <SigninPopup isOpen={isSigninPopupOpen} onClose={closeAllPopups} onSwitch={handleSwitchPopup} popupRedirectText={popupRedirectText} isLoading={isLoading} startLoading={startLoading} formValidity={formValidity} onFormUpdate={onFormUpdate} errorMessage={errorMessage} onInputUpdate={checkValidity} />
      <SignupPopup isOpen={isSignupPopupOpen} onClose={closeAllPopups} onSwitch={handleSwitchPopup} popupRedirectText={popupRedirectText} isLoading={isLoading} startLoading={startLoading} formValidity={formValidity} onFormUpdate={onFormUpdate} errorMessage={errorMessage} onInputUpdate={checkValidity} />
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} openSignin={handleSigninPopupClick} />
    </div>
  );
}

export default App;
