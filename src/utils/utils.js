import moment from 'moment';
import {SortType} from '../const';

export const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * maxValue);
  return randomNumber > minValue ? randomNumber : minValue;
};

export const formatDate = (date) => {
  return moment(date).format(`MMMM DD`);
};

export const sortCommentsByDate = (comments) => {
  return comments.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (offers, city) => {
  const offersByCity = offers.slice().filter((offer) => offer.city === city);
  return offersByCity;
};

export const getSortedOffers = (sortType, offers) => {
  const sortedOffers = offers.slice();
  switch (sortType) {
    case (SortType.POPULAR):
      return sortedOffers;
    case (SortType.PRICE_LOW_TO_HIGH):
      return sortedOffers.sort((offerA, offerB) => {
        return offerA.price - offerB.price;
      });
    case (SortType.PRICE_HIGH_TO_LOW):
      return sortedOffers.sort((offerA, offerB) => {
        return offerB.price - offerA.price;
      });
    case (SortType.RATING):
      return sortedOffers.sort((offerA, offerB) => {
        return offerB.rating - offerA.rating;
      });
  }
  return sortedOffers;
};

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    id: offer.id,
    city: offer.city.name,
    cityCoordinates: [offer.city.location.latitude, offer.city.location.longitude],
    сityZoom: offer.city.location.zoom,
    coordinates: [offer.location.latitude, offer.location.longitude],
    detailsMapZoom: offer.location.zoom,
    name: offer.title,
    img: offer.preview_image,
    detailedImages: (offer.images > 6) ? offer.images.slice(0, 6) : offer.images,
    price: offer.price,
    roomType: offer.type,
    bedroomsCount: offer.bedrooms,
    guestsCount: offer.max_adults,
    description: offer.description,
    comments: [],
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    features: offer.goods,
    rating: offer.rating,
    owner: {
      name: offer.host.name,
      id: offer.host.id,
      avatar: offer.host.avatar_url,
      isSuper: offer.host.is_pro
    }
  };

  return adaptedOffer;
};

export const adaptCommentToClient = (comment) => {
  const adaptedComment = {
    id: comment.id,
    avatar: comment.user.avatar_url,
    author: comment.user.name,
    rating: comment.rating,
    text: comment.comment,
    date: comment.date,
    isSuper: comment.user.is_pro
  };

  return adaptedComment;
};
