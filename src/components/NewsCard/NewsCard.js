import "./NewsCard.css";
import { Route, Routes } from "react-router-dom";

const NewsCard = ({ card, onSigninPopupClick, loggedIn }) => {
  const saveCard = () => {
    // TBD in the next stage
  };

  return (
    <li className="card">
      <Routes>
      <Route
          exact
          path="/"
          element={
            <>
              <button
                aria-label="Favourite"
                type="button"
                className="card__favourite"
                onClick={!loggedIn ? onSigninPopupClick : saveCard}
              ></button>
              {!loggedIn && (
                <dialog className="card__tooltip">
                  Sign in to save articles
                </dialog>
              )}
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
            <div className="card__keyword">Keyword</div>
              <button
                aria-label="Delete"
                type="button"
                className="card__delete"
              ></button>
              <dialog className="card__tooltip">Remove from saved</dialog>
            </>
          }
        />
      </Routes>
      <div
        className="card__image"
        style={{ backgroundImage: `url(${card.link})` }}
      ></div>
      <div className="card__content">
        <time className="card__date">{card.date}</time>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.content}</p>
        <p className="card__source">{card.source}</p>
      </div>
    </li>
  );
};

export default NewsCard;
