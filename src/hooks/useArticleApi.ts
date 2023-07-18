import { deleteArticles } from '../utils/MainApi';
import { useDispatch } from 'react-redux';
import { removeSingleSavedArticleAction } from '../store/article/article.actions';
import { Article, SavedArticle } from '../store/article/article.type';
import { useAppSelector } from './useAppSelector';
import { saveArticle } from '../store/thunk/thunk.action';
import { AppDispatch } from '../store/thunk/thunk.type';

export const useArticleApi = () => {
  const dispatch = useDispatch<AppDispatch>();

  const savedArticles = useAppSelector((state) => state.article.savedArticles);

  const handleSaveArticles = (article: Article) => {
    dispatch(saveArticle(article));
  };

  const handleDeleteArticles = (article: SavedArticle) => {
    deleteArticles({ articleId: article._id })
      .then(() => dispatch(removeSingleSavedArticleAction(article._id)))
      .catch((err) => {
        console.log(err);
      });
  };

  const checkSavedArticle = (article: Article) => {
    const savedArticle = savedArticles.find(
      (data) => data.link === article.url
    );
    return savedArticle;
  };

  return { handleSaveArticles, handleDeleteArticles, checkSavedArticle };
};
