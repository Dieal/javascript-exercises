const convertToCelsius = function(temp) {
  return roundOneDecimalPlace((temp - 32) * (5/9));
};

const convertToFahrenheit = function(temp) {
  return roundOneDecimalPlace((temp * (9/5)) + 32);
};

function roundOneDecimalPlace(value) {
  return Math.round(value * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
