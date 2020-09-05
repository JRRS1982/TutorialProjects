import { NumbersCollection } from './NumbersCollection';

// length, compare and swap functions are all that are required for an element to be sorted
interface Sortable {
  length: number,
  compare(leftElement:number, rightElement: number): boolean,
  swap(leftElement: number, rightElement: number): void,
}

export class Sorter {
  constructor(public collection: Sortable) {}

  bubbleSort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) { // for each element in the original
      for (let k = 0; k < length - i - 1; k++) { // loop the left element, for all of i... but shorten i each time as the left element will have been put in order.
        if (this.collection.compare(k, k+1)) { 
          this.collection.swap(k, k + 1);
        }
      }
    }
  }
}