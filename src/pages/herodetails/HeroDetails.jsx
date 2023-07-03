import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Content from '../../components/content/Content';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import './HeroDetails.css';

// FaHeart/Favorite: isFavorite true/false
// useEffect [favorite] --> remove from localStorage

export default function HeroDetails() {
  const [isFavorite, toggleIsFavorite] = useState(true);

  return (
    <>
      <Content title="Spider-Man">
        <section className="herodetails-section">
          {/* Left column */}
          <article>
            <img src="https://picsum.photos/200" alt="Placeholder" />
          </article>
          {/* Right column */}
          <article>
            <div className="container">
              {isFavorite ? (
                <FaHeart
                  className="favorite-icon"
                  title="Click to remove this favorite"
                  onClick={() => toggleIsFavorite(!isFavorite)}
                />
              ) : (
                <FaRegHeart
                  className="favorite-icon"
                  title="Click to remove this favorite"
                  onClick={() => toggleIsFavorite(!isFavorite)}
                />
              )}
            </div>
            <h2>Name</h2>
            <p>Spider-Man</p>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ex perspiciatis eveniet nemo, esse quidem quisquam
              facilis id eius magni.
            </p>
            <h2>Series</h2>
            <ul>
              <li>Series #1: Lorem, ipsum dolor.</li>
              <li>Series #2: Lorem, ipsum dolor.</li>
              <li>Series #3: Lorem, ipsum dolor.</li>
              <li>Series #4: Lorem, ipsum dolor.</li>
              <li>Series #5: Lorem, ipsum dolor.</li>
            </ul>
          </article>
        </section>
      </Content>
    </>
  );
}
