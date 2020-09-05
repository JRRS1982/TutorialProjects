"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
var sorter = new Sorter_1.Sorter(numbersCollection); // passing in object that has the data we want to sort and the two implements that are going to be different fo each type of data that is going to be passed in.
sorter.bubbleSort();
console.log(sorter.collection);
