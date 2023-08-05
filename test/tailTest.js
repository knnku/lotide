const assert = require('chai').assert;
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];


describe("#tail", () => {
  it("should return Lighthouse, Labs", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});

describe("#tail", () => {
  it("should return original array length: 3", () => {
    assert.strictEqual(words.length, 3);
  });
});
