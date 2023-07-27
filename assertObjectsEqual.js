const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log("Please input two arrays with the same length.");
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log("Please input two objects with the same length.");
    return false;
  }

  for (let key of Object.keys(object1)) {
    //Compare Arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      console.log(`${object1[key]} != ${object2[key]}`);
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
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

// const obj1 = { size: "small", color: "brown" };
// const obj2 = { size: "small", color: "brown" };
// assertObjectsEqual(obj1, obj2);

// const obj3 = { size: "small", qty: [1, 2], color: "brown" }; //with equal arrays; true
// const obj4 = { size: "small", qty: [1, 2], color: "brown" };
// assertObjectsEqual(obj3, obj4);
