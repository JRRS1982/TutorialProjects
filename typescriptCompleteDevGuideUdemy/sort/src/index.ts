import { Sorter } from "./Sorter";
import { LinkedList } from './LinkedListCollection';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from "./CharactersCollection";

// sort a numbers array
const numbers = new NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
const sorterOne = new Sorter(numbers); // passing in object that has the data we want to sort and the two implements that are going to be different fo each type of data that is going to be passed in.
sorterOne.bubbleSort();
console.log(numbers.data);

// sort a string
const characters = new CharactersCollection('Xaabaaya');
const sorterTwo = new Sorter(characters);
sorterTwo.bubbleSort();
console.log(characters.data);

// sort a linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(11);
linkedList.add(-20);
linkedList.add(0);
const sorterThree = new Sorter(linkedList);
sorterThree.bubbleSort();
linkedList.print();
