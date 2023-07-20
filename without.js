const assertArraysEqual = function(inputArray, expectedArray) {
  if (inputArray.length !== expectedArray.length) {
    console.log("Please input two arrays with the same length.");
    return false;
  }
  let result = "";

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== expectedArray[i]) {
      result = false;
    }
    if (inputArray[i] === expectedArray[i]) {
      result = true;
    }
  }

  if (result) {
    console.log(`✅ Array Assertion Passed: ${inputArray} === ${expectedArray}`);
  } else {
    console.log(`🛑 Array Assertion Failed: ${inputArray} !== ${expectedArray}`);
  }

  return result;

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