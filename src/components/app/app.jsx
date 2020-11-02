import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import history from "../../browser-history";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import PrivateRoute from "../private-route/private-route";


const App = (props) => {
  const {offers} = props;

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
        <Route exact path="/offer/:id"
          render={({match}) => {
            const offer = offers.find((item) => +item.id === +match.params.id);
            return <OfferScreen
              offer={offer} />;
          }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = ({OFFERS}) => ({
  offers: OFFERS.offers
});

export {App};
export default connect(mapStateToProps)(App);
