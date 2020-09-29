class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {  // a GENERIC type... that means we define the type later.
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arr1 = new ArrayOfAnything<string>(['a', 'b', 'c']); // set the type explicitly here.
const arr2 = new ArrayOfAnything(['a', 'b', 'c']); // set the type with inference via typescript auto here.


// EXAMPLE OF GENERICS WITH FUNCTIONS
function printStrings(array: string[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printNumbers(array: number[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printAnything<T>(array: T[]): void {  // T 
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

printAnything<string>(['a','b','c']);  // string here is setting the type explicitly
printAnything(['a','b','c']);  // setting type with inference

// GENERIC CONSTRAINTS - adding promises to generic types (i.e. a generic type has not length / any other attribute)
class Bike {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void { // ie T extends an interface
  for (let index = 0; index < arr.length; index++) {
    arr[index].print();
  }
}

// printHousesOrCars([1,2,'a']) wont work - strings and numbers are not 'printable' as they have no print function
printHousesOrCars([new House, new House, new Bike]);
