import { Link } from 'react-router-dom';
import CharCardStyles from './CharCard.module.css';

export default function CharCard({
  name,
  id,
  thumbnail,
  description,
  isAuth,
  isFavorite,
  handleClick,
  favoriteComponent,
}) {
  const FavoriteComponent = favoriteComponent;


  return (
    <>
      <div
        className={[CharCardStyles.charcard, CharCardStyles['box-shadow']].join(
          ' '
        )}
      >
        <FavoriteComponent
          handleClick={handleClick}
          isAuth={isAuth}
          isFavorite={isFavorite}
        />
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
