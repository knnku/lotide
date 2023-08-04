const assertEqual = require('../assertEqual');
const tail = require('../tail')


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!s
assertEqual(tail(words), ["Lighthouse", "Labs"]) // Fail, can't compare arrays



