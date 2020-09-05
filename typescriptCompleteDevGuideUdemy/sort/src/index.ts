class Sorter {
  constructor(public collection: number[]) {}
  
  sort(): void {  // this is a bubble sort
    const { length } = this.collection;
    for (let i = 0; i < length; i++) { // for each element in the original
      for (let k = 0; k < length - i - 1; k++) { // loop the left element, for all of i... but shorten i each time as the left element will have been put in order.
        if (this.collection[k] > this.collection[k + 1]) { // if right is bigger then the left.
          const temp = this.collection[k];  // save the left side value for use in a moment.
          this.collection[k] = this.collection[k+1]; // set the left side to the right value
          this.collection[k+1] = temp; // set the right side as the left value. 
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -2, 0]);
sorter.sort();
console.log(sorter.collection);