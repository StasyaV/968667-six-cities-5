export const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * maxValue);
  return randomNumber > minValue ? randomNumber : minValue;
};
