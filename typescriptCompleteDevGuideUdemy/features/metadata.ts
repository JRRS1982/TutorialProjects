import "reflect-metadata";

/*
TWO METHODS ON THE ABOVE IMPORT THAT ARE IMPORTANT
Reflect.defineMetadata // allows us to add metadata to an object or the property of an object..
Reflect.getMetadata // gets metadata from an object or property of an object.
*/

/**
 * Metadata is like secret info that does not show up anywhere, unless you use the package above to use it.
 */
const plane = {
  color: "red",
};

/**
 * add metadata called note, with the value of hi there to the object called plane...
 * Its an invisible property on plane
 */
Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", 100, plane);

// adding metadata to the color property of plane.
Reflect.defineMetadata("anotherNote", "really pinky red", plane, "color");

//get metadata called note from plane object
Reflect.getMetadata("note", plane);
Reflect.getMetadata("height", plane);
Reflect.getMetadata("note", plane, "color"); // get from color property of plane

/**
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 */

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);

    router.get(path, middleware, target.prototype[key]);
  }
}
