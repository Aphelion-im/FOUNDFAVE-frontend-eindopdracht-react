import { FaSearch } from 'react-icons/fa';
import './SearchButton.css';

export default function SearchButton({ handleClick, placeholder }) {
  return (
    <button onClick={handleClick} className="inputfield-button" title="Search">
      <FaSearch title={placeholder} className="fa-search icon" />
    </button>
  );
}
