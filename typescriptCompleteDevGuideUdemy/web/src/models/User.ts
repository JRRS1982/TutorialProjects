import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Model } from "./Model";
import { Eventing } from "./Eventing";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number; // going to represent the User ID - if a user has one it has been saved to the back end.
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> { // inheritance 
  static buildUser(attrs: UserProps): User {  // create a new instance of user
    return new User(
      new Attributes<UserProps>(attrs), // comply with Model constructor as User extends that.
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
  
  // a potential other implementation to sync locally instead of via an api.
  // static localUser(attrs: UserProps): User { 
  //   return new User(
  //     new Attributes<UserProps>(attrs),
  //     new Eventing(),
  //     new LocalSync<UserProps>(rootUrl)
  //   );
  // }
}