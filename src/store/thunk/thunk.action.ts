import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { saveArticles, getArticles } from '../../utils/MainApi';
import { RootState } from '../RootState';
import { Article } from '../article/article.type';
import { setSavedArticlesAction } from '../article/article.actions';

export const saveArticle = (
  article: Article
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    const searchKeyword = getState().user.searchKeyword;

    saveArticles({
      keyword: searchKeyword,
      title: article.title,
      text: article.content,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    })
      .then(() => {
        getArticles()
          .then((allSavedArticles) => {
            dispatch(setSavedArticlesAction(allSavedArticles));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
