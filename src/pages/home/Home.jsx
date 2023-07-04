import { useState } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import Content from '../../components/content/Content';
import CharCard from '../../components/charcard/CharCard';
import { fetchHeroes } from '../../helpers/fetchHeroes';
import './Home.css';
const IMG_FANTASTIC = 'portrait_fantastic';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();
  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === '') return;

    try {
      return await fetchHeroes(args);
    } catch (err) {
      return err;
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
        <SearchBar
          slogan="found your fave with"
          brand="FOUNDFAVE!"
          placeholder="Search"
          handleClick={handleClick}
          setHeroes={setHeroes}
          setError={setError}
        />
        <section className="favorites-container">
          {cards ? cards : null}
        </section>
      </Content>
    </>
  );
}
