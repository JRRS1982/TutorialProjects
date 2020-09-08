import { Sorter } from "./Sorter";
import { LinkedList } from './LinkedListCollection';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from "./CharactersCollection";

// sort a numbers array
const numbers = new NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
numbers.bubbleSort(); // IMPORTANT: THE CHILD (NUMBERS COLLECTION) INHERITS BUBBLESORT FROM THE SORTER CLASS SO WE DON'T NEED TO INITIALIZE A SORTER ITSELF
console.log(numbers.data);

// sort a string
const characters = new CharactersCollection('Xaabaaya');
characters.bubbleSort();
console.log(characters.data);

// sort a linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(11);
linkedList.add(-20);
linkedList.add(2);
linkedList.bubbleSort(); // inherit bubble
linkedList.print();
