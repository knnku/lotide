const eqArrays = require("./eqArrays");

const assertArraysEqual = function (actual, expected) {
  if (!eqArrays(actual, expected)) {
    return console.log(`🛑 Array Assertion Failed: ${actual} !== ${expected}`);
  } else if (eqArrays) {
    return console.log(`✅ Array Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertArraysEqual;
