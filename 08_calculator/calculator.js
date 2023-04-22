const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let sum = 0;

  if (typeof num === "number") {
    sum = num;
  } else if (Array.isArray(num)){
    for (let i = 0; i < num.length ; i++) {
      sum += num[i];
    }
  }

  return sum;
};

function multiply(num) {
  let result = 1;

  for (i = 0; i < num.length; i++) {
    result *= num[i];
  }

  return result;
}

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let result = 1;
  
	if (num === 0) {
    return 1;
  } else {
    for (let i = num; i > 1; i--) {
      result *= i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
