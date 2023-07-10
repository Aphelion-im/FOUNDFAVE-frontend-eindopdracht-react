import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import './Favorite.css';

export default function Favorite({ handleClick, isAuth, isFavorite }) {
  return (
    <>
      {isAuth ? (
        isFavorite ? (
          <FaHeart
            className="fa-heart-icon"
            title="Click to remove this favorite"
            onClick={handleClick}
          />
        ) : (
          <FaRegHeart
            className="fa-heart-icon"
            title="Click to add this favorite"
            onClick={handleClick}
          />
        )
      ) : null}
    </>
  );
}
