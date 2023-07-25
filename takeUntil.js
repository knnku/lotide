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
}; //Assert Arrays End--------------


const takeUntil = function (array, callback) {
  let resultArray = [];
  for (let key of array) {
    if (!callback(key)) {
      //checks and push item if not equal to callback
      resultArray.push(key);
    } else {
      return resultArray;
    }
  }
  return resultArray;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// assertArraysEqual(results1, [1,2,5,7,2]) //Assert true for numbers
// console.log(results1);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);
// assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']) //Assert True for Strings
