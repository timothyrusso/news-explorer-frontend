import "./SavedNewsHeader.css";

const SavedNewsHeader = () => {
  return (
    <header className="saved-news-header">
      <p className="saved-news-header__intro">Saved articles</p>
      <h1 className="saved-news-header__title">
        Elise, you have 5 saved articles
      </h1>
      <p className="saved-news-header__keywords">
        By keywords:&nbsp;
        <span className="saved-news-header__keywords-bold">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </header>
  );
};

export default SavedNewsHeader;
