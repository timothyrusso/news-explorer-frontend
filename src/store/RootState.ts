import { UserState } from './user/user.reducer';
import { ArticleState } from './article/article.reducer';
import { TogglesState } from './toggles/toggles.reducer';
import { ErrorsState } from './errors/errors.reducer';

export type RootState = {
  user: UserState;
  article: ArticleState;
  toggles: TogglesState;
  errors: ErrorsState;
};
