import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { ReactComponent as LogoFooter } from '../../assets/logo/logo-footer.svg';
import { showCurrentYear } from '../../helpers/createdatetime';
import './Footer.css';

export default function FooterMenu() {
  const navigate = useNavigate();
  return (
    <>
      <footer>
        <div className="outer-container">
          <div className="inner-container">
            <div className="data-provided">
              <LogoFooter
                className="logo-footer"
                onClick={() => navigate('/')}
              />
              <span>Data provided by Marvel. © {showCurrentYear()} Marvel</span>
            </div>
            <p className="copyright">
              © {showCurrentYear()} FOUNDFAVE. All Rights Reserved. NOVI
              Hogeschool
            </p>
            <div className="social-media">
              <p>FOUNDFAVE On Social Media</p>
              <a href="https://pinterest.com" target="_blank">
                <FaPinterestSquare className="fa-pinterest-square icon" />
              </a>

              <a href="https://facebook.com" target="_blank">
                <FaFacebookSquare className="fa-facebook-square icon" />
              </a>

              <a href="https://linkedin.com" target="_blank">
                <FaLinkedin className="fa-linkedin icon" />
              </a>

              <a href="https://twitter.com" target="_blank">
                <FaTwitter className="fa-twitter icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
