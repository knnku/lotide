const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


const shirtObject = { color: "red", size: "medium",sleeveLength: "long" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false, entries also don't match
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue", "green"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
); // => false