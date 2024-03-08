import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import { Link } from "react-router-dom/cjs/react-router-dom";

import styles from "./MainNavigation.module.css";

export const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favotites
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
