import { Article, SavedArticle } from './article.type';
import { ArticleActionTypes } from './article.actions';
import {
  ARTICLE_ACTION_TYPES,
  ISSAVED_ARTICLE_ACTION_TYPES,
  SHOW_ARTICLE_ACTION_TYPES,
  ALL_ARTICLES_ACTION_TYPES,
  NEXT_THREE_ARTICLES_ACTION_TYPES,
  SAVED_ARTICLES_ACTION_TYPES,
  TEMPORARY_SAVED_ARTICLE_ACTION_TYPES,
} from './article.action.types';

export type ArticleState = {
  articles: Article | {};
  isSavedArticle: boolean;
  showArticles: boolean;
  allArticles: Article[];
  nextThreeArticles: number;
  savedArticles: SavedArticle[] | [];
  temporarySavedArticle: Article | {};
};

const INITIAL_STATE: ArticleState = {
  articles: {},
  isSavedArticle: false,
  showArticles: false,
  allArticles: [],
  nextThreeArticles: 3,
  savedArticles: [],
  temporarySavedArticle: {},
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
    case SAVED_ARTICLES_ACTION_TYPES.SET_SAVED_ARTICLES:
      return {
        ...state,
        savedArticles: action.payload,
      };
    case SAVED_ARTICLES_ACTION_TYPES.REMOVE_SINGLE_ARTICLE:
      return {
        ...state,
        savedArticles: state.savedArticles.filter(
          (article: SavedArticle) => article._id !== action.payload
        ),
      };
    case SAVED_ARTICLES_ACTION_TYPES.REMOVE_ALL_SAVED_ARTICLES:
      return {
        ...state,
        savedArticles: action.payload,
      };
    case TEMPORARY_SAVED_ARTICLE_ACTION_TYPES.SET_TEMPORARY_SAVED_ARTICLE:
      return {
        ...state,
        temporarySavedArticle: action.payload,
      };
    case TEMPORARY_SAVED_ARTICLE_ACTION_TYPES.REMOVE_TEMPORARY_SAVED_ARTICLE:
      return {
        ...state,
        temporarySavedArticle: action.payload,
      };
    default:
      return state;
  }
};
