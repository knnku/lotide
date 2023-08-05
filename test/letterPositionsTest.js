
const assert = require('chai').assert;
const letterPositions = require('../letterPositions')



// const testArray = letterPositions(string);
// assertArraysEqual(testArray["i"], ["1", 11, 14]);


describe ("#letterPositions", () => {
  it('should return [2,3] for the letter l in the word hello', () => {
    assert.deepEqual(letterPositions("hello").l, [2,3])
  })
});


const string = "Lighthouse is in the house.";
const array = letterPositions(string);


describe ("#letterPositions", () => {
  it('should return [1,11,14] for the letter i in string', () => {
    assert.deepEqual(array["i"], [1,11,14])
  })
});

describe ("#letterPositions", () => {
  it('should return [3,5,18,21] for the letter h in string', () => {
    assert.deepEqual(array["h"], [3,5,18,21])
  })
});

//Fail. Sanity check and check if function is case sensitive
describe ("#letterPositions", () => {
  it('should return undefined for the letter l in string', () => {
    assert.deepEqual(array["l"], [0])
  })
});