import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Content from '../../components/content/Content';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import './HeroDetails.css';

import { fetchHero } from '../../helpers/fetchHeroes';

// FaHeart/Favorite: isFavorite true/false
// useEffect [favorite] --> remove from localStorage

export default function HeroDetails() {
  const [isFavorite, toggleIsFavorite] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  const [hero, setHero] = useState();

  let name;
  let description;
  let thumbnailPath;
  let thumbnailExtension;
  let thumbnailUrl;
  let series;

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data))
      .catch((err) => console.error(err));
  }, []);

  if (hero) {
    name = hero.data.results[0].name;
    description = hero.data.results[0].description;
    thumbnailPath = hero.data.results[0].thumbnail.path;
    thumbnailExtension = hero.data.results[0].thumbnail.extension;
    thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
    series = hero.data.results[0].series.items;
  }

  if (!hero) return;

  return (
    <>
      <Content title={name}>
        <section className="herodetails-section">
          {/* Left column */}
          <article>
            <FaChevronLeft
              className="goback"
              onClick={() => navigate('/')}
              title="Go back to the previous page"
            />
            <img
              className="illustration box-shadow"
              src={thumbnailUrl}
              alt="Hero image"
            />
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
            <p>{name}</p>
            <h2>Description</h2>
            {description ? (
              <>
                <p>{description}</p>
              </>
            ) : (
              <p>No description available</p>
            )}
            <h2>Series</h2>
            <ul>
              {series
                ? series.map((title) => (
                    <li key={Math.random() * 1000}>{title.name}</li>
                  ))
                : null}
            </ul>
          </article>
        </section>
      </Content>
    </>
  );
}
