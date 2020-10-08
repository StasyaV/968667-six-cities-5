import {getRandomNumber} from "../utils/utils.js";
import {cities, roomTypes} from "../const.js";

const MAX_RATING_VALUE = 5;
const MAX_COUNT_BEDROOMS = 5;
const MAX_COUNT_GUESTS = 5;
const descriptionList = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const names = [`Ivan`, `Alex`, `Nick`, `Simon`, `Damon`, `Damien`, `Jan`];
const features = [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Own bathroom`, `Hair-dryer`, `AC`];
const imgLinks = [`img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`, `img/studio-photos.jpg`];

const generateFeaturesLength = () => {
  return getRandomNumber(1, 5);
};

const generateFeaturesList = () => {
  let featuresList = [];
  for (let i = 0; i < generateFeaturesLength(); i++) {
    featuresList.push(features[i]);
  }
  return featuresList;
};

export const generateDate = () => {
  const maxDaysGap = getRandomNumber(1, 365);
  const daysGap = getRandomNumber(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);

  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

export const getComment = (value, index) => {
  const comment = {
    id: index,
    avatar: `img/avatar-max.jpg`,
    author: names[getRandomNumber(0, names)],
    rating: getRandomNumber(0, MAX_RATING_VALUE),
    text: descriptionList[getRandomNumber(0, descriptionList.length)],
    date: generateDate()
  };
  return comment;
};

export const generateComments = () => {
  return new Array(getRandomNumber(0, 10)).fill().map(getComment);
};

export const getOffer = (value, index) => {
  const comments = generateComments();
  const offer = {
    id: index,
    city: cities[getRandomNumber(0, cities.length)],
    name: `Hotel - ${index}`,
    img: imgLinks[getRandomNumber(0, imgLinks.length)],
    detailedImages: (imgLinks > 6) ? imgLinks.slice(0, 6) : imgLinks,
    price: getRandomNumber(10, 100),
    roomType: roomTypes[getRandomNumber(0, roomTypes.length)],
    bedroomsCount: getRandomNumber(1, MAX_COUNT_BEDROOMS),
    guestsCount: getRandomNumber(1, MAX_COUNT_GUESTS),
    description: descriptionList[getRandomNumber(0, descriptionList.length)],
    comments,
    isFavorite: Boolean(getRandomNumber(0, 2)),
    isPopular: Boolean(getRandomNumber(0, 2)),
    isPremium: Boolean(getRandomNumber(0, 2)),
    features: generateFeaturesList(),
    owner: {
      name: names[getRandomNumber(0, names.length)],
      avatar: `img/avatar-angelina.jpg`,
      isSUper: Boolean(getRandomNumber(0, 2))
    }
  };
  return offer;
};
