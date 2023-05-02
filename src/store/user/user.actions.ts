import { LOGIN_USER, LOGOUT_USER } from './user.action.types';
import { User } from './user.type';

type LoginUserAction = {
  type: typeof LOGIN_USER;
  payload: User;
};

type LogoutUserAction = {
  type: typeof LOGOUT_USER;
  payload: {};
};

export type UserActionTypes = LoginUserAction | LogoutUserAction;

export const loginUserAction = (updatedUser: User): LoginUserAction => ({
  type: LOGIN_USER,
  payload: updatedUser,
});

export const logoutUserAction = (updatedUser: {}): LogoutUserAction => ({
  type: LOGOUT_USER,
  payload: updatedUser,
});
