export const useAuthenticationApi = () => {
  const handleRegisterSubmit = (email, password, name) => {
    register(email, password, name)
      .then((res) => {
        if (res.data._id) {
          console.log('res OK');
          closeAllPopups();
          dispatch(setInfoTooltipOpenAction());
        } else {
          console.log('Something went wrong.');
        }
      })
      .catch((err) => {
        dispatch(setPopupserverErrorMessageAction(err.message));
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoadingTextFalseAction());
      });
  };

  return { handleRegisterSubmit };
};
