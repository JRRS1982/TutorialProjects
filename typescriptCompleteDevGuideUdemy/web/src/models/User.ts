import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number; // going to represent the User ID - if a user has one it has been saved to the back end.
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  // putting a bracket around the key will indicate we know what the input will be (other than being in the type of a string)
  events: {[key: string]: Callback[] } = {};  // events to be an object, that has an unknown key which is a string, that points to an array of callback functions.
  
  constructor(private data: UserProps) {}
  
  // get a single piece of info about this user
  public get(propName: string): (string | number) { // type union - return a string or number
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

  public trigger(eventName: string): void { // for every element in the eventHandlers call it if it exists
    const handlers = this.events[eventName];

    if (!handlers || handlers.length ===0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }

  public fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse):void => { // AxiosResponse comes from Axios import
        this.set(response.data); // the json data back from server - i.e. users/id of what is in db.json
      }
    );
  }
  
  public save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data) // update
    } else {
      axios.post(`http://localhost:3000/users/${id}`, this.data)  // save
    }
  }
}