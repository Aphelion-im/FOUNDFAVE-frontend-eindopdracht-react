import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaveContext } from '../../context/FaveContext';
import { AuthContext } from '../../context/AuthContext';
import SearchBar from '../../components/searchbar/SearchBar';
import Content from '../../components/content/Content';
import GenerateList from '../../components/generate-list/GenerateList';
import { ReactComponent as Logo } from '../../assets/logo/logo-header.svg';
import { ReactComponent as Loader } from '../../assets/loaders/infinity-loader.svg';
import ToolTip from '../../components/tooltip/ToolTip';
import AddFavoriteComponent from '../../components/addfavorite-component/AddFavoriteComponent';
import EmptyComponent from '../../components/empty-component/EmptyComponent';
import './Home.css';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, toggleIsLoading] = useState(false);
  const [sorted, toggleSorted] = useState(false);
  const [selectState, setSelectState] = useState({
    selected: 'ab',
  });
  const { isAuth, user } = useContext(AuthContext);
  const { favorites, setFavorites } = useContext(FaveContext);
  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const apiKey = import.meta.env.VITE_APP_PUBLIC_KEY;
  const ts = import.meta.env.VITE_APP_TIMESTAMP;
  const hash = import.meta.env.VITE_APP_HASH;

  async function handleClick(e, searchquery) {
    e.preventDefault();
    if (searchquery === '') {
      return;
    } else {
      toggleIsLoading(true);
    }
    setQuery(searchquery);
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
      const data = response.data.data.results;
      setHeroes(data);
    } catch (e) {
      setError(true);
      console.error('Error', e);
      if (e.response.status === 500) setErrorMessage('Internal server error.');
      if (e.response.status === 404 || 401)
        setErrorMessage('An error has occured. Please try again later.');
    }
    toggleIsLoading(false);
    setSelectState({ selected: 'ab' });
  }

  useEffect(() => {
    const heroesArrayBA = [...heroes];
    const sortedHeroesBA = heroesArrayBA.reverse();
    if (heroes) {
      setHeroes(() => sortedHeroesBA);
    }
  }, [sorted]);

  useEffect(() => {
    const timeoutMessageFavoriteAdded = setTimeout(() => {
      setMessage('');
    }, 1000);

    return () => {
      clearTimeout(timeoutMessageFavoriteAdded);
    };
  }, [message]);

  useEffect(() => {
    const timeoutErrorMessage = setTimeout(() => {
      setErrorMessage('');
    }, 5000);

    return () => {
      clearTimeout(timeoutErrorMessage);
    };
  }, [errorMessage]);

  function handleSorting(e) {
    toggleSorted((prevState) => !prevState);

    setSelectState({
      selected: e.target.value,
    });
  }

  function addFavoriteHero(hero) {
    const checkForDouble = favorites.find(
      (favorite) => hero.id === favorite.id
    );

    if (checkForDouble) return;

    const newFavoriteList = [...favorites, hero];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    setMessage('Favorite added!');
  }

  function saveToLocalStorage(items) {
    localStorage.setItem(`faves-of-${user.username}`, JSON.stringify(items));
  }

  useEffect(() => {
    if (heroes.length > 0) {
      sessionStorage.setItem('searchresults', JSON.stringify(heroes));
      sessionStorage.setItem('searchquery', query);
      sessionStorage.setItem('selected', JSON.stringify(selectState));
    }
  }, [heroes]);

  useEffect(() => {
    const searchresults = JSON.parse(sessionStorage.getItem('searchresults'));
    const searchquery = sessionStorage.getItem('searchquery');
    const selectedstate = JSON.parse(sessionStorage.getItem('selected'));

    if (searchresults && searchquery && selectedstate) {
      setHeroes(searchresults);
      setQuery(searchquery);
      setSelectState(selectedstate);
    }
  }, []);

  return (
    <>
      <Content>
        {message && <p className="message-big">{message}</p>}
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
                {errorMessage ? (
                  <p className="error">{errorMessage}</p>
                ) : message ? (
                  <>
                    <p className="message">{message}</p>
                    <ToolTip info="Mouse-over the names to see more info" />
                  </>
                ) : (
                  <>
                    {Object.keys(heroes).length} results for <i>{query}</i>
                    <ToolTip info="Mouse-over the names to see more info" />
                  </>
                )}
              </span>
              <div>
                <select
                  name="selected"
                  id="select"
                  className="sorting"
                  onChange={handleSorting}
                  value={selectState.selected}
                >
                  <option value="ab">Sort A-B</option>
                  <option value="ba">Sort B-A</option>
                </select>
              </div>
            </>
          )}
        </div>

        <section className="results-container">
          {heroes && (
            <GenerateList
              heroes={heroes}
              handleFavoritesClick={addFavoriteHero}
              favoriteComponent={isAuth ? AddFavoriteComponent : EmptyComponent}
            />
          )}
        </section>
      </Content>
    </>
  );
}
