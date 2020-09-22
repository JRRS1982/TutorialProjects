import { Sync } from './Sync';
import { Eventing } from "./Eventing";
import { Attributes } from "./Attributes"

export interface UserProps {
  name?: string;
  age?: number;
  id?: number; // going to represent the User ID - if a user has one it has been saved to the back end.
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing(); // unlikely to change, normally we would use composition and an interface, but in this instance its ok to hard code.
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl); // Sync has a generic class, we are passing in UserProps for that type, but that type has an OPTIONAL id... so in Sync the id has to be optional as well

  /*
  Mega - so setting attributes, with a type of the generic class attributes, with the UserProps to indicate what properties are in the attributes.
  However we also need to pass in one argument to UserProps to set the initial properties i.e. what is showing as data in Attributes, of the the User we want to create. 
  So we are creating attributes, but we cant initialize here, we need to pass in the data aka attrs/attributes to UserProps in the constructor, so define it outside and set in constructor.
  */
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  /*
  we we returning the events on function, not calling it so user = User.new... then user.on is actually the Events on function. Its acting like a bridge to the events function, we get back a reference to the on method on the eventing class
  const on = user.on;
  on... would then be the events function
  The full implementation would be this... i.e. you are not calling the user function, but the events function.
  user.on('change', ()=> {
    console.log('user was changed')
  });
  */
  get on() {
    return this.events.on;  // reference to the events on function, so when user.on() is called events on is what is actually called thanks to the get.
  }
  
  get trigger() {
    return this.events.trigger;
  }
  
  get get() {
    return this.attributes.get;
  }
}