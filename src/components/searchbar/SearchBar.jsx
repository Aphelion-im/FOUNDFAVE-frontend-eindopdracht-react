import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo-header.svg';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar({ slogan, brand, placeholder }) {
  const [hasContent, setHasContent] = useState(false);

  function searchHandler() {
    console.log('Clicked Search button!');
  }

  function closeQueryHandler(e) {
    e.stopPropagation();
    console.log('Clicked close icon!');
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
            {hasContent && (
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
          />
        </div>
        <p className="slogan">
          {slogan} {brand}
        </p>
      </form>
    </>
  );
}
