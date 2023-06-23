import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowArticleFalseAction } from '../../store/article/article.actions';
import { setIsLoadingTrueAction } from '../../store/toggles/toggles.actions';
import { startpoint, newsPerPage } from '../../utils/constants';
import {
  setNextThreeArticlesToThreeAction,
  fetchArticlesAction,
  fetchAllArticlesAction,
  setShowArticleTrueAction,
} from '../../store/article/article.actions';
import {
  setGenericServerErrorFalseAction,
  setGenericServerErrorTrueAction,
} from '../../store/errors/errors.actions';
import { setSearchKeywordAction } from '../../store/user/user.actions';
import { setIsLoadingFalseAction } from '../../store/toggles/toggles.actions';
import { getNewsInfo } from '../../utils/api';
import './SearchForm.css';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('');
  const [placeholder, setPlaceholder] = useState(false);

  const dispatch = useDispatch();

  const handleSearchInputChange = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(evt.target.value);
  };

  const activateSearch = (
    data: { search: string },
    start = startpoint,
    end = newsPerPage
  ) => {
    localStorage.removeItem('news');
    dispatch(setNextThreeArticlesToThreeAction());
    dispatch(setGenericServerErrorFalseAction());
    dispatch(setSearchKeywordAction(data.search));

    getNewsInfo({ search: data.search })
      .then((data) => {
        localStorage.setItem('news', JSON.stringify(data.articles));
        const newsFromStorage = localStorage.getItem('news');
        if (newsFromStorage !== null) {
          dispatch(
            fetchArticlesAction(JSON.parse(newsFromStorage).slice(start, end))
          );
          dispatch(fetchAllArticlesAction(JSON.parse(newsFromStorage)));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setGenericServerErrorTrueAction());
      })
      .finally(() => {
        dispatch(setIsLoadingFalseAction());
        dispatch(setShowArticleTrueAction());
      });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
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
