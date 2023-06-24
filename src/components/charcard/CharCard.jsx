// FaHeart (Vol hart)
// FaRegHeart (Open hart)
import { FaHeart } from 'react-icons/fa';
import './ChardCard.css';

function handleClick() {
  console.log('Clicked fave!');
}

export default function CharCard() {
  return (
    <>
      <div className="charcard box-shadow">
        <FaHeart className="fa-heart-icon" title="Click to remove this favorite" onClick={handleClick} />
        <img src="https://picsum.photos/200/300" alt="Test alt" />
        <div className="info-window">
          <span className="char-title">Spider-Man</span>
          <p>
            Spider-Man's secret identity is Peter Parker, a teenage high school
            student and an orphan raised by his Aunt May and Uncle Ben in New
            York City after his parents Richard and Mary Parker died in a plane
            crash.
          </p>
        </div>
      </div>
    </>
  );
}
