import { FaHeart } from 'react-icons/fa';
import './RemoveFavoriteComponent.css';

export default function RemoveFavoriteComponent({ handleFavoritesClick, hero }) {
  return (
    <>
      <FaHeart
        onClick={() => handleFavoritesClick(hero)}
        className="fa-heart-icon"
        title="Click to remove this favorite"
      />
    </>
  );
}
