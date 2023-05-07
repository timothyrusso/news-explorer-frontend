import { register } from '../utils/MainApi';

export type UseRegistrationApiProps = {
  email: string;
  password: string;
  name: string;
  closeAllPopups: () => void;
  setIsInfoTooltipOpen: (isInfoTooltipOpen: boolean) => void;
  setPopupServerError: (popupServerError: string) => void;
  setIsLoadingText: (isloadingtext: boolean) => void;
};

export const useRegistrationApi = ({
  email,
  password,
  name,
  closeAllPopups,
  setIsInfoTooltipOpen,
  setPopupServerError,
  setIsLoadingText,
}: UseRegistrationApiProps) => {
  register(email, password, name)
    .then((res) => {
      if (res.data._id) {
        console.log('res OK');
        closeAllPopups();
        setIsInfoTooltipOpen(true);
      } else {
        console.log('Something went wrong.');
      }
    })
    .catch((err) => {
      setPopupServerError(err.message);
      console.log(err);
    })
    .finally(() => {
      setIsLoadingText(false);
    });
  return { register };
};
