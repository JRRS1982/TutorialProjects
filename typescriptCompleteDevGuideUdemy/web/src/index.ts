import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

const collection = new Collection<User, UserProps>(  // so collection requires generic Type and Props
  'http://localhost:3000/users', // where request goes is required in collection constructor
  (json: UserProps) => User.buildUser(json) // how to create an instance of THIS model is required
);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
