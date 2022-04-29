import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className='search-form'>
        <input type="text" className="search-form__input" id="search-input" name="search" placeholder="Enter topic"></input>
        <button className="search-form__button">Search</button>
    </form>
  );
}

export default SearchForm;
