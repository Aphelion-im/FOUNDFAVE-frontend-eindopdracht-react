import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../components/searchbar/SearchBar';
import Content from '../../components/content/Content';
import CharCard from '../../components/charcard/CharCard';
import { ReactComponent as Logo } from '../../assets/logo/logo-header.svg';
import { ReactComponent as Loader } from '../../assets/loaders/infinity-loader.svg';

import ToolTip from '../../components/tooltip/ToolTip';
const API_URL = import.meta.env.VITE_APP_BASE_URL;
const apiKey = import.meta.env.VITE_APP_PUBLIC_KEY;
const ts = import.meta.env.VITE_APP_TIMESTAMP;
const hash = import.meta.env.VITE_APP_HASH;
const IMG_FANTASTIC = 'portrait_fantastic';
import './Home.css';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();
  const [query, setQuery] = useState('');
  const [isLoading, toggleIsLoading] = useState(false);
  const [sorted, toggleSorted] = useState(false);
  let cards;

  async function handleClick(e, searchquery) {
    e.preventDefault();
    if (searchquery === '') {
      return;
    } else {
      toggleIsLoading(true);
    }
    setQuery(() => searchquery);
    setError(false);
    try {
      const response = await axios.get(`${API_URL}v1/public/characters`, {
        params: {
          apikey: `${apiKey}`,
          ts: `${ts}`,
          hash: `${hash}`,
          nameStartsWith: `${searchquery}`,
          limit: 100,
          orderBy: 'name',
        },
      });
      console.log(response);
      const data = response.data.data.results;
      setHeroes(data);
    } catch (e) {
      console.error('Error', e);
      setError(true);
    }
    toggleIsLoading(false);
  }

  if (heroes) {
    cards = heroes.map((hero) => (
      <CharCard
        key={hero.id}
        name={hero.name}
        id={hero.id}
        description={hero.description}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }

  useEffect(() => {
    const heroesArrayBA = [...heroes];
    const sortedHeroesBA = heroesArrayBA.reverse();
    if (heroes) {
      setHeroes(() => sortedHeroesBA);
    }
  }, [sorted]);

  return (
    <>
      <Content>
        {Object.keys(heroes).length === 0 && !query && (
          <Logo className="logo" />
        )}
        <SearchBar
          slogan={
            Object.keys(heroes).length === 0 && !query && 'found your fave with'
          }
          brand={Object.keys(heroes).length === 0 && !query && 'FOUNDFAVE!'}
          placeholder="Search"
          handleClick={handleClick}
          setHeroes={setHeroes}
          setError={setError}
        />
        <div className="information">
          {isLoading && <Loader className="loader" />}
          {query && (
            <>
              <span>
                {Object.keys(heroes).length} results for <i>{query}</i>
                <ToolTip info="Mouse-over the names to see more info" />
              </span>
              <div>
                <select
                  className="sorting"
                  onChange={() => toggleSorted((prevState) => !prevState)}
                >
                  <option value="ab">Sort A-B</option>
                  <option value="ba">Sort B-A</option>
                </select>
              </div>
            </>
          )}
        </div>

        <section className="results-container">{cards ? cards : null}</section>
      </Content>
    </>
  );
}
