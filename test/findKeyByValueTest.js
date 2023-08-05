const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it('should return drama as genre for "The Wire"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});

describe("#findKeyByValue", () => {
  it('should return undefined as genre for "That 70s show"', () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s show"),
      undefined
    );
  });
});

//Fail, Sanity Check
describe("#findKeyByValue", () => {
  it('should return comedy as genre for "Brooklyn Nine-Nine"', () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),
      "sci_fi"
    );
  });
});
