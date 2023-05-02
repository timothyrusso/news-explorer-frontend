import { FETCH_ARTICLES, SET_SHOW_MORE_ARTICLES } from './article.action.types';
import { Article } from './article.type';

type FetchArticleAction = {
  type: typeof FETCH_ARTICLES;
  payload: Article[];
};

type SetShowMoreArticlesAction = {
  type: typeof SET_SHOW_MORE_ARTICLES;
  payload: Article[];
};

export type ArticleActionTypes = FetchArticleAction | SetShowMoreArticlesAction;

export const fetchArticlesAction = (
  articles: Article[]
): FetchArticleAction => ({
  type: FETCH_ARTICLES,
  payload: articles,
});

export const setShowMoreArticlesAction = (
  articles: Article[]
): SetShowMoreArticlesAction => ({
  type: SET_SHOW_MORE_ARTICLES,
  payload: articles,
});
