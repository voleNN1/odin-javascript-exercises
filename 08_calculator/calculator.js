const add = function(numOne, numTwo) {
  let total = numOne + numTwo;

  return total;
};

const subtract = function(numOne, numTwo) {
	let total = numOne - numTwo;

  return total;
};

const sum = function(values) {
	let total = 0;

  for (i = 0; i < values.length; i++) {
    total += values[i];
  }

  return total;
};

const multiply = function(values) {
  let total = 1;

  for (i = 0; i < values.length; i++) {
    total = (total * values[i]);
  }

  return total;
};

const power = function(numOne, numTwo) {
	let total = numOne ** numTwo;

  return total;
};

const factorial = function(value) {
	if (value === 0 || value === 1) {
    return 1;
  }
  else {
    return value * factorial(value-1);
  }
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
