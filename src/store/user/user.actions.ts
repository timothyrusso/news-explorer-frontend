import { UPDATE_USER } from './user.types';
import { User } from '../../types/generic-types';

type UpdateUserAction = {
  type: typeof UPDATE_USER;
  payload: User;
};

export type UserActionTypes = UpdateUserAction;

export const updateUserAction = (updatedUser: User): UpdateUserAction => ({
  type: UPDATE_USER,
  payload: updatedUser,
});
