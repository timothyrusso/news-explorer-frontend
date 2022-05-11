import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({
  onSigninPopupClick,
  loggedIn,
  newsArticles,
  showMoreResults,
  setNewPage
}) => {


  return (
    <div className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="search-result-grid">
        {newsArticles.map((card) => (
          <NewsCard
            key={card.url}
            card={card}
            onSigninPopupClick={onSigninPopupClick}
            loggedIn={loggedIn}
          />
        ))}
      </ul>
      <button
        aria-label="ShowMore"
        type="button"
        className="show-more-button"
        onClick={setNewPage}
      >
        Show more
      </button>
    </div>
  );
};

export default NewsCardList;
