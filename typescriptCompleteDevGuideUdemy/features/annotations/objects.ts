// DESTRUCTURING - basically saying we want to access age of profile and set it as age, the brackets kinda means we jump in a level.
// ANNOTATIONS - always use for arguments and return statements.

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15
  },
  setAge(age: number): void { // define a function inside an object with annotation on it.
    this.age = age; 
  },
};

// Destructuring without annotation (bad)
  // const { age } = profile;
// Destructuring with annotation (good)
  const { age }: { age: number } = profile;  // good - be explicit.
  
// Destructuring without annotation (bad)
  // const { coords: { lat, long } } = profile;
// Destructuring with annotation (good)
const { coords: { lat, long } }: { coords: { lat: number; long: number; } } = profile;