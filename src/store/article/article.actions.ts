import {
  ARTICLE_ACTION_TYPES,
  ISSAVED_ARTICLE_ACTION_TYPES,
  SHOW_ARTICLE_ACTION_TYPES,
  ALL_ARTICLES_ACTION_TYPES,
  NEXT_THREE_ARTICLES_ACTION_TYPES,
  SAVED_ARTICLES_ACTION_TYPES,
  TEMPORARY_SAVED_ARTICLE_ACTION_TYPES,
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

type FetchAllArticlesAction = {
  type: typeof ALL_ARTICLES_ACTION_TYPES.FETCH_ALL_ARTICLES;
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

type SetNextThreeArticlesToThreeAction = {
  type: typeof NEXT_THREE_ARTICLES_ACTION_TYPES.SET_NEXT_THREE_ARTICLES_TO_THREE;
  payload: number;
};

type SetNextThreeArticlesToPayloadAction = {
  type: typeof NEXT_THREE_ARTICLES_ACTION_TYPES.SET_NEXT_THREE_ARTICLES_TO_PAYLOAD;
  payload: number;
};

type SetSavedArticlesAction = {
  type: typeof SAVED_ARTICLES_ACTION_TYPES.SET_SAVED_ARTICLES;
  payload: Article[];
};

type RemoveSingleSavedArticleAction = {
  type: typeof SAVED_ARTICLES_ACTION_TYPES.REMOVE_SINGLE_ARTICLE;
  payload: string;
};

type RemoveAllSavedArticlesAction = {
  type: typeof SAVED_ARTICLES_ACTION_TYPES.REMOVE_ALL_SAVED_ARTICLES;
  payload: [];
};

type SetTemporarySavedArticleAction = {
  type: typeof TEMPORARY_SAVED_ARTICLE_ACTION_TYPES.SET_TEMPORARY_SAVED_ARTICLE;
  payload: Article[];
};

type RemoveTemporarySavedArticleAction = {
  type: typeof TEMPORARY_SAVED_ARTICLE_ACTION_TYPES.REMOVE_TEMPORARY_SAVED_ARTICLE;
  payload: [];
};

export type ArticleActionTypes =
  | FetchArticleAction
  | SetShowMoreArticlesAction
  | SetIsSavedArticleTrueAction
  | SetIsSavedArticleFalseAction
  | SetShowArticleTrueAction
  | SetShowArticleFalseAction
  | FetchAllArticlesAction
  | SetNextThreeArticlesToThreeAction
  | SetNextThreeArticlesToPayloadAction
  | SetSavedArticlesAction
  | RemoveSingleSavedArticleAction
  | RemoveAllSavedArticlesAction
  | SetTemporarySavedArticleAction
  | RemoveTemporarySavedArticleAction;

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

export const fetchAllArticlesAction = (
  articles: Article[]
): FetchAllArticlesAction => ({
  type: ALL_ARTICLES_ACTION_TYPES.FETCH_ALL_ARTICLES,
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

export const setNextThreeArticlesToThreeAction =
  (): SetNextThreeArticlesToThreeAction => ({
    type: NEXT_THREE_ARTICLES_ACTION_TYPES.SET_NEXT_THREE_ARTICLES_TO_THREE,
    payload: 3,
  });

export const setNextThreeArticlesToPayloadAction = (
  state: number
): SetNextThreeArticlesToPayloadAction => ({
  type: NEXT_THREE_ARTICLES_ACTION_TYPES.SET_NEXT_THREE_ARTICLES_TO_PAYLOAD,
  payload: state,
});

export const setSavedArticlesAction = (
  state: Article[]
): SetSavedArticlesAction => ({
  type: SAVED_ARTICLES_ACTION_TYPES.SET_SAVED_ARTICLES,
  payload: state,
});

export const removeSingleSavedArticleAction = (
  state: string
): RemoveSingleSavedArticleAction => ({
  type: SAVED_ARTICLES_ACTION_TYPES.REMOVE_SINGLE_ARTICLE,
  payload: state,
});

export const removeAllSavedArticlesAction =
  (): RemoveAllSavedArticlesAction => ({
    type: SAVED_ARTICLES_ACTION_TYPES.REMOVE_ALL_SAVED_ARTICLES,
    payload: [],
  });

export const setTemporarySavedArticleAction = (
  state: Article[]
): SetTemporarySavedArticleAction => ({
  type: TEMPORARY_SAVED_ARTICLE_ACTION_TYPES.SET_TEMPORARY_SAVED_ARTICLE,
  payload: state,
});

export const removeTemporarySavedArticleAction =
  (): RemoveTemporarySavedArticleAction => ({
    type: TEMPORARY_SAVED_ARTICLE_ACTION_TYPES.REMOVE_TEMPORARY_SAVED_ARTICLE,
    payload: [],
  });
