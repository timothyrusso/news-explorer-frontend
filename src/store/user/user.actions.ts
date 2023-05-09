import { USER_ACTION_TYPES } from './user.action.types';
import { User } from './user.type';

type LoginUserAction = {
  type: typeof USER_ACTION_TYPES.LOGIN_USER;
  payload: User;
};

type LogoutUserAction = {
  type: typeof USER_ACTION_TYPES.LOGOUT_USER;
  payload: {};
};

export type UserActionTypes = LoginUserAction | LogoutUserAction;

export const loginUserAction = (updatedUser: User): LoginUserAction => ({
  type: USER_ACTION_TYPES.LOGIN_USER,
  payload: updatedUser,
});

export const logoutUserAction = (updatedUser: {}): LogoutUserAction => ({
  type: USER_ACTION_TYPES.LOGOUT_USER,
  payload: updatedUser,
});
