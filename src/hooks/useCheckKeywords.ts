import { useDispatch } from 'react-redux';
import { setSearchKeywordsListAction } from '../store/user/user.actions';
import { useAppSelector } from './useAppSelector';

export const useCheckKeywords = () => {
  const savedArticles = useAppSelector((state) => state.article.savedArticles);

  const dispatch = useDispatch();

  const checkKeywords = () => {
    const keywords = savedArticles.map((x) => x.keyword);
    const count: { [key: string]: number } = {};

    for (let index = 0; index < keywords.length; index++) {
      const element = keywords[index];

      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

    const keywordsOrdered = Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .map((element) => element[0]);
    dispatch(setSearchKeywordsListAction(keywordsOrdered));
  };

  return { checkKeywords };
};
