import moment from 'moment';

export const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * maxValue);
  return randomNumber > minValue ? randomNumber : minValue;
};

export const formatDate = (date) => {
  return moment(date).format(`MMMM DD`);
};


export const getRating = (comments) => {
  if (comments.length > 0) {
    const ratings = comments.map((comment) => (comment.rating));
    return Math.round(ratings.reduce((a, b) => (a + b)) / ratings.length);
  }
  return 0;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (offers, city) => {
  const offersByCity = offers.slice().filter((offer) => offer.city === city);
  return offersByCity;
};
