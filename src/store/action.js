export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORT: `UPDATE_SORT`,
  UPDATE_ACTIVE_ID: `UPDATE_ACTIVE_ID`,
  OPEN_SORT: `OPEN_SORT`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const updateOffers = () => ({
  type: ActionType.UPDATE_OFFERS,
  payload: []
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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
