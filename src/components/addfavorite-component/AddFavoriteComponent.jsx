import { FaRegHeart } from 'react-icons/fa';
import './AddFavoriteComponent.css';

export default function AddFavoriteComponent({ handleFavoritesClick, hero }) {
  return (
    <>
      <FaRegHeart
        onClick={() => handleFavoritesClick(hero)}
        className="fa-heart-icon"
        title="Click to add this favorite"
      />
    </>
  );
}
