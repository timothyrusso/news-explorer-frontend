import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({ onSearchFormSubmit, startLoading }) => {
  return (
    <header className="header">
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearchFormSubmit={onSearchFormSubmit} startLoading={startLoading} />
    </header>
  );
};

export default Header;
