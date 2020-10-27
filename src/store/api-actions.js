import {loadOffers} from "./action";
import {adaptOfferToClient, adaptCommentToClient} from "../utils/utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
);

export const fetchCommentsList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/${offerId}`)
    .then(({data}) => dispatch(loadOffers(data.map(adaptCommentToClient))))
);

export const fetchNearOffersList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
);
