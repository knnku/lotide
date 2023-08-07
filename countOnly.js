const countOnly = function (inputArray, objectToCount) {
  const results = {};
  for (const item of inputArray) {
    if (objectToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
