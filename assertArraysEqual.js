const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log("Please input two arrays with the same length.");
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (actual) {
    console.log(`✅ Array Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Array Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => false
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4], false)); // => error, arrays not equal
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
