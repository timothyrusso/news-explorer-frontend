import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';

const SavedNews = ({ cards, savedCard }) => {

  return (
    <section className='saved-news'>
      <ul className='search-result-grid'>
        {cards.map((card) =>
          (<NewsCard key={card._id} card={card} savedCard={savedCard} />)
        )}
      </ul>
    </section>
  );
}

export default SavedNews;
