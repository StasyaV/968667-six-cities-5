import {ActionType, changeCity, updateSort, updateActiveOfferId, openSortList, loadOffers, loadComments,
  loadNearbyOffers, requireAuthorization, redirectToRoute, saveUserEmail, changeFavoriteStatus,
  loadFavoriteOffers, sendComment, updateErrorStatus} from './action';
import {offers} from "../components/app/app.test";
import {comments} from "../components/comment-list/comment-list.test";

const commentData = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "rating": 4
};

jest.mock(`moment`, () => () => ({format: () => `May 08`}));

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeCity returns correct action`, () => {
    expect(changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for updateSort returns correct action`, () => {
    expect(updateSort(`Rating`)).toEqual({
      type: ActionType.UPDATE_SORT,
      payload: `Rating`
    });
  });

  it(`Action creator for updateActiveOfferId returns correct action`, () => {
    expect(updateActiveOfferId(`1`)).toEqual({
      type: ActionType.UPDATE_ACTIVE_ID,
      payload: `1`
    });
  });

  it(`Action creator for openSortList returns correct action`, () => {
    expect(openSortList(true)).toEqual({
      type: ActionType.OPEN_SORT,
      payload: true
    });
  });

  it(`Action creator for loadOffers returns correct action`, () => {
    expect(loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for loadComments returns correct action`, () => {
    expect(loadComments(comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    });
  });

  it(`Action creator for loadNearbyOffers returns correct action`, () => {
    expect(loadNearbyOffers(offers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for requireAuthorization returns correct action`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    });
  });

  it(`Action creator for redirectToRoute returns correct action`, () => {
    expect(redirectToRoute(`/`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`
    });
  });

  it(`Action creator for saveUserEmail returns correct action`, () => {
    expect(saveUserEmail(`Oliver.conner@gmail.com`)).toEqual({
      type: ActionType.SAVE_EMAIL,
      payload: `Oliver.conner@gmail.com`
    });
  });

  it(`Action creator for changeFavoriteStatus returns correct action`, () => {
    expect(changeFavoriteStatus(1, 0)).toEqual({
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: 1,
      status: 0,
    });
  });

  it(`Action creator for loadFavoriteOffers returns correct action`, () => {
    expect(loadFavoriteOffers(offers)).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for sendComment returns correct action`, () => {
    expect(sendComment(commentData, `1`)).toEqual({
      type: ActionType.SEND_COMMENT,
      payload: commentData,
      offerId: `1`,
    });
  });

  it(`Action creator for updateErrorStatus returns correct action`, () => {
    expect(updateErrorStatus(true)).toEqual({
      type: ActionType.UPDATE_ERROR_STATUS,
      payload: true
    });
  });
});
