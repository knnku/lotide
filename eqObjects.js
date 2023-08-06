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

module.exports = eqObjects;
