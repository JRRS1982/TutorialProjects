// DEFINITION
// Interfaces: "Creates a new type, describing the property, names and value types of an object".

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string { // declaring a function in the object that returns a string.
    return `Name: ${this.name} is a pretty cool car and this is a summary about it`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
}

// Good - extract out the params by creating an interface.
interface Reportable {
  summary(): string; // the Vehicle must have a summary function that returns some string... but we don't care if its a vehicle or not really as we just want a summary.
}
const printSummary = (item: Reportable): void => { // we don't care about it being a vehicle, just the attributes of what is passed in.
  console.log(item.summary());
};
// oldCivic satisfies the requirements of Vehicle as it has a attribute / function called summary... it can have more attributes, such as name etc.
printSummary(oldCivic);
// these are different, but have reportable types as both have a summary function... this the whole point of interfaces.
printSummary(drink);

// in this way the function is much more reusable.
// The general rule for making code reusable in TS is to create functions that accept arguments that are typed with interfaces.
// Objects/classes can decide to implement a given interface to work with a function.

// THE INTERFACE IS THE GATEKEEPER TO SOME FUNCTION... THE OBJECT MUST HAVE SOME VALUES THAT SATISFY AN INTERFACE.
