import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  const addToFavorites = (job) => {
    setFavoris((prevFavoris) => {
      if (!prevFavoris.some((fav) => fav.id === job.id)) {
        return [...prevFavoris, job];
      }
      return prevFavoris;
    });
  };

  const removeFromFavorites = (jobId) => {
    setFavoris((prevFavoris) => prevFavoris.filter((fav) => fav.id !== jobId));
  };

  const value = {
    favoris,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoriteContext);

FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoriteContext;
