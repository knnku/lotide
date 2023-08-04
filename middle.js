const middle = function(inputArray) {
  outputArray = [];
  if (inputArray.length <= 2) {
    return outputArray;
  } 
  if (inputArray.length % 2 === 0) { //Even Arrays
    outputArray = inputArray.slice(inputArray.length/2-1, inputArray.length/2+1)
    return outputArray;
  }
  if (inputArray.length % 2 !== 0) { //Odd Arrays
    outputArray = inputArray.slice(inputArray.length/2, inputArray.length/2+1)
    return outputArray;
  }
}

module.exports = middle;

