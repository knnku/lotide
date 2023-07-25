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
  if (!eqArrays(actual, expected)) {
    return console.log(`🛑 Array Assertion Failed: ${actual} !== ${expected}`);
  } else if (eqArrays) {
    return console.log(`✅ Array Assertion Passed: ${actual} === ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => error, arrays not equal
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true

const arry1 = [1, 1, 3];
const arry2 = [1, 2, 3];
assertArraysEqual(arry1, arry2);
