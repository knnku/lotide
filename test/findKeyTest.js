const assert = require("chai").assert;
const findKey = require("../findKey");

const test1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 3 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

// => "noma", changed to Ora for testing purposes
describe("#findKey", () => {
  it(`should return "Ora"`, () => {
    assert.deepEqual(test1, "Ora");
  });
});

const test2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 3 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);

// => Undefined as no value has 4 stars
describe("#findKey", () => {
  it(`should return undefined`, () => {
    assert.deepEqual(test2, undefined);
  });
});

const test3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 3 },
  },
  (x) => x.stars === 1
);

// => Fail, Key exists but will not point undefined
describe("#findKey", () => {
  it(`should return undefined but fail`, () => {
    assert.deepEqual(test3, undefined);
  });
});
