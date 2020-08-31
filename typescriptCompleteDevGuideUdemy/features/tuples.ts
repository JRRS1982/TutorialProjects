// DEFINITION
// TUPLES: "Array like structure where each element represents some property of a record".
// basically a fixed array structure where there is no key for the values so the order must remain the same.

// TUPLE: i.e. a drink colour, is it carbonated and % of sugar represented as a tuple.
// there is some meaning to the order of the elements, but we can provide some structure.
const pepsi: [string, boolean, number] = [ 'brown', true, 40 ]; 

// you can create a type for this if it is to be repeated.
type Drink = [string, boolean, number]; // i.e. colour, carbonated, sugar content.
const coke: Drink = ['brown', true, 45];
const sprite: Drink = ['clear', true, 23];

// Tuples are really confusing, as its not clear what they represent.
const carSpecs: [number, number] = [400, 3354];

// Objects are just easier to understand...
const carStats = {
  horsePower: 400,
  weight: 3354,
};
