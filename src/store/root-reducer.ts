import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { articleReducer } from './article/article.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});
