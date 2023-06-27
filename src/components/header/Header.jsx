import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import DarkLightMode from '../darklightmode/DarkLightMode';
import { ReactComponent as LogoHeader } from '../../assets/logo/logo-header.svg';
import { FaRegHeart } from 'react-icons/fa';
import './Header.css';

export default function HeaderMenu() {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="outer-container">
          <div className="menu-top">
            <LogoHeader className="logo-header" onClick={() => navigate('/')} />
            <div className="loginlogout">
              {isAuth ? (
                <button
                  onClick={logout}
                  type="button"
                  title="Sign out"
                >
                  Sign Out
                </button>
              ) : (
                <NavLink
                  to="/sign-in-register"
                  className={({ isActive }) =>
                    isActive ? 'active-link-sign-in-register' : 'default-link'
                  }
                >
                  Sign In
                </NavLink>
              )}
            </div>
            <div className="favorites">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? 'active-link-favorites' : 'default-link'
                }
              >
                <FaRegHeart className="fa-reg-heart-icon" title="Favorites" />
              </NavLink>
            </div>
            <div className="darklight">
              <DarkLightMode />
            </div>
          </div>
        </div>

        {/* Bottom menu */}
        <div className="menu-bottom box-shadow">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'default-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'default-link'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'default-link'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
