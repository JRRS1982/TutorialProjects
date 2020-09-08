import { NumbersCollection } from './NumbersCollection';

// length, compare and swap functions are all that are required for an element to be sorted
// interface Sortable { .... // INTERFACE WAS USED FOR THE ELEMENT PASSED INTO SORTER, BUT NOW WE ARE USING AN ABSTRACT CLASS, WHICH IS A DEEPER COUPLING AND MEANS WE DONT NEED TO INITIALIZE SORTER ANYMORE.
//   length: number,
//   compare(leftElement:number, rightElement: number): boolean,
//   swap(leftElement: number, rightElement: number): void,
// }

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean; // says the child class will use this signature.
  abstract swap(leftIndex: number, rightIndex: number): void; // says the child class will use this signature.
  abstract length: number; // this is a getter in the child so its can just be an attribute.
  
  bubbleSort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) { // for each element in the original
      for (let k = 0; k < length - i - 1; k++) { // loop the left element, for all of i... but shorten i each time as the left element will have been put in order.
        if (this.compare(k, k+1)) { 
          this.swap(k, k + 1);
        }
      }
    }
  }
}