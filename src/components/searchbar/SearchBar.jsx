import { useState, useRef } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo-header.svg';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar({ slogan, brand, placeholder }) {
  const [hasContent, setHasContent] = useState('');
  const searchbar = useRef(null);

  function searchHandler() {
    console.log('Clicked Search button!');
  }

  function checkHasContent(e) {
    setHasContent(() => e.target.value);
  }

  function closeQueryHandler(e) {
    e.stopPropagation();
    setHasContent('');
    searchbar.current.focus();
  }

  return (
    <>
      <Logo className="logo" />
      <form className="search-form">
        <div className="searchbar-icon-container">
          <div
            className="inputfield-icon"
            title="Search"
            onClick={searchHandler}
          >
            <FaSearch title={placeholder} className="fa-search icon" />
            {(hasContent.length > 0) && (
              <span
                className="close-icon"
                onClick={closeQueryHandler}
                title="Close query"
              >
                &#10006;
              </span>
            )}
          </div>
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
        </div>
        <p className="slogan">
          {slogan} {brand}
        </p>
      </form>
    </>
  );
}
