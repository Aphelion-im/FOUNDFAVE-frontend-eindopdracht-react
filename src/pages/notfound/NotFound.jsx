import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { createDateAndTime } from '../../helpers/createdatetime';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <article>
        <h1>404 Page Not Found</h1>
        <p>We could not find the requested page</p>
        <p>
          Go back Home
          <FaRegArrowAltCircleRight className="fa-reg-arrow-alt-circle-right-icon" />
        </p>
        <p>If you would like to contact us, please use the contact form.</p>
        <strong>More information about this error</strong>
        <p>We're sorry, the page you requested cannot be found.</p>
        <strong>Here are some additional tips:</strong>
        <ul>
          <li>Verify the URL you are trying to access is correct</li>
        </ul>
        <p>Additional technical details:</p>
        <p>
          <strong>Activity ID</strong>: 4bbc6ac0-7d32-40e5-a3b1-1971afb51892
        </p>
        <p>
          <strong>Date and Time</strong>: <span>{createDateAndTime()}</span>
        </p>
      </article>
      <img
        className="notfoundimg"
        src="https://picsum.photos/200"
        alt="Lorem Picsum"
        title="Lorem Picsum"
      />
    </>
  );
}
