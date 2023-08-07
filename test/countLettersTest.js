const assert = require("chai").assert;
const countLetters = require("../countLetters");

const string1 = "The quick brown fox jumps over the lazy dog.";
const test = countLetters(string1);

console.log(countLetters(string1));

describe("#countLetters", () => {
  it("returns 1 for for 'T'", () => {
    assert.strictEqual(test["T"], 1);
  });
});

describe("#countLetters", () => {
  it("returns 3 for for 'e'", () => {
    assert.strictEqual(test["e"], 3);
  });
});


//Fail, Sanity Check
describe("#countLetters", () => {
  it("returns 1 for for 'y'", () => {
    assert.strictEqual(test["T"], 2);
  });
});
