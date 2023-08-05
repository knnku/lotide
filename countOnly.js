const countOnly = function (inputArray, objectToCount) {
  const results = {};
  for (const item of inputArray) {
    //Iterate over an array and count what is selected in the other array passed.
    if (objectToCount[item]) {
      //Matches the value of the selection and check if it is true or false, if true, count.
      if (results[item]) { // If value exist add 1
        results[item] += 1;
      } else { //If value does not exist, create and add 1
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;