import { User } from './models/User';

const user = new User({ });

user.on('change', () => {});
user.on('change', () => {});
user.on('that change', () => {});

console.log(user);