// a decorator is a function that can be used to change a property, methods or accessors inside of a class.

// the first argument of a decorator will be the PROTOTYPE OF THE OBJECT ITS IN i.e. PROTOTYPE OF Boat in this instance. THE PROTOTYPE HAS ALL THE METHODS, NOT ALL THE PROPERTIES - AS PROPERTY DEFINITIONS ARE MOVED TO THE CONSTRUCTOR FUNCTION.
// the second argument is the key of teh property/method/accessor on the object

// the third argument is the property descriptor - a PropertyDescriptor is a part of ES5 Javascript. It is an object that configures a property on another object.
// - configurable = property definition can be changed and property can be deleted.
// - enumerable = whether or not this property can get looped over.
// - value = current value 
// - writable = whether or not this property can be changed. 
// The PropertyDescriptor function is the key way we modify things inside our descriptor.

// Object.defineProperty(boat, 'color', { writable: false}); would fix the color property so it could not be updated.

// Decorators are applied when the code for this class is compiled, not when an instance is created.


class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }
  
  // @logError   // a decorator - so first argument IN THIS LOCATION would be the PROTOTYPE OF Boat...  second argument would be pilot()
  @logProblem('This is a custom error message') // a decorator factory - with this we can add a message to the decorator.
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

/*
a decorator - logProblem is this code wrapped in a function so that we can pass in an argument.
*/
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;  // represents Boat.pilot() method
  desc.value = function() {
    try {
      method();
    } catch (e) {
      console.log('Oooopps boat sunk');
    }
  }
}

// this will call pilot function, but as @logError decorator is in place we have intercepted the call and called or own private function.
new Boat().pilot();

/*
Below is a decorator factory, which we can use to inject messages to the above logError decorator... currently lofError() is hard coded and only has one message, 
*/
function logProblem(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;  // represents Boat.pilot() method
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}