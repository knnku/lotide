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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "C", "m", "t"]);//fail
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);//pass
assertArraysEqual(results1, ["g", "c", "c", "m", 1]);//fail



