import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavotiteHandler = (favoriteMeetup) => {
    setUserFavorites((prevState) => [...prevState, { favoriteMeetup }]);
  };

  const removeFavotiteHandler = (meetupId) => {
    setUserFavorites((prevState) =>
      prevState.filter((item) => item.id !== meetupId)
    );
  };

  const itemFavoriteHandler = (meetupId) => {
    return userFavorites.some((item) => item.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavotiteHandler,
    removeFavorite: removeFavotiteHandler,
    itemIsFavorite: itemFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
