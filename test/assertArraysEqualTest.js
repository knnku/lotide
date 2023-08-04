
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => error, arrays not equal
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true

const arry1 = [1, 1, 3];
const arry2 = [1, 2, 3];
assertArraysEqual(arry1, arry2);
