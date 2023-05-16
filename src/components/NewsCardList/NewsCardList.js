import { useSelector } from 'react-redux';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = ({
  loggedIn,
  newsArticles,
  showMoreResults,
  handleBookmarkClick,
  checkSavedArticle,
  saveUnauthorizedUserCard,
}) => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 1000);
  };

  const nextThreeArticles = useSelector(
    (state) => state.article.nextThreeArticles
  );
  const allArticles = useSelector((state) => state.article.allArticles);

  const showMoreButtonLogic = nextThreeArticles < allArticles.length;

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="search-result-grid">
        {newsArticles.map((card) => (
          <NewsCard
            key={card.url + getRandomInt()}
            card={card}
            loggedIn={loggedIn}
            handleBookmarkClick={handleBookmarkClick}
            checkSavedArticle={checkSavedArticle}
            saveUnauthorizedUserCard={saveUnauthorizedUserCard}
          />
        ))}
      </ul>
      {showMoreButtonLogic && (
        <button
          aria-label="ShowMore"
          type="button"
          className="show-more-button"
          onClick={showMoreResults}
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default NewsCardList;
