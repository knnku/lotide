const assert = require("chai").assert;
const map = require("../map");


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);

describe("#map", () => {
  it("should return an array with the first letter of each word, word[0]", () => {
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
});

//Fail - Function is case sensetive
describe("#map", () => {
  it("should return an array with the first letter of each word, word[0]", () => {
    assert.deepEqual(results1, ["g", "c", "T", "m", "t"]);
  });
});







