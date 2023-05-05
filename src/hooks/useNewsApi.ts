import { useDispatch } from 'react-redux';
import { fetchArticlesAction } from '../store/article/article.actions';
import { getNewsInfo } from '../utils/api';
import { Article } from '../store/article/article.type';

export type Data = {
  search: string;
};

export type UseNewsApiProps = {
  data: Data;
  setNewsObject: (newsObject: Article[]) => void;
  setServerError: (error: boolean) => void;
  setShowNews: (showNews: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  start: number;
  end: number;
};

export const useNewsApi = ({
  data,
  setNewsObject,
  setServerError,
  setShowNews,
  setIsLoading,
  start,
  end,
}: UseNewsApiProps) => {
  const dispatch = useDispatch();

  getNewsInfo({ search: data.search })
    .then((data) => {
      localStorage.setItem('news', JSON.stringify(data.articles));

      const newsData = localStorage.getItem('news');

      if (newsData) {
        const parsedNewsData = JSON.parse(newsData);
        const slicedNewsData = parsedNewsData.slice(start, end);

        dispatch(fetchArticlesAction(slicedNewsData));
        setNewsObject(parsedNewsData);
      }
    })
    .catch((err) => {
      console.log(err);
      setServerError(true);
    })
    .finally(() => {
      setIsLoading(false);
      setShowNews(true);
    });

  return { getNewsInfo };
};
