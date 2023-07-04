import { useState, useRef } from 'react';
import SearchButton from '../searchbutton/SearchButton';
import './SearchBar.css';

export default function SearchBar({
  slogan,
  brand,
  placeholder,
  handleClick,
  setHeroes,
  setError,
}) {
  const [hasContent, setHasContent] = useState('');
  const searchbar = useRef(null);

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
      <form className="search-form">
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
          <SearchButton
            handleClick={(e) => {
              searchbar.current.focus();
              handleClick(e, hasContent)
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
