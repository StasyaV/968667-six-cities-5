import {loadOffers, loadComments, loadNearbyOffers, requireAuthorization,
  redirectToRoute, saveUserEmail, loadFavoriteOffers, updateErrorStatus} from "./action";
import {adaptOfferToClient, adaptCommentToClient} from "../utils/utils";
import {AuthorizationStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
);
//
export const fetchCommentsList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/${offerId}`)
    .then(({data}) => dispatch(loadComments(data.map(adaptCommentToClient))))
);
//
export const fetchNearbyOffersList = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => dispatch(loadNearbyOffers(data.map(adaptOfferToClient))))
);
//
export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(data.map(adaptOfferToClient))))
);
//
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(saveUserEmail(email)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const changeFavorite = (offerId, status) => (dispatch, _getState, api) => {
  api.post(`/favorite/${offerId}/${status}`)
  .then(api.get(`/hotels`)
  .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient)))))
    .then(api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(data.map(adaptOfferToClient)))));
};
//
export const sendComment = ({comment, rating}, offerId) => (dispatch, _getState, api) => {
  api.post(`/comments/${offerId}`, {comment, rating})
  .then(({data}) => dispatch(loadComments(data.map(adaptCommentToClient))))
  .catch((err) => {
    dispatch(updateErrorStatus(true));
    throw err;
  });
};
