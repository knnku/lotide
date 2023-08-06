const assert = require('chai').assert;
const flatten = require('../flatten');


flatten([1, 2, 3, 4, 5, "hello", "yo", 1, [1, 2, 3], [3, 2, [1]]]);

eqArrays(flatten([1, 2, 3, 4, 5, "hello", "yo", 1, [1, 2, 3], [3, 2, [1]]]), [1, 2, 3, 4, 5, "hello", "yo", 1, 1, 2, 3, 4, 2, 1])

