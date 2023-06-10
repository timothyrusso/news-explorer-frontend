import './SavedNewsHeader.css';
import { useSelector } from 'react-redux';

const SavedNewsHeader = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const savedArticles = useSelector((state) => state.article.savedArticles);
  const searchKeywordsList = useSelector(
    (state) => state.user.searchKeywordsList
  );

  return (
    <header className="saved-news-header">
      <p className="saved-news-header__intro">Saved articles</p>
      <h1 className="saved-news-header__title">
        {currentUser.name}, you have {savedArticles.length} saved articles
      </h1>
      {searchKeywordsList.length >= 1 && (
        <p className="saved-news-header__keywords">
          By keywords:&nbsp;
          <span className="saved-news-header__keywords-bold">
            {searchKeywordsList.length >= 1 && searchKeywordsList[0]}
            {searchKeywordsList.length >= 2 && `, ${searchKeywordsList[1]}`}
            {searchKeywordsList.length === 3 &&
              `, and ${searchKeywordsList[2]}`}
            {searchKeywordsList.length > 3 &&
              `, and ${searchKeywordsList.length - 2} other`}
          </span>
        </p>
      )}
    </header>
  );
};

export default SavedNewsHeader;
