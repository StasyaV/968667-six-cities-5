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
