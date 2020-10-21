export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  UPDATE_SORT: `UPDATE_SORT`,
  UPDATE_ACTIVE_ID: `UPDATE_ACTIVE_ID`,
  OPEN_SORT: `OPEN_SORT`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  updateOffers: () => ({
    type: ActionType.UPDATE_OFFERS,
    payload: []
  }),
  updateSort: (sortType) => ({
    type: ActionType.UPDATE_SORT,
    payload: sortType
  }),
  updateActiveOfferId: (id) => ({
    type: ActionType.UPDATE_ACTIVE_ID,
    payload: id
  }),
  openSortList: (answer) => ({
    type: ActionType.OPEN_SORT,
    payload: answer
  })
};
