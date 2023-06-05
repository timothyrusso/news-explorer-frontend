import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { newsPerPage } from '../../utils/constants';
import {
  setNextThreeArticlesToPayloadAction,
  setShowMoreArticlesAction,
} from '../../store/article/article.actions';

const NewsCardList = ({ loggedIn, newsArticles }) => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 1000);
  };

  const dispatch = useDispatch();

  const nextThreeArticles = useSelector(
    (state) => state.article.nextThreeArticles
  );
  const allArticles = useSelector((state) => state.article.allArticles);

  const showMoreButtonLogic = nextThreeArticles < allArticles.length;

  let arrayForHoldingNews = [];

  const showMoreResults = () => {
    loopArticlesWithSlice(nextThreeArticles, nextThreeArticles + newsPerPage);
    dispatch(
      setNextThreeArticlesToPayloadAction(nextThreeArticles + newsPerPage)
    );
  };

  const loopArticlesWithSlice = (start, end) => {
    const slicedNews = allArticles.slice(start, end);
    arrayForHoldingNews = [...newsArticles, ...slicedNews];
    dispatch(setShowMoreArticlesAction(arrayForHoldingNews));
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="search-result-grid">
        {newsArticles.map((card) => (
          <NewsCard
            key={card.url + getRandomInt()}
            card={card}
            loggedIn={loggedIn}
          />
        ))}
      </ul>
      {showMoreButtonLogic && (
        <button
          aria-label="ShowMore"
          type="button"
          className="show-more-button"
          onClick={showMoreResults}
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default NewsCardList;
