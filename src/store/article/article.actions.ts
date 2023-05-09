import { ARTICLE_ACTION_TYPES } from './article.action.types';
import { Article } from './article.type';

type FetchArticleAction = {
  type: typeof ARTICLE_ACTION_TYPES.FETCH_ARTICLES;
  payload: Article[];
};

type SetShowMoreArticlesAction = {
  type: typeof ARTICLE_ACTION_TYPES.SET_SHOW_MORE_ARTICLES;
  payload: Article[];
};

export type ArticleActionTypes = FetchArticleAction | SetShowMoreArticlesAction;

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
