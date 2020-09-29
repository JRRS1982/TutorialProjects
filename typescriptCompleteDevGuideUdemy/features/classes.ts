/*
DEFINITION

Classes: "Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'". The use of interfaces with classes is how we get really good code reuse.

public - callable anywhere any time
private - callable by other methods in this class
protected - callable by other methods in this class and in its child classes.

*/

/*
// Example of a class
class Vehicle {
  color: string; // define a property

  constructor(color: string) { // initialize with an attribute
    this.color = color;
  }
}
*/

// SHORTHAND - we don't need to write it all out... public/private/protected in params will magic method it.
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
const carVehicle = new Car(4, 'orange'); // the child extends the parent
carVehicle.startDrivingProcess();