import { useState } from 'react';
import { Link } from 'react-router-dom';
import Favorite from '../favorite/Favorite';
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
        <Favorite isFavorite={isFavorite} isAuth={isAuth} handleClick={addToFavorites}/>

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
