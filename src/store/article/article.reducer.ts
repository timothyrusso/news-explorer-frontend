import { Article } from './article.type';
import { ArticleActionTypes } from './article.actions';
import { FETCH_ARTICLES, SET_SHOW_MORE_ARTICLES } from './article.action.types';

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
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_SHOW_MORE_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
