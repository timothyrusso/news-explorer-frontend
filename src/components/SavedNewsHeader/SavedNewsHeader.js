import "./SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SavedNewsHeader = ({ cards, keywordsList }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="saved-news-header">
      <p className="saved-news-header__intro">Saved articles</p>
      <h1 className="saved-news-header__title">
        {currentUser.name}, you have {cards.length} saved articles
      </h1>
      {keywordsList.length >= 1 && (
        <p className="saved-news-header__keywords">
          By keywords:&nbsp;
          <span className="saved-news-header__keywords-bold">
            {keywordsList.length >= 1 && keywordsList[0]}
            {keywordsList.length >= 2 && `, ${keywordsList[1]}`}
            {keywordsList.length === 3 &&
              `, and ${keywordsList[2]}`}
            {keywordsList.length > 3 &&
              `, and ${keywordsList.length - 2} other`}
          </span>
        </p>
      )}
    </header>
  );
};

export default SavedNewsHeader;
