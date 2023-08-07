const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true for for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

describe("#eqArrays", () => {
  it("returns false for for [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
});

describe("#eqArrays", () => {
  it("returns true for for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

describe("#eqArrays", () => {
  it('returns false for for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
});

describe("#eqArrays", () => {
  it('returns false for for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});
