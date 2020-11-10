import {adaptCommentToClient, adaptOfferToClient} from "../utils/utils";

export const serverOffers = [
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
  },
  {
    "bedrooms": 4,
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
    "id": 2,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 100,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  }
];

export const serverComments = [
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
  },
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 2,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }
];

export const commentData = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "rating": 4
};

export const offers = [
  {
    id: 0,
    city: `Amsterdam`,
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
    name: `Hotel - 0`,
    img: `img/apartment-small-03.jpg`,
    detailedImages: [`img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`, `img/studio-photos.jpg`],
    price: 100,
    roomType: `hotel`,
    bedroomsCount: 1,
    guestsCount: 2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    isFavorite: false,
    isPopular: false,
    isPremium: true,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Own bathroom`, `Hair-dryer`, `AC`],
    rating: 4,
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSUper: true
    }
  },
  {
    id: 1,
    city: `Amsterdam`,
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
    name: `Hotel - 1`,
    img: `img/apartment-small-03.jpg`,
    detailedImages: [`img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`, `img/studio-photos.jpg`],
    price: 100,
    roomType: `hotel`,
    bedroomsCount: 1,
    guestsCount: 2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    isFavorite: false,
    isPopular: false,
    isPremium: true,
    rating: 4,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Own bathroom`, `Hair-dryer`, `AC`],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSUper: true
    }
  },
  {
    id: 2,
    city: `Amsterdam`,
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
    name: `Hotel - 2`,
    img: `img/apartment-small-03.jpg`,
    detailedImages: [`img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`, `img/studio-photos.jpg`],
    price: 100,
    roomType: `hotel`,
    bedroomsCount: 1,
    guestsCount: 2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    isFavorite: false,
    isPopular: false,
    isPremium: true,
    rating: 4,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Own bathroom`, `Hair-dryer`, `AC`],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSUper: true
    }
  },
  {
    id: 3,
    city: `Amsterdam`,
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
    name: `Hotel - 3`,
    img: `img/apartment-small-03.jpg`,
    detailedImages: [`img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`, `img/studio-photos.jpg`],
    price: 100,
    roomType: `hotel`,
    bedroomsCount: 1,
    guestsCount: 2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    isFavorite: false,
    isPopular: false,
    isPremium: true,
    rating: 4,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Own bathroom`, `Hair-dryer`, `AC`],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSUper: true
    }
  },
];

export const comments = [
  {
    id: 1,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

export const adaptedOffers = serverOffers.slice().map((offer) => adaptOfferToClient(offer));
export const adaptedComments = serverComments.slice().map((comment) => adaptCommentToClient(comment));

export const userData = {
  email: `Oliver.conner@gmail.com`,
  password: `12345678`
};

export const authInfo = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};
