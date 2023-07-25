const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//------- Assertions---------

// const shirtObject = { color: "red", size: "medium",sleeveLength: "long" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// eqObjects(shirtObject, longSleeveShirtObject); // => false, entries also don't match
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = {
//   colors: ["red", "blue"],
//   size: "medium"
// };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// assertEqual(
//   eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
//   true
// ); // => true

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue", "green"],
//   sleeveLength: "long",
// };
// assertEqual(
//   eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
//   false
// ); // => false
