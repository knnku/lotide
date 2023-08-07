const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("should return [1,2,4,6,7]", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5, 6, 7], [3, 5]), [1, 2, 4, 6, 7]);
  });
});
