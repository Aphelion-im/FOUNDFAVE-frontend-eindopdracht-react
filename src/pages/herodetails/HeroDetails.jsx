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
            <h2>Unnamed title</h2>
            <ul>
              <li>Fact #1: Lorem, ipsum dolor.</li>
              <li>Fact #2: Lorem, ipsum dolor.</li>
              <li>Fact #3: Lorem, ipsum dolor.</li>
              <li>Fact #4: Lorem, ipsum dolor.</li>
              <li>Fact #5: Lorem, ipsum dolor.</li>
            </ul>
            <h2>Unnamed title</h2>
            <ul>
              <li>Fact #1: Lorem, ipsum dolor.</li>
              <li>Fact #2: Lorem, ipsum dolor.</li>
              <li>Fact #3: Lorem, ipsum dolor.</li>
              <li>Fact #4: Lorem, ipsum dolor.</li>
              <li>Fact #5: Lorem, ipsum dolor.</li>
            </ul>
          </article>
        </section>
      </Content>
    </>
  );
}
