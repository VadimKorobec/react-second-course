import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import {MeetupList} from '../components/Meetups/MeetupList'

export const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <h2 style={{textAlign:'center'}}>You got no favorites yet. Start adding some!</h2>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return <section>
    <h1 style={{ textAlign: 'center' }}>My Favorites</h1>
    {content}
  </section>;
};
