// TODO: loading en error states
// Fave wel of niet zichtbaar met isAuth

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import CharCardStyles from './CharCard.module.css';

export default function CharCard({ name, id, thumbnail, description }) {
  const [isAuth, toggleIsAuth] = useState(true);
  const [isFavorite, toggleIsFavorite] = useState(false);

  function addToFavorites(e) {
    console.log(id, name, thumbnail, description);
    toggleIsFavorite(!isFavorite);
    localStorage.setItem('fave', id);
  }

  return (
    <>
      <div
        className={[CharCardStyles.charcard, CharCardStyles['box-shadow']].join(
          ' '
        )}
      >
        {isAuth ? (
          isFavorite ? (
            <FaHeart
              className={CharCardStyles['fa-heart-icon']}
              title="Click to remove this favorite"
              onClick={addToFavorites}
            />
          ) : (
            <FaRegHeart
              className={CharCardStyles['fa-heart-icon']}
              title="Click to add this favorite"
              onClick={addToFavorites}
            />
          )
        ) : null}

        <Link to={`/${id}`} target="_blank">
          <img src={thumbnail} alt="Thumbnail" />
        </Link>
        <div className={CharCardStyles['info-window']}>
          <span className={CharCardStyles['char-title']}>{name}</span>
          <p>
            {description.length > 0
              ? `${description.substring(0, 180)} ...`
              : 'No description available'}
          </p>
        </div>
      </div>
    </>
  );
}
