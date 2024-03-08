import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavotiteHandler = (favoriteMeetup) => {
    setUserFavorites((prevState) => [...prevState, { favoriteMeetup }]);
  };

  const removeFavotiteHandler = (meetupId) => {
    setUserFavorites((prevState) =>
      prevState.filter((item) => item.id !== meetupId)
    );
  };

  const itemFavoriteHandler = () => {};

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
