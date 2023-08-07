const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; //inspect util

  if (!eqObjects(actual, expected)) {
    return console.log(
      `🛑 Array Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  } else if (eqObjects) {
    return console.log(
      `✅ Array Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  }
};


module.exports = assertObjectsEqual;
