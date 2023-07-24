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


const without = function(sourceArray, itemsToRemove) {
  const outputArray = [];

  for (const item of sourceArray) {
    if (itemsToRemove.includes(item)) {
      ;
    } else {
      outputArray.push(item);
    }
  }
  return outputArray;

};

console.log(without([1, 2, 3, 4, 5, 6, 7], [3, 5]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);