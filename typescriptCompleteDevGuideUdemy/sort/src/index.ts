import { NumbersCollection } from './NumbersCollection';
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -2, 0]); // create an object that has the attributes we need.
const sorter = new Sorter(numbersCollection); // passing in object that has the data we want to sort and the two implements that are going to be different fo each type of data that is going to be passed in.

sorter.bubbleSort();
console.log(sorter.collection);