import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { newsPerPage } from '../../utils/constants';
import {
  setNextThreeArticlesToPayloadAction,
  setShowMoreArticlesAction,
} from '../../store/article/article.actions';
import { RootState } from '../../store/RootState';
import { Article } from '../../store/article/article.type';

const NewsCardList = () => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 1000);
  };

  const dispatch = useDispatch();

  const nextThreeArticles = useSelector(
    (state: RootState) => state.article.nextThreeArticles
  );
  const allArticles = useSelector(
    (state: RootState) => state.article.allArticles
  );
  const newsArticles = useSelector(
    (state: RootState) => state.article.articles
  ) as Article[];

  const showMoreButtonLogic = nextThreeArticles < allArticles.length;

  let arrayForHoldingNews = [];

  const showMoreResults = () => {
    loopArticlesWithSlice(nextThreeArticles, nextThreeArticles + newsPerPage);
    dispatch(
      setNextThreeArticlesToPayloadAction(nextThreeArticles + newsPerPage)
    );
  };

  const loopArticlesWithSlice = (start: number, end: number) => {
    const slicedNews = allArticles.slice(start, end);
    arrayForHoldingNews = [...(newsArticles as Article[]), ...slicedNews];
    dispatch(setShowMoreArticlesAction(arrayForHoldingNews));
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="search-result-grid">
        {newsArticles.map((card: Article) => (
          <NewsCard key={card.url + getRandomInt()} card={card} />
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
