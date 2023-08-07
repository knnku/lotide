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

module.exports = findKey;