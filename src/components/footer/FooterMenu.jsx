import { FaPinterestSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { ReactComponent as LogoFooter } from '../../assets/logo/logo-footer.svg';
import './FooterMenu.css';

export default function FooterMenu() {
  return (
    <>
      <footer>
        <div className="outer-container">
          <div className="inner-container">
            <div className="data-provided">
              <LogoFooter className="logo-footer" />
              <span>Data provided by Marvel. © 2023 MARVEL</span>
            </div>
            <p className="copyright">
              © 2023 FOUNDFAVE. All Rights Reserved. NOVI Hogeschool
            </p>
            <div className="social-media">
              <p>FOUNDFAVE On Social Media</p>
              <FaPinterestSquare className="fa-pinterest-square icon" />
              <FaFacebookSquare className="fa-facebook-square icon" />
              <FaLinkedin className="fa-linkedin icon" />
              <FaTwitter className="fa-twitter icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
