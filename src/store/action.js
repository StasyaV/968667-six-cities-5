export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_SORT: `UPDATE_SORT`,
  UPDATE_ACTIVE_ID: `UPDATE_ACTIVE_ID`,
  OPEN_SORT: `OPEN_SORT`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SAVE_EMAIL: `SAVE_EMAIL`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  SEND_COMMENT: `SEND_COMMENT`,
  UPDATE_ERROR_STATUS: `UPDATE_ERROR_STATUS`
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const updateSort = (sortType) => ({
  type: ActionType.UPDATE_SORT,
  payload: sortType
});

export const updateActiveOfferId = (id) => ({
  type: ActionType.UPDATE_ACTIVE_ID,
  payload: id
});

export const openSortList = (answer) => ({
  type: ActionType.OPEN_SORT,
  payload: answer
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const loadNearbyOffers = (offers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const saveUserEmail = (email) => ({
  type: ActionType.SAVE_EMAIL,
  payload: email,
});

export const changeFavoriteStatus = (offerId, status) => ({
  type: ActionType.CHANGE_FAVORITE_STATUS,
  payload: offerId, status,
});

export const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers,
});

export const sendComment = (commentData, offerId) => ({
  type: ActionType.SEND_COMMENT,
  payload: commentData, offerId,
});

export const updateErrorStatus = (answer) => ({
  type: ActionType.UPDATE_ERROR_STATUS,
  payload: answer
});
