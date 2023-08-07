# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @knnku/lotide`

**Require it:**

`const _ = require('@knnku/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first index of a given array.
* `middle(array)`: Returns the middle indices of a given array. Two if array length is even, else, one.
* `tail(array)`: Returns the all the values of a given array minus the first index(head).
* `countLetters(string)`: Returns an array with each character in the string and its number of occurences.
* `letterPositions(string)`: Returns an object with each character and its positions in the string.
* `findKeyByValue(object, value)`: Finds and returns the key by looking the the value.
* `findKey(object, callback)`: Finds and returns the key via a callback function.
* `eqObjects(object, object)`: Compares two objects.
* `eqArrays(array, array)`: Compares two arrays.
* `without(array, value)`: Takes in an array and values to remove, returning the items removed.
* `takeUntil(array, callback)`: Takes in an array, iterating and taking every value until callback is reached.
* `map(array, callback)`: Takes in an array, returning all the modified values with the callback applied.
