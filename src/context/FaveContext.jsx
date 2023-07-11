import { createContext, useState } from 'react';

export const FaveContext = createContext([]);

function FaveContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const faveContextData = {
    favorites: favorites,
    setFavorites: setFavorites,
  };

  return (
    <FaveContext.Provider value={faveContextData}>
      {children}
    </FaveContext.Provider>
  );
}

export default FaveContextProvider;
