import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { FaInfoCircle } from 'react-icons/fa';
import Content from '../../components/content/Content';
import CharCard from '../../components/charcard/CharCard';
import ToolTip from '../../components/tooltip/ToolTip';
import './Favorites.css';

// TODO:
// Maximaal aantal favorieten
// User feedback: Removed a favorite
// Axios import verwijderen?

export default function Favorites() {
  const [favorites, setFavorites] = useState(18);
  const { isAuth, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Content title="My Favorites">
        <section className="favorites-section">
          <article>
            {isAuth ? (
              <>
                <hr />
                <p>
                  Welcome <span className="username">{user.username}</span>, you
                  have {favorites} favorites.
                </p>
                <ToolTip info="Mouse-over the names to see more info" />
                <section className="favorites-container">
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
                  <CharCard />
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
