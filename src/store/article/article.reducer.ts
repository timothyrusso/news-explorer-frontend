import { Article } from './article.type';
import { ArticleActionTypes } from './article.actions';
import {
  ARTICLE_ACTION_TYPES,
  ISSAVED_ARTICLE_ACTION_TYPES,
  SHOW_ARTICLE_ACTION_TYPES,
  ALL_ARTICLES_ACTION_TYPES,
} from './article.action.types';

export type userState = {
  articles: Article | {};
  isSavedArticle: boolean;
  showArticles: boolean;
  allArticles: Article[];
};

const INITIAL_STATE: userState = {
  articles: {},
  isSavedArticle: false,
  showArticles: false,
  allArticles: [],
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
    case ALL_ARTICLES_ACTION_TYPES.FETCH_ALL_ARTICLES:
      return {
        ...state,
        allArticles: action.payload,
      };
    case ISSAVED_ARTICLE_ACTION_TYPES.SET_ISSAVED_ARTICLE_TRUE:
      return {
        ...state,
        isSavedArticle: action.payload,
      };
    case ISSAVED_ARTICLE_ACTION_TYPES.SET_ISSAVED_ARTICLE_FALSE:
      return {
        ...state,
        isSavedArticle: action.payload,
      };
    case SHOW_ARTICLE_ACTION_TYPES.SET_SHOW_ARTICLE_TRUE:
      return {
        ...state,
        showArticles: action.payload,
      };
    case SHOW_ARTICLE_ACTION_TYPES.SET_SHOW_ARTICLE_FALSE:
      return {
        ...state,
        showArticles: action.payload,
      };
    default:
      return state;
  }
};
