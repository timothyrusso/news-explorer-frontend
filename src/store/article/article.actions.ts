import {
  ARTICLE_ACTION_TYPES,
  ISSAVED_ARTICLE_ACTION_TYPES,
  SHOW_ARTICLE_ACTION_TYPES,
} from './article.action.types';
import { Article } from './article.type';

type FetchArticleAction = {
  type: typeof ARTICLE_ACTION_TYPES.FETCH_ARTICLES;
  payload: Article[];
};

type SetShowMoreArticlesAction = {
  type: typeof ARTICLE_ACTION_TYPES.SET_SHOW_MORE_ARTICLES;
  payload: Article[];
};

type SetIsSavedArticleTrueAction = {
  type: typeof ISSAVED_ARTICLE_ACTION_TYPES.SET_ISSAVED_ARTICLE_TRUE;
  payload: boolean;
};

type SetIsSavedArticleFalseAction = {
  type: typeof ISSAVED_ARTICLE_ACTION_TYPES.SET_ISSAVED_ARTICLE_FALSE;
  payload: boolean;
};

type SetShowArticleTrueAction = {
  type: typeof SHOW_ARTICLE_ACTION_TYPES.SET_SHOW_ARTICLE_TRUE;
  payload: boolean;
};

type SetShowArticleFalseAction = {
  type: typeof SHOW_ARTICLE_ACTION_TYPES.SET_SHOW_ARTICLE_FALSE;
  payload: boolean;
};

export type ArticleActionTypes =
  | FetchArticleAction
  | SetShowMoreArticlesAction
  | SetIsSavedArticleTrueAction
  | SetIsSavedArticleFalseAction
  | SetShowArticleTrueAction
  | SetShowArticleFalseAction;

export const fetchArticlesAction = (
  articles: Article[]
): FetchArticleAction => ({
  type: ARTICLE_ACTION_TYPES.FETCH_ARTICLES,
  payload: articles,
});

export const setShowMoreArticlesAction = (
  articles: Article[]
): SetShowMoreArticlesAction => ({
  type: ARTICLE_ACTION_TYPES.SET_SHOW_MORE_ARTICLES,
  payload: articles,
});

export const setIsSavedArticleTrueAction = (): SetIsSavedArticleTrueAction => ({
  type: ISSAVED_ARTICLE_ACTION_TYPES.SET_ISSAVED_ARTICLE_TRUE,
  payload: true,
});

export const setIsSavedArticleFalseAction =
  (): SetIsSavedArticleFalseAction => ({
    type: ISSAVED_ARTICLE_ACTION_TYPES.SET_ISSAVED_ARTICLE_FALSE,
    payload: false,
  });

export const setShowArticleTrueAction = (): SetShowArticleTrueAction => ({
  type: SHOW_ARTICLE_ACTION_TYPES.SET_SHOW_ARTICLE_TRUE,
  payload: true,
});

export const setShowArticleFalseAction = (): SetShowArticleFalseAction => ({
  type: SHOW_ARTICLE_ACTION_TYPES.SET_SHOW_ARTICLE_FALSE,
  payload: false,
});
