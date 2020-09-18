interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  constructor(private data: UserProps) {}
  
  // putting a bracket around the key will indicate we know what the input will be (other than being in the type of a string)
  events: {[key: string]: Callback[] } = {};  // events to be an object, that has an unknown key which is a string, that points to an array of callback functions.
  
  // get a single piece of info about this user
  public get(propName: string): (number | string) { // type union - return a string or number
    return this.data[propName];
  }
  
  // changes information about a user, returns nothing and what is passed has to comply with UserProps
  public set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  
  // building an event handler - building an object, with eventName key, that will have an array of callback functions that will trigger when that event is triggered.
  public on(eventName: string, callback: Callback): void  { // created a type alias above, for clean code, the second function is going to be an argument.
    const handlers = this.events[eventName] || []; // is there an event already?
    handlers.push(callback);  // push/add the callback into the event handler
    this.events[eventName] = handlers; // push the event handler into the events array.
  }
}