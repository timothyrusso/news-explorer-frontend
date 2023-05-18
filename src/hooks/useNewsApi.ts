import { getNewsInfo } from '../utils/api';
import { useDispatch } from 'react-redux';
import {
  fetchArticlesAction,
  fetchAllArticlesAction,
  setShowArticleTrueAction,
} from '../store/article/article.actions';
import { setGenericServerErrorTrueAction } from '../store/errors/errors.actions';
import { setIsLoadingFalseAction } from '../store/toggles/toggles.actions';

export type searchData = {
  search: string;
};

export const useNewsApi = (data: searchData, start: number, end: number) => {
  const dispatch = useDispatch();

  getNewsInfo({ search: data.search })
    .then((data) => {
      localStorage.setItem('news', JSON.stringify(data.articles));
      const newsData = localStorage.getItem('news');
      const parsedNewsData = newsData && JSON.parse(newsData);
      dispatch(
        fetchArticlesAction(JSON.parse(parsedNewsData).slice(start, end))
      );
      dispatch(fetchAllArticlesAction(JSON.parse(parsedNewsData)));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setGenericServerErrorTrueAction());
    })
    .finally(() => {
      dispatch(setIsLoadingFalseAction());
      dispatch(setShowArticleTrueAction());
    });

  return { getNewsInfo };
};
