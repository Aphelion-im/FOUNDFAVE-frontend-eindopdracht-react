import { useState, useRef } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo-header.svg';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar({ slogan, brand, placeholder }) {
  const [hasContent, setHasContent] = useState('');
  const [isSearching, toggleIsSearching] = useState(false);
  const [isLoading, toggleIsLoading] = useState(false);
  const searchbar = useRef(null);

  function onFormSubmit(e) {
    e.preventDefault();

    if (hasContent.length < 1) {
      toggleIsSearching(false);
      toggleIsLoading(false);
      searchbar.current.focus();
      return;
    }
    toggleIsSearching(true);
    toggleIsLoading(true);
    setHasContent('');
    searchbar.current.focus();
  }

  console.log('Is Searching: ', isSearching);
  console.log('Is Loading: ', isLoading);

  function checkHasContent(e) {
    setHasContent(e.target.value);
  }

  function closeQueryHandler(e) {
    e.stopPropagation();
    setHasContent('');
    searchbar.current.focus();
  }

  return (
    <>
      <Logo className="logo" />
      <form className="search-form" onSubmit={onFormSubmit}>
        <div className="searchbar-icon-container">
          <input
            className="searchbar box-shadow"
            type="search"
            name="searchbar"
            id="searchbar"
            placeholder={placeholder}
            autoFocus
            onChange={checkHasContent}
            value={hasContent}
            ref={searchbar}
          />
          {hasContent.length > 0 && (
            <span
              className="close-icon"
              onClick={closeQueryHandler}
              title="Close query"
            >
              &#10006;
            </span>
          )}
          <button type="submit" className="inputfield-button" title="Search">
            <FaSearch title={placeholder} className="fa-search icon" />
          </button>
        </div>
        <p className="slogan">
          {slogan} {brand}
        </p>
      </form>
    </>
  );
}
