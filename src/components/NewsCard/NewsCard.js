import "./NewsCard.css";
import alternativeBackground from "../../images/header_background.png";
import { useState, useEffect } from "react";

const NewsCard = ({
  card,
  onSigninPopupClick,
  loggedIn,
  savedCard,
  handleBookmarkClick,
  handleDeleteArticles,
  checkSavedArticle,
  saveUnauthorizedUserCard,
}) => {
  const [bookmarkStatus, setBookmarkStatus] = useState(false);

  const saveCard = () => {
    handleBookmarkClick(card);
  };

  const deleteCard = () => {
    handleDeleteArticles(card);
  };

  const handleCardSaveUnauthorizedUser = () => {
    saveUnauthorizedUserCard(card);
    onSigninPopupClick();
  };

  const convertDate = (timeStr) => {
    var date = new Date(timeStr);
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;

    date.setMonth(month - 1);
    const monthName = date.toLocaleString("default", { month: "long" });

    var dateStr = monthName + " " + day + ", " + year;

    return dateStr;
  };

  const data = convertDate(!savedCard ? card.publishedAt : card.date);

  const backgroundUrl = !savedCard ? card.urlToImage : card.image;

  useEffect(() => {
    if (checkSavedArticle(card)) {
      setBookmarkStatus(true);
    } else {
      setBookmarkStatus(false);
    }
  }, [loggedIn, card, checkSavedArticle]);

  return (
    <li className="card">
      {savedCard && (
        <>
          <div className="card__keyword">{card.keyword}</div>
          <button
            aria-label="Delete"
            type="button"
            className="card__delete"
            onClick={deleteCard}
          ></button>
          <dialog className="card__tooltip card__tooltip_type_delete">
            Remove from saved
          </dialog>
        </>
      )}
      {!savedCard && (
        <>
          <button
            aria-label="Favourite"
            type="button"
            className={`card__favourite ${
              bookmarkStatus ? "card__favourite_active" : ""
            }`}
            onClick={!loggedIn ? handleCardSaveUnauthorizedUser : saveCard}
          ></button>
          {!loggedIn && (
            <dialog className="card__tooltip">Sign in to save articles</dialog>
          )}
        </>
      )}
      <a
        href={!savedCard ? card.url : card.link}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${
              backgroundUrl != null ? backgroundUrl : alternativeBackground
            })`,
          }}
          href={!savedCard ? card.url : card.link}
        ></div>
      </a>
      <div className="card__content">
        <time className="card__date">{data}</time>
        <a
          href={!savedCard ? card.url : card.link}
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <h3 className="card__title">{card.title}</h3>
        </a>
        <a
          href={!savedCard ? card.url : card.link}
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <p className="card__text">{!savedCard ? card.content : card.text}</p>
        </a>
        <a
          href={!savedCard ? card.url : card.link}
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <p className="card__source">
            {!savedCard ? card.source.name : card.source}
          </p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
