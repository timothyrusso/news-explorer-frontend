export type ErrorMessage = {
  email?: string;
  password?: string;
  username?: string;
};

export const isErrorMessage = (
  errorMessage: {} | ErrorMessage
): errorMessage is ErrorMessage => {
  return (
    (errorMessage as ErrorMessage).email !== undefined ||
    (errorMessage as ErrorMessage).password !== undefined ||
    (errorMessage as ErrorMessage).username !== undefined
  );
};
