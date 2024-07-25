import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const FavoriteContext = createContext();

const getInitialState = () => {
  const favoris = localStorage.getItem("favoris");
  return favoris ? JSON.parse(favoris) : [];
};

export function FavoriteProvider({ children }) {
  const [favoris, setFavoris] = useState(getInitialState);
  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris));
  }, [favoris]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FavoriteContext.Provider value={{ favoris, setFavoris }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;

FavoriteProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
