const fetchHeroes = async (name) => {
  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const apiKey = import.meta.env.VITE_APP_PUBLIC_KEY;
  const ts = import.meta.env.VITE_APP_TIMESTAMP;
  const hash = import.meta.env.VITE_APP_HASH;
  const heroUrl = `${API_URL}/v1/public/characters`;
  const url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

const fetchHero = async (id) => {
  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const apiKey = import.meta.env.VITE_APP_PUBLIC_KEY;
  const ts = import.meta.env.VITE_APP_TIMESTAMP;
  const hash = import.meta.env.VITE_APP_HASH;
  const heroUrl = `${API_URL}/v1/public/characters/${id}`;
  const url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchHeroes, fetchHero };
