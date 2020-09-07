import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from "./CharactersCollection";

// sort a numbers array
const numbersCollection = new NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
const sorterOne = new Sorter(numbersCollection); // passing in object that has the data we want to sort and the two implements that are going to be different fo each type of data that is going to be passed in.
sorterOne.bubbleSort();
console.log(numbersCollection.data);

// sort a string
const charactersCollection = new CharactersCollection('Xaabaaya');
const sorterTwo = new Sorter(charactersCollection);
sorterTwo.bubbleSort();
console.log(charactersCollection.data);
