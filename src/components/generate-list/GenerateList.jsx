import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import AddFavoriteComponent from '../addfavorite-component/AddFavoriteComponent';
import RemoveFavoriteComponent from '../removefavorite-component/RemoveFavoriteComponent';
import './GenerateList.css';

export default function GenerateList({
  handleFavoritesClick,
  heroes,
  favoriteComponent,
}) {
  const FavoriteComponent = favoriteComponent;
  const IMG_UNCANNY = 'portrait_uncanny'; // 300x450px

  return (
    <>
      {heroes.map((hero, index) => {
        return (
          <div key={hero.id} className="charcard box-shadow">
            <FavoriteComponent
              handleFavoritesClick={() => handleFavoritesClick(hero)}
            />

            <Link to={`/${hero.id}`}>
              <img
                src={`${hero.thumbnail.path}/${IMG_UNCANNY}.${hero.thumbnail.extension}`}
                alt={`Thumbnail ${hero.name}`}
              />
            </Link>
            <div className="info-window">
              <span className="char-title">{hero.name}</span>
              <p>
                {hero.description.length > 0
                  ? `${hero.description.substring(0, 180)} ...`
                  : 'No description available'}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
