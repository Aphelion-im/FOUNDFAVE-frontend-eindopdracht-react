import { useState } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import Content from '../../components/content/Content';
import CharCard from '../../components/charcard/CharCard';
import { fetchHeroes } from '../../helpers/fetchHeroes';
import { ReactComponent as Logo } from '../../assets/logo/logo-header.svg';
import ToolTip from '../../components/tooltip/ToolTip';
import './Home.css';
const IMG_FANTASTIC = 'portrait_fantastic';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();
  const [query, setQuery] = useState('');
  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === '') return;
    setQuery(args);
    try {
      return await fetchHeroes(args);
    } catch (e) {
      console.error(e);
      // return e;
    }
  };

  if (heroes) {
    cards = heroes.map((hero) => (
      <CharCard
        name={hero.name}
        key={hero.id}
        id={hero.id}
        description={hero.description}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }

  return (
    <>
      <Content>
        {heroes.length === 0 && <Logo className="logo" />}
        <SearchBar
          slogan={heroes.length === 0 && 'found your fave with'}
          brand={heroes.length === 0 && 'FOUNDFAVE!'}
          placeholder="Search"
          handleClick={handleClick}
          setHeroes={setHeroes}
          setError={setError}
        />
        <div className="information">
          {heroes.length > 0 && (
            <>
              <span>
                {heroes.length} results found for {query}
                <ToolTip info="Mouse-over the names to see more info" />
              </span>
              <div>
                <select className="sorting" id="cars">
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
