import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowArticleFalseAction } from '../../store/article/article.actions';
import { setIsLoadingTrueAction } from '../../store/toggles/toggles.actions';
import './SearchForm.css';

const SearchForm = ({ activateSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [placeholder, setPlaceholder] = useState(false);

  const dispatch = useDispatch();

  const handleSearchInputChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    if (searchInput) {
      dispatch(setShowArticleFalseAction());
      dispatch(setIsLoadingTrueAction());
      evt.preventDefault();
      activateSearch({ search: searchInput });
      setPlaceholder(false);
    } else {
      evt.preventDefault();
      setPlaceholder(true);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`search-form__input ${
          placeholder ? 'search-form__input_type_error' : ''
        }`}
        id="search-input"
        name="search"
        placeholder={!placeholder ? 'Enter topic' : 'Please enter a keyword'}
        value={searchInput}
        onChange={handleSearchInputChange}
      ></input>
      <button className="search-form__button">Search</button>
    </form>
  );
};

export default SearchForm;
