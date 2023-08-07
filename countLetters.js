const countLetters = function(stringCount) {
  outputObject = {};

  for (const letter of stringCount) {
    if (outputObject[letter]){
      outputObject[letter] += 1;
    } else {
      if (letter !== " " && letter !== "."){ //Skip spaces and periods
        outputObject[letter] = 1;
      }
      
    }
  }
  return outputObject;
}

module.exports = countLetters;

