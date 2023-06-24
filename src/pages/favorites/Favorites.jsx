import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Content from '../../components/content/Content';
import { FaInfoCircle } from 'react-icons/fa';
import CharCard from '../../components/charcard/CharCard';
import './Favorites.css';

export default function Favorites() {
  const [isAuth, setIsAuth] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    navigate('/sign-in-register');
  }

  return (
    <>
      <Content title="My Favorites">
        <section className="favorites-section">
          <article>
            {isAuth ? (
              <>
                <hr />
                <p>You have 18 favorites</p>
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
                <p className="informationbox">
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
                    onClick={handleClick}
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
