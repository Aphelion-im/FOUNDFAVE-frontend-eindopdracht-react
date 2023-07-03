import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import CharCardStyles from './CharCard.module.css';

export default function CharCard() {
  const [isAuth, toggleIsAuth] = useState(true);
  const [isFavorite, toggleIsFavorite] = useState(false);

  // TODO: loading en error states

  return (
    <>
      <div
        className={[CharCardStyles.charcard, CharCardStyles['box-shadow']].join(
          ' '
        )}
      >
        {isAuth ? (
          isFavorite ? (
            <FaRegHeart
              className={CharCardStyles['fa-heart-icon']}
              title="Click to remove this favorite"
              onClick={() => toggleIsFavorite(!isFavorite)}
            />
          ) : (
            <FaHeart
              className={CharCardStyles['fa-heart-icon']}
              title="Click to add this favorite"
              onClick={() => toggleIsFavorite(!isFavorite)}
            />
          )
        ) : null}

        <Link to={`/products/${product.id}`}>
          <img src="https://picsum.photos/200/300" alt="Test alt" />
        </Link>
        <div className={CharCardStyles['info-window']}>
          <span className={CharCardStyles['char-title']}>Spider-Man</span>
          <p>
            Spider-Man's secret identity is Peter Parker, a teenage high school
            student and an orphan raised by his Aunt May and Uncle Ben in New
            York City after his parents Richard and Mary Parker died in a plane
            crash.
          </p>
        </div>
      </div>
    </>
  );
}
