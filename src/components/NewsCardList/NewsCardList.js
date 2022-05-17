import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({
  onSigninPopupClick,
  loggedIn,
  newsArticles,
  setNewPage,
  showMoreLogic,
}) => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 1000);
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="search-result-grid">
        {newsArticles.map((card) => (
          <NewsCard
            key={card.url + getRandomInt()}
            card={card}
            onSigninPopupClick={onSigninPopupClick}
            loggedIn={loggedIn}
          />
        ))}
      </ul>
      {showMoreLogic && (
        <button
          aria-label="ShowMore"
          type="button"
          className="show-more-button"
          onClick={setNewPage}
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default NewsCardList;
