type Callback = () => void;

export class Eventing {
  // putting a bracket around the key will indicate we know what the input will be (other than being in the type of a string)
  events: {[key: string]: Callback[] } = {};  // events to be an object, that has an unknown key which is a string, that points to an array of callback functions.
 
  // building an event handler - building an object, with eventName key, that will have an array of callback functions that will trigger when that event is triggered.
  public on(eventName: string, callback: Callback): void {
    // created a type alias above, for clean code, the second function is going to be an argument.
    const handlers = this.events[eventName] || []; // is there an event already?
    handlers.push(callback); // push/add the callback into the event handler
    this.events[eventName] = handlers; // push the event handler into the events array.
  }
  
  public trigger(eventName: string): void {
    // for every element in the eventHandlers call it if it exists
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
