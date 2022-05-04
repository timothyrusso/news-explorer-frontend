import './NothingFound.css';
import nothingFoundIcom from '../../images/not-found.svg'

const NothingFound = () => {
  return (
    <div className='nothing-found'>
      <img src={nothingFoundIcom} alt='' className='nothing-found__icon'></img>
      <h2 className='nothing-found__title'>Nothing found</h2>
      <p className='nothing-found__text'>Sorry, but nothing matched
        your search terms.</p>
    </div>
  );
}

export default NothingFound;
