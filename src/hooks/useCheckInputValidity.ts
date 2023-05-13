import { useDispatch } from 'react-redux';
import { setErrorMessageAction } from '../store/errors/errors.actions';
import { ErrorMessage } from '../store/errors/error.type';

export const useCheckValidityInput = (errorMessage: ErrorMessage) => {
  const dispatch = useDispatch();

  const checkValidity = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    dispatch(
      setErrorMessageAction({
        ...errorMessage,
        [name]: evt.target.validationMessage,
      })
    );
  };

  return { checkValidity };
};
