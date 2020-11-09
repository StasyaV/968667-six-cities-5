import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {offersActions} from "./offers-actions";
import {ActionType} from "../../action";
import {offers} from "../../../components/app/app.test";
import {comments} from "../../../components/comment-list/comment-list.test";
import {fetchOffersList, fetchNearbyOffersList, fetchFavoriteOffersList, changeFavorite, fetchCommentsList, sendComment} from "../../api-actions";

const api = createAPI(() => {});

const serverOffers = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  }];

const serverComments = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }
];

const commentData = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "rating": 4
};

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
      activeOfferId: `10`,
    })).toEqual({
      activeOfferId: `10`
    });
  });

  it(`Reducer updates openSort`, () => {
    expect(offersActions({
      openSort: false,
    }, {
      type: ActionType.OPEN_SORT,
      activeOfferId: true,
    })).toEqual({
      activeOfferId: true
    });
  });

  it(`Reducer updates comments`, () => {
    expect(offersActions({
      comments: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      comments,
    })).toEqual({
      comments
    });
  });

  it(`Reducer updates sort type by change sort type`, () => {
    expect(offersActions({
      sortType: `Mock`,
    }, {
      type: ActionType.UPDATE_SORT,
      sortType: `Rating`,
    })).toEqual({
      sortType: `Rating`
    });
  });

  it(`Reducer updates favorites by load favorites`, () => {
    expect(offersActions({
      favoriteOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    })).toEqual({
      favoriteOffers: offers
    });
  });

  it(`Reducer updates nearby offers by load offers`, () => {
    expect(offersActions({
      nearbyOffers: [],
    }, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      data: offers,
    })).toEqual({
      nearbyOffers: offers
    });
  });
});

describe(`Testing related to offers async operations`, () => {

  it(`makes a correct API call for offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOffersList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, serverOffers);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          offers,
        });
      });
  });

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
          payload: offers,
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
          payload: offers,
        });
      });
  });

  it(`makes a correct API call for handling favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteStatus = changeFavorite(`1`, 0);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, serverOffers);

    return changeFavoriteStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.DELETE_FAVORITE,
          payload: offers,
        });
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
          payload: comments,
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
          payload: comments,
        });
      });
  });
});
