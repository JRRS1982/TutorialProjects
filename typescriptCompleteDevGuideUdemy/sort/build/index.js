"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListCollection_1 = require("./LinkedListCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// sort a numbers array
var numbers = new NumbersCollection_1.NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
numbers.bubbleSort(); // IMPORTANT: THE CHILD (NUMBERS COLLECTION) INHERITS BUBBLESORT FROM THE SORTER CLASS SO WE DON'T NEED TO INITIALIZE A SORTER ITSELF
console.log(numbers.data);
// sort a string
var characters = new CharactersCollection_1.CharactersCollection('Xaabaaya');
characters.bubbleSort();
console.log(characters.data);
// sort a linked list
var linkedList = new LinkedListCollection_1.LinkedList();
linkedList.add(500);
linkedList.add(11);
linkedList.add(-20);
linkedList.add(2);
linkedList.bubbleSort(); // inherit bubble
linkedList.print();
