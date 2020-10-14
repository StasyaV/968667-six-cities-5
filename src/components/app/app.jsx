import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";


const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offers={offers}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} />
        </Route>
        <Route exact path="/offer/:id">
          <OfferScreen offers={offers} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
