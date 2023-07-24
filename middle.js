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

outputArray = [];
const middle = function(inputArray) {

  if (inputArray.length <= 2) {
    return outputArray;
  } 
  if (inputArray.length % 2 === 0) { //Even Arrays
    outputArray = inputArray.slice(inputArray.length/2-1, inputArray.length/2+1)
    return outputArray;
  }
  if (inputArray.length % 2 !== 0) { //Odd Arrays
    outputArray = inputArray.slice(inputArray.length/2, inputArray.length/2+1)
    return outputArray;
  }
}

console.log(middle([1,2,3,3,4,4,7,8,9,10])); //Even
console.log(middle([1,2,3,3,4,4,7,8,9,10,12])); //Odd
console.log(middle([1,2,3,3,4, NaN, "yot",7,8,9,10,12])); //Even with other types
assertEqualArrays(outputArray, [NaN, 'yot'])

console.log(middle([1,2,3,4,5])); //Odd
assertEqualArrays(outputArray, [3])


console.log(middle([1,2])); //Length less than 2
assertEqualArrays(outputArray, [3])