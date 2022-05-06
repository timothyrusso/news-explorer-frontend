import "./NewsCard.css";

const NewsCard = ({ card }) => {
  return (
    <li className="card">
      <button
        aria-label="Favourite"
        type="button"
        className="card__favourite"
      ></button>
      <button aria-label="signin" type="button" className="card__signin">
        Sign in to save articles
      </button>
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
