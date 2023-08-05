const letterPositions = function (string) {
  const positions = {};
  //Split words and turn into array.
  string.split("").forEach((letter, index) => {
    if (positions[letter]) {
      //Check if key exists in object, if yes push index.
      positions[letter].push(index);
    } else if (letter !== " " && letter !== ".") {
      //Check if letter is not space or period, if pass, assign.
      positions[letter] = [index];
    }
  });

  return positions;
};

module.exports = letterPositions;
