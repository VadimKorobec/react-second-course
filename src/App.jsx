import { Route, Switch } from "react-router-dom/cjs/react-router-dom";

import { AllMeetupsPage } from "./pages/AllMeetups";
import { NewMeetupPage } from "./pages/NewMeetup";
import { FavoritesPage } from "./pages/Favorites";
import { Layout } from "./components/layout/Layout";

export const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
};
