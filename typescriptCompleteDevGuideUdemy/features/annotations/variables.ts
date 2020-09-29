// Type Inference
const color = "red"; // the type has been implied / infered here by Typescript. This will only work where infered and declared on the same line, like here.

// Type Annotation
const colour: string = "red"; // the type has been set by us here.

// define a variable called apples with the value of 5 with type of number.
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array - array of strings / numbers / booleans.
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];

// Classes - create an instance of a class
class Plane {}
let plane: Plane = new Plane();

// Object literal - declare a variable called point, assign it an object that has two attributes, therefore we need to define the type of those attributes.
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function - right hand side of = is the function, between the colon and equal is a description of the function, i.e. what is in and out, in this case i in and void out as just console logs, not returns. Here we are setting the type of the variable itself NOT the function, which is separate to this.
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations

// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse returns "any" type... as it can return different things, due to the string being passed in. So to specify what you want to return annotate it.
console.log(coordinates); // {x: 10, y: 20};  where they types are named and not "any" type.

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean; // declared here.
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true; // initialized here;
  }
}

// 3) Variable whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // basically if you set it as a boolean originally the inferance will assume a type issue, and therefore you need to set the or.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
