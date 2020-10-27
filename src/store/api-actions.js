import {loadOffers, loadComments, loadNearbyOffers} from "./action";
import {adaptOfferToClient, adaptCommentToClient} from "../utils/utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
);

export const fetchCommentsList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/${offerId}`)
    .then(({data}) => dispatch(loadComments(data.map(adaptCommentToClient))))
);

export const fetchNearbyOffersList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => dispatch(loadNearbyOffers(data.map(adaptOfferToClient))))
);
