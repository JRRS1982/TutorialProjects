// It is important to remember that there is a difference between the type of a variable that happens to be a function and the annotation of the function itself.

const add = (a: number, b: number): number => {
  // pass in a two number parameters and : return a number.
  return a + b;
};

// arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// VOID
// return void / null / undefined... if you accidentally return something you get an error.
const logger = (message: string): void => {
  console.log(message);
};

// NEVER
// never going to return a value as at some point an error will always be thrown in this type.
const throwError = (message: string): never => {
  throw new Error(message);
};

// void is here as there is only a chance that the error is thrown, its not certain.
const throwErrorMaybe = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// DESTRUCTURING
const forecast = {
  date: new Date(),
  weather: "sunny",
};
// here we are creating a variable with has the type of forecast, and the value of that type is an object with date and weather attributes.. i.e. we are setting the type of the parameter here, not the function.
const logWeather = (forecast: { date: Date; weather: string }): void => {
  // void here is the type of the functions return... as it doesn't return, just log stuff out.
  console.log(forecast.date);
  console.log(forecast.weather);
};

// DESTRUCTURING
// the destructuring is left of colon, and the annotation or type setting is on the right.
const logWeatherDestructured = ({ date, weather }: { date: Date; weather: string; }) => {
  console.log(date); // date here comes form the above, instead of specifying forecast we are just selecting the attribute of this param so we can use date without having to specify forecast.date or forecast.weather.
  console.log(weather); 
};

logWeather(forecast);
