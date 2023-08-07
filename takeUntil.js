const takeUntil = function (array, callback) {
  let resultArray = [];
  for (let key of array) {
    if (!callback(key)) {
      //checks and push item if not equal to callback
      resultArray.push(key);
    } else {
      return resultArray;
    }
  }
  return resultArray;
};

module.exports = takeUntil;
