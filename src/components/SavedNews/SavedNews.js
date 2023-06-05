import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';

const SavedNews = ({ savedArticles, isSavedArticle }) => {
  return (
    <section className="saved-news">
      <ul className="search-result-grid">
        {savedArticles.map((card) => (
          <NewsCard
            key={card._id}
            card={card}
            isSavedArticle={isSavedArticle}
          />
        ))}
      </ul>
    </section>
  );
};

export default SavedNews;
