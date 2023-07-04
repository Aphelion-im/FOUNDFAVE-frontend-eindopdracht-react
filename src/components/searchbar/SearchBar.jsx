import { useState, useRef } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo-header.svg';
import SearchButton from '../searchbutton/SearchButton';
import './SearchBar.css';

// TODO: input field useRef & autoFocus na submit

export default function SearchBar({
  slogan,
  brand,
  placeholder,
  handleClick,
  setHeroes,
  setError,
}) {
  const [hasContent, setHasContent] = useState('');
  const [isSearching, toggleIsSearching] = useState(false);
  const [isLoading, toggleIsLoading] = useState(false);
  const searchbar = useRef(null);
  let input = useRef();

  // console.log('Is Searching: ', isSearching);
  // console.log('Is Loading: ', isLoading);

  function onFormSubmit(e) {
    e.preventDefault();

    if (hasContent.length < 1) {
      toggleIsSearching(false);
      toggleIsLoading(false);
      // searchbar.current.focus();
      return;
    }
    toggleIsSearching(true);
    toggleIsLoading(true);
    setHasContent('');
    // searchbar.current.focus();
  }

  function checkHasContent(e) {
    setHasContent(e.target.value);
  }

  function closeQueryHandler(e) {
    e.stopPropagation();
    setHasContent('');
    // searchbar.current.focus();
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
            ref={input}
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
          <SearchButton
            handleClick={(e) => {
              handleClick(e, input.current.value)
                .then((data) => setHeroes(data.data.results))
                .catch((err) => setError(err));
            }}
          />
        </div>
        <p className="slogan">
          {slogan} {brand}
        </p>
      </form>
    </>
  );
}
