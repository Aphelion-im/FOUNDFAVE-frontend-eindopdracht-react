import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Content from '../../components/content/Content';
import { FaChevronLeft } from 'react-icons/fa';
import { ReactComponent as Loader } from '../../assets/loaders/infinity-loader.svg';
import './HeroDetails.css';

export default function HeroDetails() {
  const [hero, setHero] = useState();
  const [isLoading, toggleIsLoading] = useState(false);
  let navigate = useNavigate();
  let { id } = useParams();
  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const apiKey = import.meta.env.VITE_APP_PUBLIC_KEY;
  const ts = import.meta.env.VITE_APP_TIMESTAMP;
  const hash = import.meta.env.VITE_APP_HASH;
  let name;
  let description;
  let thumbnailPath;
  let thumbnailExtension;
  let thumbnailUrl;
  let series;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchHero(id) {
      toggleIsLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}v1/public/characters/${id}`,
          {
            signal: controller.signal,
            params: {
              apikey: `${apiKey}`,
              ts: `${ts}`,
              hash: `${hash}`,
            },
          }
        );
        const data = response.data;
        setHero(data);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log('The axios request was cancelled');
        } else {
          console.error(e);
        }
      }
      toggleIsLoading(false);
    }

    fetchHero(id);

    return function cleanup() {
      controller.abort();
    };
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
              {isLoading && <Loader className="loader-hero-details" />}
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
