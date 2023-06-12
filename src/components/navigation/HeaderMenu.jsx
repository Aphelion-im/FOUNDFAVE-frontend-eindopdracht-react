import './HeaderMenu.css';
import DarkLightMode from '../../components/darklightmode/DarkLightMode';
import { ReactComponent as LogoHeader } from '../../assets/logo/logo-header.svg';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

export default function HeaderMenu() {
  return (
    <>
      <nav>
        <div className="outer-container">
          <div className="menu-top">
            <LogoHeader className="logo-header" />
            <div className="loginlogout">
              <a href="#">Sign In</a>
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


