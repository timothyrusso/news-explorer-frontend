import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ startLoadingNews, activateSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [placeholder, setPlaceholder] = useState(false);

  const handleSearchInputChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    if (searchInput) {
      startLoadingNews();
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
          placeholder ? "search-form__input_type_error" : ""
        }`}
        id="search-input"
        name="search"
        placeholder={!placeholder ? "Enter topic" : "Please enter a keyword"}
        value={searchInput}
        onChange={handleSearchInputChange}
      ></input>
      <button className="search-form__button">Search</button>
    </form>
  );
};

export default SearchForm;
