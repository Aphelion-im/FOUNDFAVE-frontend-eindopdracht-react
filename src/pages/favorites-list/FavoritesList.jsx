import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaveContext } from '../../context/FaveContext';
import GenerateList from '../../components/generate-list/GenerateList';
import { FaInfoCircle } from 'react-icons/fa';
import Content from '../../components/content/Content';
import ToolTip from '../../components/tooltip/ToolTip';
import RemoveFavoriteComponent from '../../components/removefavorite-component/RemoveFavoriteComponent';
import './FavoritesList.css';

export default function Favorites() {
  const [message, setMessage] = useState('');
  const { isAuth, user } = useContext(AuthContext);
  const { favorites, setFavorites } = useContext(FaveContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      const heroFavorites = JSON.parse(
        localStorage.getItem(`faves-of-${user.username}`)
      );

      if (heroFavorites) {
        setFavorites(heroFavorites);
      }
    }
  }, []);

  function removeFavoriteHero(hero) {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== hero.id
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  function saveToLocalStorage(items) {
    localStorage.setItem(`faves-of-${user.username}`, JSON.stringify(items));
  }

  useEffect(() => {
    const timeoutMessageFavoriteAdded = setTimeout(() => {
      setMessage('');
    }, 1000);

    return () => {
      clearTimeout(timeoutMessageFavoriteAdded);
    };
  }, [message]);

  return (
    <>
      <Content title="My Favorites">
        {message && <p className="message-big">{message}</p>}
        <section className="favorites-section">
          <article>
            {isAuth ? (
              <>
                <hr />
                <p>
                  {message ? (
                    <>
                      <p className="message">{message}</p>
                      <ToolTip info="Mouse-over the names to see more info" />
                      <ToolTip info="Other accounts can store other favorites" />
                    </>
                  ) : (
                    <>
                      Welcome <span className="username">{user.username}</span>,
                      you have {Object.keys(favorites).length} favorites.
                      <ToolTip info="Mouse-over the names to see more info" />
                      <ToolTip info="Other accounts can store other favorites" />
                    </>
                  )}
                </p>

                <section className="favorites-container">
                  <GenerateList
                    heroes={favorites}
                    handleFavoritesClick={removeFavoriteHero}
                    favoriteComponent={RemoveFavoriteComponent}
                  />
                </section>
              </>
            ) : (
              <>
                <p className="informationbox box-shadow">
                  <FaInfoCircle className="fa-info-circle-icon" />
                  Save all your favorite Marvel characters on this list. Look at
                  your list or edit it?{' '}
                  <Link className="hyperlink" to="/sign-in-register">
                    Sign in
                  </Link>{' '}
                  or{' '}
                  <Link className="hyperlink" to="/sign-in-register">
                    register an account
                  </Link>
                  .
                </p>
                <div className="information-block">
                  <div>There are no items on your list</div>
                  <button
                    className="box-shadow"
                    type="button"
                    onClick={() => navigate('/sign-in-register')}
                  >
                    Sign In or Register
                  </button>
                </div>
              </>
            )}
          </article>
        </section>
      </Content>
    </>
  );
}
