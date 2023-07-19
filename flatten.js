const eqArrays = function(inputArray, expectedArray) {
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

const flatten = function(inputArray) {
  //Alternative for now as the instructions don't prohibit using array.flat()
  console.log(inputArray.flat(2));
  return inputArray.flat(2);
};


flatten([1, 2, 3, 4, 5, "hello", "yo", 1, [1, 2, 3], [3, 2, [1]]]);

eqArrays(flatten([1, 2, 3, 4, 5, "hello", "yo", 1, [1, 2, 3], [3, 2, [1]]]), [1, 2, 3, 4, 5, "hello", "yo", 1, 1, 2, 3, 4, 2, 1])

