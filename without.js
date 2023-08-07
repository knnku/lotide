const without = function (sourceArray, itemsToRemove) {
  const outputArray = [];

  for (const item of sourceArray) {
    if (itemsToRemove.includes(item)) {
    } else {
      outputArray.push(item);
    }
  }
  return outputArray;
};

module.exports = without;
