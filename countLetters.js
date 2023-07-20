const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const countLetters = function(stringCount) {
  outputObject = {};

  for (const letter of stringCount) {
    if (outputObject[letter]){
      outputObject[letter] += 1;
    } else {
      if (letter !== " " && letter !== "."){
        outputObject[letter] = 1;
      }
      
    }
  }
  return outputObject;
}

const string1 = "The quick brown fox jumps over the lazy dog.";

console.log(countLetters(string1));