import "./NewsCard.css";
import alternativeBackground from "../../images/header_background.png";
import { useState } from "react";

const NewsCard = ({ card, onSigninPopupClick, loggedIn, savedCard }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const saveCard = () => {
    // TBD in the next stage
    setBookmarked(!bookmarked);
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

  const data = convertDate(card.publishedAt);

  return (
    <li className="card">
      {savedCard && (
        <>
          <div className="card__keyword">Keyword</div>
          <button
            aria-label="Delete"
            type="button"
            className="card__delete"
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
              bookmarked ? "card__favourite_active" : ""
            }`}
            onClick={!loggedIn ? onSigninPopupClick : saveCard}
          ></button>
          {!loggedIn && (
            <dialog className="card__tooltip">Sign in to save articles</dialog>
          )}
        </>
      )}
      <a href={card.url} target="_blank" rel="noreferrer">
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${
              card.urlToImage != null ? card.urlToImage : alternativeBackground
            })`,
          }}
          href={card.url}
        ></div>
      </a>
      <div className="card__content">
        <time className="card__date">{data}</time>
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <h3 className="card__title">{card.title}</h3>
        </a>
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <p className="card__text">{card.content}</p>
        </a>
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer"
          className="card__link-wrapper"
        >
          <p className="card__source">{card.source.name}</p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
