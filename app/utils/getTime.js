function changeStyleNumber(number) {
  return number < 10 ? 0 + number : number;
}

export const getTime = () => {
  const date = new Date();
  const localHour = changeStyleNumber(date.getHours().toString());
  const localMinutes = changeStyleNumber(date.getMinutes().toString());

  return `${localHour}:${localMinutes}`;
};
