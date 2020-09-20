import { User } from './models/User';

const user = new User({ age: 1, name: 'myName' });

console.log(user.get('name'));
