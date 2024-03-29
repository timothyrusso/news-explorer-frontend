import React, { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { newsPerPage } from '../../utils/constants';
import {
  setNextThreeArticlesToPayloadAction,
  setShowMoreArticlesAction,
} from '../../store/article/article.actions';
import { Article } from '../../store/article/article.type';
import { useAppSelector } from '../../hooks/useAppSelector';

const NewsCardList = () => {
  const dispatch = useDispatch();

  const nextThreeArticles = useAppSelector(
    (state) => state.article.nextThreeArticles
  );
  const allArticles = useAppSelector((state) => state.article.allArticles);
  const newsArticles = useAppSelector(
    (state) => state.article.articles
  ) as Article[];

  const showMoreButtonLogic = useMemo(
    () => nextThreeArticles < allArticles.length,
    [nextThreeArticles, allArticles.length]
  );

  let arrayForHoldingNews = [];

  const showMoreResults = useCallback(() => {
    const loopArticlesWithSlice = (start: number, end: number) => {
      const slicedNews = allArticles.slice(start, end);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      arrayForHoldingNews = [...(newsArticles as Article[]), ...slicedNews];
      dispatch(setShowMoreArticlesAction(arrayForHoldingNews));
    };

    loopArticlesWithSlice(nextThreeArticles, nextThreeArticles + newsPerPage);
    dispatch(
      setNextThreeArticlesToPayloadAction(nextThreeArticles + newsPerPage)
    );
  }, [nextThreeArticles, dispatch, allArticles, newsArticles]);

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="search-result-grid">
        {newsArticles.map((card: Article, index: number) => (
          <NewsCard key={card.url + index} card={card} />
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
