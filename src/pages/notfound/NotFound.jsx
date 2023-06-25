import Content from '../../components/content/Content';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { createDateAndTime } from '../../helpers/createdatetime';
import { generateActivityId } from '../../helpers/activityid';
import ImageComponent from '../../components/image-component/ImageComponent';
import illustration from '../../assets/illustrations/404-page-not-found.jpg';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Content title="404 Page Not Found">
        <section className="pagenotfound-section">
          <article>
            <p>We could not find the requested page</p>
            <p>
              <Link to="/" className="hyperlink">
                Go back Home
                <FaRegArrowAltCircleRight className="fa-reg-arrow-alt-circle-right-icon" />
              </Link>
            </p>
            <p>
              If you would like to contact us, please use the{' '}
              <Link to="/contact" className="hyperlink">
                contact form
              </Link>.
            </p>
            <br />
            <h2>
              <strong>More information about this error:</strong>
            </h2>
            <ul>
              <li>We're sorry, the page you requested cannot be found.</li>
            </ul>
            <h2>
              <strong>Here are some additional tips:</strong>
            </h2>
            <ul>
              <li>Verify the URL you are trying to access is correct.</li>
            </ul>
            <h2>Additional technical details:</h2>
            <ul>
              <li>
                <strong>Activity ID</strong>:{' '}
                {generateActivityId(
                  32,
                  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                )}
              </li>
              <li>
                <strong>Date and Time</strong>:{' '}
                <span>{createDateAndTime()}</span>
              </li>
            </ul>
          </article>

          <article>
            <ImageComponent
              className="illustration box-shadow"
              image={illustration}
              title="Illustration"
            />
          </article>
        </section>
      </Content>
    </>
  );
}
