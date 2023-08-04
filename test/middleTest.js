const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')


console.log(middle([1,2,3,3,4,4,7,8,9,10])); //Even
console.log(middle([1,2,3,3,4,4,7,8,9,10,12])); //Odd

assertArraysEqual(middle([1,2,3,3,4, undefined, "yot",7,8,9,10,12]), [undefined, 'yot']) //Array with other types

console.log(middle([1,2,3,4,5])); //Odd
assertArraysEqual(middle([1,2,3,4,5]), [3])


console.log(middle([1,2])); //If ength less than 2, output empty array;
assertArraysEqual(middle([1,2]), [])  //Comparing empty arrays