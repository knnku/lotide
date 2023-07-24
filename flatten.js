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

const flatten = function(inputArray) {
  //Alternative for now as the instructions don't prohibit using array.flat()
  console.log(inputArray.flat(2));
  return inputArray.flat(2);
};


flatten([1, 2, 3, 4, 5, "hello", "yo", 1, [1, 2, 3], [3, 2, [1]]]);

eqArrays(flatten([1, 2, 3, 4, 5, "hello", "yo", 1, [1, 2, 3], [3, 2, [1]]]), [1, 2, 3, 4, 5, "hello", "yo", 1, 1, 2, 3, 4, 2, 1])

