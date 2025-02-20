const convertToCelsius = function(cTemp) {
  let fTemp = ((cTemp - 32) * (5/9));
  fTemp = Math.round(fTemp * 10) / 10;
  return fTemp;
};

const convertToFahrenheit = function(fTemp) {
  let cTemp = ((fTemp * 1.8) + 32);
  cTemp = Math.round(cTemp * 10) / 10;
  return cTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
