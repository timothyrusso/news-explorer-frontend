import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { articleReducer } from './article/article.reducer';
import { togglesReducer } from './toggles/toggles.reducer';
import { errorsReducer } from './errors/errors.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
  toggles: togglesReducer,
  errors: errorsReducer,
});
