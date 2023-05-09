import { Article } from './article.type';
import { ArticleActionTypes } from './article.actions';
import { ARTICLE_ACTION_TYPES } from './article.action.types';

export type userState = {
  articles: Article | {};
};

const INITIAL_STATE: userState = {
  articles: {},
};

export const articleReducer = (
  state = INITIAL_STATE,
  action: ArticleActionTypes
) => {
  switch (action.type) {
    case ARTICLE_ACTION_TYPES.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case ARTICLE_ACTION_TYPES.SET_SHOW_MORE_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
