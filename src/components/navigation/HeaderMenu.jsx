import { useState } from 'react';
import DarkLightMode from '../../components/darklightmode/DarkLightMode';
import { ReactComponent as LogoHeader } from '../../assets/logo/logo-header.svg';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import './HeaderMenu.css';

export default function HeaderMenu() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <nav>
        <div className="outer-container">
          <div className="menu-top">
            <LogoHeader className="logo-header" />
            <div className="loginlogout">
              {isAuth ? (
                <button type="button" title="Click button to sign out">
                  Sign Out
                </button>
              ) : (
                <a href="#" data-title="Sign in or register a new account">Sign In</a>
              )}
            </div>
            <div className="favorites">
              <FaRegHeart className="fa-reg-heart-icon" />
            </div>
            <div className="darklight">
              <DarkLightMode />
            </div>
          </div>
        </div>

        <div className="menu-bottom box-shadow">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
