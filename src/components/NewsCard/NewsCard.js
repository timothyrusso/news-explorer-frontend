import "./NewsCard.css";

const NewsCard = ({ card, onSigninPopupClick, loggedIn, savedCard }) => {
  const saveCard = () => {
    // TBD in the next stage
  };

  const convertDate = (timeStr) => {
    var date = new Date(timeStr);
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth();

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
          <dialog className="card__tooltip">Remove from saved</dialog>
        </>
      )}
      {!savedCard && (
        <>
          <button
            aria-label="Favourite"
            type="button"
            className="card__favourite"
            onClick={!loggedIn ? onSigninPopupClick : saveCard}
          ></button>
          {!loggedIn && (
            <dialog className="card__tooltip">Sign in to save articles</dialog>
          )}
        </>
      )}
      <div
        className="card__image"
        style={{ backgroundImage: `url(${card.urlToImage})` }}
      ></div>
      <div className="card__content">
        <time className="card__date">{data}</time>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.content}</p>
        <p className="card__source">{card.source.name}</p>
      </div>
    </li>
  );
};

export default NewsCard;
