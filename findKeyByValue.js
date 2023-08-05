const findKeyByValue = function (inputObject, stringToCheck) {
  let outputKey;
  for (const [key, value] of Object.entries(inputObject)) {
    if (value === stringToCheck) {
      outputKey = key;
    }
  }
  return outputKey;
};

module.exports = findKeyByValue;
