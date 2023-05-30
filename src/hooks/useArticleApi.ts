import { saveArticles, deleteArticles } from '../utils/MainApi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setSavedArticlesAction,
  removeSingleSavedArticleAction,
} from '../store/article/article.actions';
import { Article, SavedArticle } from '../store/article/article.type';
import { RootState } from '../store/RootState';

export const useArticleApi = () => {
  const dispatch = useDispatch();

  const searchKeyword = useSelector(
    (state: RootState) => state.user.searchKeyword
  );
  const savedArticles = useSelector(
    (state: RootState) => state.article.savedArticles
  );

  const handleSaveArticles = (article: Article) => {
    saveArticles({
      keyword: searchKeyword,
      title: article.title,
      text: article.content,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    })
      .then((newArticle) => {
        dispatch(setSavedArticlesAction([newArticle, ...savedArticles]));
      })
      .catch((err) => {
        console.log(err);
      });
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