import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { SavedArticle } from '../../store/article/article.type';
import { useAppSelector } from '../../hooks/useAppSelector';
import './SavedNews.css';

const SavedNews = () => {
  const savedArticles = useAppSelector((state) => state.article.savedArticles);

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
