"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedListCollection_1 = require("./LinkedListCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// sort a numbers array
var numbers = new NumbersCollection_1.NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
var sorterOne = new Sorter_1.Sorter(numbers); // passing in object that has the data we want to sort and the two implements that are going to be different fo each type of data that is going to be passed in.
sorterOne.bubbleSort();
console.log(numbers.data);
// sort a string
var characters = new CharactersCollection_1.CharactersCollection('Xaabaaya');
var sorterTwo = new Sorter_1.Sorter(characters);
sorterTwo.bubbleSort();
console.log(characters.data);
// sort a linked list
var linkedList = new LinkedListCollection_1.LinkedList();
linkedList.add(500);
linkedList.add(11);
linkedList.add(-20);
linkedList.add(0);
var sorterThree = new Sorter_1.Sorter(linkedList);
sorterThree.bubbleSort();
linkedList.print();
