import { Article } from './article.type';
import { ArticleActionTypes } from './article.actions';
import {
  ARTICLE_ACTION_TYPES,
  ISSAVED_ARTICLE_ACTION_TYPES,
  SHOW_ARTICLE_ACTION_TYPES,
  ALL_ARTICLES_ACTION_TYPES,
  NEXT_THREE_ARTICLES_ACTION_TYPES,
} from './article.action.types';

export type userState = {
  articles: Article | {};
  isSavedArticle: boolean;
  showArticles: boolean;
  allArticles: Article[];
  nextThreeArticles: number;
};

const INITIAL_STATE: userState = {
  articles: {},
  isSavedArticle: false,
  showArticles: false,
  allArticles: [],
  nextThreeArticles: 3,
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
    case NEXT_THREE_ARTICLES_ACTION_TYPES.SET_NEXT_THREE_ARTICLES_TO_THREE:
      return {
        ...state,
        nextThreeArticles: action.payload,
      };
    case NEXT_THREE_ARTICLES_ACTION_TYPES.SET_NEXT_THREE_ARTICLES_TO_PAYLOAD:
      return {
        ...state,
        nextThreeArticles: action.payload,
      };
    default:
      return state;
  }
};
