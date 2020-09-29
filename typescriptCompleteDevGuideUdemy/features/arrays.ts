// array of strings
const carMakers: string[] = ['ford', 'toyota', 'chevy']; 

// array of dates
const dates: Date[] = [new Date(), new Date()]; 

// a two dimensional array... an array of arrays which contains strings.
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['transit'],
]; 

// Help with inference when extracting values;
const aCar = carMakers[0]; // basically typescript inference will let us know that this is a string
const myCar = carMakers.pop(); // again knows its a string via typescript inference.

// Prevent incompatible values
carMakers.push(100); // wont allow a number to be pushed into an array of strings.

// Help with map / reduce / foreach
carMakers.map((car: string): string => { // knows param is a string so...
  return car.toUpperCase(); // ... makes string functions available within.
});

// Flexible = Date OR string is the Type of the importantDates array
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']; // so both can be added to it.
