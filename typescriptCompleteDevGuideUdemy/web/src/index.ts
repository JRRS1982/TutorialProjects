import { User } from './models/User';

const user = new User({name: 'MyName', age: 20 });

user.get('age');
user.get('name');
