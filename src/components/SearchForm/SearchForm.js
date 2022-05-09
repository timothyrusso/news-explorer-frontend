import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearchFormSubmit, startLoading }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    startLoading();
    evt.preventDefault();
    onSearchFormSubmit({ search: searchInput });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        id="search-input"
        name="search"
        placeholder="Enter topic"
        value={searchInput}
        onChange={handleSearchInputChange}
      ></input>
      <button className="search-form__button">Search</button>
    </form>
  );
};

export default SearchForm;
