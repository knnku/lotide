
const eqArrays = function(array1, array2) { //eqArrays
  if (array1.length !== array2.length) {
    console.log("Please input two arrays with the same length.");
    return false;
  }
  let result = "";

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
    if (array1[i] === array2[i]) {
      result = true;
    }
  }
  return result;

};

const assertEqualArrays = function(inputArray, expectedArray) { //assertEqualArrays
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