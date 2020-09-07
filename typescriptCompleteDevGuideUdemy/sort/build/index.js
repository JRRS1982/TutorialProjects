"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// sort a numbers array
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
var sorterOne = new Sorter_1.Sorter(numbersCollection); // passing in object that has the data we want to sort and the two implements that are going to be different fo each type of data that is going to be passed in.
sorterOne.bubbleSort();
console.log(numbersCollection.data);
// sort a string
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaabaaya');
var sorterTwo = new Sorter_1.Sorter(charactersCollection);
sorterTwo.bubbleSort();
console.log(charactersCollection.data);
