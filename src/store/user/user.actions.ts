import { UPDATE_USER } from './user.action.types';
import { User } from './user.type';

type UpdateUserAction = {
  type: typeof UPDATE_USER;
  payload: User;
};

export type UserActionTypes = UpdateUserAction;

export const updateUserAction = (updatedUser: User): UpdateUserAction => ({
  type: UPDATE_USER,
  payload: updatedUser,
});
