import Content from '../../components/content/Content';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { createDateAndTime } from '../../helpers/createdatetime';
import { generateActivityId } from '../../helpers/activityid';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Content title="404 Page Not Found">
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
          </Link>
        </p>
        <strong>More information about this error</strong>
        <p>We're sorry, the page you requested cannot be found.</p>
        <strong>Here are some additional tips:</strong>
        <ul>
          <li>Verify the URL you are trying to access is correct</li>
        </ul>
        <p>Additional technical details:</p>
        <p>
          <strong>Activity ID</strong>: {generateActivityId(
            32,
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
          )}
        </p>
        <p>
          <strong>Date and Time</strong>: <span>{createDateAndTime()}</span>
        </p>

        <div className="img-container box-shadow">
          <img src="https://picsum.photos/200" alt="fgfgfgg" />
        </div>
      </Content>
    </>
  );
}
