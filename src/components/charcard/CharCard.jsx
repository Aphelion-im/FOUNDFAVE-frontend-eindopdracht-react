import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import './CharCard.css';

export default function CharCard() {
  const [isAuth, toggleIsAuth] = useState(true);
  const [isFavorite, toggleIsFavorite] = useState(false);

  return (
    <>
      <div className="charcard box-shadow">
        {isAuth ? (
          isFavorite ? (
            <FaRegHeart
              className="fa-heart-icon"
              title="Click to remove this favorite"
              onClick={() => toggleIsFavorite(!isFavorite)}
            />
          ) : (
            <FaHeart
              className="fa-heart-icon"
              title="Click to add this favorite"
              onClick={() => toggleIsFavorite(!isFavorite)}
            />
          )
        ) : null}

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
