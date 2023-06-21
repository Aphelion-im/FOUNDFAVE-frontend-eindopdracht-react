import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DarkLightMode from '../../components/darklightmode/DarkLightMode';
import { ReactComponent as LogoHeader } from '../../assets/logo/logo-header.svg';
import { FaRegHeart } from 'react-icons/fa';
import './HeaderMenu.css';

export default function HeaderMenu() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <nav>
        <div className="outer-container">
          <div className="menu-top">
            <LogoHeader className="logo-header" onClick={() => navigate('/')} />
            <div className="loginlogout">
              {isAuth ? (
                <button type="button" title="Click button to sign out">
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
                <FaRegHeart className="fa-reg-heart-icon" />
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
