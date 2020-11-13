import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {offersActions} from "./offers-actions";
import {ActionType} from "../../action";
import {serverComments, serverOffers, commentData, adaptedOffers, adaptedComments} from "../../../mocks/offers";
import {fetchNearbyOffersList, fetchFavoriteOffersList,
  changeFavorite, fetchCommentsList, sendComment} from "../../api-actions";

const api = createAPI(() => {});

describe(`Offer Actions Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(offersActions(void 0, {})).toEqual({
      currentSort: `Popular`,
      activeOfferId: ``,
      openSort: false,
      comments: [],
      nearbyOffers: [],
      favoriteOffers: []
    });
  });

  it(`Reducer updates activeOfferId`, () => {
    expect(offersActions({
      activeOfferId: `1`,
    }, {
      type: ActionType.UPDATE_ACTIVE_ID,
      payload: `10`,
    })).toEqual({
      activeOfferId: `10`
    });
  });

  it(`Reducer updates openSort`, () => {
    expect(offersActions({
      openSort: false,
    }, {
      type: ActionType.OPEN_SORT,
      payload: true,
    })).toEqual({
      openSort: true
    });
  });

  it(`Reducer updates comments`, () => {
    expect(offersActions({
      comments: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: adaptedComments,
    })).toEqual({
      comments: adaptedComments
    });
  });

  it(`Reducer updates sort type by change sort type`, () => {
    expect(offersActions({
      currentSort: `Popular`,
    }, {
      type: ActionType.UPDATE_SORT,
      payload: `Rating`
    })).toEqual({
      currentSort: `Rating`,
      openSort: false
    });
  });

  it(`Reducer updates favorites by load favorites`, () => {
    expect(offersActions({
      favoriteOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: adaptedOffers,
    })).toEqual({
      favoriteOffers: adaptedOffers
    });
  });

  it(`Reducer updates nearby offers by load offers`, () => {
    expect(offersActions({
      nearbyOffers: [],
    }, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: adaptedOffers,
    })).toEqual({
      nearbyOffers: adaptedOffers
    });
  });
});

describe(`Testing related to offers async operations`, () => {

  it(`makes a correct API call for nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOfferLoader = fetchNearbyOffersList(`1`);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, serverOffers);

    return nearbyOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`makes a correct API call for favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOfferLoader = fetchFavoriteOffersList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, serverOffers);

    return favoriteOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`makes a correct API call for handling favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteStatus = changeFavorite(`1`, 1);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, serverOffers);

    return changeFavoriteStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`makes a correct API call for comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchCommentsList(`1`);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, serverComments);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: adaptedComments,
        });
      });
  });

  it(`makes a correct API call for post comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentPoster = sendComment(commentData, `1`);

    apiMock
      .onPost(`comments/1`)
      .reply(200, serverComments);

    return commentPoster(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: adaptedComments,
        });
      });
  });
});
