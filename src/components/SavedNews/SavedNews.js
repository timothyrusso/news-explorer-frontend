import NewsCard from '../NewsCard/NewsCard';
import { useSelector } from 'react-redux';
import './SavedNews.css';

const SavedNews = () => {
  const savedArticles = useSelector((state) => state.article.savedArticles);

  return (
    <section className="saved-news">
      <ul className="search-result-grid">
        {savedArticles.map((card) => (
          <NewsCard key={card._id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default SavedNews;
