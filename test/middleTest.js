const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return the middle two numbers if even [4, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 3, 4, 4, 7, 8, 9, 10]), [4,4]);
  });
});


describe("#middle", () => {
  it("should return one middle if odd [3]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
});



describe("#middle", () => {
  it("should return an empty array if array length is < 2", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});

//Fail: Sanity check
describe("#middle", () => {
  it("should return an empty array if array length is < 2", () => {
    assert.deepEqual(middle([1,2]), [1]);
  });
});