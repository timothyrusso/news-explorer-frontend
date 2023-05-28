import { Article } from '../store/article/article.type';
import { useArticleApi } from './useArticleApi';

export const useHandleBookmarkClick = () => {
  const { handleSaveArticles, handleDeleteArticles, checkSavedArticle } =
    useArticleApi();

  const handleBookmarkClick = (article: Article) => {
    const savedArticle = checkSavedArticle(article);
    if (!savedArticle) {
      handleSaveArticles(article);
    } else {
      handleDeleteArticles(savedArticle);
    }
  };
  return { handleBookmarkClick };
};
