const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (inputObject, callback) {
  let outputKey = undefined;
  for (const [key, value] of Object.entries(inputObject)) {
    // console.log(callback(inputObject[key]));
    if (callback(value)) {
      outputKey = key;
      return outputKey;
    }
  }
  return outputKey;
};

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
); // => "noma", changed to Ora for testing purposes

console.log(test1);
assertEqual(test1, "Ora");

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
); // => undefined
assertEqual(test2, undefined);

const test3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 3 },
  },
  (x) => x.stars === 1
); // => Fail:
assertEqual(test3, "Red Hill");
