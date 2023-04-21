const convertToCelsius = function(num) {
  let fahrenheit = num;
  let celsius = (fahrenheit - 32) * (5/9);

  if (celsius === 0) {
    return celsius;
  } else {
    return parseFloat(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(num) {
  let celsius = num;
  let fahrenheit = ((celsius * (9/5)) + 32);

  if (fahrenheit === 0) {
    return fahrenheit;
  } else {
    return parseFloat(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
