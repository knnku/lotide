const assertEqualArrays = function(inputArray, expectedArray) {
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


const without = function(source, itemsToRemove) {
  const outputArray = [];

  for (const item of source) {
    outputArray = source.filter(itemsToRemove.includes(item));
  }

  return outputArray;

};

console.log(without([1, 2, 3, 4], [2, 3]));