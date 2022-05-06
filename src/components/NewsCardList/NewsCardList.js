import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ cards, onSigninPopupClick, loggedIn }) => {
  return (
    <div className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="search-result-grid">
        {cards.map((card) => (
          <NewsCard
            key={card._id}
            card={card}
            onSigninPopupClick={onSigninPopupClick}
            loggedIn={loggedIn}
          />
        ))}
      </ul>
      <button aria-label="ShowMore" type="button" className="show-more-button">
        Show more
      </button>
    </div>
  );
};

export default NewsCardList;
