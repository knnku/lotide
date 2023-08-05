const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

describe("#countOnly", () => {
  it("Should return 1 if Jason is selected", () => {
    assert.strictEqual(result1["Jason"], 1)
  });
});


describe("#countOnly", () => {
  it("Should return undefined if Karima is selected", () => {
    assert.strictEqual(result1["Karima"], undefined)
  });
});

describe("#countOnly", () => {
  it("Should return 2 if Fang is selected", () => {
    assert.strictEqual(result1["Fang"], 2)
  });
});


//Fail: Sanity check
describe("#countOnly", () => {
  it("Should return undefined if Agouhanna(false) is selected", () => {
    assert.strictEqual(result1["Agouhanna"], 1)
  });
});




