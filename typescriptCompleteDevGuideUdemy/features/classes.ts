// DEFINITION
// Classes: "Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'"

// declare
// class Vehicle {
//   color: string; // define attribute
//   constructor(color: string) { // set / initialize attribute
//     this.color = color;
//   }
// }

// SHORTHAND - we dont need to write it all out... public/private/protected in params will magic method it.
class Vehicle {
  constructor(public color: string) {} // shorthand style.
  protected honk(): void { // its protected, so can be called by car, which extends vehicle.
    console.log('honk honk');
  }
}

class Car extends Vehicle { // inheritance
  constructor(public wheels: number, color: string){
    super(color); // extend the parent param
  }
  private drive(): void { // overwrite base class
    console.log('vroom!');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk(); // protected, but available as this is a child class.
    console.log(this.color); // no color attribute or constructor on Car... but there is on Vehicle
  }
}
const veh = new Vehicle('red'); // this only requires one param 
const car = new Car(4, 'orange'); // the child extends the parent
car.startDrivingProcess();

// public - callable anywhere any time
// private - callable by other methods in this class
// protected - callable by other methods in this class and in its child classes.


// INTERFACES AND CLASSES ARE HOW WE GET REALLY GOOD CODE REUSE.