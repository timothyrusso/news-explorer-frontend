import './App.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SigninPopup from '../SigninPopup/SigninPopup';
import { useState } from "react";

const App = () => {

  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false)
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formValidity, setFormValidity] = useState(true)
  const [errorMessage, setErrorMessage] = useState({})
  const [status, setStatus] = useState("");
  const [popupRedirectText, setPopupRedirectText] = useState("Sign up");

  const closeAllPopups = () => {
    setIsSigninPopupOpen(false)
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
    setIsSigninPopupOpen(true)
  }

  const handleSwitchPopup = () => {
    if (isSigninPopupOpen) {
      setIsSigninPopupOpen(false)
      setIsSignupPopupOpen(true)
      setPopupRedirectText("Sign up")
    } else if (isSignupPopupOpen) {
      setIsSignupPopupOpen(false)
      setIsSigninPopupOpen(true)
      setPopupRedirectText("Sign in")
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
      <Navigation onSigninPopupClick={handleSigninPopupClick} />
      <Header />
      <Main />
      <Footer />
      <SigninPopup isOpen={isSigninPopupOpen} onClose={closeAllPopups} onSwitch={handleSwitchPopup} popupRedirectText={popupRedirectText} isLoading={isLoading} startLoading={startLoading} formValidity={formValidity} onFormUpdate={onFormUpdate} errorMessage={errorMessage} onInputUpdate={checkValidity} />
    </div>
  );
}

export default App;
