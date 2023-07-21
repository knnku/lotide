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


const letterPositions = function (string) {
  const positions = {};

  string.split("").forEach((letter, index) => {
    if (positions[letter]) {
      positions[letter].push(index);
    } else if (letter !== " " && letter !== ".") {
      positions[letter] = [index];
    }
  });
  // for (const letter of string) {
  //   if (positions[letter]){
  //     positions[letter].push(index);
  //   } else {
  //     if (letter !== " " && letter !== "."){
  //       positions[letter] = [index];
  //     }
  //   }
  //   index++;
  // }
  return positions;
};

const string = "Lighthouse is in the house.";
console.log(letterPositions(string));

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2,3])

const testArray = letterPositions(string); 
assertArraysEqual(testArray["i"], ["1",11,14]); 
//Comparing objects to arrays will error
//Compass - It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.

