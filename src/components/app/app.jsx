import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import history from "../../browser-history";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import PrivateRoute from "../private-route/private-route";


const App = () => {

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact path={`/favorites`}
          render={() => {
            return (
              <FavoritesScreen />
            );
          }}
        />
        <Route exact path="/offer/:id">
          <OfferScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
