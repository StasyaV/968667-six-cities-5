import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {getOffer} from "./mocks/offers";

const renderOfferCards = 4;

const offerCards = new Array(renderOfferCards).fill().map(getOffer);

ReactDOM.render(
    <App
      offers = {offerCards}
    />,
    document.querySelector(`#root`)
);
