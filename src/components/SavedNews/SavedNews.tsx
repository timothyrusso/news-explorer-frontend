import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import { SavedArticle } from '../../store/article/article.type';
import './SavedNews.css';

const SavedNews = () => {
  const savedArticles = useSelector(
    (state: RootState) => state.article.savedArticles
  );

  return (
    <section className="saved-news">
      <ul className="search-result-grid">
        {savedArticles.map((card: SavedArticle) => (
          <NewsCard key={card._id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default SavedNews;
