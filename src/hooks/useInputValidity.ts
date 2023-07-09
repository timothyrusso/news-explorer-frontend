import { ChangeEvent } from 'react';
import { useCheckValidityInput } from './useCheckInputValidity';
import { ErrorMessage } from '../store/errors/error.type';

export const useInputValidity = (errorMessage: ErrorMessage) => {
  const { checkValidity } = useCheckValidityInput(errorMessage);

  const handleInputChange = (
    evt: ChangeEvent<HTMLInputElement>,
    setter: (value: string) => void
  ) => {
    checkValidity(evt);
    setter(evt.target.value);
  };

  return { handleInputChange };
};
