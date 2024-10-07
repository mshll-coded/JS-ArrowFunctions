// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Write a simple arrow function that takes two parameters and returns their sum.
const sum = (a, b) => a + b;

// Write a simple arrow function that squares a number.
const square = (a) => a * a;

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const squareArray = (arr) => arr.map((el) => el ** 2);
